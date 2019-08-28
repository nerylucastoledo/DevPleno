---
title: "GH-Pages e como publicar seu site no Github"
date: "2017-10-06"
thumbnail: "GH-PAGES-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "dica"
---


Hoje quero mostrar para vocês como a gente pode postar o nosso site no GitHub utilizando o GH-Pages, sem precisar trocar ou fazer qualquer trâmite com o Git, tudo isso de uma maneira bastante fácil. Além disso, integrar isso em um WorkFlow ou em um processo junto no Node.

A primeira coisa que vou fazer  é criar um repositório chamado gh-pages-teste só para termos um lugar para testar. Vou deixar de forma pública:

![](3a0355e2-7bf9-4e69-934f-b1f8ba766c75.png)
![](acc06856-5b96-4e3b-b657-ac35205c3091.png)

Agora vamos no SHELL e dar um create-react-app apenas para criar uma aplicação em React, que vai ser nosso site. Lembrando que não é necessário ser em React, é apenas para mostrar como a gente poderia criar algo estático e hospedar dentro do GitHub.

Uma coisa bastante interessante: o Git permite que a gente mantenha um site estático, basta colocar os arquivos estáticos dentro de um branch chamado GH-Pages, feito isso ele já vai conseguir manter o nosso site.

Agora vou abrir o visual studio code e vamos trocar apenas o que está escrito no App.js, ao invés de Welcome, vou colocar GH-Pages DevPleno.

Agora um detalhe, se no próprio React dermos um yarn build ou npm run build, ele vai gerar os arquivos compilados dentro do diretório build que já tem nosso site todo, agora temos que colocar esses arquivos dentro do Branch do GH-Pages.

Feito isso vamos dar um git init no shell e adicionar os arquivos, lembrando que já iniciamos o repositório:

 ![](3666a984-c0f2-4f87-8b29-64ae21f78843.png) 
 
 Vamos também dar um git remote add origin e add o ssh que no meu caso é: 
 
 ![](6e5872fe-0494-4784-8ce6-79fc8cba6791.png) 
 
 Também vamos adicionar o upstream: 
 ![](0a87d57f-27b0-493b-b84b-be444a75c3d5.png) 
 
 Feito isso ele subiu, então temos nosso fonte do master. Agora temos que fazer uma forma de criar um brait novo para colocar o site lá. Para isso vamos fazer o seguinte:
```jsx {numberLines: true}
yarn add --dev gh-pages
```

Estamos instalando esse módulo que consegue fazer isso para nós. Depois de instalado vamos construir o diretório que eu quero colocar os arquivos:

```jsx {numberLines: true}
./node\_modules/.bin/gh-pages -d build
```

Ele já está se conectando ao github. Agora se irmos em branch, podemos visualizar o gh-pages, ao olharmos o conteúdo, é exatamente a pasta que foi definida: ![](f1a10ca7-82b1-47c9-8409-12031a9eab15.png) 


 Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](http://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!


 <div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/qItPnwBbj2s" allowfullscreen></iframe> </div>