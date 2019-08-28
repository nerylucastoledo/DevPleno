---
title: "Hands-on: Streams Parte 03 - Duplex"
date: "2017-05-10T12:50:51.000Z"
thumbnail: "./StreamPart3.png"
author: Tulio Faria
tags: ["Video-Tutorial"]
keywords: "Hands-On"
---
---

Já falamos sobre Readable e Writable Streams, agora falaremos sobre o tipo Duplex. Ele nos permite tanto enviar quanto receber dados. Para testarmos este Stream, vamos utilizar a classe net.Socket, que implementa um Socket, o que permite fazer uma comunicação em rede no Node. Vale lembrar que o Socket é muito comum em outras linguagens como Java.   

**O que o Socket faz?** 

Basicamente um Socket abre uma porta na rede e fica 'ouvindo' essa porta, possibilitando que um cliente a acesse e feche uma conexão. Lembrando que Socket é um tipo Duplex, pois é possível ler e escrever dados deste Stream. 

**Vamos ao exemplo:** 

Se a última posição do process.argv for igual a server, teremos que rodar duas versões: a server, que irá ouvir e receber este Sockt, e uma versão client, que irá se conectar a este Socket.

```jsx
const net = require('net');
const readLine = require('readLine')
if(process.argv\[ process.argv.length-1\] === 'server'){
//server
    const server =  net.creatServer((socket) =>{
    socket.on('data'), (data) => {
        socket.write(data)
        console.log('Receive from client ' + data)
    })
})
server.listen(1337, '127.0.0.1')

}else{
    //client
    const rl = readLine.createInterface({
        input: process.stdin,
        output:process.stdout
    })
    const client = new.net.Socket()
    client.connect(1337, '127.0.0.1', () => {
        console.log('Connected');
        cliente.write('Hello, server!');
        rl.addListener('Line', (line) => client.write(line))
    })
client.on('data', (data) => console.log('Received: ' + data))
client.on('close', ()=> console.log('Connection clesed'))
```

Quando criamos o servidor, iremos criar um callBack que retorna o Socket, ou seja, sempre que houver uma conexão nova ele irá chamar a arrow function que terá as duas funções do socket, socket.on que é equivalente ao readable Stream e o socket.write, que é equivalente ao writable Stream.   

**O que acontece neste código?**   

**No Server:** 

Quando for executado a arrow function, ele irá criar uma instância para comunicarmos com o cliente. Quando este cliente enviar algum dado, será feito um 'ping-pong', ou seja, vamos mandar de volta esses dados para o cliente. O servidor fica ouvindo uma porta, no exemplo acima, a porta 1337. 

Uma curiosidade é que isto segue a mesma ideia quando criamos uma aplicação com xpress, pois ele ouve uma porta e faz o tratamento, a única diferença é que 'por baixo dos panos' para não precisarmos ficar preocupados em criar socket. 

**No cliente:** 

Nele iremos criar um novo Socket e conectar a porta do servidor (no exemplo 1337). Quando conectamos a esta porta será executado o callBack, que devolverá as respostas de conexão (console.log('Connected');). Toda vez que tivermos uma linha nova no console será escrita no Stream. 

Ressaltando que o Client também é um Stream Duplex, afinal, nele executamos um.write, que é writable, e o client.on data que é readable. 

Por fim, temos um on data. Isso faz com que toda vez que recebermos dados esteja escrito na tela. 

**E como isso vai funcionar?** 

Para fazermos este código rodar, temos que executar o node socket.js server para startar o servidor. Em uma outra janela iremos rodar o client com node socket.js.   

**Conclusão** 

Isso é legal porque podemos gerenciar mais de um socket.js client e funcionaria perfeitamente, uma vez que na aplicação, sempre que receber uma conexão nova, ele irá executar o socket com uma instancia nova. 

Este exemplo de socket é muito usado para mostrar multi thread em outras linguagens como java. No caso do Node, ele é mono thread, o que torna sua performance muito melhor.   Confira o Hands-on no vídeo: 

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/kYoVIIqEFZQ" allowfullscreen></iframe>
</div>

Fique à vontade para deixar suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!