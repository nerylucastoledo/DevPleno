---
title: "Fake API - Como testar seus projetos front-end"
date: "2017-08-04"
thumbnail: "FAKE-API-790x400 (1).png"
author: "Tulio Faria"
keywords: "dicas"
tags: ["Dicas", "Video-Tutorial"]
---


Hoje eu trago uma dica que eu utilizo bastante com a minha equipe que é quando temos ainda uma fonte de dados para fornecer para um front-end, por exemplo, quando estamos construindo um SPA (geralmente essa aplicação precisa consumir dados) e quando não temos uma API pronta, temos uma possibilidade para trabalhar sem depender do back-end.

Nós utilizamos algumas API’s falsas para trazer os dados, porque basicamente se a gente executar uma interface qualquer de um sistema, é possível baixar uma lista de clientes, pedidos etc. Se a aplicação for construída da maneira correta, vai ser só uma questão de trocar a camada que faz esse carregamento para refletir os dados reais da sua aplicação. Esse tipo de coisa é muito bom para acelerar o desenvolvimento e deixar um pouco mais flexível a parte do front-end.

Eu vou mostrar dois exemplos: primeiramente temos o Json Place Holder e também temos o SWAP, eu criei um arquivo index apenas para testarmos, a ideia é que ao invés de consultarmos os dados no nosso servidor que ainda não existe ou não está pronto, nós vamos consultar dados desses sites:

```jsx {numberLines: true}
<html>

<body>

<h1> testing API</h1>

<pre id="contents">

</pre>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

<script>

$(function(){

$.get('https://jsonplaceholder.typicode.com/posts', function(data){

$('#contents').html(JSON.stringfy(data))

})

})

</script>

</body>

</html>
```

Com isso ele já retorna todos os posts. Se olharmos em network, ele já foi lá, bateu no servidor deles e retornou a lista de posts. Eu posso trabalhar essa lista de posts por exemplo:  

```jsx {numberLines: true}
<html>

<body>

<h1> testing API</h1>

<div id="contents">

</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

<script>

$(function(){

$.get('https://jsonplaceholder.typicode.com/posts', function(data){

data.forEach(function(post){

$('#contents').append('<h1>'+post.title+'</h1>)

})

})

})

</script>

</body>

</html>
```

Lembrando que isso não é uma boa prática, mas como é apenas para intuito de aprendizado, então estou fazendo dessa forma. Perceba que ele tem um body também caso queira:

```jsx {numberLines: true}
$('#contents').append('<h2>'+post.title+'</h2>)

$('#contents').append('<div>'+post.body+'</div>)
```

Por exemplo, caso você esteja fazendo uma lista de pedidos ou clientes, pode utilizar esses dados para simular como a aplicação vai se comportar com os dados. Deve haver outras opções mas essas são duas que eu utilizo bastante, funciona muito bem e agiliza muito o desenvolvimento no front-end.

  Deixe seu cometário, curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!


 <div class="embed-responsive embed-responsive-16by9"> 
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/RDqevtTeN10" allowfullscreen></iframe>
  </div>