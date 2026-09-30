# Portfólio · Tomás Mathe

Site estático (HTML, CSS e JS puro), sem dependências e sem custos de alojamento.

## Estrutura

- `index.html`: página única (projectos, tecnologias, sobre, contacto)
- `css/style.css`: estilos, tema claro/escuro
- `js/main.js`: alternador de tema e tratamento de capturas em falta
- `assets/img/`: capturas de ecrã dos projectos (`<projecto>-01.png`, `<projecto>-02.png`, ...)

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
