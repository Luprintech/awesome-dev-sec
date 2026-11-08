#!/usr/bin/env node
// Builds a static, searchable website from README.md (EN) and README.es.md (ES).
// Output: dist/index.html and dist/es/index.html. No dependencies, Node 18+.
// External links open in a new tab (target="_blank"), which GitHub READMEs cannot do.

import { readFile, writeFile, mkdir } from "node:fs/promises";

const REPO = process.env.GITHUB_REPOSITORY || "Luprintech/awesome-dev-sec";
const [OWNER, NAME] = REPO.split("/");
const SITE = (process.env.SITE_URL || `https://${OWNER.toLowerCase()}.github.io/${NAME}/`).replace(/\/?$/, "/");
const GH = `https://github.com/${REPO}`;

const LANGS = {
  en: {
    file: "README.md",
    out: "dist/index.html",
    html: "en",
    url: SITE,
    other: { label: "Español", href: "es/", code: "es" },
    ui: {
      search: "Search repositories…",
      repos: "repos",
      results: "results",
      result: "result",
      empty: "No repositories match your search.",
      contents: "Contents",
      github: "View on GitHub",
      contribute: "Contribute",
      theme: "Toggle theme",
      skip: "Skip to content",
      footer: "Licensed under CC0 1.0. Maintained by",
    },
  },
  es: {
    file: "README.es.md",
    out: "dist/es/index.html",
    html: "es",
    url: SITE + "es/",
    other: { label: "English", href: "../", code: "en" },
    ui: {
      search: "Buscar repositorios…",
      repos: "repos",
      results: "resultados",
      result: "resultado",
      empty: "Ningún repositorio coincide con tu búsqueda.",
      contents: "Contenido",
      github: "Ver en GitHub",
      contribute: "Contribuir",
      theme: "Cambiar tema",
      skip: "Saltar al contenido",
      footer: "Licencia CC0 1.0. Mantenido por",
    },
  },
};

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function inline(md, { links = true } = {}) {
  let s = esc(md);
  s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
  s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, (_, text, url) =>
    links ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>` : text,
  );
  s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[\s(])_(.+?)_(?=[\s).,;:]|$)/g, "$1<em>$2</em>");
  return s;
}

function parse(markdown) {
  const doc = { title: "", tagline: "", nodes: [] };
  let seenH2 = false;
  let skipping = false;
  for (const raw of markdown.split(/\r?\n/)) {
    const line = raw.trimEnd();
    if (!line.trim() || /^<!--/.test(line.trim()) || /^---+$/.test(line.trim())) continue;

    let m;
    if ((m = line.match(/^# (.+)/))) {
      doc.title = m[1].replace(/\s*\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\)/g, "").trim();
    } else if ((m = line.match(/^> (.+)/)) && !seenH2) {
      doc.tagline = m[1];
    } else if ((m = line.match(/^## (.+)/))) {
      seenH2 = true;
      skipping = /^(Contents|Contenido|License|Licencia)$/i.test(m[1].trim());
      if (!skipping) doc.nodes.push({ t: "h", level: 2, text: m[1].trim() });
    } else if (skipping || !seenH2) {
      continue;
    } else if ((m = line.match(/^### (.+)/))) {
      doc.nodes.push({ t: "h", level: 3, text: m[1].trim() });
    } else if ((m = line.match(/^#### (.+)/))) {
      doc.nodes.push({ t: "h", level: 4, text: m[1].trim() });
    } else if ((m = line.match(/^- \[(.+?)\]\((https?:\/\/[^)\s]+)\)(?: - (.*))?$/))) {
      doc.nodes.push({ t: "li", name: m[1], url: m[2], desc: m[3] ?? "" });
    } else {
      doc.nodes.push({ t: "p", text: line.trim() });
    }
  }
  return doc;
}

// Star counts, fetched once per build with a single batched GraphQL call per 40 repos.
// Best effort: without GITHUB_TOKEN (or if the API fails) the site is built without stars.
const STARS = new Map();

const formatStars = (n) => (n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k` : String(n));
const starsHtml = (n) =>
  typeof n === "number" ? `<span class="stars" title="GitHub stars">★ ${formatStars(n)}</span>` : "";

