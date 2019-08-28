---
title: "O que é o app.use no NodeJS/ExpressJS?"
date: "2016-12-28"
thumbnail: "./Nodejs.png"
author: "Tulio"
tags: ["Dicas"]
keywords: "node"
---

---
Você já reparou que praticamente qualquer módulo que plugamos no Express atualmente é feito através do uso do app.use? Mas afinal, o que é o app.use?

Ps: você pode ver este material em vídeo também no fim do post 🙂

A partir da versão 4 do Express, a extensibilidade é realizada por meio do uso de middlewares. Middleware é um bloco de código que é executado em todas as requisições ou nas que respeitam um certo padrão. E é respeitado a ordem de adição de cada um deles.

Para adicionarmos um middleware em nosso app (ou router):

```jsx {numberLines: true}
const express = require('express')
const app = express()

// middleware
app.use(function(req,res,next){
  console.log('middleware 1')
  next()
})

app.get('/', function (req, res) {
  console.log('requisição')
  res.send('Requisição!');
})

app.listen(3001, function () {
  console.log('Example app listening on port 3000!')
})
```

Alguns pontos importantes:

*   Este middleware será aplicado antes da execução de qualquer rota que vier depois dele;
*   Caso não adicionamos o next(), as rotas subsequentes nem serão executadas. Por isso, middleware é uma ótima forma de fazer controle de acesso a rotas.

Vamos analisar este outro exemplo:

```jsx {numberLines: true}
const express = require('express')
const app = express()

app.use(function(req,res,next){
  console.log('middleware 1')
  next()
})
app.use(function(req,res,next){
  console.log('middleware 2')
  next()
})
app.get('/', function (req, res) {
  console.log('requisição')
  res.send('Requisição!');
})

app.use(function(req,res,next){
  res.send('nada encontrado')
})
app.get('/url', function (req, res) {
  console.log('requisição')
  res.send('Requisição!');
})

app.listen(3001, function () {
  console.log('Example app listening on port 3000!')
})
```

Quando fizermos uma requisição para /, passaremos pelos 2 primeiros middlewares mas não pelo terceiro. O res.send (que envia a resposta ao browser) encerra a pilha de execução.

Já quando executamos qualquer outra url diferente de /, o terceiro middleware é executado. E como ele não tem next(), ele não deixa nada abaixo dele ser executado. Ou seja, neste exemplo, ele está ocultando a última rota.

**Aplicando um middleware a um conjunto de URLs específicas**

Veja o seguinte exemplo:

```jsx {numberLines: true}
const express = require('express')
const app = express()

app.use(function(req,res,next){
  console.log('middleware 1')
  next()
})
app.use(function(req,res,next){
  console.log('middleware 2')
  next()
})
app.get('/', function (req, res) {
  console.log('requisição')
  res.send('Requisição!');
})

app.use('/admin', function(req,res,next){
  console.log('checar se tem permissao')
  next()
})
app.get('/admin', function (req, res) {
  console.log('requisição admin')
  res.send('Requisição admin!');
})
app.get('/admin/teste', function (req, res) {
  console.log('requisição admin')
  res.send('Requisição admin!');
})

app.use(function(req,res,next){
  res.send('nada encontrado')
})
app.get('/url', function (req, res) {
  console.log('requisição')
  res.send('Requisição!');
})

app.listen(3001, function () {
  console.log('Example app listening on port 3000!')
})
```

Repare que adicionamos um middleware passando uma URL base. Nestes casos, apenas se a URL iniciar, no exemplo, por /admin, o middleware será executado. Isso também é muito útil para autenticação e autorização.

## Veja este material em vídeo

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/-d2DLqOHOGM" allowfullscreen></iframe>
</div>

Não deixe de comentar e até a próxima!