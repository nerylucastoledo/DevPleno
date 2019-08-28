---
title: "High-order Function Filter"
date: "2017-08-02"
thumbnail: "FILTER-1-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---


Hoje vamos de continuar falando sobre as [high-order functions](https://www.devpleno.com/high-order-functions/) que podemos aplicar em um vetor em JavaScript. Nós já tínhamos feito algumas high-order functions anteriormente, nas quais mostrei o [Map](https://www.devpleno.com/map/) e o [Reduce](https://www.devpleno.com/reduce/), nesse exemplo, vou mostrar o FIlter, que também é muito interessante. 

Vamos imaginar que temos um estoque que atualiza em tempo real e que por algum motivo a segunda peça está zerada. Quando eu for mostrar o carrinho eu quero que mostre apenas a soma das compras pro estoque maior que zero, para isso podemos usar a high-order function chamada de 'filter', ela filtra os itens que estão fora de estoque:

```js {numberLines: true}
const carrinho = \[

{id: 1, preco:2, qtd: 2, estoque: 10}

{id: 1, preco:3, qtd: 1, estoque: 0}

\]

const subtotal = item => item.preco \* item.qtd

const total = carrinho

.map(subtotal)

.reduce((soma, subtotal) => subtotal + soma, 0)

const semEstoque = carrinho.filter(item => item.estoque < item.qtd )

console.log(semEstoque)
```

Assim ele já mostra quais têm a quantidade zero. Caso ele tivesse 2 de estoque, ele também mostraria que não consegue atender porque o estoque é menor que a quantidade. Então, quando formos somar o total do carrinho, podemos usar o filter para passar uma arrow function:

```js {numberLines: true}
const total = carrinho

.filter(item => item.estoque >= item.qtd)

.map(subtotal)

.reduce((soma, subtotal) => subtotal + soma, 0)

const semEstoque = carrinho.filter(item => item.estoque < item.qtd )

console.log(total)
```

Perceba que ele não considerou um dos itens, isso acontece porque as high-order function sempre retornam um novo vetor, então quando eu passo o filtro, removo o item do vetor. Então eu estou passando um novo vetor só com o item 1 para o map, que vai multiplicar o preço pela quantidade e vai passar esse novo vetor para o reduce, que vai reduzir somando os valores.

 Podemos utilizar essas funções com imutabilidade porque toda vez que filtro, uso o reduce ou map, eu não estou alterando o vetor original, isso é muito importante para a programação funcional. Podemos também o seguinte:

```js {numberLines: true}
const filtroEmEstoque = item => item.estoque < item.qtd

const total = carrinho

.filter(filtroEmEstoque)

.map(subtotal)

.reduce((soma, subtotal) => subtotal + soma, 0)

const semEstoque = carrinho.filter(item => item.estoque < item.qtd )

console.log(total)
```

A vantagem de fazermos isso é que acaba ficando cada vez mais fácil de entender, além de ser facilmente testado. Tudo isso feito com funções puras, quanto mais utilizamos essas high-order functions, mais limpo ele fica.

 Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e cadastre seu e-mail para não perder nenhuma novidade. Deixe suas dúvidas e sugestões nos comentários. Abraço!


 <div class="embed-responsive embed-responsive-16by9"> 
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/3tu35hvhmQA" allowfullscreen></iframe> 
 </div>