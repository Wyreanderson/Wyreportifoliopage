# Guardrails — Codex

Leia primeiro `CODEX_SUPERPROMPT.md`, `IMPLEMENTATION_PLAN.md` e `docs/approved-reference.png`.

- Trabalhe **somente neste repositório**. Não alterar pastas-irmãs e outras iniciativas do utilizador.
- Referência visual é uma meta de UI, não arquivo a ser renderizado como screenshot.
- Projetos reais apenas quando fornecidos ou aprovados pelo proprietário. WyreFi Cam autorizado; quatro placeholders “Coming soon” apenas quando não há destaques publicados.
- Idioma do site inglês; relatórios para o utilizador em português.
- Não criar links fictícios, páginas falsas, mock de downloads, nem inventar URLs, email ou GitHub handle.
- Não fazer deploy, alteração DNS, publicar ou dar push remoto sem aprovação explícita.
- Não adicionar banco de dados, autenticação ou analytics desnecessárias.
- Sempre relatar comandos realmente executados e resultados verdadeiros; construir com testes.
- Evitar dependências supérfluas, efeitos exagerados, cores e estilos destoantes do pixel art monocromático.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


## Imagens dos projetos

Para cada novo projeto no portfólio, seguir docs/PROJECT_ART.md: adaptar a logo existente com identidade preservada, ou gerar arte original quando não houver imagem fornecida. Pixel art monocromática, PNG transparente quadrado, margem uniforme e exibição a 64×64 px. Guardar em public/assets/projects e configurar coverImage. Rever o cartão real antes do commit. Não modificar outros repositórios nem fazer push remoto por este procedimento.

- BTC Puzzle autorizado pelo proprietário em 21/10/2026. Atualizado em 22/10/2026 pelo README real: BTC Puzzle #71 Worker, Python/CUDA, self-hosted, MIT, experimental v0.1.0. Não representar como scanner de carteiras arbitrárias nem prometer cobertura ou recompensa.
