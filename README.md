# Portfólio · Luiz

Portfólio pessoal bilíngue (PT/EN) feito com HTML, CSS e JavaScript puros, sem build nem dependências.

## Estrutura

```
index.html      estrutura e conteúdo
css/style.css   estilos (tokens de cor e tipografia no :root)
js/main.js      troca de idioma PT/EN e botões de copiar
```

## Rodar localmente

Abra o `index.html` no navegador, ou sirva a pasta:

```bash
npx serve .
```

## Publicar

Site estático: funciona no GitHub Pages (Settings → Pages → branch `main`, pasta `/root`) e na Vercel (importar o repositório, sem configuração).

## Editar o conteúdo

Cada texto aparece em dois idiomas:

```html
<span class="pt" lang="pt-BR">Texto em português</span>
<span class="en" lang="en">Text in English</span>
```
