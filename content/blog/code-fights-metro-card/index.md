---
title: "code fights - Metro Card"
thumbnail: "metro-card-790x400.png"
tags: ["Dicas", "Video-Tutorial"]
date: "2017-11-16"
author: "Tulio Faria"
keywords: "algoritmos"
---


Hoje vamos resolver mais um problema que está disponível no Code Fights. Esse problema é chamado de metro card. Pode parecer simples, mas tem algumas coisas bastante interessantes de ter na cabeça.

O que é o problema do metro card?

Nós temos uma função que você vai informar qual o último número de dias. Vamos supor que eu tenho um cartão de metro com 30 dias, eu utilizei os 30 dias, o vetor vai me retornar as possibilidades de próxima recarga baseado em como os meses são organizados.

```js {numberLines: true}
function metroCard(lastNumberOfDays){

}
```

Por exemplo, se colocarmos 28 no lastNumberOfDays, teríamos que retornar 31, que é o próximo mês que podemos recarregar. Minha ideia inicial foi montar um vetor com os meses do ano:

```js {numberLines: true}
function metroCard(lastNumberOfDays){

const months = [

31, //jan

28, // fev

31, //mar

30, //apr

31, //may

30, //jun

31, //jul

31, //aug

30, //set

31, //oct

30, //nov

31 //dec

]

}
```

Outra coisa bastante importante é ficar ligado no que o problema pede como saída, especificamente nesse problema, temos que retornar um vetor ordenado crescente.

Agora podemos fazer o seguinte: vamos guardar todos os dias que a gente tem posterior a esse valor informado. Por exemplo, se eu informei 28, a única possibilidade que tenho é 31:

```js {numberLines: true}
const days = {

months.forEach((elem, index) =>{

if(elem === lastNumberOfDays){

console.log(months[index+1])

}

})

}



metroCard(28)

metroCard(30)
```
Percebam que o mês vai ser retornado como undefined. Nós precisamos de mais um ajuste, precisamos somar que o índice precisa fazer o resto por %12. Sempre que usamos o %, ele volta para zero e pega o restante, por exemplo 4 %12 retorna 4.

```js {numberLines: true}
const days = {

months.forEach((elem, index) =>{

if(elem === lastNumberOfDays){

console.log(months[(index+1)%12]

}

})

}
```

Agora podemos criar um key utilizando o número do dia e retornar o nosso object com as keys. Além disso, essa chave trás strings, precisamos retornar inteiros para garantir que o sort vai ordenar ele como queríamos:

```js {numberLines: true}
const days = {

months.forEach((elem, index) =>{

if(elem === lastNumberOfDays){

days[months[(index+1)%12] = 1

}

})

return Object

.keys(days)

.map( item => parseInt(item))

.sort()

}

```

Ele é uma estrutura de dados muito comum. Além disso, vimos a estratégia de como resolver a parte cíclica. Quanto mais olharmos abordagens diferentes, mais preparados vamos estar para resolver esses problemas.

  Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades.  Abraço!

<div class="embed-responsive embed-responsive-16by9">
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/d8K0xTGb014" allowfullscreen></iframe>
  </div>