# wyreanderson.com

Portfólio monocromático em Next.js App Router e TypeScript. Primeiro projeto público: WyreFi Cam. Sem backend ou tracking.

## Desenvolvimento

Requer Node.js 22+ e pnpm 11.25.0.

```sh
pnpm install --frozen-lockfile
pnpm dev --port 3100
```

Abrir http://127.0.0.1:3100. Fontes empacotadas localmente, sem CDN em runtime ou build.

```sh
pnpm lint
pnpm typecheck
pnpm exec playwright install chromium
pnpm test
pnpm build
```

Adicionar projetos: editar apenas `src/content/projects.ts`, com conteúdo real e `status: 'published'`, `featured: true`. Links opcionais aceitam apenas HTTPS sem credenciais. Os quatro placeholders desaparecem quando existem destaques publicados. Configurar GitHub e contacto em `src/config/site.ts`; GitHub confirmado e ativo; contacto permanece nulo até ser informado.

Referência aprovada: `docs/approved-reference.png`. Arquitetura, QA e publicação assistida em `docs/`. Nenhum deploy ou push é executado automaticamente.
