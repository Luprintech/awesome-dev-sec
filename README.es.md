# Awesome Dev & Sec [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Lista curada de repositorios de GitHub para **desarrollo web**, **ciberseguridad**, **DevOps** y más.

🌐 **Idiomas:** [English](README.md) · Español · 🔎 **[Web](https://luprintech.github.io/awesome-dev-sec/es/)**

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
- [Skills de agentes y MCP](#skills-de-agentes-y-mcp)
  - [Toolkit web esencial](#toolkit-web-esencial)
  - [Base y colecciones](#base-y-colecciones)
  - [Listas curadas](#listas-curadas)
  - [Skills de desarrollo web](#skills-de-desarrollo-web)
  - [Skills de seguridad](#skills-de-seguridad)
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
- [CVEngine](https://github.com/hevnsnt/CVEngine) - Evaluación de superficie de ataque autoalojada que valida qué CVEs explotados te afectan de verdad.
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

- [Clouds Against Humanity](https://github.com/ChiefGyk3D/Clouds-Against-Humanity) - Homelab que enseña seguridad cloud, zero trust y DevSecOps construyéndolo.
- [DVWA](https://github.com/digininja/DVWA) - Aplicación web deliberadamente vulnerable.
- [Juice Shop](https://github.com/juice-shop/juice-shop) - App web moderna intencionadamente insegura.
- [WebGoat](https://github.com/WebGoat/WebGoat) - App insegura a propósito para aprender seguridad web.

### Bases de conocimiento

- [Awesome Pentest](https://github.com/enaqx/awesome-pentest) - Recursos de pentesting.
- [Awesome REA](https://github.com/reacher-z/Awesome-REA) - Herramientas, casos de estudio y papers curados sobre ingeniería inversa de webs, apps, binarios y firmware.
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
- [TokenEconomizer](https://github.com/microsoft/TokenEconomizer) - Microsoft Research: control de costes de agentes de programación basado en la experiencia.
- [Vercel AI SDK](https://github.com/vercel/ai) - Toolkit TypeScript para aplicaciones de IA.

## Skills de agentes y MCP

Skills, agentes y servidores de herramientas reutilizables para agentes de programación con IA (Claude Code, Cursor, Codex y otros).

### Toolkit web esencial

El conjunto mínimo de skills, plugins y servidores MCP para construir una app web profesional con un agente de programación con IA, de la idea al despliegue.

#### Diseño

- [Anthropic Knowledge Work Plugins](https://github.com/anthropics/knowledge-work-plugins) - Incluye el plugin `design`: crítica, revisión de accesibilidad, copy UX y handoff.
- [Claude Plugins (oficial)](https://github.com/anthropics/claude-plugins-official) - Directorio de plugins gestionado por Anthropic, con `frontend-design`.
- [Impeccable](https://github.com/pbakaus/impeccable) - Vocabulario de diseño para tu agente: dirige, critica, pule y audita frontends.
- [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) - Inteligencia de diseño que genera un sistema de diseño completo según el tipo de producto.

#### SEO

- [Claude SEO](https://github.com/AgriciDaniel/claude-seo) - Skill de SEO con sub-skills y agentes para SEO técnico, E-E-A-T, schema y GEO.

#### Construcción

- [Cloudflare Skills](https://github.com/cloudflare/skills) - Skills para construir y desplegar en Cloudflare.
- [Supabase Agent Skills](https://github.com/supabase/agent-skills) - Skills para trabajar con Supabase: Postgres, RLS y auth.
- [Ultrapowers](https://github.com/ennio-datatide/ultrapowers) - Marketplace con `ultrapowers-dev`: 54 skills de buenas prácticas para lenguajes y frameworks.
- [Vercel Plugin](https://github.com/vercel/vercel-plugin) - Plugin del ecosistema Vercel con skills para despliegues, variables de entorno y frameworks.

#### Conectores (MCP)

- [GitHub MCP Server](https://github.com/github/github-mcp-server) - Servidor MCP oficial de GitHub para repos, issues, PRs y CI.
- [Playwright MCP](https://github.com/microsoft/playwright-mcp) - Control del navegador mediante instantáneas de accesibilidad.
- [Supabase MCP](https://github.com/supabase-community/supabase-mcp) - Conecta proyectos de Supabase a tu asistente de IA.

#### Verificación

- [Axe MCP Server](https://github.com/dequelabs/axe-mcp-server-public) - Servidor MCP de Deque para pruebas y corrección de accesibilidad.
- [Claude Code Plugins (petrovicistefan)](https://github.com/petrovicistefan/claude-code-plugins) - Paquete de plugins con `e2e-test-generator`, `ci-optimizer` e `i18n-sync`.

#### Datos

- [Scrapling](https://github.com/D4Vinci/Scrapling) - Framework de scraping con fetchers, arañas, CLI y servidor MCP.

### Base y colecciones

- [Agent Skills (Anthropic)](https://github.com/anthropics/skills) - Repositorio público oficial de Agent Skills.
- [Claude Code](https://github.com/anthropics/claude-code) - Herramienta de programación con agentes que vive en tu terminal.
- [MCP Reference Servers](https://github.com/modelcontextprotocol/servers) - Servidores de referencia del Model Context Protocol.
- [Skills CLI](https://github.com/vercel-labs/skills) - La herramienta abierta de skills para agentes (`npx skills`).
- [Superpowers](https://github.com/obra/superpowers) - Framework de skills para agentes y metodología de desarrollo.
- [wshobson/agents](https://github.com/wshobson/agents) - Plugins, agentes, skills y comandos para agentes de programación.

### Listas curadas

- [Awesome Agent Skills](https://github.com/VoltAgent/awesome-agent-skills) - Más de 1000 skills de equipos oficiales y de la comunidad.
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code) - Recursos seleccionados para Claude Code.
- [Awesome Claude Code Subagents](https://github.com/VoltAgent/awesome-claude-code-subagents) - Más de 100 subagentes especializados para desarrollo.
- [Awesome Claude Skills (ComposioHQ)](https://github.com/ComposioHQ/awesome-claude-skills) - Claude Skills, recursos y herramientas curados.
- [Awesome Claude Skills (travisvn)](https://github.com/travisvn/awesome-claude-skills) - Lista curada de Claude Skills y herramientas.
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers) - Colección de servidores MCP.

### Skills de desarrollo web

- [Reanimate](https://github.com/NiazMorshed2007/reanimate) - Skill de agente que hace ingeniería inversa de animaciones web fotograma a fotograma y verifica la copia.
- [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) - Colección oficial de skills de Vercel.

### Skills de seguridad

- [Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) - Más de 800 skills de ciberseguridad de la comunidad, mapeadas a MITRE ATT&CK y NIST.
- [Claude-Code-CyberSecurity-Skill](https://github.com/Masriyan/Claude-Code-CyberSecurity-Skill) - 22 skills para seguridad ofensiva y defensiva.
- [Community Tools](https://github.com/transilienceai/communitytools) - Skills y agentes para pentesting y bug bounty.
- [Trail of Bits Skills](https://github.com/trailofbits/skills) - Skills para investigación de seguridad, detección de vulnerabilidades y auditorías.

## Recursos de aprendizaje

- [Awesome](https://github.com/sindresorhus/awesome) - La lista original de listas awesome.
- [Developer Roadmaps](https://github.com/kamranahmedse/developer-roadmap) - Guías paso a paso para ser desarrollador.
- [Free Programming Books](https://github.com/EbookFoundation/free-programming-books) - Libros de programación gratuitos.
- [freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp) - Aprende a programar gratis.
- [MDN Web Docs](https://github.com/mdn/content) - La referencia de la plataforma web.
- [Public APIs](https://github.com/public-apis/public-apis) - Lista colectiva de APIs gratuitas.

## Tendencias (auto)

<!-- TRENDING:START -->
_Detectados automáticamente cada semana (repos nuevos de los últimos 30 días, ≥ 500 ⭐). Sin revisar: pasa los buenos a su sección. Última actualización: 2026-11-09._

**Ciberseguridad**

- [1337isnot1337/DOPPLERGEIST](https://github.com/1337isnot1337/DOPPLERGEIST) - Python tool for aircraft Doppler audio geolocation using historical ADS-B flight data (Source-available). ⭐ 518

**IA y LLMs**

- [N1nEmAn/sapper-v2](https://github.com/N1nEmAn/sapper-v2) - Autonomous pentest legion — AI commander + worker swarm + layered fact-intent graph. 3rd Tencent Intelligent…. ⭐ 1.8k

**Skills de agentes y MCP**

- [alexgaoth/awesome-reverse-engineered](https://github.com/alexgaoth/awesome-reverse-engineered) - Don't reverse engineer it twice. 17,000+ open-source tools built by reverse engineering closed apps, APIs,…. ⭐ 1.3k
<!-- TRENDING:END -->

---

## Licencia

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/deed.es)

En la medida de lo posible según la ley, los contribuyentes han renunciado a todos los derechos de autor y derechos conexos sobre esta obra.
