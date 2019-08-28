---
title: "Árvore Binária em JavaScript"
date: "2017-07-03"
thumbnail: "./Arvores.png"
author: "Tulio Faria"
tags: ["Video-Tutorial"]
keywords: "algoritmos"
---

Continuando o assunto sobre alguns algoritmos que utilizamos em computação em geral, neste port falaremos sobre árvore binária, uma estrutura de dados que me fascina bastante pela versatilidade.

Então vamos implementar uma árvore, ainda não será uma árvore de busca, e vamos fazer o algoritmo base para navegar nessa árvore porque envolve recursividade. Por definição, a árvore binária tem o nó da esquerda, direita e o valor no elemento:

```js {numberLines: true}
let arvore = {

left: undefined,

right: undefined,

value: 10

}
```

A regra de navegação que temos na árvore é baseada em como a gente passa nesses nós. Então vamos criar, por exemplo, uma função que chamamos de pré order. Ela imprime o valor, vai para a esquerda e depois para a direita.

```js {numberLines: true}
function preOrder(tree){

console.log(tree.value)

preOrder(tree.left)

preOrder(tree.right)

}
```

Perceba que passamos a tree recursivamente para o lado esquerdo e em seguida para o direito.

 **Por que ele se chama preOrder?** 
 
 Porque ele vem primeiro de tudo. Por isso ele é diferente o inOrder e o poOrder que vem no meio e no final da navegação respectivamente. Podemos checar se o 'preOrder(tree.left)' e o 'preOrder(tree.right)'  são vazios por exemplo:

```js {numberLines: true}
function preOrder(tree){

console.log(tree.value)

tree.left && preOrder(tree.left)

tree.right && preOrder(tree.right)

}

console.log('preOrder')

preOrder(arvore)
```


Se ele é um dos valores que é convertido para verdadeiro, consequentemente, tem algo dentro, então ele vai navegar para o lado esquerdo. Se acontecer o mesmo depois, ele navegará para o lado direito. Ao somar o preOrder e passar a árvore, ele imprime o valor 10.

Vamos colocar algum valor do lado esquerdo:

```js {numberLines: true}
let arvore = {

left: {

left: undefined,

right:  {

value: 3

},

value: 2

},

right: undefined,

value: 10

}
```

Ele imprimirá 10,2 e 3, o que está correto porque ele imprimiu o nó principal que é 10, depois ele foi para a esquerda, imprime o 2, como na esquerda não tem nada. ele vai para a direita e imprime o 3, depois vai para a próxima direita e não imprime nada pois esta como undefined. Esse é o preOrder, agora vamos testar o inOrder:

```js {numberLines: true}
function inOrder(tree){

tree.left && inOrder(tree.left)

console.log(tree.value)

tree.right && inOrder(tree.right)

}

console.log('inOrder')

inOrder(arvore)
```

A diferença é que o console.log virá no meio.

Perceba que o inOrder vai para a esquerda primeiro, tenta ir novamente para a esquerda, não acha nada, ai ele visita o nó 2, vai para a direita, tenta ir para a esquerda e não consegue, visita o nó 3, vai para a direita e não tem nada, volta, imprime o nó 10 e por fim tenta ir para a direita e está undefined.

O mais importante é que guardamos os tipos de navegação da seguinte forma, preOrder escreve primeiro, inOrder escreve no meio e o posOrder escreve no final.

Outra coisa importante é que como ele é recursivo eu preciso saber qual o meu passo base, que é o passo onde nenhum dos dois vão ser executados, ou seja, quando chegar no left e no right não ter mais ninguém para navegar.

Com JavaScript fica muito simples a navegação em árvore, perceba que construímos a navegação com um Object normal, posteriormente vamos ver inserção e tudo mais em árvores de busca, onde colocamos o elemento menor para o lado esquerdo e o maior para o lado direito.

Confira todo a explicação no vídeo:

 <div class="embed-responsive embed-responsive-16by9"> 
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/_jBCy4VX4C4" allowfullscreen></iframe> 
 </div>
 
 Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!