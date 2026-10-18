# QA da V1

## Resultados locais

- `pnpm lint`: passou.
- `pnpm typecheck`: passou.
- `pnpm build`: passou; homepage, favicon, robots e sitemap pré-renderizados.
- `pnpm test`: 9 testes passaram em Chromium.
- axe: zero violações nas páginas testadas em 1440×900, 768×1024, 390×844 e 360×800. Esta auditoria automática não substitui revisão humana.
- Sem overflow horizontal nessas quatro larguras; quatro Coming soon; âncoras existentes; nenhuma âncora falsa `#`; GitHub indisponível de forma acessível.
- Tab/Enter no skip link; Enter/Space no menu; Escape fecha e devolve foco; navegação interna fecha o menu.
- Sem pageerror ou console.error nas quatro larguras.
- URLs HTTPS seguras, exclusão de rascunhos e array de conteúdo vazio verificados.
- Robots e sitemap retornam 200; canonical e OG presentes.

## Evidências visuais

Capturas reais full-page em `docs/screenshots/desktop.png`, `tablet.png`, `mobile.png`, `small-mobile.png`. Inspecionadas desktop, tablet e mobile contra a referência aprovada. Preservados composição, assets e monocromia; cartões reais substituídos por placeholders por requisito. Aprovação visual final pertence ao proprietário.

## Falhas encontradas e corrigidas

Registry inacessível no sandbox: instalação executada com permissão de rede. Versões latest de ESLint/TypeScript tinham peers incompatíveis: ajustadas para ESLint 9 e TS 6. O ESLint 9 apresenta aviso de fim de suporte; mantido por compatibilidade dos plugins atuais. Atualizar junto com esses plugins numa manutenção futura.

Script local de unrs-resolver autorizado explicitamente no pnpm-workspace.yaml. Porta 3000 bloqueada com EACCES no Windows: servidor de avaliação e testes usam 3100. Primeiro teste do menu usava nome acessível mutável; corrigido para o id estável e suite repetida com sucesso. Nenhuma falha escondida.

Lighthouse não foi executado; nenhuma pontuação de performance é declarada. CI foi escrita, mas não executada no GitHub porque não houve push. Não há backend ou API externa a testar.

## Avaliação local

`pnpm dev --port 3100` → http://127.0.0.1:3100. Para testar produção: `pnpm build`, depois `pnpm start --port 3100` com o dev desligado.

Pendências: URL GitHub confirmada, email opcional, aprovação visual, autorização de push/deploy e DNS. Nenhuma publicação foi efetuada.

## Registo por fase

| Fase | Implementação e verificação                                                                                                              | Resultado / pendências                                                                                                                         |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| P0   | Get-Location, listagem, leitura integral de AGENTS, superprompt e plano; referência aberta; assets inventariados e dimensões verificadas | Pasta vazia além do Git. Materiais de origem apenas lidos/copiados. Nenhum outro repositório alterado.                                         |
| P1   | Fundação Next/TS/pnpm, assets, fontes locais, ESLint, Prettier e README; instalação e verificação de peers                               | Instalação recuperada após problemas de rede e versões; lint, tipos, build e peers aprovados. Aviso de suporte ESLint 9 permanece documentado. |
| P2   | Interface semântica e assets reais; captura 1440×900 comparada visualmente à referência                                                  | Composição implementada; aprovação visual humana pendente.                                                                                     |
| P3   | Grid 2/1 colunas, menu móvel, foco e teclado; Chromium em 768×1024, 390×844 e 360×800                                                    | Sem overflow; teclado passou após corrigir seletor do teste.                                                                                   |
| P4   | Dados vazios tipados, filtro publicados/destaques, cartão futuro e validação de URLs                                                     | Testes de estado vazio, rascunhos, links configurados/nulos/inválidos e escape de conteúdo passaram. GitHub/contacto pendentes.                |
| P5   | Metadados, OG/favicon, robots/sitemap, CI, skip link, foco/reduced-motion, Playwright/axe                                                | pnpm lint, typecheck, test (9), build passaram. Axe zero violações nas quatro larguras. Lighthouse e execução remota da CI não realizados.     |
| P6   | ARCHITECTURE, DEPLOYMENT, QA e README revistos com referências oficiais                                                                  | Documentação pronta; deploy, DNS e push não executados. P7/P8 dependem do proprietário.                                                        |

Comandos adicionais executados: `pnpm view next version`, `pnpm view react version`, `pnpm peers check`, `pnpm exec playwright install chromium`, `pnpm format`, `git diff --check`. A tentativa `pnpm pkg set` rejeitou uma chave com dois-pontos; a configuração foi escrita diretamente e validada. Os avisos NO_COLOR/FORCE_COLOR do runner não afetaram os testes.

## Atualização do GitHub

Perfil confirmado pelo proprietário: https://github.com/Wyreanderson. Links ativados no cabeçalho, hero e rodapé; aviso Coming soon do GitHub removido automaticamente. Suite de 9 testes repetida com sucesso e TypeScript aprovado. Capturas atualizadas. Apenas o contacto permanece nulo; referências anteriores a GitHub pendente registam o estado inicial da V1.

## Primeiro projeto real — WyreFi Cam

Autorizado pelo proprietário através do link https://github.com/Wyreanderson/WyreFi-Cam. Metadados e README públicos consultados: repositório público, licença MIT, TypeScript, webcam iPhone via Safari/WebRTC para OBS, self-hosted. Nenhum código desse repositório foi executado ou alterado.

Adicionado como destaque publicado nas categorias open-source e self-hosted, com ligação apenas ao repositório. Nenhuma demo ou download foi presumido. Os quatro placeholders desaparecem conforme a regra original; há agora um cartão real. O estado vazio continua suportado e o filtro vazio é testado. Lint, TypeScript, 9 testes e build passaram; capturas atualizadas nas quatro larguras. Esta alteração substitui o requisito inicial de conteúdo vazio por autorização explícita do proprietário.
