# Padrão visual dos projetos

Aplicar a cada novo projeto adicionado a este portfólio. A preferência foi definida pelo proprietário: adaptar a identidade existente quando fornecida; quando não existir uma imagem, gerar uma arte original baseada na função real do projeto.

## Direção de arte

- Pixel art monocromática, coerente com o hero e ícones aprovados.
- Um único símbolo por projeto: silhueta distinta, sem texto embutido, slogans ou detalhes que desapareçam em miniatura.
- Se houver logo, preservar a identidade: proporções essenciais, forma, significado e elementos reconhecíveis. Converter a paleta para cinzas; não redesenhar a marca livremente.
- PNG quadrado com transparência real, símbolo centrado e margem de segurança de aproximadamente 15%. Sem fundo escuro, moldura, sombra, brilho ou gradientes.
- Grelha de pixels consistente, contornos em degraus e poucos tons: carvão, cinza médio, cinza claro. Evitar anti-aliasing e detalhes fotográficos.
- Exibição padrão: 64×64 CSS px, object-fit contain, image-rendering pixelated. Dimensões reservadas para evitar layout shift. A arte é decorativa, identificada pelo título adjacente.
- Equilibrar tamanho aparente e peso visual com os outros ícones, verificando sempre no cartão real em desktop e mobile.

## Fluxo para cada novo projeto

1. Confirmar repositório e ler a descrição real, sem executar código externo.
2. Se o proprietário fornecer logo, usá-la como alvo da adaptação; guardar original em docs/brand-references sem sobrescrever.
3. Se não houver imagem, gerar um símbolo pixel art original que represente a função comprovada do projeto. Não inventar funcionalidades ou usar marcas de terceiros.
4. Guardar a arte final em public/assets/projects/<slug>-pixel.png e atribuir coverImage em src/content/projects.ts. O cartão já suporta essa propriedade.
5. Rever transparência, legibilidade a 64 px, proporções e contraste. Atualizar capturas e executar os checks pertinentes.
6. Commit apenas neste repositório. Alterações aos repositórios dos projetos, push, publicação e mudanças remotas continuam a precisar da autorização correspondente.

## Prompt base

“Create a monochrome pixel art portfolio icon for [verified project purpose]. [Preserve the supplied logo identity OR design one distinctive original symbol]. Square canvas, transparent background, centered symbol, approximately 15% safe margin, crisp grid-aligned stepped edges, charcoal and restrained gray highlights, readable at 64×64 pixels on light gray. No text, gradients, blur, background scene or decorative frame.”

## WyreFi Cam

Referência original fornecida pelo proprietário: docs/brand-references/wyrefi-cam-original.png. Preservar W, câmara/lente central e arcos Wi-Fi. Adaptação para o portfólio; a marca original e o repositório WyreFi-Cam não são alterados por este fluxo.

## BTC Puzzle

Repositório fornecido pelo proprietário: https://github.com/Wyreanderson/-projeto-BTC-Puzzle. Em 21/10/2026, a API GitHub confirmou repositório público vazio, sem README, stack ou licença. Arte original: duas peças de puzzle encaixadas, em cinzas, sem presumir funcionalidades financeiras ou técnicas. Ferramenta integrada image_gen; prompt final: duas peças de puzzle, silhueta compacta, pixel art monocromática, fundo transparente, margens de 15%, legível a 64×64 px, sem texto, moedas, marcas, brilho ou gradientes. Destino: public/assets/projects/btc-puzzle-pixel.png.
