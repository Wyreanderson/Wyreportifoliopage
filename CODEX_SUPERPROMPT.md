# CODEX — SUPERPROMPT: wyreanderson.com (V1)

Você é um engenheiro frontend sénior, designer de interface e responsável por QA. A tua missão é CONSTRUIR (não apenas planear) a primeira versão do portfólio pessoal `wyreanderson.com`, com alta fidelidade à referência visual em `docs/approved-reference.png`. A imagem é uma referência de DESIGN; é proibido usá-la como screenshot de fundo, mapa de imagem ou substituto da interface. Todos os textos, botões, menus, cartões e links têm de ser elementos semânticos reais.

## Princípios do projeto

- Idioma do website: **inglês**; idioma dos relatórios ao proprietário: português.
- Visual não negociável: **pixel art monocromática**. Fundo cinza-claro subtilmente texturado, texto quase preto, contornos retos finos, sombras discretas, tipografia retro legível e recursos em tons de cinza. Não introduzir gradientes coloridos, cores de destaque, glassmorphism, UI SaaS genérica, cantos muito arredondados ou animações chamativas.
- Layout desktop de referência: header com marca à esquerda e navegação à direita; hero em duas colunas (texto/CTAs à esquerda, ilustração pixel art à direita); faixa Featured Projects com 4 cartões; faixa “What you'll find here” com 3 colunas (Open Source, Self-Hosted, Documentation); rodapé com paisagem pixel art e links.
- **Não há projetos públicos cadastrados na V1.** Manter a secção de projetos e os quatro espaços visuais para preservar a composição, MAS cada cartão deve ser explicitamente “Coming soon” com texto neutro, sem inventar nomes, descrições, tecnologias, repositórios, lançamentos ou demos. Assim que forem adicionados projetos reais ao array de dados, exibir os projetos e remover os placeholders dessa secção. Nenhuma integração automática com a API do GitHub na V1.
- Copy principal, igual à referência aprovada: heading **“Building open-source & self-hosted projects”**; descrição **“A public portfolio of tools, experiments, and useful systems you can explore, download, and run yourself.”**; CTAs visuais **“View Projects”** e **“Visit GitHub”**.
- Projeto novo e independente. NÃO editar, mover, limpar ou commitar outros projetos, especialmente repositórios existentes. Nunca criar arquivos de configuração fora da pasta atual. Verificar o diretório de trabalho antes de executar qualquer instalação ou comando.

## Entradas e imagens já preparadas

- `docs/approved-reference.png`: imagem autorizada como referência de UI (não usar como background).
- `assets/public/hero-workspace.png`: ilustração raster PNG com transparência, extraída do desenho aprovado. Colocar em `public/assets/hero-workspace.png`, mostrar com `next/image` de dimensões explícitas, `alt` descritivo, `priority` se o LCP exigir e `image-rendering: pixelated` quando escalar; **não criar outra tela inteira como uma imagem**.
- `assets/public/footer-landscape.png`: paisagem em pixels, PNG transparente; usar como imagem decorativa do rodapé, sem tapar links ou títulos.
- `assets/public/icon-open-source.svg`, `icon-self-hosted.svg`, `icon-documentation.svg`, `icon-coming-soon.svg`: ícones pixelados.
- `assets/public/favicon.svg`: favicon monocromático.
- `assets/public/og-image.png`: imagem social/OG estática; usar para metadados.
- As imagens são uma base aprovada para implementar. Se algum recorte mostrar artefactos visuais, melhorar CSS/posicionamento sem substituir o desenho ou reimaginá-lo livremente.

## Stack e decisões técnicas

Escolher **Next.js com App Router, TypeScript estrito e CSS moderno/Tailwind CSS** (pode usar Tailwind para layout e CSS Modules/globals para detalhes artísticos). Usar versão estável suportada e registar versão no lockfile `pnpm-lock.yaml`. Usar **pnpm**. O site deve ser pré-renderizado/estático tanto quanto possível. Hospedagem-alvo: **Vercel**, domínio final `wyreanderson.com`. Não há backend, banco de dados, Supabase, autenticação, GraphQL, Docker, Redis, analytics, cookies próprios, API key nem servidor doméstico para a V1. Preparar futuras evoluções por meio de componentes simples e dados locais tipados, sem abstrações desnecessárias.

