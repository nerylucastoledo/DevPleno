---
title: "High-order Functions"
date: "017-04-07"
thumbnail: "./HighrOrder.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---


A dica de hoje é sobre High-order Functions, que são funções que recebem ou retornam funções. Nós temos alguns tipos diferentes, como por exemplo vetor, map e forEach, elas são high-order functions porque podemos passar um método que ele vai iterar dando o console.log.

```jsx {numberLines: true}
const vetor = \[1,2,3\]

vetor.forEach(item => console.log(item))
```

Perceba que estamos passando uma função para essa outra função que é uma high-order function, a função que passamos para ela chamamos de firt order function. Com ela conseguimos construir nossas próprias funções high-order. Por exemplo, caso queiramos fazer uma função mathOperator, que pega dois termos e retorna os números, e uma função que faz a operação que eu quero:

```jsx {numberLines: true}

function mathOrder(num1, num2, op){

return op(num1, num2)

}

console.log(mathOperator(1, 2, (num1, num2) => num1+num2))

```

Então eu quis que essa high-order function chame o num1 e num2 e retorne a soma das duas. 

Não necessariamente as high-order functions precisam ser puras, a única regra que temos é que ela recebe ou retorna uma função. No exemplo que fizemos, o op naquele momento é uma função. É importante lembrar que em JavaScript funções podem  ser colocadas dentro de variáveis, por isso é possível criar high-order functions, uma coisa que não é tão simples de se fazer em Java por exemplo. 

Lembrando que eu utilizei arrow function para facilitar mas eu poderia também fazer a operação:

```jsx {numberLines: true}
function mathOrder(num1, num2, op){
    return op(num1, num2)
}
function operadorMult(num1, num2){
    return num1\*num2
}
console.log(mathOperator(1, 2, (num1, num2) => num1+num2))
console.log(mathOperator(1, 2, operadorMult))
```

High-order functions é um conceito muito importante para podermos injetar comportamento em uma função, esse é o grande ponto delas. Podemos compor funções que são muito mais simples, e isso é muito importante não só em programação funcional mas principalmente para simplificar as funções.

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/yST5SzsFXZI" allowfullscreen></iframe>
</div>