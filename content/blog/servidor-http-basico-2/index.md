---
title: "Servidor HTTP Básico - NodeJS Primeiros Passos"
date: "2017-05-15"
thumbnail: "./ServidorHttp2.png"
author: Tulio Faria
tags: ["Video-Tutorial"]
keywords: "nodejs"
---

---
Na série NodeJS Primeiros Passos, você poderá os conceitos básicos de Javascript e NodeJS e, assim, poder colocar a mão na massa. Neste primeiro post, confira como criar um Servidor HTTP básico. 

Primeira coisa que temos que fazer é acessar o [www.nodejs.org](http://www.nodejs.org) e fazer o download _(não vou entrar nessa parte, pois depende da plataforma que você está utilizando, mas de modo geral é bem simples de se fazer)_. 

Você precisa conseguir pelo menos escrever no Shell (prompt de comando) o seguinte:

```jsx
npm -v
```

Com isso, conseguimos ver a versão do node package mananger. 

E se colocarmos:

```jsx
node -v
```

Aparecerá a versão do node que estamos usando. Se aparecer normalmente a versão deles, significa que estão no path do seu sistema e você conseguirá executá-los diretamente. Se ele não estiver no path do sistema, recomendo que coloque a pasta de instalação do Node no path. 

Como Node é JavaScript, no sublime vou criar um arquivo novo e importar um módulo do node chamado http, ele permite que manipulemos requisições http. Também vamos criar um servidor com uma função request e response, assim, tudo que entrar no meu servidor, vou devolver o texto "devpleno.com":

```jsx
var http: require('http');
http.createServer(function(req, res){
    res.end('DevPleno.com');
});
```

Uma coisa interessante de se notar é que esta função é uma função anonima e também é executada de forma assíncrona. Isso quer dizer que o servidor fica 'ouvindo' uma porta, mas só irá executar a função quando um evento acontecer, ou seja, quando um cliente fizer uma requisição para o servidor. Qual a vantagem disso? Chamamos isso de não blocking, ou seja, o servidor não fica esperando chegar uma requisição. Quando um evento de requisição chegar, ele irá executar o trecho do código. Depois de criado o servidor, precisamos ouvir a porta _(a porta diferencia que vai receber a solicitação dentro da máquina)._

```jsx
var http: require('http');
http.createServer(function(req, res){
    res.end('DevPleno.com');
}).listen(3000);
```

Vamos salvá-lo como server.js, abrir o prompt de comando e executar o seguinte comando:

```jsx
Node server.js
```

Isso vai 'Startar' nosso servidor. Quando abrirmos o browser e escrevermos localhost:3000, recebemos a mensagem DevPleno.com, assim, é possível ver que o servidor está rodando normalmente. O bom disso é que não precisamos importar bibliotecas de terceiros, já que o HTTP é um módulo que faz parte do core do node. O que podemos fazer a mais? Podemos, por exemplo, importar um módulo que lida com FileSystem, criar uma var contents que receberá um readFileSync _(lembrando que não é muito bom usar o Sync, mas estou fazendo apenas com intuíto de demonstração)._

```jsx
var http: require('http');
var fs = require('fs');
var contents = fs.readFileSync('contents.html')
http.createServer(function(req, res){
    res.end(contents);
}).listen(3000);
```

Em seguida, criar um HTML com o nome contents

```jsx
<html>
    <body>
    <h1>DevPleno.com</h1>
    </body>
<html>
```

Aperte Ctrl C para parar o servidor. Vamos reiniciar o servidor com  node server.js, recarregar o browser e ele irá requisitar o contents.html do jeito que criamos. 

Claro que para criarmos uma aplicação mais avançada, iremos utilizar alguns módulos de terceiros para que esse processo todo fique um pouco mais fácil e mais robusto, mas essa é só uma parte introdutória.  

Confira o passo a passo no vídeo: 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/5L5-EoJbMfY" allowfullscreen></iframe>
</div>

Fique à vontade para deixar suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!