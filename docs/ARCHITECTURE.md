# Arquitetura V1

Next.js 16.4.2, React 19.3.1, TypeScript estrito e CSS global responsivo. Página pré-renderizada; apenas o cabeçalho tem estado cliente para o menu. Sem API, backend, autenticação, analytics ou variáveis secretas.

- `src/app`: composição, estilos, metadados, favicon, robots e sitemap.
- `src/components`: cabeçalho, hero, cartões, features e rodapé semântico.
- `src/content/projects.ts`: única fonte de dados para futuros projetos, inicialmente vazia.
- `src/lib/projects.ts`: seleção de publicados/destaques e validação HTTPS sem credenciais.
- `src/config/site.ts`: domínio canónico, descrição, GitHub e contacto. Os dois últimos começam nulos por especificação.
- `public/assets`: arte aprovada e fontes via pacotes locais (licenças nos pacotes Fontsource).
- `tests`: Playwright e axe, sem serviços externos.

## Adicionar conteúdo

Adicionar um objeto Project real no array de `src/content/projects.ts`, com id e slug únicos, título, descrição, tags, categorias, status e featured. Apenas publicados e destacados aparecem na homepage. Os placeholders pertencem à UI e não ao array de conteúdo. Quando há destaques, são substituídos pelos cartões reais. URLs opcionais inválidas não são renderizadas. Os conteúdos são escapados pelo React; não há HTML arbitrário.

A imagem de capa é um campo opcional reservado no tipo; o cartão V1 apresenta título, descrição, tags e links, preservando o layout simples. Não há páginas de detalhes. Não guardar informação privada em rascunhos: o código-fonte também poderá ser público.

## Decisões

CSS simples, sem biblioteca de componentes ou ícones. Fontes locais via Fontsource, sem downloads durante a build. Textura discreta CSS; screenshot de referência só na documentação. Imagens com dimensões explícitas e pixelated. Alt descritivo no hero; ícones e paisagem decorativos com alt vazio.
