---
title: "Sleep em Generator"
date: "2017-06-28"
thumbnail: "./SleepGenerator.png"
author: Tulio Faria
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---

---
Hoje quero mostrar como podemos recriar o famoso sleep, que temos em algumas linguagens que não são assíncronas como JAVA e  PHP, quando queremos usar dentro de um Generator function. Eu cheguei nessa função porque queria fazer  testes de algumas operações e naquele dado momento que queria rodar a Generator, queria pausar um pouco entre elas  para ver um detalhe acontecer a fim de depurar o código. Então acabei refletindo como poderia criar esse sleep para conseguir fazer esse teste. 

Para fazer o teste vamos utilizar o CO, que é uma forma de rodarmos uma Generator Function. Lembrando que uma Generator Function é uma função que pode ser pausada e retornada posteriormente, com isso podemos escrever uma função síncrona, porém continua tendo os benefícios da função assíncrona. 

Vamos lá, a primeira coisa que vou fazer é importar o CO.

```jsx
const co = require ('co')
```

Se fossemos escrever realmente uma Generator Function iriamos fazer o seguinte:

```jsx
co(function\*(){
    console.log('Step 1')
    sleep(1000)
    console.log('Step 2')
})
```

Em JavaScript não temos sleep, obviamente, porque não faz muito sentido porque temos o setTimeout. 

Como transformamos o setTimeout em um sleep? 

Primeiro vamos criar uma função chamada sleep e para transformar esse setTimeOut em um sleep. Eu teria que transformá-la em uma [promise](https://www.devpleno.com/promises/) e para essa promise passar uma função que vai receber 2 parâmetros, o resolve e o reject, ou seja, dois callBacks:

```jsx
function sleep(time){
    return new Promise((resolve, reject) =>
    setTimeout(resolve, time)
})
```

Com isso, quando chamar o sleep eu consigo utilizar o then para saber que ele rodou depois de um segundo:

```jsx
sleep(1000).then(()=> console.log('Depois de um segundo'))
```

Mas queremos utilizar dentro do CO porque quero essa 'cara' de assíncrona, então ao invés de utilizar apenas o sleep, vou utilizar o yield sleep, pausando entre os steps.

```jsx
co(function\*(){
    console.log('Step 1')
    yield sleep(1000)
    console.log('Step 2')
})
```

Com isso temo um sleep mais próximo que tínhamos por exemplo em C, Pascal ou até o PHP. 

Confira os passos em vídeo: 

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/xmVWF1RU3n4" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!