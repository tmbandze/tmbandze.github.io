# Portfólio · Tomás Mathe

Site estático (HTML, CSS e JS puro), sem custos de alojamento. A fonte (Instrument Sans)
vem do Google Fonts; o resto não tem dependências.

## Estrutura

- `index.html`: página única (trabalho, percurso, sobre, ferramentas, contacto)
- `css/style.css`: estilos, tema claro/escuro
- `js/main.js`: alternador de tema e esconde fotos ou capturas que ainda não existem
- `assets/fotos/`: as tuas fotos (perfil e galeria), ver `assets/fotos/LEIA-ME.md`
- `assets/projectos/`: imagens dos projectos, ver `assets/projectos/LEIA-ME.md`

## Ver localmente

```bash
python -m http.server 8000
# abrir http://localhost:8000
```

## Publicar (GitHub Pages)

Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.

Para o endereço ficar `https://tmbandze.github.io`, o repositório tem de se chamar
exactamente `tmbandze.github.io`. Com outro nome, o site fica em
`https://tmbandze.github.io/<nome-do-repositório>/` (os caminhos deste site são relativos,
por isso funciona nos dois casos).