Fontes recomendadas: títulos com **Pixelify Sans** ou equivalente 8-bit legível; parágrafos com **IBM Plex Mono** ou equivalente. Se usar `next/font/google`, as fontes devem ser obtidas em build, sem carregamento client-side de CDN; prever fallback sólido em caso de indisponibilidade na build. Não criar dependências só para reproduzir ícones básicos: os SVG já foram entregues.

Estrutura pretendida (adaptar quando houver razão técnica clara):

```
src/
  app/{layout.tsx,page.tsx,globals.css,icon.svg,opengraph-image.png}
  components/{site-header.tsx,hero.tsx,featured-projects.tsx,
              project-card.tsx,features.tsx,site-footer.tsx}
  config/site.ts
  content/projects.ts
  lib/projects.ts
public/assets/*
tests/*
docs/{ARCHITECTURE.md,DEPLOYMENT.md,QA.md}
AGENTS.md
README.md
```

O `src/content/projects.ts` deve começar com **array vazio tipado** (`Project[] = []`) e fornecer o tipo com campos `id`, `slug`, `title`, `shortDescription`, `tags`, `categories` (`open-source`/`self-hosted`), `status`, `featured`, `repoUrl?`, `demoUrl?`, `docsUrl?`, `downloadUrl?`, `coverImage?`. Validar URLs e não renderizar links que estejam vazios. O arquivo deve conter comentários claros com a instrução de como acrescentar um projeto futuramente, e sem dados fictícios. Os placeholders são uma condição da UI baseada em `projects.length === 0`, não projetos inventados gravados na lista.

## Layout desktop — fidelidade visual

1. **Page frame:** site centralizado, largura máxima aproximadamente 1400–1500 px, moldura fina escura visível, fundo `#c4c4c4` aproximado, espaçamentos da imagem. Textura visual muito discreta em CSS, sem carregar bibliotecas de efeitos.
2. **Header:** marca textual `wyreanderson.com` em fonte de pixels à esquerda; links `Projects`, `Open Source`, `Self-Hosted`, `About`, `GitHub` à direita. Mesmo espaçamento e linha divisória da referência.
3. **Hero:** coluna esquerda com heading grande em 2–3 linhas na largura desktop, subtítulo e 2 CTAs quadrados; coluna direita com `hero-workspace.png` ocupando bem o espaço. Imagem nunca cobre texto, não sai do contêiner nem causa layout shift.
4. **Featured Projects:** header da secção com `Featured Projects` à esquerda e `View all projects →` à direita. Como não existem projetos, mostrar 4 slots visuais `Coming soon` discretos, com `icon-coming-soon.svg` e microcopy honesta (“New projects will appear here.”). NÃO indicar que um projeto está disponível para download quando não está.
5. **What you'll find here:** 3 colunas, linha divisória e ícones; manter textos:
   - `Open Source` — `Tools and projects built in the open for the community to use and contribute to.`
   - `Self-Hosted` — `Practical, self-hosted solutions for more control and privacy.`
   - `Documentation` — `Clear guides, setup instructions, and lessons learned along the way.`
6. **Footer:** `footer-landscape.png` colado ao fundo, por trás do conteúdo; links alinhados ao centro: GitHub / Projects / Contact. Evitar criar secções grandes não existentes na referência.

## UX, links e comportamento

- Navegação interna por âncoras reais: `Projects` e `View Projects`/`View all projects` levam a `#projects`; `Open Source` a `#open-source`; `Self-Hosted` a `#self-hosted`; `About` a uma âncora `#about` no bloco introdutório sem adicionar secção destoante; links do rodapé devem funcionar.
- `src/config/site.ts` conter `githubUrl: null` e `contactEmail: null` até o dono informar valores verdadeiros. Quando forem nulos, preservar a aparência dos CTAs da referência, mas apresentá-los em estado indisponível claramente acessível (sem `href="#"`, URL inventada, links de exemplo nem click falso). Na revisão final, pedir essas informações para ativação.
- O produto deve funcionar com mouse, teclado e toque. Adicionar skip link, hierarquia H1/H2 correta, labels acessíveis, `:focus-visible`, contraste WCAG AA sempre que viável, sem texto embutido nas imagens e `prefers-reduced-motion`.
- Responsividade: >1200 px composição idêntica à referência; tablets layout adaptado com 2 cartões por linha; mobile 360–430 px com header compacto/navegação acessível, hero empilhado e 1 cartão por linha, sem scroll horizontal. O ícone ou menu mobile precisa funcionar de verdade. Teclas Tab, Enter, Space, Escape verificadas.
- Incluir documentação curta para adicionar projetos depois, mas não construir páginas de detalhes, downloads, releases ou conexão automática com GitHub nesta fase.

