# Imagens dos projectos

Cada projecto tem a sua pasta:

| Pasta        | Projecto no site    | Como aparece                                              |
|--------------|---------------------|-----------------------------------------------------------|
| `SENASA/`    | Sangue Solidário    | Uma imagem grande (`sigds-painel-e-app.webp`)             |
| `StageUp/`   | StageUP             | Imagem grande (`stageup-00-…`) e miniaturas por baixo     |
| `NTWANANO/`  | Ntwanano            | Faixa de ecrãs de telemóvel que desliza para o lado       |

Todas as imagens abrem em tamanho grande quando se clica nelas.

## Acrescentar ou trocar imagens

1. Coloca a imagem na pasta do projecto (PNG, JPG ou WebP).
2. Em `index.html`, procura o nome do projecto e copia uma linha `<a class="thumb" …>`
   que já lá esteja. Muda o caminho no `href` e no `src` e escreve no `alt` o que o
   ecrã mostra.
3. Ecrãs de computador ficam melhor em 16:10 (por exemplo 1440×900); ecrãs de telemóvel
   vão para a faixa `phones`.

Mantém cada imagem abaixo de ~400 KB. Imagens grandes podem ser comprimidas em
squoosh.app. Por exemplo, `SIGDS_dashboard_mobile.png` (1,1 MB) foi reduzida para
`sigds-painel-e-app.webp` (96 KB), e o original só abre quando se amplia a imagem.

Para Java School e os materiais de computação ainda não há imagens. Cria uma pasta para
cada um e diz-me quando lá tiveres posto as imagens, ou segue os passos acima.
