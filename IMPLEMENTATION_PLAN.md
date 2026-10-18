# wyreanderson.com — Plano de implementação V1

**Estado:** V1 implementada localmente. P0–P6 concluídas; P7–P8 aguardam revisão e autorização do proprietário.

## Objetivo
Landing page pública de portfólio de software com estilo pixel art monocromático. Projetos GitHub serão inseridos posteriormente. A referência aprovada é `docs/approved-reference.png`.

## Escopo visual da versão inicial

| Bloco | V1 | Estado inicial |
|---|---|---|
| Moldura e cabeçalho | Sim | Marca + navegação funcional |
| Hero e workspace pixel art | Sim | Texto real e ilustração PNG |
| Botão projetos | Sim | Vai à secção no site |
| Botão GitHub | Sim | Desativado com aviso enquanto URL não for informada |
| Featured Projects | Sim | 4 cartões neutros “Coming soon” |
| Open Source / Self-Hosted / Documentation | Sim | Secção informativa estática |
| Rodapé e paisagem | Sim | Link interno; contato pendente de configuração |
| Responsivo | Sim | Desktop/tablet/mobile |
| SEO/OG/favicon | Sim | Metadados e imagens locais |
| A11y/performance | Sim | Testes e ajustes |

## Etapas para o Codex

- [x] P0 Inspecionar pasta de trabalho, ler a referência e listar bloqueios
- [x] P1 Criar fundação Next.js + TypeScript + pnpm
- [x] P2 Construir layout com recursos pixel art e fidelidade desktop
- [x] P3 Implementar variantes responsivas e navegação móvel
- [x] P4 Implementar `projects.ts` vazio e slots “Coming soon”
- [x] P5 Implementar SEO, acessibilidade, testes e CI
- [x] P6 Preparar documentação Vercel, domínio e `www` sem publicar
- [ ] P7 Revisão humana do visual em desktop/mobile
- [ ] P8 Aprovação explícita para o deploy e ajustes DNS

## Arquitetura V1

```text
Browser
  ↓ HTTPS
Vercel (Next.js / páginas essencialmente estáticas)
  ├── /  (landing page)
  ├── /assets/ (hero, ícones, landscape, OG)
  ├── /robots.txt
  └── /sitemap.xml

Dados do portfólio: src/content/projects.ts (Project[] = [])
Links externos: src/config/site.ts (nulos até configuração)
Sem backend, login, API GitHub ou base de dados.
```

## Introduzir projetos posteriormente

1. Selecionar projeto realmente público no GitHub, inspecionar segredos e licenças.
2. Preparar README, screenshots, instruções de instalação e `LICENSE` apropriada no próprio repositório.
3. Criar dados reais em `src/content/projects.ts` (nome, tecnologias, descrição, categorias, URLs verificadas).
4. Publicar somente projetos com `status: 'published'` e `featured: true` nos destaques.
5. Validar automaticamente URLs, renderizar botões apenas onde existam links.
6. Mais tarde avaliar: página `/projects`, detalhes por slug, releases, downloads e integração GitHub API com cache — não necessários para a primeira versão.

## Incluído / não incluído

**Incluído agora:** design, assets gráficos, metadados, conteúdo honesto, placeholders vazios, layout responsivo, qualidade, estrutura tipada, plano de deploy e CI.

**Não incluir na V1:** autenticação, dashboards, Supabase, base de dados, gestão de utilizadores, CMS, API GitHub, formulários com backend, emails transacionais, pagamentos, métricas de downloads, downloads fictícios, Docker de produção, Tailscale, servidor doméstico, área de administração, multi-idioma e analytics/cookies de marketing.

**Não ignorar, mas adiar intencionalmente:** aprovação de URL GitHub, email de contacto, política de licenciamento de novos repositórios, futuras versões portuguesas, automatização de sync GitHub, downloads/release assets e analytics privativas quando justificadas.

## Critérios de conclusão

- [ ] É reconhecivelmente o mesmo design, com texto e componentes reais
- [ ] Não lista projetos fictícios
- [ ] Desktop 1440×900 sem sobreposições
- [ ] Tablet 768×1024 sem sobreposições
- [ ] Mobile 390×844 sem overflow horizontal
- [ ] CTAs e âncoras válidas (ou estados indisponíveis claros)
- [ ] Metadados/OG/favicon presentes
- [ ] Contraste, foco e navegação por teclado
- [ ] `pnpm lint`, `pnpm typecheck`, `pnpm test` e `pnpm build` passam
- [ ] Sem backend, logs/segredos/tokens publicados
- [ ] Sem deploy ou DNS sem aprovação