async function fetchStars(repos) {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (!token) {
    console.warn("No GITHUB_TOKEN: building without star counts.");
    return;
  }
  const list = [...repos].filter((r) => /^[\w.-]+\/[\w.-]+$/.test(r));
  for (let i = 0; i < list.length; i += 40) {
    const chunk = list.slice(i, i + 40);
    const query =
      "query{" +
      chunk
        .map((r, j) => {
          const [o, n] = r.split("/");
          return `r${j}:repository(owner:"${o}",name:"${n}"){stargazerCount}`;
        })
        .join(" ") +
      "}";
    try {
      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", "User-Agent": "awesome-dev-sec-site" },
        body: JSON.stringify({ query }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      chunk.forEach((r, j) => {
        const s = json.data?.[`r${j}`]?.stargazerCount;
        if (typeof s === "number") STARS.set(r.toLowerCase(), s);
      });
    } catch (err) {
      console.warn(`Could not fetch stars: ${err.message}`);
    }
  }
}

function render(doc) {
  const used = new Set();
  const slug = (text) => {
    const base = text.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, "").trim().replace(/\s+/g, "-") || "section";
    let id = base;
    for (let i = 2; used.has(id); i++) id = `${base}-${i}`;
    used.add(id);
    return id;
  };

  let body = "";
  let nav = "";
  let cards = 0;
  let inList = false;
  const stack = [];
  const closeList = () => {
    if (inList) body += "</ul>";
    inList = false;
  };

  for (const n of doc.nodes) {
    if (n.t === "h") {
      closeList();
      while (stack.length && stack[stack.length - 1] >= n.level) {
        body += "</section>";
        stack.pop();
      }
      const id = slug(n.text);
      body += `<section class="lv${n.level}" id="${id}"><h${n.level}><a class="anchor" href="#${id}">${esc(n.text)}</a></h${n.level}>`;
      stack.push(n.level);
      if (n.level <= 3) nav += `<a class="lv${n.level}" href="#${id}">${esc(n.text)}</a>`;
    } else if (n.t === "p") {
      closeList();
      body += `<p class="note">${inline(n.text)}</p>`;
    } else {
      if (!inList) {
        body += '<ul class="cards">';
        inList = true;
      }
      cards++;
      const m = n.url.match(/github\.com\/([^/]+\/[^/#?]+)/);
      const label = m ? m[1] : new URL(n.url).hostname;
      const plain = inline(n.desc, { links: false }).replace(/<[^>]+>/g, "");
      const q = esc(`${n.name} ${label} ${plain}`.toLowerCase());
      body +=
        `<li class="card" data-q="${q}">` +
        `<a class="name" href="${n.url}" target="_blank" rel="noopener noreferrer">${esc(n.name)}</a>` +
        `<div class="row"><span class="repo">${esc(label)}</span>${starsHtml(m && STARS.get(m[1].toLowerCase()))}</div>` +
        `<p>${inline(n.desc, { links: false })}</p></li>`;
    }
  }
  closeList();
  while (stack.pop() !== undefined) body += "</section>";
  return { body, nav, cards };
}

const CSS = `
:root{--bg:#fafaf9;--panel:#fff;--text:#1c1917;--muted:#57534e;--line:#e7e5e4;--accent:#0f766e;--accent-soft:#ccfbf1;--code:#f5f5f4;--shadow:0 1px 2px rgba(0,0,0,.05)}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#0b0f14;--panel:#121820;--text:#e7e5e4;--muted:#a8a29e;--line:#232c37;--accent:#2dd4bf;--accent-soft:#0f2e2b;--code:#1a222c;--shadow:none}}
:root[data-theme="dark"]{--bg:#0b0f14;--panel:#121820;--text:#e7e5e4;--muted:#a8a29e;--line:#232c37;--accent:#2dd4bf;--accent-soft:#0f2e2b;--code:#1a222c;--shadow:none}
*{box-sizing:border-box}[hidden]{display:none!important}
html{scroll-behavior:smooth;scroll-padding-top:84px}
body{margin:0;background:var(--bg);color:var(--text);font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
a{color:inherit}
.skip{position:absolute;left:-999px}.skip:focus{left:16px;top:8px;background:var(--panel);padding:8px 12px;z-index:50;border-radius:6px}
header{position:sticky;top:0;z-index:20;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
.bar{max-width:1240px;margin:0 auto;padding:12px 16px;display:flex;gap:12px;align-items:center}
.brand{font-weight:700;letter-spacing:-.01em;text-decoration:none;white-space:nowrap}
.brand span{color:var(--accent)}
.search{flex:1;min-width:0;position:relative}
.search input{width:100%;padding:9px 12px 9px 12px;border:1px solid var(--line);border-radius:10px;background:var(--panel);color:var(--text);font:inherit;font-size:15px}
.search input:focus{outline:2px solid var(--accent);outline-offset:1px}
.btn{border:1px solid var(--line);background:var(--panel);color:var(--text);border-radius:10px;padding:8px 12px;font:inherit;font-size:14px;cursor:pointer;text-decoration:none;white-space:nowrap}
.btn:hover{border-color:var(--accent)}
.hero{max-width:1240px;margin:0 auto;padding:36px 16px 8px}
.hero h1{margin:0 0 6px;font-size:clamp(1.8rem,4vw,2.6rem);letter-spacing:-.02em;line-height:1.15}
.hero p{margin:0;color:var(--muted);max-width:62ch}
.meta{margin-top:14px;display:flex;gap:10px;flex-wrap:wrap;align-items:center;font-size:14px;color:var(--muted)}
.pill{background:var(--accent-soft);color:var(--accent);padding:3px 10px;border-radius:999px;font-weight:600}
.layout{max-width:1240px;margin:0 auto;padding:16px;display:grid;grid-template-columns:230px minmax(0,1fr);gap:32px}
nav.toc{position:sticky;top:76px;align-self:start;max-height:calc(100vh - 92px);overflow:auto;font-size:14px;display:flex;flex-direction:column;gap:2px;padding-right:8px}
nav.toc h2{font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);margin:0 0 6px}
nav.toc a{text-decoration:none;color:var(--muted);padding:3px 8px;border-radius:6px}
nav.toc a:hover{background:var(--accent-soft);color:var(--accent)}
nav.toc a.lv2{color:var(--text);font-weight:600;margin-top:8px}
nav.toc a.lv3{padding-left:20px}
main section.lv2{margin-top:36px}
main section.lv2>h2{font-size:1.5rem;letter-spacing:-.01em;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid var(--line)}
main section.lv3>h3{font-size:1.1rem;margin:24px 0 10px}
main section.lv4>h4{font-size:.8rem;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);margin:18px 0 8px}
.anchor{text-decoration:none}
.note{color:var(--muted);font-size:15px;margin:0 0 12px}
code{background:var(--code);padding:1px 6px;border-radius:5px;font-size:.88em}
ul.cards{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:12px}
.card{position:relative;background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:14px 16px;box-shadow:var(--shadow);transition:border-color .15s,transform .15s;display:flex;flex-direction:column;gap:2px}
.card:hover,.card:focus-within{border-color:var(--accent);transform:translateY(-1px)}
.card .name{font-weight:650;text-decoration:none;word-break:break-word}
.card .name::after{content:"";position:absolute;inset:0;border-radius:12px}
.card .name:focus-visible{outline:none}.card:focus-within{outline:2px solid var(--accent);outline-offset:2px}
.card .row{display:flex;justify-content:space-between;align-items:baseline;gap:8px}
.card .repo{font:12px/1.3 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:var(--muted);word-break:break-all}
.card .stars{font-size:12px;color:var(--muted);white-space:nowrap;font-variant-numeric:tabular-nums}
.card p{margin:6px 0 0;font-size:14.5px;color:var(--muted)}
#empty{padding:40px 0;text-align:center;color:var(--muted)}
footer{max-width:1240px;margin:24px auto 0;padding:24px 16px 48px;border-top:1px solid var(--line);color:var(--muted);font-size:14px;display:flex;gap:16px;flex-wrap:wrap;justify-content:space-between}
footer a{color:var(--accent)}
@media (max-width:900px){
 .layout{grid-template-columns:1fr;gap:8px}
 nav.toc{position:static;max-height:none;flex-direction:row;overflow-x:auto;padding:0 0 8px;gap:6px;white-space:nowrap;scrollbar-width:thin}
 nav.toc h2,nav.toc a.lv3{display:none}
 nav.toc a.lv2{margin:0;border:1px solid var(--line);background:var(--panel);border-radius:999px;padding:5px 12px}
 .brand{display:none}.btn.gh{display:none}
}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}.card{transition:none}}
`;

function page(key, doc, { body, nav, cards }) {
  const L = LANGS[key];
  const o = L.other;
  const total = `${cards} ${L.ui.repos}`;
  const data = JSON.stringify({ total: cards, repos: L.ui.repos, results: L.ui.results, result: L.ui.result });
  const alt = (code, url) => `<link rel="alternate" hreflang="${code}" href="${url}">`;
  return `<!doctype html>
<html lang="${L.html}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(doc.title)}</title>
<meta name="description" content="${esc(doc.tagline)}">
<link rel="canonical" href="${L.url}">
${alt("en", LANGS.en.url)}
${alt("es", LANGS.es.url)}
<meta property="og:title" content="${esc(doc.title)}">
<meta property="og:description" content="${esc(doc.tagline)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${L.url}">
<script>try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}</script>
<style>${CSS}</style>
</head>
<body>
<a class="skip" href="#content">${L.ui.skip}</a>
<header><div class="bar">
 <a class="brand" href="">Awesome <span>Dev &amp; Sec</span></a>
 <div class="search"><input id="q" type="search" placeholder="${esc(L.ui.search)}" aria-label="${esc(L.ui.search)}" autocomplete="off"></div>
 <a class="btn" href="${o.href}" hreflang="${o.code}" lang="${o.code}">${o.label}</a>
 <button class="btn" id="theme" type="button" aria-label="${esc(L.ui.theme)}" title="${esc(L.ui.theme)}">◐</button>
 <a class="btn gh" href="${GH}" target="_blank" rel="noopener noreferrer">${L.ui.github}</a>
</div></header>
<div class="hero">
 <h1>${esc(doc.title)}</h1>
 <p>${inline(doc.tagline)}</p>
 <div class="meta"><span class="pill" id="count">${total}</span><a href="${GH}/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">${L.ui.contribute}</a></div>
</div>
<div class="layout">
 <nav class="toc" aria-label="${esc(L.ui.contents)}"><h2>${L.ui.contents}</h2>${nav}</nav>
 <main id="content">${body}<p id="empty" hidden>${L.ui.empty}</p></main>
</div>
<footer><span>${L.ui.footer} <a href="https://github.com/${OWNER}" target="_blank" rel="noopener noreferrer">${OWNER}</a></span><a href="${GH}" target="_blank" rel="noopener noreferrer">${L.ui.github}</a></footer>
<script>
(function(){
 var D=${data};
 var q=document.getElementById("q"),count=document.getElementById("count"),empty=document.getElementById("empty");
 var cards=[].slice.call(document.querySelectorAll(".card")),secs=[].slice.call(document.querySelectorAll("main section"));
 function run(){
  var v=q.value.trim().toLowerCase(),shown=0;
  cards.forEach(function(c){var ok=!v||c.getAttribute("data-q").indexOf(v)>-1;c.hidden=!ok;if(ok)shown++;});
  secs.forEach(function(s){s.hidden=!!v&&!s.querySelector(".card:not([hidden])");});
  count.textContent=(v?shown:D.total)+" "+(v?(shown===1?D.result:D.results):D.repos);
  empty.hidden=!(v&&shown===0);
 }
 q.addEventListener("input",run);
 document.addEventListener("keydown",function(e){
  if(e.key==="/"&&document.activeElement!==q&&!e.metaKey&&!e.ctrlKey){e.preventDefault();q.focus();}
  if(e.key==="Escape"&&document.activeElement===q){q.value="";run();q.blur();}
 });
 document.getElementById("theme").addEventListener("click",function(){
  var root=document.documentElement,cur=root.getAttribute("data-theme");
  var dark=cur?cur==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;
  var next=dark?"light":"dark";
  root.setAttribute("data-theme",next);
  try{localStorage.setItem("theme",next);}catch(e){}
 });
})();
</script>
</body>
</html>
`;
}

const docs = {};
const repoSet = new Set();
for (const key of Object.keys(LANGS)) {
  docs[key] = parse(await readFile(LANGS[key].file, "utf8"));
  for (const n of docs[key].nodes) {
    const m = n.t === "li" && n.url.match(/github\.com\/([^/]+\/[^/#?]+)/);
    if (m) repoSet.add(m[1]);
  }
}
await fetchStars(repoSet);
console.log(`stars: ${STARS.size}/${repoSet.size} repos`);

for (const key of Object.keys(LANGS)) {
  const L = LANGS[key];
  const doc = docs[key];
  const rendered = render(doc);
  const out = L.out;
  await mkdir(out.replace(/\/[^/]+$/, ""), { recursive: true });
  await writeFile(out, page(key, doc, rendered));
  console.log(`${out}: ${rendered.cards} repos from ${L.file}`);
}
