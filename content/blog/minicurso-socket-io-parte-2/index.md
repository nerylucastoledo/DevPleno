---
title: "Minicurso Socket.IO - Parte 02 - Adicionando o Socket.IO"
date: "2017-07-06"
thumbnail: "./socketpart2.png"
author: "Tulio Faria"
tags: ["Video-tutorial"]
keywords: "socket.io"
---

---
Na [primeira aula do minicurso de Sockt.IO](https://www.devpleno.com/minicurso-socket-io-parte-1/), fizemos a listagem dos jogos puxando do banco de dados baseado em json e quando clicamos conseguimos visualizar os dados dos jogos. Agora vamos adicionar o Socket.IO realmente a essa interface, configurando a parte do client e do server. Vamos começar pela parte do servidor, primeiramente vamos adicionar o Socket.IO:

```jsx {numberLines: true}
yarn add socket.io
```

Depois que ele adicionar, vou abrir o app.js do express e fazer algumas alterações, a primeira delas é adicionar um app.io e dar um require no Socket.IO já chamando o construtor dele. Como não temos o servidor, deixamos por enquanto, como se fosse uma promise que vamos criar o servidor depois.

```jsx {numberLines: true}
app.io = require('socket.io')()
```

Feito isso, eu vou alterar o www para poder anexar ao Socket.IO. Abrindo o www, perceba que temos um server e uma instancia daquele app, vamos adicionar à instancia desse app a instancia do Socket.IO passando o server que definimos

```jsx {numberLines: true}
var server = http.createServer(app);
app.io.attach(server);
```

Agora ele vai conseguir responder nesse server. De alguma forma, precisamos conectar as coisas, então vamos no partials que já tem algo pronto:

```jsx {numberLines: true}
<script src="/socket.io/socket.io.js"></script>
```

Perceba que eu já deixei a inclusão do /socket.io, que é o JavaScript que faz a parte client do Socket.IO. Vamos olhar na rede se o JavaScript está realmente sendo carregado corretamente. Ao clicar nele, perceba que ele já mostra o font do Socket.IO: 

Esta tudo correto, estamos com o Socket.IO conectado ao express. Agora temos que fazer o client conectar no server, vamos criar mais um JavaScript e incluir diretamente no app. Em public/js vamos criar um arquivo novo chamado match.js, dentro dele vai ter o um jQuery para simplificarmos um pouco e dentro dele terá um alert:

```jsx {numberLines: true}
$(function)(){
    alert(1) 
})
```

Já em match.ejs vamos adicionar o JavaScript lá em baixo, depois de todo o footer:

```jsx {numberLines: true}
<% include partials/footer %>
<script src="/js/match.js"></script>
```

Ao atualizar ele vai mostrar o alert, isso significa que está funcionando perfeitamente. Então agora  vamos começar a conectar o front-end ao back-end. Voltando ao match.js, vamos retirar o alert e adicionar o seguinte:

```jsx {numberLines: true}
$(function)(){
    const socket = io();
})
```

Ao fazer isso, se formos ao WS, perceba que ele já tentou fazer uma conexão: Como eu tenho certeza se isso está ok? Vamos fazer o seguinte teste:

```jsx {numberLines: true}
$(function)(){
    const socket = io();
    socket.on('connect', function(){
        console.log('conected');
    })
})
```

Para vermos se ele está conectado ao servidor, voltamos em index.js e precisamos checar se ele se conectou. O problema é que preciso pegar o IO que está no arquivo anterior, o DB também está estranho porque precisamos ter um admin para criar e gerenciar esses jogos e ele vai utilizar o mesmo banco, então estamos deixando esse index muito dependente, precisamos fazer algo que a gente possa injetar o DB e o IO ali dentro. 

Como fazemos isso? 

Poderíamos em app.js ao invés de deixar o index em cima, vamos passar um pouco para baixo. Antes de importar, vamos injetar a dependência que temos do IO para ele: 

Se olharmos esse index, ele exporta um router, vamos fazer ele exportar também um router, mas de uma maneira diferente, vamos criar uma função indexRouter e colocar as dependências:

```jsx {numberLines: true}
function indexRouter(dependecies){
}
```

E lá em baixo ao invés de exportar um router vamos exportar o indexRouter:

```jsx {numberLines: true}
module.exports = indexRouter
```

Voltando a função que acabamos de criar, vamos tirar essa chave e colocar todas as dependencias da pagina dentro:

```jsx {numberLines: true}
    function indexRouter(dependecies){
        //definindo o bd
        const low = require('lowdb')
        const db = low(\_\_dirname+'/../data/db.json')
        const defaultData = require('../data/default-data.json')
        db.defaults(defaultData).write()
        ....
    });
    return router;
}
```

Então tiramos todo o código que estava dentro do index, criamos uma função indexRouter, fizemos todo o código rodar normal e ao fim retornamos esse router, passando a referencia dessa função para quem chamar ele, exatamente a mesma coisa que o construtor do Socket.IO faz. 

Agora temos acesso a essas dependências:

```jsx {numberLines: true}
function indexRouter(dependecies){
    console.log(dependencies)
    //definindo o bd
    ...
}
```

Voltando ao app.js vamos fazer o seguinte:

```jsx {numberLines: true}
var index = require('./routes/index')({io: app.io});
```

O require irá retornar uma função, não a execução dessa função e sim a função em si, já o io:app.io fala para executar esse função e eu passo um parâmetro para ele, que são as dependências que eu quero injetar nesse router. 

Ao executar o código, perceba que agora temos uma instancia de IO dentro do indexRouter. Voltando ao index, vamos trocar o BD de lugar também, recortamos ele do index.js e vamos colar em app.js. Como o app está na raiz, eu preciso concertar os caminhos:

```jsx {numberLines: true}
//definindo o bd
const low = require('lowdb')
const db = low(\_\_dirname+'/data/db.json')
const defaultData = require('./data/default-data.json')
db.defaults(defaultData).write()
```

Ele vai quebrar o código, mas fique tranquilo, era para isso acontecer mesmo. Agora vamos enviar o banco para o index.js também

```jsx {numberLines: true}
var index = require('./routes/index')({io: app.io, db});
```

Agora vocês podem perceber que ao startar o projeto temos a dependência do DB. Como construímos um projeto todo dependendo de DB, eu posso apagar o console.log que colocamos dentro da função indexRouter e colocar o seguinte:

```jsx {numberLines: true}
const { db, io } = dependencies
```

Isso é um destructor assignment, ele cria variáveis novas a partir de propriedades das dependências. Ainda dentro da função, abaixo do const que acabamos de criar, vamos fazer o seguinte:

```jsx {numberLines: true}
io.on('connect', function(socket){
    console.log('a new client conected');
});
```

Uma coisa interessante do Socket.IO é que ele já tenta a conexão automaticamente. 

O último objetivo desta etapa é criar uma rota administrativa para que a gente consiga gerenciar esses jogos. Primeiramente vou copiar o index.js do routes e colar no mesmo diretório, em seguida vamos renomear a cópia para admin.js e no admin vou tirar esse conect que acabamos de criar. Em seguida, vamos trocar o nome da função de indexRouter para adminRouter, lembrando que ao final do código temos que exportar adminRouter também. 

Em app.js vamos vamos importar o admin nele:

```jsx {numberLines: true}
var admin = require('./routes/admin')({io: app.io, bd});
```

em seguida vamos linkar ele na aplicação:

```jsx {numberLines: true}
app.use('/admin', admin);
```

Lembrando que estou apenas colocando abaixo do original, que é index. Esse use no express fala que a partir de '/' você vai rotear para index, e quando eu falo '/admin' ele vai prefixa isso, então terei /admin/ e /admin/match com o ide do jogo. 

Apenas por curiosidade, o app.use é conhecido como middleware. Esse middleware só vai checar as rotas se são administrativas ou não se ela começar com /admin. Nós não temos o administrativo ainda, ele é um clone do administrador, vamos fazer algumas alterações. Dentro do diretório views, vamos criar uma pasta nova chamada admin. Se voltar aos arquivos de apoio, você pode perceber que dentro da pasta view tem uma pasta admin com dois layouts, copie esses dois e cole na pasta do projeto que acabamos de criar. 

Dentro desses dois itens, vamos olhar primeiro o index, ele é igual o index anterior com a diferença que estamos importando um header diferente. Já dentro do admin, quando formos dar um render, temos que colocar admin/:

```jsx {numberLines: true}
router.get('/, function(req, res, next){
    const matches = db.get('matches').value()
    res.render('admin/index, { matches});
});

router.get('/match', function(req, res, next){
    const matches = db.get('matches').value()
    const match = db.get('matches\['+req.params.id+'\]').value()
    res.render('admin/match', { matches, match, id: req.param.id });
});
```

Fazemos isso para ele saber que o view não vai ser um view comum, ele vai ser do admin. As únicas diferenças que temos no index é a cor do header, troquei o nome do botão para gerenciar e foi adicionado um botão "gerar jogo", que é onde vai criar um jogo aleatório apenas para não precisarmos adicionar a lista de jogadores, etc. Não fizemos esse código ainda, vamos fazer na próxima aula. 

Confira a aula em vídeo: 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/QX-0mjQOV2U" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!