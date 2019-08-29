---
title: "Hands-on - Socket.io Parte 2"
date: "2017-05-12"
thumbnail: "./Socket.IO2.png"
author: Tulio Faria
tags: ["Video-Tutorial", "Socket"]
keywords: "Hands-On"
---

---
Continuando nossa série sobre Socket.io, vamos aprofundar um pouco mais no assunto. Lembrando nosso código do lado server:  

```jsx
const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
app.get('/', (req, res)=>{
    res.sendFile(\_\_dirname+'/index.html')
})
io.on('connection', (socket)=>{
    console.log('New connection', socket.id)
})
http.listen(3000, function(){
    console.log('listening on port 3000')
})
```

Simplesmente estávamos tratando a conexão, então se o cliente conectou, isso nos era mostrado, além do ID da conexão. _(Lembrando que cada Socket criado tem um ID diferente. Mesmo que o cliente abra duas abas com links da mesma sessão, elas são tratadas separadamente)._ 

Vamos abrir o cliente e adicionar o Jquery _(apenas procure no Google jquery CDN, copiar a url e adicionar em source) e e_m seguida adicionar um socket.on. Com isso, sabemos do lado do cliente que foi conectado.

```jsx
<html>

    <body>
        <h1>Socket.io<h1>
        <script src="/socket.io/socket.io.js"></script>
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"> </script>
        <div id="msgs"></div>
        <script>
            const socket = io()
            socket.on('connect', function(){
                $("msgs").append('connected with id: '+socket.id+'<br>'
            )}
        </script>
    </body>

</html>
```

**E como isso será notificado?** 

Perceba que criamos uma DIV msgs para podermos colocar as mensagens dentro a medida que recebemos. Quando o cliente conectar nosso div msgs, irá chamar o append e mostrar a conexão com o ID utilizado. Assim, podemos, por exemplo, identificar o usuário baseado nesta conexão. 
  
**O que podemos fazer?** 

Quando o cliente se conectar, podemos mandar uma mensagem para o servidor, por exemplo, que o ID especifico está conectado. Adicionando no lado do cliente um socket emit dentro da function e mandamos escrever a msg gerado do lado servidor.

```jsx
<script>
    const socket = io()
    socket.on('connect', function(){
        $("msgs").append('connected with id: '+socket.id+'<br>'
        socket.emit('msg', 'I am connected '+socket.id);
    )}
    socket.on('msg', function(msg){
        $(#msgs")append(msg+' <br>')
    }
</script>
```
E do lado servidor adicionando um gerenciador de evento para que, quando ele receber uma mensagem,possa só escrever por enquanto (apenas modificamos esta linha de código).

```jsx
io.on('connection', (socket)=>{
    console.log('New connection', socket.id)
}
socket.on('msg', (msg)=>{
    console.log(msg)
    socket.broadcast.emit('msg', socket.id+' connected');
})
```
Se reiniciarmos o servidor e gerarmos uma nova conexão do lado cliente, irá aparecer a mensagem de "I am connected + ID" do lado servidor, já que o Socket representa o cliente que está conectado. Depois com o broadcast estamos avisando todos que o ID específico foi conectado.

**Não aconteceu nada. Está dando erro?** 

No lado cliente, abra uma nova aba, copie o link da sessão e rode, então verá que ele irá se conectar, mostrar um novo id, e na sessão anterior vai ser emitida uma mensagem que aquele ID foi conectado, como queríamos, afinal estávamos enviando para todos quando algum novo ID se conectasse.   

**Por que isso aconteceu?** 

Isso acontece porque o broadcast não manda a mensagem para o próprio Socket. Isso é feito para não permitir que não receba mensagens duplicadas. 

Perceba que com isso já é possível criar um chat. Precisamos apenas adicionar ao lado cliente um input type text e criar um function keyDown, em seguida gerar um if dizendo que se o keyCode for igual ao número que representa o enter (no caso 13), vamos disparar a mensagem com o valor dentro do text.

```jsx
<html>

    <body>
        <h1>Socket.io<h1>
        <script src="/socket.io/socket.io.js"></script>
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"> </script>
        <div id="msgs"></div>
        <input type="text" />
        <script>
            const socket = io()
            socket.on('connect', function(){
                $("msgs").append('connected with id: '+socket.id+'<br>'
                socket.emit('msg', 'I am connected '+socket.id);
            )}
            socket.on('msg', function(msg){
                $(#msgs")append(msg+' <br>')
            }
            $(function(){
                $("imput").keyDown(function(key){
                    if(key.keyCode===13){
                        socket.emit('msg', $(this).val());
                    }
                })
            })
        </script>
    </body>

</html>
```

Já do lado servidor, temos que pedir para enviar a mensagem do campo texto ao invés do socket.id, substituindo:

```jsx
socket.broadcast.emit('msg', socket.id+' connected');
```

Por:

```jsx
socket.broadcast.emit('msg', msg);
```

Confira todos os detalhes no vídeo: 

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/07qqDZrZ--8" allowfullscreen></iframe>
</div>


Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Ah, fique à vontade para deixar suas dúvidas e sugestões nos comentários. Abraço!