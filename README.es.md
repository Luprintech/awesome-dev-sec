# Awesome Dev & Sec [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Lista curada de repositorios de GitHub para **desarrollo web**, **ciberseguridad**, **DevOps** y más.

🌐 **Idiomas:** [English](README.md) · Español

¡Las contribuciones son bienvenidas! Lee primero la [guía de contribución](CONTRIBUTING.md).

## Contenido

- [Desarrollo web](#desarrollo-web)
  - [Frameworks y librerías](#frameworks-y-librerías)
  - [Backend](#backend)
  - [Herramientas y testing](#herramientas-y-testing)
- [Ciberseguridad](#ciberseguridad)
  - [Pentesting y ofensiva](#pentesting-y-ofensiva)
  - [Reconocimiento y OSINT](#reconocimiento-y-osint)
  - [Defensa y monitorización](#defensa-y-monitorización)
  - [Ingeniería inversa](#ingeniería-inversa)
  - [Laboratorios de práctica](#laboratorios-de-práctica)
  - [Bases de conocimiento](#bases-de-conocimiento)
- [DevOps e infraestructura](#devops-e-infraestructura)
- [IA y LLMs](#ia-y-llms)
- [Recursos de aprendizaje](#recursos-de-aprendizaje)
- [Tendencias (auto)](#tendencias-auto)

---

## Desarrollo web

### Frameworks y librerías

- [Angular](https://github.com/angular/angular) - Framework completo en TypeScript de Google.
- [Astro](https://github.com/withastro/astro) - Framework orientado a contenido con poco JS en cliente.
- [Next.js](https://github.com/vercel/next.js) - El framework de React para producción.
- [React](https://github.com/facebook/react) - Librería para construir interfaces de usuario.
- [shadcn/ui](https://github.com/shadcn-ui/ui) - Componentes accesibles que copias y pegas.
- [Svelte](https://github.com/sveltejs/svelte) - Framework de UI basado en compilador.
- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - Framework CSS de clases utilitarias.
- [Vue](https://github.com/vuejs/core) - Framework progresivo de JavaScript.

### Backend

- [Django](https://github.com/django/django) - Framework web de Python con todo incluido.
- [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm) - ORM ligero y con tipos para TypeScript.
- [Express](https://github.com/expressjs/express) - Framework web minimalista para Node.js.
- [FastAPI](https://github.com/fastapi/fastapi) - Framework moderno y rápido para APIs en Python.
- [Hono](https://github.com/honojs/hono) - Framework web pequeño y rápido para cualquier runtime JS.
- [Laravel](https://github.com/laravel/laravel) - Framework PHP elegante.
- [NestJS](https://github.com/nestjs/nest) - Framework Node.js progresivo y estructurado.
- [Prisma](https://github.com/prisma/prisma) - ORM de nueva generación para TypeScript.
- [Supabase](https://github.com/supabase/supabase) - Alternativa open source a Firebase sobre Postgres.

### Herramientas y testing

- [Biome](https://github.com/biomejs/biome) - Formateador y linter rápido para proyectos web.
- [Cypress](https://github.com/cypress-io/cypress) - Testing end-to-end en el navegador.
- [Lighthouse](https://github.com/GoogleChrome/lighthouse) - Auditorías de rendimiento, accesibilidad y SEO.
- [Playwright](https://github.com/microsoft/playwright) - Automatización y testing multi-navegador.
- [Vite](https://github.com/vitejs/vite) - Herramienta de build frontend de nueva generación.
- [Vitest](https://github.com/vitest-dev/vitest) - Framework de tests unitarios nativo de Vite.

---

## Ciberseguridad

### Pentesting y ofensiva

- [ffuf](https://github.com/ffuf/ffuf) - Fuzzer web rápido escrito en Go.
- [Gobuster](https://github.com/OJ/gobuster) - Fuerza bruta de directorios, DNS y vhosts.
- [Hashcat](https://github.com/hashcat/hashcat) - La herramienta de recuperación de contraseñas más rápida.
- [John the Ripper](https://github.com/openwall/john) - Crackeador de contraseñas.
- [Metasploit Framework](https://github.com/rapid7/metasploit-framework) - Framework de pruebas de penetración.
- [Nmap](https://github.com/nmap/nmap) - Descubrimiento de red y escaneo de seguridad.
- [Nuclei](https://github.com/projectdiscovery/nuclei) - Escáner de vulnerabilidades basado en plantillas.
- [OWASP ZAP](https://github.com/zaproxy/zaproxy) - Escáner y proxy de seguridad para aplicaciones web.
- [sqlmap](https://github.com/sqlmapproject/sqlmap) - Inyección SQL automática y toma de control de BD.
- [WPScan](https://github.com/wpscanteam/wpscan) - Escáner de vulnerabilidades de WordPress.

### Reconocimiento y OSINT

- [Amass](https://github.com/owasp-amass/amass) - Mapeo de superficie de ataque y descubrimiento de activos.
- [httpx](https://github.com/projectdiscovery/httpx) - Toolkit rápido de sondeo HTTP.
- [Recon-ng](https://github.com/lanmaster53/recon-ng) - Framework de reconocimiento web.
- [Sherlock](https://github.com/sherlock-project/sherlock) - Busca nombres de usuario en redes sociales.
- [SpiderFoot](https://github.com/smicallef/spiderfoot) - Automatización de OSINT.
- [Subfinder](https://github.com/projectdiscovery/subfinder) - Descubrimiento pasivo de subdominios.
- [theHarvester](https://github.com/laramies/theHarvester) - Recopila correos, subdominios y hosts.

### Defensa y monitorización

- [CrowdSec](https://github.com/crowdsecurity/crowdsec) - IPS colaborativo basado en comportamiento.
- [Falco](https://github.com/falcosecurity/falco) - Detección de amenazas en runtime para entornos cloud-native.
- [Gitleaks](https://github.com/gitleaks/gitleaks) - Detecta secretos en repos git.
- [Semgrep](https://github.com/semgrep/semgrep) - Análisis estático ligero para muchos lenguajes.
- [Sigma](https://github.com/SigmaHQ/sigma) - Formato genérico de reglas de detección para SIEM.
- [Suricata](https://github.com/OISF/suricata) - Motor IDS/IPS y de monitorización de red.
- [Trivy](https://github.com/aquasecurity/trivy) - Escáner de vulnerabilidades, malas configuraciones y secretos.
- [TruffleHog](https://github.com/trufflesecurity/trufflehog) - Encuentra y verifica credenciales filtradas.
- [Wazuh](https://github.com/wazuh/wazuh) - Plataforma XDR y SIEM open source.
- [Zeek](https://github.com/zeek/zeek) - Framework de análisis de red.

### Ingeniería inversa

- [Ghidra](https://github.com/NationalSecurityAgency/ghidra) - Suite de ingeniería inversa de la NSA.
- [Radare2](https://github.com/radareorg/radare2) - Framework de ingeniería inversa.
- [x64dbg](https://github.com/x64dbg/x64dbg) - Depurador open source para Windows.

### Laboratorios de práctica

- [DVWA](https://github.com/digininja/DVWA) - Aplicación web deliberadamente vulnerable.
- [Juice Shop](https://github.com/juice-shop/juice-shop) - App web moderna intencionadamente insegura.
- [WebGoat](https://github.com/WebGoat/WebGoat) - App insegura a propósito para aprender seguridad web.

### Bases de conocimiento

- [Awesome Pentest](https://github.com/enaqx/awesome-pentest) - Recursos de pentesting.
- [Awesome Security](https://github.com/sbilly/awesome-security) - Recursos de seguridad.
- [HackTricks](https://github.com/carlospolop/hacktricks) - Técnicas y trucos de hacking.
- [OWASP Cheat Sheet Series](https://github.com/OWASP/CheatSheetSeries) - Guías concisas de seguridad de aplicaciones.
- [OWASP Top 10](https://github.com/OWASP/Top10) - Los riesgos más críticos en aplicaciones web.
- [OWASP WSTG](https://github.com/OWASP/wstg) - Guía de pruebas de seguridad web.
- [PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings) - Payloads y bypasses para seguridad web.
- [SecLists](https://github.com/danielmiessler/SecLists) - Listas de palabras para auditorías de seguridad.

---

## DevOps e infraestructura

- [Ansible](https://github.com/ansible/ansible) - Automatización de TI sencilla.
- [Caddy](https://github.com/caddyserver/caddy) - Servidor web con HTTPS automático.
- [Grafana](https://github.com/grafana/grafana) - Dashboards y observabilidad.
- [Kubernetes](https://github.com/kubernetes/kubernetes) - Orquestación de contenedores.
- [Moby](https://github.com/moby/moby) - La base open source de Docker.
- [Prometheus](https://github.com/prometheus/prometheus) - Monitorización y alertas.
- [Terraform](https://github.com/hashicorp/terraform) - Infraestructura como código.
- [Traefik](https://github.com/traefik/traefik) - Proxy inverso y balanceador cloud-native.

## IA y LLMs

- [llama.cpp](https://github.com/ggml-org/llama.cpp) - Inferencia de LLMs en C/C++.
- [LangChain](https://github.com/langchain-ai/langchain) - Framework para aplicaciones con LLMs.
- [Ollama](https://github.com/ollama/ollama) - Ejecuta LLMs en local.
- [Vercel AI SDK](https://github.com/vercel/ai) - Toolkit TypeScript para aplicaciones de IA.

## Recursos de aprendizaje

- [Awesome](https://github.com/sindresorhus/awesome) - La lista original de listas awesome.
- [Developer Roadmaps](https://github.com/kamranahmedse/developer-roadmap) - Guías paso a paso para ser desarrollador.
- [Free Programming Books](https://github.com/EbookFoundation/free-programming-books) - Libros de programación gratuitos.
- [freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp) - Aprende a programar gratis.
- [MDN Web Docs](https://github.com/mdn/content) - La referencia de la plataforma web.
- [Public APIs](https://github.com/public-apis/public-apis) - Lista colectiva de APIs gratuitas.

## Tendencias (auto)

<!-- TRENDING:START -->
_Detectados automáticamente cada semana (repos nuevos de los últimos 30 días, ≥ 300 ⭐). Sin revisar: pasa los buenos a su sección. Última actualización: 2026-11-08._

**Desarrollo web**

- [deeplethe/solid-glass](https://github.com/deeplethe/solid-glass) - A design system for AI applications. Material, physical, tactile, technical. ⭐ 2.0k
- [D3voz/openjutsu](https://github.com/D3voz/openjutsu) - One-click character swap for videos: an open-source, local Higgsfield Genjutsu alternative built on ComfyUI…. ⭐ 1.9k
- [marclou/mailcheap](https://github.com/marclou/mailcheap) - Newsletters where you pay for the emails you send, not for dormant subscribers, at a fraction of the price of…. ⭐ 1.7k
- [NiazMorshed2007/reanimate](https://github.com/NiazMorshed2007/reanimate) - A Claude Code skill that reverse-engineers any animation frame by frame, then proves the copy moves the same. ⭐ 1.4k
- [juliobsz/skills](https://github.com/juliobsz/skills) - An agent skill that builds award-caliber websites from one line. ⭐ 1.2k
- [agharsallah/esp-labs-web](https://github.com/agharsallah/esp-labs-web) - The ESP32-S3 bench guide as a React app: live pinout, lessons with interactive simulators, a code reader for…. ⭐ 692
- [SouravBeraAkaSpeed/xiryn](https://github.com/SouravBeraAkaSpeed/xiryn) - Xiryn — the open-source personal agent. Does everything Muse, Grok Bot and Dots do, on your own computer:…. ⭐ 429
- [abdiraimov-otabek/dashboard-design-skill](https://github.com/abdiraimov-otabek/dashboard-design-skill) - A Claude Code skill for clean, honest dashboard UI: KPI tiles, charts, date pickers, ranked lists, states,…. ⭐ 410

**Ciberseguridad**

- [ChiefGyk3D/Clouds-Against-Humanity](https://github.com/ChiefGyk3D/Clouds-Against-Humanity) - Learn cloud security by building it! An open-source homelab teaching Zero Trust, DevSecOps, IaC, and cloud…. ⭐ 956
- [hevnsnt/CVEngine](https://github.com/hevnsnt/CVEngine) - AI-first external attack surface assessment with continuous discovery, evidence-based vulnerability…. ⭐ 689
- [arpanjot-coding/AVault](https://github.com/arpanjot-coding/AVault) - AVault - Call Recorder (No Root Required) Privacy-first, hardware-encrypted audio vault for Android 12-16+.…. ⭐ 621
- [1337isnot1337/DOPPLERGEIST](https://github.com/1337isnot1337/DOPPLERGEIST) - Python tool for aircraft Doppler audio geolocation using historical ADS-B flight data (Source-available). ⭐ 446
- [opentrap/opentrap](https://github.com/opentrap/opentrap) - A free, open-source alternative to Burp Suite: an intercepting proxy and web app security testing suite with…. ⭐ 429
- [lordbasex/LordOS](https://github.com/lordbasex/LordOS) - LordOS — a free, fast and secure GNU/Linux distribution based on Debian, with its own desktop environment:…. ⭐ 427
- [PatchBuilderAmplify/stolen-crypto-tracer](https://github.com/PatchBuilderAmplify/stolen-crypto-tracer) - Paste a wallet or a transaction hash and follow stolen crypto to the exchange that can freeze it. Works…. ⭐ 389
- [Tropicaldrescoop/discord-id-osint-checker](https://github.com/Tropicaldrescoop/discord-id-osint-checker) - Free OSINT app for Discord IDs: paste a user, server or invite and see when it was made and who it copies. ⭐ 381

**IA y LLMs**

- [wangzan101/Mika](https://github.com/wangzan101/Mika) - An on-device AI agent for Android that operates apps and the web to get things done for you. ⭐ 7.7k
- [microsoft/TokenEconomizer](https://github.com/microsoft/TokenEconomizer) - Experience-Driven Black-Box Cost Control for Coding Agents. ⭐ 5.0k
- [Leonxlnx/earshot](https://github.com/Leonxlnx/earshot) - Ears for coding agents: let AI hear, review and make sound. CPU-only, open source. ⭐ 4.2k
- [modelflare-ai/AnyModelBot](https://github.com/modelflare-ai/AnyModelBot) - 🤖 Open-source, local-first alternative to Grok Bot, OpenAI dots and Claude Duet. Your own AI bots on any…. ⭐ 2.7k
- [reacher-z/Awesome-REA](https://github.com/reacher-z/Awesome-REA) - Curated tools, case studies and papers for reverse engineering websites, games, apps, binaries, firmware and…. ⭐ 1.9k
- [daveebbelaar/bama](https://github.com/daveebbelaar/bama) - BAMA: Build Any Mac App. Agent skills to research, clone, design, build, optimize, and test native macOS apps…. ⭐ 1.7k
<!-- TRENDING:END -->

---

## Licencia

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/deed.es)

En la medida de lo posible según la ley, los contribuyentes han renunciado a todos los derechos de autor y derechos conexos sobre esta obra.
