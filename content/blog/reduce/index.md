---
title: "High-order Function - Reduce"
date: "2017-06-30"
thumbnail: "./Reduce.png"
author: Tulio Faria
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---

---
Hoje vamos continuar falando sobre high order functions, principalmente as que estão disponíveis nos vetores em JavaScript. Vamos falar mais especificamente do Reduce. É muito comum utilizarmos o [Map](https://www.devpleno.com/map/) junto com o Reduce, ele existe em algumas outras formas como no mongoDB que é o map.reduce, uma técnica bastante utilizada para concatenar dados de forma distribuída. 

Suponhamos que nossa ideia é ter um carrinho de compras e somar esse carrinho, para isso podemos utilizar o Reduce e passamos uma função que vai ser responsável por reduzir esse vetor em um valor só. 

Como fazer isso? 

Primeiramente podemos fazer com uma Arrow Function:

```jsx {numberLines: true}
const carrinho = \[
    {id: 1, preco:2, qtd: 2}
    {id: 1, preco:3, qtd: 1}
\]
carrinho.reduce()
const total = carrinho
.reduce((soma, item) => item.preco + soma, 0)
console.log(total)
```

Perceba que dentro de item e soma retornamos como queremos somar esse valor e ela começa a soma com 0. Podemos fazer de uma forma mais interessante. 

Você se lembra que o MAP transforma de um valor para outro? Então poderíamos fazer o seguinte:

```jsx {numberLines: true}
const carrinho = \[
    {id: 1, preco:2, qtd: 2}
    {id: 1, preco:3, qtd: 1}
\]
carrinho.reduce()
const total = carrinho
.map(item => item.preço \* item.qtd)
.reduce((soma, subtotal) => subtotal + soma, 0)
console.log(total)
```

Com isso, o Map vai transformar o item em um subtotal e meu Reduce vai somar esses valores transformados. Perceba que são funções bem simples, então é bem tranquilo de testarmos essas funções. 

Poderíamos, por exemplo, colocar o item em uma const e passar apenas o subtotal:

```jsx {numberLines: true}
const subtotal = item => item.preço \* item.qtd
const total = carrinho
.map(subtotal)
.reduce((soma, subtotal) => subtotal + soma, 0)
console.log(total)
```

Essa é uma forma bem fácil de se fazer em teste unitários, utilizando bastante funções puras no Map, Reduce, etc. Isso ajuda muito a aumentar a testabilidade do código e consequentemente a qualidade dele. 

Confira o vídeo: 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/PKnpSaAQdd4" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!