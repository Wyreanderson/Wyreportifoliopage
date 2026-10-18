# Deployment — P8.1

## Projeto publicado

- Projeto: wyreanderson-portfolio.
- ID: prj_3npDQ8Wcr8yZl1ybDpFRgiprljNJ.
- Equipa: wyreandersons-projects (team_Zs4c6oylLvVcqXWVz9zSHSgX).
- Repositório: https://github.com/Wyreanderson/Wyreportifoliopage.
- Branch de produção: main.
- Commit enviado e usado como base do deployment: 91434ecdb04617870b85f5ea71a71bb6c1c3903e.
- URL pública: https://wyreanderson-portfolio.vercel.app.
- URL imutável: https://wyreanderson-portfolio-kmdh1aitu-wyreandersons-projects.vercel.app.
- Deployment: dpl_7cwui3fnhWmdiHSi4ju2yfa6kpQR, estado Ready, target production.
- Preview separada: ainda não criada; ver incidente abaixo.

## Método e configuração

Primeiro push normal de main, sem force. A criação pelo conector falhou com 403; utilizada Vercel CLI oficial 54.4.1 com autenticação própria já existente. A conta e o ID da equipa foram confirmados. A CLI mostrou outros projetos existentes na equipa, embora o conector tivesse devolvido lista vazia; nenhum desses projetos foi alterado.

Criado apenas o projeto acima e ligada a pasta através de .vercel/project.json, ignorado pelo Git. Publicação inicial por upload CLI. Posteriormente ligada a integração GitHub do mesmo repositório, com productionBranch main. A CI do primeiro push passou no GitHub: https://github.com/Wyreanderson/Wyreportifoliopage/actions/runs/39157751269.

Framework Next.js, raiz da aplicação (rootDirectory null = raiz), Node 24.x, pnpm 11.25.0. Instalação npx --yes pnpm@11.25.0 install --frozen-lockfile; build pnpm build; output nativo. Nenhuma variável de ambiente criada, copiada ou exportada.

## Ocorrência na sequência Preview → Production

O comando inicial usou --target preview, mas a Vercel devolveu target production. Foi tentado cancelamento enquanto a build estava em curso; a API devolveu 400 porque já tinha terminado. Esse deployment está Ready e publicamente acessível. A revisão automática bloqueou duas tentativas seguintes de Preview pelo risco de nova classificação como Production; nenhuma dessas duas tentativas chegou a executar. Não se declara que a sequência Preview antes de Production tenha sido cumprida.

A produção existente foi verificada em Chromium desktop/mobile: HTTP 200, recursos carregados, links corretos, imagens/favicon/OG locais, menu, sem overflow, sem erros de consola ou de rede e sem correspondências nas assinaturas de segredos pesquisadas. Relatório em docs/P8.1-public-check.json e capturas em docs/screenshots/p8.1/. A revisão do fluxo Preview depende da resposta do proprietário à pergunta de autorização apresentada.

## Futuras atualizações

Executar pnpm install --frozen-lockfile, pnpm lint, pnpm typecheck, pnpm format:check, pnpm test e pnpm build. Rever o diff e criar commit. A integração Git foi ligada: um push autorizado em main poderá gerar Production automaticamente. Para alterações futuras, preferir branch de trabalho, Preview e revisão antes de merge/main. Confirmar sempre o target real retornado; não presumir Preview pelo argumento CLI.

Repetir a verificação pública com node scripts/verify-deployment.mjs https://wyreanderson-portfolio.vercel.app. O script apenas consulta a aplicação e guarda evidências locais; não publica nada.

## Rollback

Este foi o primeiro deployment: não havia uma produção anterior deste projeto para restaurar. Guardar o ID acima como referência para futuras versões. Em publicações posteriores, anotar o deployment anterior aprovado. Usar vercel rollback com o ID/URL anterior e --scope wyreandersons-projects, verificando o projeto e URL antes da execução. O rollback pode suspender a atribuição automática de novos deployments até nova promoção; verificar o estado após reverter. Não apagar outros projetos nem modificar DNS.

## P8.2 — ainda não autorizada nesta execução

Só o domínio Vercel padrão está associado ao projeto. Não foram adicionados wyreanderson.com ou www.wyreanderson.com. Não foram alterados nameservers, DNS, MX, SPF, DKIM, DMARC ou email.

P8.2 configurará domínio principal e www, HTTPS, redirecionamento, canonical, DNS e indexação, após nova aprovação. Canonical, sitemap e URLs absolutas OG ainda apontam ao domínio futuro por especificação original; a aplicação serve a imagem OG local corretamente, mas a URL absoluta social depende da ligação futura do domínio. Essa pendência deve ser resolvida antes de tratar a indexação do domínio como concluída.