## SEO e qualidade

- Configurar `metadata` do Next (`title`, description, canonical em `https://wyreanderson.com`, Open Graph, Twitter card), favicon e imagem social. Configurar `robots.ts` e `sitemap.ts` sem incluir páginas inexistentes. Conteúdo honesto: não usar schema `SoftwareApplication` para apps ainda não publicados.
- Sem tracking/analytics/cookies de marketing na V1; não adicionar banner de cookies sem necessidade concreta. Evitar transmitir informações desnecessárias. Não deixar dados sensíveis no Git.
- Optimizar recursos, CLS, acessibilidade e performance. Verificar no Chrome real ou Playwright pelo menos em 1440×900, 768×1024 e 390×844; relatórios de Lighthouse/axe quando as ferramentas estiverem disponíveis. Alvo preferido Lighthouse >=90 (não inventar pontuação nem chamar meta de resultado).
- Implementar comandos `pnpm dev`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build`, com testes curtos para renderização vazia, links/âncoras, configuração de links externos e sem overflow mobile. Configurar GitHub Actions CI para lint, typecheck, testes e build, sem dependência de tokens privados.
- A homepage tem de ficar preparada para inserir projetos no futuro alterando **um arquivo de dados**, sem reconstruir a estrutura do layout.

## Execução obrigatória por fases

**Fase 0 — inspeção e segurança:** listar o que existe na pasta; mostrar plano curto e identificar bloqueios. Se houver projeto existente, não o substituir silenciosamente. Confirmar presença do screenshot e assets. Não instalar ferramentas globalmente sem autorização.

**Fase 1 — fundação:** iniciar Next + TS + pnpm, definir lint/format/typecheck, copiar assets, adicionar estrutura e configuração; README funcional.

**Fase 2 — interface:** implementar header, hero, secção vazia de projetos, features, footer, responsividade. Comparar visualmente ao `approved-reference.png`. Evitar aperfeiçoamentos autorais que se afastem da referência. Produzir capturas de ecrã de desktop e mobile em `docs/screenshots/` quando possível.

**Fase 3 — preparação para conteúdo:** implementar `Project` tipado, seleção de publicados/destaques, `ProjectCard` real (não visível ainda), e estado vazio de 4 slots quando não houver publicados. Nunca inventar um URL de GitHub. Adicionar comentários de uso.

**Fase 4 — SEO, acessibilidade, testes e CI:** todos os checks; verificar links, alt, foco, sem hidratação desnecessária, sem console errors e sem horizontal overflow. Corrigir antes de considerar a fase completa.

**Fase 5 — produção assistida:** escrever documentação de deploy Vercel, configuração DNS de `wyreanderson.com`, canonical e opção de redirecionamento `www`. **Não fazer deploy, alteração de DNS, push público, criação de repo público ou configurações remotas sem autorização explícita.** O domínio pode ainda não estar apontado.

## Aceitação / reporte

Ao fim, entregar um relatório em português com: arquivos criados, comandos efetivamente executados, resultados reais (pass/fail), screenshots disponibilizadas, link local e instruções para iniciar o servidor, pendências externas (`githubUrl`, `contactEmail`, DNS, aprovação da versão final) e o que foi intencionalmente deixado de fora. Não declarar testes aprovados se não foram executados. Não esconder falhas. Primeiro deixar a V1 local revisável; publicação só após aprovação visual expressa do dono.

**Começa agora pela Fase 0, faz uma inspeção do diretório, apresenta um plano objetivo e depois implementa fase a fase com verificações reais. Não te limites a responder com um plano textual.**
