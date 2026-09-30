# Fotos

| Ficheiro             | Onde aparece                                   |
|----------------------|------------------------------------------------|
| `perfil-recorte.jpg` | Topo da página (recorte 4:5 de `perfil.jpg`)   |
| `tomas_2.jpg`        | Galeria da secção "Sobre", 1.ª foto            |
| `tomas_3.jpg`        | Galeria da secção "Sobre", 2.ª foto            |
| `tomas_4.jpg`        | Galeria da secção "Sobre", 3.ª foto            |

`perfil.jpg` é o original e não é usado directamente no site.

Para trocar uma foto:

1. Coloca a nova foto nesta pasta.
2. Em `index.html`, procura pelo nome da foto antiga e muda o `src` e o `alt`
   (o `alt` descreve o que se vê na foto).
3. Se a pessoa ficar mal centrada, ajusta o `object-position` da foto
   (por exemplo `50% 30%`: horizontal e vertical).

As fotos aparecem a preto e branco e ganham cor quando se passa o rato.
Mantém cada ficheiro abaixo de ~300 KB (podes comprimir em squoosh.app).
As imagens dos projectos ficam noutra pasta: `assets/projectos/`.
