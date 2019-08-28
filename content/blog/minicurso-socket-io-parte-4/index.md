---
title: "Minicurso Socket.IO Parte 4 - Separando notificações por Rooms"
date: "2017-07-10"
thumbnail: "./socketpart4.png"
author: "Tulio Faria"
tags: ["Video-tutorial"]
keywords: "socket.io"
---

---
Nesta etapa do nosso minicurso de Socket.IO, vamos fazer as atualizações específicas de cada jogo. Primeiro vamos fazer o gráfico da torcida se movimentar. 

Dentro de match.ejs, vamos mudar para refletir realmente os valores da porcentagem, se olharmos as barras, vamos ver que na torcida está apenas uma barra fixa:

```jsx {numberLines: true}
<div class="bar-team-a" style="width: 80%></div>
<div class="bar-team-b" style="width: 20%></div>
```

Precisamos alterar esse valor, vamos em routes/index.js e quando pegarmos um jogo vamos calcular a porcentagem da torcida. Se pegarmos nosso banco, para cada time nós temos um **'supporters',** que é o número de pessoas que clicaram na torcida para aquele time em específico, então vamos pegar os dois times e calcular a porcentagem:

```jsx {numberLines: true}
const supportersA = match.\['team-a'\].supporters
const supportersB = match.\['team-b'\].supporters
const total = supportersA+supportersB
const porcentagem = {
    teamA: 50,
    teamB: 50
}
if(total > 0){
    porcentagem.teamA = ((supportersA / total) \* 100).toFixed(0)
    porcentagem.teamB = ((supportersB/ total) \* 100).toFixed(0)
}
match.porcentagem = porcentagem
```

Então temos como padrão 50/50, e se for maior que zero, o time A vai ser igual ao número de votos que o time A tem dividido pelo total e multiplicado por 100. Fizemos a mesma coisa para o time B. Por fim, enviamos o objeto porcentagem dentro de match. 

Voltando ao match.ejs, temos que colocar os valores lá dentro:

```jsx {numberLines: true}
<div class="bar-team-a" style="width: <%- JSON.stringfy(match.porcentagem.teamA) %>%"></div>
<div class="bar-team-b" style="width: <%- JSON.stringfy(match.porcentagem.teamB) %>%"></div>
```

Pronto, agora nossa barra está 50/50, quando eu clicar na torcida do time A, vou somar 1 e preciso retornar via Socket.IO a atualização na torcida para a barra. 

Nos botões das torcidas, vamos colocar um ID para cada:

```jsx {numberLines: true}
<div class"column w-col w-col-2"><a class="button w-button" id="na-torcida-a" href="#"> Na torcida </div>
<div class"column w-col w-col-2"><a class="button w-button" id="na-torcida-b" href="#"> Na torcida </div>
```

Agora precisamos fazer tudo via JavaScript lá em js/match.js, quando clicar no 'na torcida' do time A ou time B, ele precisa mandar o valor para a barra:  

```jsx {numberLines: true}
$("#na-torcida-a").click(function(){
    $.post("/match/")+MATCH\_INDEX+"/supporters", { team: 'a'}, function(data){})
    return false;
}
$("#na-torcida-a").click(function(){
    $.post("/match/")+MATCH\_INDEX+"/supporters", { team: 'b'}, function(data){})
    return false;
}
```

Ao clicar em "na torcida" ele envia, mas não recebe nada, pois não existe a rota ainda, então temos que ir no nosso routes/indexjs para criar essa rota logo acima de 'return router':

```jsx {numberLines: true}
router.post('/match/:id/supporters', function(req, res, next){
    const match = db.get('matches\['+req.params.id+'\]).value()
    if(req.body.team==='a'){
        const newValue =  match\['team-a'\].supporters+1
        db.set('matches\['+req.params.id+'\].team-a.supporters', newValue).write()
    }
    if(req.body.team==='b'){
        const newValue =  match\['team-b'\].supporters+1
        db.set('matches\['+req.params.id+'\].team-b.supporters', newValue).write()
    }
    res.send({ ok: true })
})
```

Perceba que pegamos o const match para saber o valor do jogo, em seguida fizemos um IF onde incrementamos o A ou B dependendo de qual botão for apertado. 

Agora eu preciso falar para todo mundo desse jogo que houve uma atualização nessa partida. Quando a gente cria um projeto no Socket.IO, tudo que se conecta, é conectado a uma sala geral. Vou explicar para ficar mais fácil. 

Temos duas formas de atualização, uma que vai para todos os usuários, ou seja, um geral, e também temos uma atualização que vai por jogo. 

Imagine que temos um servidor e cinco usuários, porém dois usuários estão no jogo um e três no jogo dois, eu poderia mandar essa informação para todos e separar no client, mas fazendo isso eu vou matar a performance na rede. Imagine mandar a atualização de um vídeo novo, se não estiver selecionando os usuários do jogo especifico, eu mandaria para três usuários de forma desnecessária e se pensarmos em escala perdemos muito recurso trafegando dado que não precisa. 

