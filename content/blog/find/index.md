---
title: "High-order Function Find"
date: "2017-08-02"
thumbnail: "FIND-1-790x400.png"
author: "Tulio Faria"
keywords: "dicas"
tags: ["Dicas", "Video-Tutorial"]
---


Já falamos sobre [map](https://www.devpleno.com/map/), [reduce](https://www.devpleno.com/reduce/) e [filter](http://www.devpleno.com/filter), hoje vou mostrar uma [high-order function](https://www.devpleno.com/high-order-functions/) bem parecida chamada de find. Vamos aproveitar o exemplo do reduce:

```jsx {numberLines: true}
const carrinho = \[

{id: 1, preco:2, qtd: 2, estoque:10 }

{id: 1, preco:3, qtd: 5, estoque:2 }

\]



const subtotal = item => item.preço \* item.qtd

const filtroEmEstoque = item => item.estoque \* item.qtd

const soma = (soma, subtotal) => subtotal + soma



const total = carrinho

.filter(filtroEmEstoque)

.map(subtotal)

.reduce(soma, 0)

const produtoId1 = item => item.id ===  1

const produtoId1Retorno = carrinho.find(produtoId1)

console.log(produtoId1Retorno)
```

Perceba que pedimos o produto com o id 1, mandamos procurar com o find no carrinho e buscamos esse ID 1. Uma coisa interessante e comum é fazermos como fizemos em cima, até meu filtro ser uma variável e apenas fazermos o retorno. Agora imaginem que a gente queira parametrizar ainda mais, um conceito bem legal é a seguinte:

```jsx {numberLines: true}
const idEquals = (id, item) => item.id ===  id

const  idEquals1 = carrinho.find(produtoId1)

console.log(produtoId1Retorno)

Perceba que eu fiz uma arrow function e nela estou passando o ID com o item que estou iterando. Quando for criar mais filtros, posso usar essa função de idEquals e fixar quem eu quero nesse primeiro parâmetro.

const idEquals = (id, item) => item.id ===  id

const idEquals1 = idEquals.bind(null, 1)

const  idEquals1 = carrinho.find(produtoId1)

console.log(produtoId1Retorno)

Essa nova função que eu criei sempre terá um do ID fixo, então quando eu fizer:

console.log(carrinho.find(idEquals1)
```

Eu já sei que estou travando o ID em um, criando uma nova função a partir da função que eu já tinha. A vantagem disso é que vamos saindo de funções mais genéricas para funções mais específicas que também são fáceis de testar, deixando o código cada vez mais legível. Óbvio que esse exemplo é bem simples, mas poderíamos travar uma dependência com um banco, por exemplo.

 Podemos usar o bind junto com find e qualquer outra função para travar algumas variáveis criando funções novas que travam alguns desses valores. 
 
  o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal ](https://www.youtube.com/devplenocom)e cadastre seu e-mail para não perder nenhuma novidade. Deixe suas dúvidas e sugestões nos comentários. Abraço!


 <div class="embed-responsive embed-responsive-16by9"> 
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/q1rIICZaxTI" allowfullscreen></iframe> 
 </div>