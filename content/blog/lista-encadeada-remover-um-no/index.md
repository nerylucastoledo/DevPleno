---
title: "Lista encadeada - Como remover um nó"
date: "2017-07-25"
thumbnail: "./RemoverNo.png"
author: "Tulio Faria"
keywords: "algoritmos"
tags: ["Video-Tutorial"]
---


Nós já falamos sobre alguns métodos, adicionamos itens na lista, criamos nó com [complexidade O(n)](https://www.devpleno.com/lista-encadeada-adicionar-no/) e [O(1)](https://www.devpleno.com/lista-encadeada-adicionar-com-o1/) e agora vamos remover um nó desse nosso algoritmo. 

Primeiro temos que criar um método remove, vamos passar um nó para ele e, baseado nesse nó, ele vai excluir da lista.

```js {numberLines: true}
const remove = (node) => {
}
```

Lembrando que em return temos que adicionar o remove:

```js {numberLines: true}
return{
    remove(node) => remove(node)
}
```

O primeiro cenário que temos é se a lista for igual a null:

```js {numberLines: true}
const remove = (node) => {
    if(lenght === 0)
    return
}
```

Agora, se o nó for igual ao primeiro nó da minha lista, eu simplesmente vou fazer meu head ser o node.next

```js {numberLines: true}
const remove = (node) => {
    if(lenght === 0)
    return
    if(node === head){
        head = node.next
        return
    }
}
```

Agora temos a parte complexa, afinal já cobrimos a situação em que nossa lista está vazia, remover o primeiro item e agora precisamos remover o item que escolhermos. Vamos imaginar que queremos, por exemplo, excluir o nó 2, temos que pegar o next do nó 1 e apontar para o nó 3, então temos que descobrir quem é o nó 1 para fazermos esse mapeamento:

```js {numberLines: true}
const remove = (node) => {
    if(lenght === 0)
    return
    if(node === head){
        head = node.next
        return
    }
    let currentNode = head
    while(currentNode.next && currentNode.next != node){
        currentNode = currentNode.next
    }
    console.log(currentNode)
}
```

Agora eu quero pegar o valor 2 da nossa lista e checar se eu peguei realmente esse valor:

```js {numberLines: true}
let node = list.getByValue(2)
console.log(node)
```

Agora eu preciso mandar excluir esse nó 2:

```js {numberLines: true}
list.remove(node)
```

Pronto, conseguimos excluir, agora precisamos pegar nosso currentNode, que é nosso nó 1 e apontar para o nó 3, já que ele seria nosso next a partir do momento em que excluímos o nó 2:

```js {numberLines: true}
let currentNode = head
while(currentNode.next && currentNode.next != node){
    currentNode = currentNode.next
}
currentNode.next = node.next
```

Fizemos o currentNode ser igual ao head, logo ele será o nosso nó 1, em seguida fiz uma condição: se eu tenho um próximo para andar e esse próximo não é o node, vou fazer o currentNode igual a currentNode.next, com isso vou caminhar para frente. Porém, na primeira vez que roda, ele já descobre que o Nó 1 já é o next, então precisamos fazer mais um caso de teste. Vamos adicionar uma posição 4 e em seguida remover a posição 3:

```js {numberLines: true}
list.add2(4)
let node = list.getByValue(3)
console.log(node)
list.remove(node)
list.print()
```

Lembrando que eu estou mostrando o que eu geralmente faço de testes, afinal o teste seria bastante viciado caso eu testasse apenas com o nó 1. Então conseguimos fazer ele caminhar nos nós e só depois então caminhar nele de verdade. 

A complexidade desse código é O(n), não tem como ser diferente, pois temos que passar em todos os nós, basicamente é quase o mesmo cenário de adicionar com O(n). 

Assista ao vídeo: 


<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/tVl7Z-FnQ50" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!