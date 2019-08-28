---
title: "Árvore Binária de Busca em JavaScript"
date: "2017-07-03"
thumbnail: "./Debusca.png"
author: "Tulio Faria"
tags: ["Video-Tutorial"]
keywords: "algoritmos"
---

Hoje vamos falar mais sobre árvores binárias, porém um tipo específico, a árvore binária de busca.

 **Qual a diferença da árvore binária de busca para a árvore binária normal?**
 
Na normal, simplesmente inserimos os nós dentro da árvore sem garantir nenhuma regra, já a de busca segue a seguinte regra:

Temos a raiz e inserimos um valor nessa raiz. Quando inserimos o segundo valor, se for maior que a raiz, ele fica à direita, se ele for menor, ficará à esquerda. Com isso conseguimos fazer muitas outras operações utilizando essa árvore binária.

Primeiramente vamos fazer a inserção em uma árvore binária de busca. Para fazermos isso, temos que checar se essa árvore tem algum valor, depois verificamos se ele é maior ou menor para inserirmos para left ou right.

```jsx {numberLines: true}
const arvore = {}

function insert(tree, value){

if(tree.value){

if(value > tree.value){

insert(tree.right, value)

}else{

insert(tree.left, value)

}

}else{

tree.value = value

tree.right = {}

tree.left = {}

}

}

insert(arvore, 10)

console.log(arvore)
```

Se não for inserido o tree.value, vai ser igual a value, o tree.right e tree.left serão árvores vazias. Eu estou definindo isso porque quando inserirmos podemos passar uma árvore vazia no insert e ele continua fazendo isso de forma recursiva. Colocando o valor 10, perceba que será retornado: Se inserirmos, por exemplo, um valor 11 em seguida:

```jsx {numberLines: true}
insert(arvore, 10)

console.log(arvore)

insert(arvore, 11)

console.log(arvore)
```


Será retornado o seguinte:

Agora vamos colocar o valor 9:


```jsx {numberLines: true}
insert(arvore, 10)

console.log(arvore)

insert(arvore, 11)

console.log(arvore)

insert(arvore, 9)

console.log(arvore)
```

Será retornado o seguinte: Na primeira inserção, retorna 10, na segunda 10 e 11 e na terceira 10, 11 e 9, sendo 11 do lado direito, 9 do lado esquerdo e 10 nossa raiz. Vamos colocar um 8 agora:

```jsx {numberLines: true}
insert(arvore, 10)

console.log(arvore)

insert(arvore, 11)

console.log(arvore)

insert(arvore, 9)

console.log(arvore)

insert(arvore, 8)

console.log(arvore)
```

O resultado será:

Com o 8 agora temos 10 na raiz, 11 do lado direito, do lado esquerdo 9 e do lado esquerdo do lado esquerdo 8.

Com isso conseguimos fazer o algoritmo de inserção na árvore de busca. É importante ressaltar que isso não é programação funcional, já que não estamos retornando uma nova árvore. Fiz isso apenas para mostrar que boa parte dos algoritmos que fazemos em C ou alguma linguagem que vemos na graduação utilizam a passagem por referência.

Confira o passo a passo no vídeo: 

<div class="embed-responsive embed-responsive-16by9">
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ewb1WUuTgRU" allowfullscreen></iframe> 
 </div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!