--- 
title: "Animação basica em CSS3"
date: "2017-05-22"
tags: ["Video-Tutorial", "Algoritmos", "Dicas"]
thumbnail: "CSS3-790x400.png"
author: "Tulio Faria"
keywords: "dicas"
---

Recentemente eu estava planejando e desenvolvendo a interface para o curso de Socket.io, e como ela terá algumas animações à medida em que os dados chegam em tempo real, resolvi voltar a estudar CSS3, algo que há tempos não utilizo.

 Às vezes ficamos focando em um navegador mais novo e esquecemos que algumas coisas podemos utilizar sem o Javascript, apenas com CSS. Vou criar uma pequena página HTML, um pouco de CSS e Javascript apenas para poder controlar a class:

```js {numberLines: true}
.hello{
.border:2px solid grey;
transition: all 3s;
}
.hello-active{
.border:2px solid red;
.background: grey;
}
< body>
< div class="hello">
Olá!
</ div>
< script>
const node = document.querySelector('.hello')
node.addEventListener('click', function(){
this.classList.add('hello-active');
})
```

O que o transition faz? Ele fala basicamente assim, "qualquer transição que você fizer envolvendo essa classe vai ter uma animação de X segundos". Apenas a propriedade transition já é possível fazer muita coisa.

 No caso acima, ao clicar, a borda grey muda para red e o background grey em uma transição que dura 3 segundos. Também podemos fazer uma animação 'ao contrário', fazendo ele voltar ao estado original adicionando ao script a seguinte linha:


```js {numberLines: true}
< script>
const node = document.querySelector('.hello')
node.addEventListener('click', function(){
this.classList.add('hello-active');
})
node.addEventLiestener('transitionend', function(){
this.classList.remove('hello-active');
})
</ script>
```

O evento transitionend faz com que, ao terminar o tempo determinado, remova do classList a class. Isso faz com que o CSS volte ao seu estado inicial em uma transição de 'vai e volta'. Podemos também adicionar animação em hover: 

```js {numberLines: true}
.hello.hover{
background: green;
}
```

Como grande parte dos navegadores suporta CSS3 atualmente, conseguimos fazer tudo com ele, pelo menos para alguns tipos de aplicativos. Tudo isso utilizando apenas o transition, sem precisar utilizar Jquery. Confira os detalhes no vídeo: 

<div class="embed-responsive embed-responsive-16by9">
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/9jB1oDP5NmA" allowfullscreen></iframe>
  </div>

  Não perca nenhuma atualização. Cadastre seu e-mail, curta o [DevPleno no Facebook](https://www.facebook.com) e [inscreva-se no canal](https://goo.gl/VBU2PR). Deixe suas dúvidas e sugestões nos comentários.