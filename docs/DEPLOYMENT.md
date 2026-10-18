# Publicação assistida — ainda não executada

É necessária aprovação visual da V1 e autorização explícita para push, deploy e DNS. Nada foi publicado. A CI deste repositório apenas testa e compila; não possui tokens nem passo de deploy.

## Preparação local

1. Confirmar URL real do perfil GitHub e email opcional em `src/config/site.ts`.
2. Rever capturas desktop, tablet e mobile em `docs/screenshots/`.
3. Executar `pnpm install --frozen-lockfile`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build`.
4. Pedir aprovação da versão exata antes de qualquer operação remota.

## Vercel, após autorização

Importar apenas este repositório e confirmar equipa/projeto. Preset Next.js, diretório raiz deste projeto, Node 24, instalação `pnpm install --frozen-lockfile`, build `pnpm build`, output padrão do Next. Não configurar export estático: o Next pré-renderiza a página e a Vercel fornece otimização de imagens. Não são necessárias variáveis de ambiente.

A integração Git pode gerar deploys automaticamente ao receber pushes. Ativar/vincular essa integração somente quando a publicação estiver autorizada. Testar a versão de preview e aprovar produção antes de associar o domínio.

## Domínio e www, após autorização separada

O canonical e o sitemap já usam `https://wyreanderson.com`. Em Settings > Domains, adicionar esse domínio e opcionalmente `www.wyreanderson.com`. Usar os registos exatos A/CNAME/TXT indicados pela Vercel para o projeto; não presumir um IP universal. Fazer a alteração no provedor DNS autoritativo, preservando MX, TXT de email e outros registos existentes.

Se www for adicionado, configurar redirecionamento permanente para `https://wyreanderson.com`, preservando caminhos. Confirmar propagação, HTTPS, destino do redirecionamento, canonical, robots, sitemap e imagem OG. Não é necessário transferir o domínio ou trocar nameservers para este fluxo.

## Reversão

Guardar a versão e registos DNS anteriores. Em caso de problema após publicação autorizada, reverter para o deployment anterior aprovado e verificar o domínio. Não apagar o projeto ou registos alheios.

## Fontes oficiais consultadas

- [Next.js na Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs)
- [Adicionar e configurar domínio](https://vercel.com/docs/domains/working-with-domains/add-a-domain)
