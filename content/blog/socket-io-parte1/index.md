---
title: "Comunicação em tempo-real com Node e Socket.io"
date: "2017-05-11"
thumbnail: "./Socket.IO1.png"
author: Tulio Faria
tags: ["Video-Tutorial"]
keywords: "hands-On"
---

---
**O que é Socket.io e para que vamos precisar dele?** 

Socket.io é uma implementação em node para web socket, ou seja, uma forma de fazer comunicação em tempo real, mas mais importante que isso é sua possibilidade de fallBack. O Socket.io foi lançado há mais ou menos cinco anos e mesmo assim ele ainda continua sendo a melhor opção para comunicação em tempo real quando utilizamos o node. 

Outra coisa muito importante é o fato de poder integrá-lo a outros Stacks, como em uma aplicação feita em PHP, Java, etc. E o mais interessante é que é possível fazer com autenticação e tudo mais. 

O Socket.io também é muito fácil de escalar, como é em tempo real, o chamamos de io intensive, ou seja, acontece muito io quando estamos utilizando o mesmo. 

_Exemplo:_ Por algum motivo seus clientes que estão se conectando ao Socket.io não têm suporte ao web Socket, então ele vai tentar outras maneiras (não tão performáticas como AJAX). Nesta situação, o Node se destaca de outras tecnologias, pois ele suporta mais usuários. 

Para começarmos o projeto, devemos instalar os módulos Socket.io e o Express :

```jsx
yarn add socket.io
yarn add express
```

Feito isso, vamos criar um arquivo (vou chamá-lo de server.js), que será nosso servidor express. Nele vamos criar a instância do socket.io e passar o http.

```jsx
const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
```

Vamos fazer um teste para ver se esta tudo funcionando corretamente:

```jsx
http.listen(3000, function(){
    console.log('listening on port 3000')
})
```

Com o Server respondendo corretamente, precisamos pelo menos ter um arquivo HTML para conectar ao secket.io, então vamos mandar um arquivo index apenas para ter algo para mandar ao navegador.

```jsx
const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
app.get('/', (req, res)=>{
    res.sendFile(\_\_dirname+'/index.html')
})
```

Mas não temos o index.html, certo? Então vamos criar um novo arquivo index.html, dentro dele você vai perceber algo interessante do socket.io, ele é um módulo que já vem com a parte server e a parte client, com isso é possível fazer um src chamando o socket.io. Irá funcionar porque já injetamos no http para disponibilizar na aplicação. Em seguida vamos instanciar o módulo

```jsx
<html>
    <body>
        <h1>Socket.io<h1>
        <script src="/socket.io/socket.io.js"></script>
        <script>
            const socket = io()
        </script>
    </body>
</html>
```

Se olharmos no inspect do browser e irmos em network, podemos perceber que ele já começou uma conexão e websocket. Assim, podemos saber, por exemplo, se algum cliente conectou apenas adicionando no server.js um callback para quando ele se conectar:

```jsx
const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
app.get('/', (req, res)=>{
    res.sendFile(\_\_dirname+'/index.html')
})
io.on('connection', (socket)=>{
    console.log('New connection', socket)
})
```

**O que aconteceu?** 

O Socket.io tem o socket que é uma instância da conexão que criamos para o usuário, com isso podemos mandar uma mensagem de volta, logar o usuário por exemplo. Basicamente se eu mandar algo para este socket, esse algo irá somente para este cliente. Mas temos opções no socket.io de mandar só para um cliente ou vários. 

Perceba que o módulo já descobriu qual a melhor forma de se conectar, no caso websocket, o interessante é que, se caso a conexão pare ao voltar, ele irá se reconectar sozinho, então não precisamos nos preocupar se o usuário está conectado ou não, pois tratamos na interface a medida que novas conexões vão surgindo. A única preocupação que temos é de checar se o estado da conexão que o usuário deixou continua valendo. 

Cada socket que temos é gerado um ID da conexão para cada usuário, vamos escrever o ID para saber qual é:

```jsx
io.on('connection', (socket)=>{
    console.log('New connection', socket.id)
})
```

**Conclusão** 

Já deu para termos uma ideia do que é o Socket.io, e este é um assunto que rende muito conteúdo, pois é muito extenso, temos vários desafios para fazê-lo funcionar bem, mas agora já temos uma base de como ele funciona. 

Em breve tem a parte 2 deste hands-on. 

Enquanto isso confira o também o vídeo dessa primeira parte: 

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/qZUDuBcbJ9A" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Ah, fique à vontade para deixar suas dúvidas e sugestões nos comentários. Abraço!