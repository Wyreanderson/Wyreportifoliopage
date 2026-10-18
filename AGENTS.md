# Guardrails — Codex

Leia primeiro `CODEX_SUPERPROMPT.md`, `IMPLEMENTATION_PLAN.md` e `docs/approved-reference.png`.

- Trabalhe **somente neste repositório**. Não alterar pastas-irmãs e outras iniciativas do utilizador.
- Referência visual é uma meta de UI, não arquivo a ser renderizado como screenshot.
- V1 sem projetos reais: `src/content/projects.ts` vazio; quatro placeholders honestos “Coming soon”.
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