Também temos a situação onde temos que gerar atualização para todo mundo, nesse caso já estamos consumindo o recurso necessário. O importante é conseguir segmentar isso caso a gente queira. Um conceito importante no Socket.IO é o 'room', que são as salas que nós temos, toda vez que um usuário conecta, ele está na sala geral, então já tem um room que engloba todos os usuários que estão conectados ao Socket.IO naquele momento, depois conseguimos criar novas rooms, por exemplo match-1 para o jogo 1, e quando eu quiser mandar uma informação para os usuários dessa sala específica, fica mais simples e é isso que vamos fazer agora. Dentro de js/match.js, vamos fazer uma modificação no código para falar para o servidor em qual sala estamos conectado, isso vai ser feito quando formos chamar o construtor do Socket.IO do client, vai ser passado uma string vazia como url e depois vamos passar um query, que será um objeto com match e dentro dele um MATCH\_INDEX:

```jsx {numberLines: true}
$function(){
    const socket = io('', { query: { match: MATCH\_INDEX}});
    ...
}
```


Perceba que agora no route/index.js, quando o usuário conectar, vamos colocar ele na sala:

```jsx {numberLines: true}
io.on('connect', function(socket){
    if(socket.handshake.query.match){
        console.log('user connnected on match', socket.handshake.query.match)
        socket.join('match-'+ socket.handshake.query.match)
        } else {
        console.log('a new client connected');
    }
})
```

Agora nosso usuário está na sala especifica do jogo e também na geral. Caso queira que ele receba só a notificação da sala, eu consigo e também consigo que ele receba a atualização de geral como a atualização de placar, por exemplo. Lembrando que não difere em nada para o cliente, afinal ele já vai receber a informação já filtrada. 

Continuando em  routes/index.js, na hora de atualizar nossos supporters vamos pegar a nossa porcentagem e mandar via Socket.IO:

```jsx {numberLines: true}
router.post('/match/:id/supporters', function(req, res, next){
    const match = db.get('matches\['+req.params.id+'\]).value()
    if(req.body.team==='a'){
        const newValue =  match\['team-a'\].supporters+1
        db.set('matches\['+req.params.id+'\].team-a.supporters', newValue).write()
    }
    if(req.body.team==='b'){
        const newValue =  match\['team-b'\].supporters+1
        db.set('matches\['+req.params.id+'\].team-b.supporters', newValue).write()
    }
    const supportersA = match.\['team-a'\].supporters
    const supportersB = match.\['team-b'\].supporters
    const total = supportersA+supportersB
    const porcentagem = {
        teamA: 50,
        teamB: 50
    }
    if(total > 0){
        porcentagem.teamA = ((supportersA / total) \* 100).toFixed(0)
        porcentagem.teamB = ((supportersB/ total) \* 100).toFixed(0)
    }
    io.to('match-'+req.paramns.id).emit('supporters'), porcentagem)
    res.send({ ok: true })
})
```

Como vamos emitir uma atualização 'supporters', temos que ir no js/match.js e falar para o Socket que ele precisa esperar um evento chama supporters:

```jsx {numberLines: true}
socke.on('supporters', function(supporters){
    console.log(supporters)
})
```

Com isso sempre que clicar em "na torcida" ele já irá mostrar o novo valor de supporters, agora eu preciso aplicar isso nas barras, quando chegar esse evento em supporters eu preciso atualizar:

```jsx {numberLines: true}
socke.on('supporters', function(supporters){
    console.log(supporters)
    $(".bar-team-a").css('width', supporters.teamA+'%')
    $(".bar-team-b").css('width', supporters.teamB+'%')
})
```

Perceba que as atualizações de jogo 1 não chegam em jogo 2, isso significa que já estamos filtrando o que vai chegar em cada um dos jogos. 

Agora precisamos fazer a atualização dos vídeos e do lance a lance. 

Se abrir o match, você vai perceber que temos vários formulários, como atualizar placar, embaixo temos um formulário de novo lance e por último o vídeo. Vamos começar pelo vídeo, mas os dois são a mesma coisa, vamos fazer apenas porque o do vídeo é um pouquinho mais curto, afinal só temos um ID do vídeo no YouTube e ele já vai subir automaticamente. 

Vamos abrir o admin/match.ejs e vamos pegar o botão do vídeo:

```jsx {numberLines: true}
<div class="text-block-5">
    <h3>Novo Vídeo</h3>
    <input type="text" id="video-id" placeholder="ID Vídeo" />
    <a class="watch-game-btn" id="video-new">Enviar Vídeo</a>
</div>
```

Perceba que temos um vide-ID, que é nosso input, e um vídeo-new que é nosso botão, vamos agora para js/admin.js, lá no final vamos fazer o seguinte:

```jsx {numberLines: true}
$("#video-new").click(function(){
    alert(1)
})
```

Então quando clicar em video-new, demos um alert para saber se deu certo. Agora vamos fazer um post nesse vídeo

