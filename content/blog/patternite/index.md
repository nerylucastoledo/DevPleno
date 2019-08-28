---
title: "Entenda o que é Patternite"
date: "2017-11-10"
thumbnail: "./Patternite.png"
author: Tulio Faria
tags: ["Video-Tutorial"]
keywords: "javascript"
---

---
Hoje eu gostaria de falar sobre um item que é bastante impeditivo quando as pessoas que já tem experiência tentam vir para o JavaScript. Eu chamava isso de Patternite, isso nada mais é que a vontade de aplicar Pattern em todos os lugares. 

O que é um Pattern ou Design Pattern? 

Ele é um padrão de projeto. Todo mundo que vem de outras linguagens, provavelmente já com alguns padrões de projeto na mente, como por exemplo Singleton, MVC, Factory, etc, eu sugiro que antes de começar a classificar classes entender o que está acontecendo no código e aí sim aplicar um design pattern muito melhor. 

Eu vou fazer um exemplo na prática para ficar mais simples. Primeiramente vou instalar o EJS que é uma engine de template baseada em JavaScript. Além disso, vou instalar o Express, que é um micro-framework:

```jsx {numberLines: true}
yarn add ejs express
```

Agora vou criar um arquivo novo chamado index.js e dentro dele farei o seguinte:

```jsx {numberLines: true}
const express = require('express')
const app = express()
app.get('/', (req, res) =>{
    res.send('olá poo2js')
})
app.listen(3000, (err) => console.log(err, 'server'))
```

O detalhe que quero realçar aqui é que não criei nem um controller, nenhum view nem nada no sentido. A vantagem disso é que eu tive meu primeiro small win. 

Quando formos aprender uma linguagem nova acho que essa é a parte mais importante para aprender cada vez mais. Agora a segunda small win é a seguinte, é muito ruim construir o código dessa forma então se fizermos o seguinte:

```jsx {numberLines: true}
const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.get('/', (req, res) =>{
    res.render('home')
})
app.listen(3000, (err) => console.log(err, 'server'))
```

Dessa forma conseguimos utilizar templates e não precisamos criar a resposta falando o conteúdo. Ao rodar, perceba que não conseguimos ver o home dentro do diretório views. 

Precisamos criar um diretório Views e dentro dele o home.ejs, ai sim, lá dentro, fazer o nosso html:

```jsx {numberLines: true}
<html>
    <head>
        <tittle>POO2JS</tittle>
    </head>
    <body>
        <h1>Olá</h1>
    </body>
</html>
```

Isso são coisas que naturalmente eu iria perceber que iria acontecer. Caso a gente queira criar mais páginas, começa a perceber que existe um certo padrão. Se quiséssemos saber como a minha aplicação está realmente funcionando, é muito melhor saber qual a URL e para onde ele manda. 

Para não ficar uma bagunça, poderíamos por exemplo, criar um arquivo routes e colocar nossas rotas lá dentro:

```jsx {numberLines: true}
const app = require('express').Router()
app.get('/', (req, res) =>{
    res.render('home')
})
app.get('/page1', (req, res) =>{
    res.render('page1')
})
app.get('/page2', (req, res) =>{
    res.render('page2')
})
module.exports = app
```

Agora, no nosso código inicial, podemos fazer o seguinte:

```jsx {numberLines: true}
const express = require('express')
const app = express()
app.set('view engine', 'ejs')
const routes = require('./routes')
app.use(routes)
app.listen(3000, (err) => console.log(err, 'server'))
```

Perceba que eu estou classificando as coisas de uma maneira que faz sentido para mim. A gente começou simplesmente com o arquivo index. 

Então o meu conselho é que se comece construindo tudo em um arquivo apenas e, com o tempo, você percebe que as coisas conseguem se agrupar. 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/v0c_02nrMZI" allowfullscreen></iframe>
</div>

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](http://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!