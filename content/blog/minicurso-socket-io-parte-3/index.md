---
title: "Minicurso Socket.IO - Parte 3 - Recebendo a notificação de Gol"
date: "2017-07-07"
thumbnail: "./socketpart3.png"
author: "Tulio Faria"
tags: ["Video-Tutorial", "Socket"]
keywords: "socket.io"
---

---
Nas [aulas anteriores do minicurso de Socket.IO](https://www.devpleno.com/minicurso-socket-io-parte-2/), já preparamos o ambiente, conectamos o websocket do client para o servidor e agora vamos começar a emitir realmente as notificações. 

A primeira coisa que vamos fazer é enviar o placar, vamos abrir o template match.ejs dentro de admin. A única coisa que temos de diferente é o time e os gols, nós vamos pegar esses dados e quando o usuário clicar em atualizar placar, iremos enviar isso ao servidor e ele vai disparar via socket.io para todos os clients. 

Primeiramente lá no final, após incluir o footer, vamos adicionar um script:

```jsx {numberLines: true}
<script src="/js/admin.js"></script>
```

Esse script ainda não existe, vamos criar agora no diretório public/js, primeiro temos que descobrir qual o ID do botão do formulário, que é update-score e quando o usuário clicar nesse botão, eu quero dar um alert apenas para saber se está rodando:

```jsx {numberLines: true}
$(function)(){
    $("#update-score").click(function(){
        alert(1)
        return false;
    })
});
```

Agora precisamos pegar os dois valores do jogo nos ID's score, e score-b, o notify-score e damos um console.log para saber se está tudo correto:

```jsx {numberLines: true}
$(function)(){
    $("#update-score").click(function(){
        const scoreA = $("#score-a").val();
        const scoreB = $("#score-b").val();
        const notify = $("#score-notify").val();
        console.log(scoreA, scoreB, notofy)
        return false;
    })
});
```

Perceba que o notify continuou com o value 1, isso acontece porque não está checando se esta checked ou não, então fazemos isso:

```jsx {numberLines: true}
const notify = $("#score-notify:checked").val();
```

Agora precisamos enviar isso para o express para ele distribuir via Socket.IO para todos os clients. Ao invés de mandar essa atualização via Socket.IO, eu posso mandar via API, salvar essa informação no banco e aí sim notificar _(eu prefiro usar sempre essa forma para eu garantir  que eu só envie essa notificação para todo mundo)._

```jsx {numberLines: true}
$(function)(){
    $("#update-score").click(function(){
        const scoreA = $("#score-a").val();
        const scoreB = $("#score-b").val();
        const notify = $("#score-notify").val();
        $.post("/admin/match/0/score", post {
            scoreA, scoreB, notify
        }, function(data){
            console.log(data)
        })
        return false;
    })
});
```

Ele não vai conseguir, pois não achou, mas se olharmos a conexão os dados já estão sendo enviados, então temos que receber esses dados lá. Vamos voltar em routes/admin.js e criar novo router:

```jsx {numberLines: true}
router.post('/match/:id/score', function(req, res){
    res.send(req.body)
})
```

Fizemos isso para termos certeza que os dados estão chegando aqui, então vamos parar o servidor e a resposta do score vai ser exatamente o que eu enviei para ele, agora podemos processar esses dados. Vamos setar o valor no placar do banco de dados. Uma das formas que temos de fazer isso no low-db é pegando o índice do jogo e setar lá dentro falando qual o valor vou enviar para ele. Essa informação vai para todos os jogos, então eu devo emitir para todos que estão conectados no Socket.IO:

```jsx {numberLines: true}
router.post('/match/:id/score', function(req, res){
    db.set('matches\['+req.params.id+'\].team-a.score',
    parseInt(req.body.scoreA)).write()
    db.set('matches\['+req.params.id+'\].team-b.score',
    parseInt(req.body.scoreB)).write()
    io.emit('score', {
        match: req.params.id,
        scoreA: req.body.scoreA,
        scoreB: req.body.scoreB,
        notify: req.body.notify || 0
    })
    res.send(req.body)
})
```

Se o notify não existir, ele não vai ser enviado e eu mando zero para não notificar meus usuários. Agora está funcionando perfeitamente, se startarmos o servidor e dermos um f5, vai ser mostrado o valor enviado. Como eu tenho que dar f5 toda hora, tenho que receber no meu client a atualização que o jogo foi alterado, então vamos abrir na pasta js o arquivo match.js:

```jsx {numberLines: true}
$(function)(){
    const socket = io();
    socket.on('connect', function(){
        console.log('conected');
    })
    socket.on('score', function(score){
        console.log('score', score)
    })
})
```

Perceba que agora, ao atualizar o placar, o usuário recebe o objeto score, então precisamos checar se o jogo está na barra de cima e se é o jogo atual para atualizar na barra principal. Para isso vamos em match.ejs e na lista de jogo que fica na parte de cima, já temos um forEach que vai renderizar todos os jogos e temos para cada jogo um 'em' que tem o nome da class com uma referência para o jogo como um todo. 

Vamos copiar esse trecho de código em negrito:

```jsx {numberLines: true}
<em class="match-<%- index %>-b">
```

Agora vamos voltar para nosso match do client em js/match.js e fazer o seguinte:

```jsx {numberLines: true}
$(function)(){
    const socket = io();
    socket.on('connect', function(){
        console.log('conected');
    })
    socket.on('score', function(score){
        console.log('score', score)
        //na lista de jogos
        $(". match-"+score.match+"-a").html(score.scoreA)
        $(". match-"+score.match+"-b").html(score.scoreb)
    })
})
```

Perceba que em A nós escrevemos o valor de score.scoreA e o mesmo no B. Agora temos que atualizar a parte de baixo também, então nós temos o score-team-A e o valor do score por exemplo, porém como eu vou saber se esse jogo é o que eu estou atualmente? Em match.ejs, lá no final, antes do include do footer, vamos fazer um script que define uma constante:

```jsx {numberLines: true}
<script>
const MATCH\_INDEX = "<%- id %>";
</script>
```

Quando faço isso, o match.index consegue acessar esse valor, então dentro do nosso match conseguimos checar se estamos em nosso jogo atual:

```jsx {numberLines: true}
socket.on('score', function(score){
    console.log('score', score)
    //na lista de jogos
    $(". match-"+score.match+"-a").html(score.scoreA)
    $(". match-"+score.match+"-b").html(score.scoreb)
    //  atualizar o jogo
    if(MATCH\_INDEX == score.match){
    $(".score-team-a").html(score.scoreA);
    $(".score-team-b").html(score.scoreB);
    if(score.notify=='1'){
        console.log('notificar')
    }
    }
})
```

Se o jogo é o que recebemos a notificação, nós notificamos esse gol. Em view/match, lá no final, temos uma div que é uma class goooolllll com um áudio, então se estivermos com o notificado ligado vamos dar um play nesse áudio, voltamos no código anterior e adicionamos o seguinte:

```jsx {numberLines: true}
if(score.notify=='1'){
    console.log('notificar')
    $('#audio-gol')\[0\].currentTime=0;
    $('audio-gol')\[0\].play();
}
```

Por que fizemos o notificar sim ou não? É possível notificar um gol e caso ele seja anulado, você tira o notificar e tira o placar sem alarmar todos. Podemos também fazer uma animação com aquele div que está ali

```jsx {numberLines: true}
if(score.notify=='1'){
    console.log('notificar')
    $('#audio-gol')\[0\].currentTime=0;
    $('audio-gol')\[0\].play();
    $('.goooolllll')addClass('goooolllll-anim')
    $('.goooolllll-text')addClass('goooolllll-text-anim')
    $('.goooolllll-text')on('transitionend webkitTransitionEnd oTransitionEnd', function(){
        $('.goooolllll')removeClass('goooolllll-anim')
        $('.goooolllll-text')removeClass('goooolllll-text-anim')
    })
}
```

Para testar temos que notificar em uma outra aba. Ao clicar, aparece duas classes com essa animação, quando a animação terminar nós removemos essa animação. 

Na próxima aula vamos colocar a comunicação do lance a lance e dos vídeos, além de colocar o projeto em um servidor no digitalhost para conseguirmos acessar externamente. 

Confira o passo a passo em vídeo: 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ZJqDWCfxrVw" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!