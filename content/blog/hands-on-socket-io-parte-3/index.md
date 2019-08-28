---
title: "Hands-on - Socket.io Parte 3"
date: "2017-05-15"
thumbnail: "./HandsOnScocketIo3.png"
author: "Tulio Faria"
tags: ["Video-Tutorial"]
keywords: "hands-On"
---


Nesta terceira parte sobre comunicação em tempo-real com NodeJS e Socket.io, vamos começar com algo muito interessante: como podemos agrupar usuários para o envio de notificações. Também será abordado o conceito de rooms, uma maneira de segmentar os usuários. Vamos lá?!

```jsx {numberLines: true}
const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
app.get('/', (req, res)=>{
    res.sendFile(\_\_dirname+'/index.html')
})
io.on('connection', (socket)=>{
    console.log('New connection', socket.id)
    socket.on('msg', (msg)=>{
        console.log(msg)
        socket.broadcast.emit('msg', msg);
    })
    http.listen(3000, function(){
        console.log('listening on port 3000')
    })
}
```

Quando mandamos mensagens neste nosso código, estamos emitindo para todos os usuários. Se formos criar um jogo online, chat, temos um conceito de sala ou seção de um jogo. Agora vamos imaginar o seguinte: O usuário se conecta e a partir disso vamos pegar seu Socket, que é a representação do seu ID de usuário entre em uma sala utilizando um join, no exemplo utilizado 'contador'. O join vai dizer que o usuário quer entrar na sala, ou canal, e a partir desse momento o usuário vai receber qualquer mensagem que for disparada neste canal.

```jsx {numberLines: true}

io.on('connection', (socket)=>{
    console.log('New connection', socket.id)
    socket.on('msg', (msg)=>{
        console.log(msg)
        socket.broadcast.emit('msg', msg);
        socket.join('contador');
    })
```

Com isso podemos, por exemplo, contar quantas pessoas existem na sala e emitir uma mensagem com o número de pessoas nela de tempos em tempos.

Vamos executar um exemplo rápido onde criamos um contador, um set interval utilizando um io.to (que é uma instância do socket.io), selecionamos a sala a qual queremos mandar a mensagem e enviaremos a mensagem a cada 1 segundo.

```jsx {numberLines: true}
let.counter = 0
setInterval(() => io.to('contador'))
    io.to('contador').emit('msg', counter++)
}, 1000 )
```

Essa é uma das formas que temos de criar aplicações sem criar uma instância do socket.io para cada sala, o que seria muito trabalhoso. Além disso, ainda temos outro problema: existem situações em que temos que enviar a mensagem para todos, como no caso anterior, onde enviamos um broadcast para todos os usuários, mas também existem situações onde precisamos enviar para apenas um grupo de pessoas, então com isso podemos saber como vamos mediar, ou seja qual o alcance a mensagem terá.

Existem outras técnicas possíveis de aplicar no socket.io para ficar ainda mais rápido, como distribuir em mais máquinas por exemplo, mas isso já é um assunto avançado que vamos deixar para uma outra ocasião.

Confira o hands-on desta terceira parte também em vídeo:

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/dn2FujGp_xw" allowfullscreen></iframe>
</div>