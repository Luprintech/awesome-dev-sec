#!/usr/bin/env node
// Finds new, fast-growing GitHub repos for the configured topics and rewrites
// the auto-generated "Trending" block in README.md and README.es.md.
// No dependencies. Requires Node 18+. Set GITHUB_TOKEN to avoid tight rate limits.

import { readFile, writeFile } from "node:fs/promises";

// ---- Config ---------------------------------------------------------------
const DAYS = 30; // only repos created in the last N days
const MIN_STARS = 300; // minimum stars to be considered
const PER_TOPIC = 5; // max candidates fetched per topic
const MAX_PER_GROUP = 8; // max items shown per group

const GROUPS = {
  web: {
    en: "Web Development",
    es: "Desarrollo web",
    topics: ["nextjs", "tailwindcss", "vite", "web-framework", "frontend", "backend"],
  },
  security: {
    en: "Cybersecurity",
    es: "Ciberseguridad",
    topics: ["security", "cybersecurity", "pentesting", "osint", "red-team", "vulnerability-scanner"],
  },
  ai: {
    en: "AI & LLMs",
    es: "IA y LLMs",
    topics: ["llm", "ai-agents"],
  },
  skills: {
    en: "Agent Skills & MCP",
    es: "Skills de agentes y MCP",
    topics: ["claude-skills", "agent-skills", "claude-code", "mcp-server"],
  },
};

const FILES = [
  { path: "README.md", lang: "en" },
  { path: "README.es.md", lang: "es" },
];
const START = "<!-- TRENDING:START -->";
const END = "<!-- TRENDING:END -->";
// ---------------------------------------------------------------------------

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "awesome-dev-sec-trending",
  ...(process.env.GITHUB_TOKEN && { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }),
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function search(topic, since) {
  const q = `topic:${topic} created:>${since} stars:>=${MIN_STARS} fork:false archived:false`;
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(q)}&sort=stars&order=desc&per_page=${PER_TOPIC}`;
  const res = await fetch(url, { headers });
  if (res.status === 403 || res.status === 429) {
    console.warn(`Rate limited on topic "${topic}", skipping.`);
    return [];
  }
  if (!res.ok) throw new Error(`GitHub API ${res.status} for topic ${topic}`);
  return (await res.json()).items ?? [];
}

// Repo descriptions are untrusted input that ends up in a public README.
function clean(text) {
  return (text ?? "")
    .replace(/[\r\n\t]+/g, " ")
    .replace(/[<>\[\]`|\\]/g, "") // no HTML / markdown links / code
    .replace(/https?:\/\/\S+/g, "") // no raw URLs
    .replace(/\s+/g, " ")
    .trim();
}

function short(text, max = 110) {
  const t = clean(text).replace(/[.\s]+$/, "");
  if (t.length <= max) return t;
  return t.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

// Keep the list readable and safe: mostly-English descriptions, no obvious abuse tooling.
const mostlyAscii = (s) => s.length > 0 && (s.match(/[\x20-\x7E]/g) ?? []).length / s.length > 0.9;
const BLOCKLIST = /jailbreak|cheat|crack(ed)?\b|keygen|stealer|ransomware|bypass paywall/i;

const formatStars = (n) => (n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n));

async function main() {
  const since = new Date(Date.now() - DAYS * 864e5).toISOString().slice(0, 10);
  const readmeEn = await readFile("README.md", "utf8");
  const existing = new Set(
    [...readmeEn.matchAll(/github\.com\/([\w.-]+\/[\w.-]+)/gi)].map((m) => m[1].toLowerCase()),
  );

  const result = {};
  const seen = new Set();
  for (const [key, group] of Object.entries(GROUPS)) {
    const items = [];
    for (const topic of group.topics) {
      for (const repo of await search(topic, since)) {
        const id = repo.full_name.toLowerCase();
        if (existing.has(id) || seen.has(id) || !repo.description) continue;
        if (!mostlyAscii(repo.description) || BLOCKLIST.test(`${repo.name} ${repo.description}`)) continue;
        seen.add(id);
        items.push(repo);
      }
      await sleep(2500); // stay under the search rate limit
    }
    items.sort((a, b) => b.stargazers_count - a.stargazers_count);
    result[key] = items.slice(0, MAX_PER_GROUP);
  }

  for (const { path, lang } of FILES) {
    const date = new Date().toISOString().slice(0, 10);
    const intro =
      lang === "en"
        ? `_Auto-detected weekly (new repos from the last ${DAYS} days, ≥ ${MIN_STARS} ⭐). Not reviewed: promote the good ones to a proper section. Last update: ${date}._`
        : `_Detectados automáticamente cada semana (repos nuevos de los últimos ${DAYS} días, ≥ ${MIN_STARS} ⭐). Sin revisar: pasa los buenos a su sección. Última actualización: ${date}._`;
    const empty = lang === "en" ? "_Nothing new this week._" : "_Nada nuevo esta semana._";

    let body = intro + "\n";
    let total = 0;
    for (const [key, group] of Object.entries(GROUPS)) {
      if (!result[key].length) continue;
      body += `\n**${group[lang]}**\n\n`;
      for (const r of result[key]) {
        total++;
        body += `- [${r.full_name}](${r.html_url}) - ${short(r.description)}. ⭐ ${formatStars(r.stargazers_count)}\n`;
      }
    }
    if (!total) body += `\n${empty}\n`;

    const file = await readFile(path, "utf8");
    const s = file.indexOf(START);
    const e = file.indexOf(END);
    if (s === -1 || e === -1) throw new Error(`Markers not found in ${path}`);
    const next = `${file.slice(0, s + START.length)}\n${body}${file.slice(e)}`;
    await writeFile(path, next);
    console.log(`${path}: ${total} candidates`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
