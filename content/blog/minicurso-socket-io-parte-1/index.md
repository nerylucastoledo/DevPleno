---
title: "Minicurso Socket.IO - Parte 01 - Começando o projeto"
date: "2017-07-05"
thumbnail: "./socketpart1.png"
author: "Tulio Faria"
ttags: ["Video-Tutorial", "Socket"]
keywords: "socket.io"
---

---
Essa é a primeira parte do nosso minicurso de Socket.IO. Nesta etapa, vamos começar o projeto e criar as primeiras páginas para dar o suporte à aplicação. 

A primeira coisa que temos que fazer é garantir que o express generator está instalado.

```jsx {numberLines: true}
npm install -g express-generator
```

Esse express generator instala um gerador de aplicações em expressJS que é o que vamos utilizar. Escrevendo **express -h** ele mostra o nosso help, com isso consigo criar um projeto do zero já falando as especificidades que eu quero para ele. Por exemplo, vamos fazer o seguinte:

```jsx {numberLines: true}
express placar-online --ejs
```

Então colocamos o express, o nome do diretório que queremos e --ejs porque queremos utilizá-lo como engine para template. Nos arquivos de apoio (se você ainda não recebeu, clique [AQUI](https://www.devpleno.com/mini-curso-socket-io/)) já estão em EJS, mas nada te impede usar o --pug ou --handlesbar por exemplo. 

Instalamos depois o yarn:

```jsx {numberLines: true}
yarn
```

Ao dar enter, ele já cria todos nossos arquivos, agora precisamos entrar no diretório do placar-online e damos um start no yarn:

```jsx {numberLines: true}
yarn start
```

Para acessarmos a aplicação, entramos em **localhost:3000**. Nela temos nossa aplicação. 

Vamos abrir esse diretório no Visual Code, perceba que o express generator já criou uma pasta bin, code\_modules, publc, routes e uma pasta views. Dentro desse views, teremos nossos templates, no routes teremos nossas rotas e em public nossa pasta pública, ou seja, o que conseguimos acessar publicamente nesse servidor. 

Para começar, vamos deletar da pasta **public** os diretórios **images, javascript e stylesheets** e, na pasta **routes,** deletar o arquivo **users.js**. Lembrando que estamos deletando apenas o que não precisamos. 

Agora vamos abrir o **app.js** e remover o users, já que apagamos o diretório:

```jsx {numberLines: true}
\-->   var users = require('./routes/users');
-->  app.use('./users', users);
```

Agora vamos aos arquivos de apoio. Você vai receber um zip com os diretórios **data**, **public**, **views** e um arquivo **funções.js**. Dentro da pasta public, temos o css, imagens, o JavaScript e os áudios. Na views, temos os templates que vamos utilizar e a pasta data, que é o BD que eu preparei para podermos utilizar e consumir esses dados. 

Dentro de public, vamos copiar tudo que está lá e colocar na pasta public do projeto. O data iremos copiar a pasta inteira e colocar na pasta raiz do projeto, e views iremos copiar um a um assim que for necessário. 

**Como foi gerado isso tudo pelo express generator?** 

O app.js é a base da nossa aplicação e segue uma boa prática do express, que é criar a aplicação nesse independente da parte que starta o servidor, que na nossa aplicação é em bin/www onde ele importa o app, define a porta e etc. Ele faz isso de uma maneira bem legal porque se quisermos criar testes, conseguimos apenas importando o app e rodamos em cima do app sem precisar realmente ouvir uma porta. Esse app.js também importa o routes que é nosso arquivo de rotas, ele diz o seguinte: quando você entrar no '/' vai renderizar o index. Aí ele irá em views e abrirá o index.ejs. 

Como ele sabe que o index está em views? 

Se voltarmos em app.js ele definiu que é um ejs que está dentro de views:

```jsx {numberLines: true}
app.set('views', path.join(\_\_dirname, 'views'));
app.set('view engine', 'ejs');
```

Se dermos um render, ele irá pegar o index. Vamos fazer um teste para ver se é isso mesmo, vamos mudar o Welcome e trocar por Olá para saber se estamos realmente alterando ele:

```jsx {numberLines: true}
<p>Olá <%= title %></p>
```

Agora, dentro desse index, iremos fazer uma lista de jogos, mais especificamente quais estão acontecendo nesse momento. Para fazermos isso, a primeira coisa que temos que fazer é utilizar um banco de dados baseado em json que se chama **lowdb**, então vamos dar um yarn nele:

```jsx {numberLines: true}
yarn add lowdb
```

Esse lowdb vai criar um banco novo onde iremos puxar os jogos  de lá:

```jsx {numberLines: true}
var express = require('express');
var router = express.Router();
//definindo o bd
const low  = require('lowdb')
const db = low(\_\_dirname+'/../data/db.json')
const defaultData = require('../data/default-data.json')
db.defaults(defaultData).write()

/\*Get home page. \*/
router.get('/', function(req, res, next){
    res.render('index', {title: 'Express'});
});
module.exports = router;
```

Estamos carregando o defaultData que tem um exemplo de jogo, com ele vamos definir para o db que o padrão dele, se não tiver nada, será o defaultData. 

Perceba que o db.json está vazio, mas ao darmos um yarn start ele será preenchido com as informações do defaultData. 

Nosso próximo passo é carregar todos os jogos e enviar para nossa rota, com isso conseguimos exibir esses jogos na tela. Vamos criar um const matches. Vamos pegar do nosso db o value de matches e mandar ele para nosso view:

```jsx {numberLines: true}
/\*Get home page. \*/
router.get('/', function(req, res, next){
    const matches = db.get('matches').value()
    res.render('index', { matches });
});
module.exports = router;
```

Agora, dentro de index.js, vamos remover o title de todas as linhas de código e adicionar matches dentro do <p>:

```jsx {numberLines: true}
<p>Olá <%= matches %></p>
```

Perceba que ele irá retornar dois objetos, ou seja, serão dois jogos. Agora vamos colocar o JSON.stringfy para sabermos o que está chegando realmente:

```jsx {numberLines: true}
<p>Olá <%= JSON.stringfy(matches) %></p>
```

Então o jogo está funcionando perfeitamente. 

Como já temos nossa lista de jogos, vamos trazer nosso primeiro template. Nos arquivos de apoio, dentro de views, vou copiar o index.ejs e jogar para dentro da pasta views do projeto, substituindo o existente. 

Perceba que existe um parcial, que é uma técnica muito legal que ao invés de ficarmos fazendo e repetindo o cabeçalho, criamos alguns elementos que só importamos e ele já resolve esses arquivos. Então, também dentro dos arquivos de apoio, vamos copiar a pasta partials e adicionar nos arquivos de apoio. Por exemplo dentro de partials/head temos apenas os links do css e etc, isso deixa mais fácil pois vamos importar em todos os arquivos. 

Ao atualizar, já temos dois jogos funcionando. 

**Como funciona esse template?** 

Nós definimos que vamos renderizar o index enviando matches para lá, quando vamos no template existe um matches e utilizamos tudo em javaScript normal, então estamos usando um forEach para fazer essa iteração, ou seja, estou repetindo esse div várias vezes (esse div nada mais é que o template que eu criei com algumas classes). 

Se voltarmos ao bd, a gente percebe que existe um team-a, team-b e todos os dados dentro dele, no index puxamos esse time a e time b:

```jsx {numberLines: true}
<div class="text-block-5">
<%- match\['team-a'\].name %> x
<%- match\['team-b'\].name %>
</div>
```

Um ponto importante é que estamos utilizando o db mapeado por índices, ou seja, pegamos o jogo na primeira posição e que depois nós poderíamos fazer com um banco de dados de verdade, linkar para uma chave primária. No link, vamos passar o indice com o parâmetro para ele saber qual o jogo que vai ter que renderizar. 

Se clicarmos em acompanhar agora, ele vai dar um erro, porque não encontrou, obviamente, já que não construímos essa página ainda. 

Agora vamos em index.js, dentro de routes, falar que queremos responder quando o entramos em match e tiver um ID nesse jogos e também vamos pegar o jogo em especifico:

```jsx {numberLines: true}
router.get('/match', function(req, res, next){
    const matches =  db.get('matches').value()
    const match = db.get('matches\['+req.params.id+'\]').value()
    res.render('match', { matches, match, id: req.param.id });
});
```

Ao final, renderizamos o view match e mandamos uma lista para la, matches, match e id. 

Ele não vai encontrar o view match, então vamos novamente nos arquivos de apoio, pegamos o arquivo match.ejs dentro do diretório views e colamos dentro de views do projeto. Agora já temos os dados sendo jogados na tela. 

**Como ele está colocando esses dados na tela?** 

Dentro do view/match.ejs importamos o head, header como de praxe, e a parte de cima temos um forEach novamente com todos os jogos em que eu repito um div, onde mostro a abreviação do campeonato que ele está, o time a,  b e score desses times. 

Ao continuar o template, temos as informações do jogo em match-info, por exemplo qual campeonato, rodada, nome do time, o escudo dele (e repare que já estamos redirecionando ele para public). Temos também a lista de suportes, que é a torcida, nós ainda não fizemos essa parte, vamos fazer mais a frente. Uma lista de vídeos que pegamos do db, fazemos um embed do youtube e o lance a lance. Uma coisa que você pode ter percebido é que esse lance a lance está ao contrário, geralmente os lances entram em cima e vão empurrando os lances mais antigos para baixo. Para ordenar esses lances, vamos em index.ejs, importar o lodash e importar o próprio match e ordenar pelo half e o tempo em minutos de forma descendente:

```jsx {numberLines: true}
const \_ = require('lodash')
router.get('/match', function(req, res, next){
    const matches =  db.get('matches').value()
    const match = db.get('matches\['+req.params.id+'\]').value()
    match.bids = \_.orderBy(match.bids,\['half', 'time'\]), \['desc' , 'desc'\])
    res.render('match', { matches, match, id: req.param.id });
});
```

Na próxima aula, iremos começar a colocar o socket.IO nessa interface, ligando ele nas duas pontas, tanto no client quanto no servidor para conseguirmos distribuir essas atualizações em tempo real. Baixe os arquivos e apoio e vai ver que está tranquilo de entender, assim não vamos perder tanto tempo com layout e vamos direto para o que interessa, esse layout é apenas para caso você queira demonstrar um projeto, pois ele já fica com cara mais profissional. 

Confira a aula em vídeo: 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Yquf8dNe89w" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!