```jsx {numberLines: true}
$("#video-new").click(function(){
    $.post("/admin/match/"+MATCH\_INDEX+"/videos", { video: $("#video-id").val()}, function(data){})
})
```

Lembrando que temos que atualizar o  post anterior:

```jsx {numberLines: true}
$.post("/admin/match/"+MATCH\_INDEX+"/score", {
    scoreA, scoreB, notify
}, function(data){
    console.log(data)
}
```

Vamos voltar em admin/match.ejs e checar, afinal ele não tem definido ainda o MATCH\_INDEX:

```jsx {numberLines: true}
<script>const MATCH\_INDEX = "<%- id %>;</script>
```

Agora vamos fazer a rota que vai realmente salvar o vídeo, para isso precisamos ir em routes/admin.js e da mesma forma que fizemos uma rota para o supporters vamos fazer uma para vídeos:

```jsx {numberLines: true}
router.post('/match/:id/videos, function(req, res, next){
db.get('matches\['+req.params.id+'\].videos)
    .push(req.body.video).write()
    io.to('match-'+ req.params.id).emit('video', req.body.video)
    res.send(req.body)
})
```

Demos um push no setor de vídeos para adicionar um vídeo novo e depois emitimos que esse vídeo na sala match com o ID específico. Agora quando a gente adicionar e chegar via Socket.IO no jogo que queremos eu preciso atualizar esse vídeo na página, então eu vou voltar ao match.js que é nosso client e colocar mais um evento:

```jsx {numberLines: true}
socket.on('video', function(video){
    console.log(video)
})
```

Vou fazer algo um pouco diferente. Se pegarmos o match.js, vamos perceber que os vídeos têm um monte de coisas, não é igual a barra de supporters. Nos arquivos de apoio que foram enviados, você vai perceber que tem um outro item embaixo do vídeo que é um script, que é do tipo x-handlebars-templete. Eu fiz isso para que ao invés de ter que escrever tudo isso dentro de JavaScript, vou usar isso como template e vai ficar muito mais fácil de conseguir atualizar esse trecho de código porque vamos conseguir escrever esse trecho de html sem necessariamente escrever o html no JavaScript. 

Então vamos em js/match.js e lá em cima, antes de começar todos os códigos, vamos deixar em cach:

```jsx {numberLines: true}
const videoTemplete =  Handlebars.compile($("#video-templete).html())
```

Então estamos pegando o valor do vídeo em html e falando para o handlebars compilar. Perceba que no script que eu citei antes tem uma variável lá dentro, a gente vai conseguir adicionar o vídeo apenas trocando essa variável {{ video }} de lá de dentro. 

Quando chegar um vídeo, vou fazer o seguinte:

```jsx {numberLines: true}
socket.on('video', function(video){
    console.log(video)
    $("videos-wrapper").append(videoTemplete({ video }))
})
```

Com isso, não precisamos mais escrever html, apenas compilamos o templete. Agora precisamos fazer o mesmo para o lance a lance, e aproveitando que estamos em js/match.js, vamos fazer o seguinte:

```jsx {numberLines: true}
socket.on('bid'), function(bid){
    $("#bids-wrapper").prepend(bidTemplete)(bid))
})
```

Lembrando que temos que compilar o template lá em cima do código:

```jsx {numberLines: true}
const bidTemplete =  Handlebars.compile($("#bid-templete).html())
```

Vamos voltar em nosso js/admin.js e quando eu clicar em enviar lance que tem o ID bid-new, vou fazer um post para /admin/match/"+MATCH\_INDEX+"/videos

```jsx {numberLines: true}
$("#video-new").click(function(){
    $.post("/admin/match/"+MATCH\_INDEX+"/videos", { video: $("#video-id").val()}, function(data){})
})

$("bid-new").click(function(){
    $.post("/admin/match/"+MATCH\_INDEX+"/bids", {
        time: $("#bit-time").val(),
        half: $("#bid-half").val(),
        team: $("#bid-team").val(),
        subjct: $("bid-subject").val(),
        description: $("bid-description").val()
    }, function(data){
    })
})
```

Enviamos todos esses dados para lá o admin.js e criar a mesma  coisa que o router.post do vídeo com a diferença que temos que criar um objeto bid, mudar os nomes e enviar o bid via Socket.IO.

```jsx {numberLines: true}
router.post('/match/:id/bids, function(req, res, next){
    const bid = {
        time: req.body.time,
        half: req.body.half,
        team: req.body.team,
        subject: req.body.subject,
        description: req.body.description
    }
    db.get('matches\['+req.params.id+'\].bids)
    .push(bid).write()
    io.to('match-'+ req.params.id).emit('bid', bid)
    res.send(req.body)
})
```

Nossa interface já está atualizando em tempo real já segmentado pela sala. [Na próxima aula](https://www.devpleno.com/minicurso-socket-io-parte-5/), vamos ver como colocar esse projeto no ar, assim você pode utilizar esse projeto como portfólio para um potencial cliente, como o projeto com atualização em tempo real vai ficar e também o que fazer a partir daí. 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/UFKOeDqbhsc" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!