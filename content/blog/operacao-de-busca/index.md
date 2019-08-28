---
title: "Árvore Binária de Busca - Operação de Busca"
date: "2017-07-04"
thumbnail: "./ArvoreBinaria.png"
author: "Tulio"
tags: ["Video-Tutorial"]
keywords: "algortimo"
---

Agora que você já entendeu sobre [Árvore Binária](https://www.devpleno.com/arvore-binaria/) e [Árvore Binária de Busca](https://www.devpleno.com/arvore-binaria-de-busca/), vamos falar sobre a operação de busca.

 Estou utilizando o exemplo do exercício anterior de árvores binárias. Nós sabemos que a árvore binária tem uma regra de inserção, então podemos esperar algumas coisas dela, por exemplo:

```jsx {numberLines: true}
insert(arvore, 10)
//console.log(arvore)
insert(arvore, 11)
//console.log(arvore)
insert(arvore, 9)
//console.log(arvore)
//insert(arvore, 8)
console.log(arvore)
function seach(tree, value){
    if(!tree.value || tree.value === value){
        return tree.value
    }
    if(tree.value < value){
        return search(tree.left, value)
    }
    return serach (tree.right, value)

}
console.log(search(arvore, 10)
```

Criamos um search onde passamos uma árvore para ela e quero buscar um valor. Sabemos que se o valor dessa árvore não existir, temos que retornar undefined ou se a árvore for igual ao valor que estou buscando, vou retornar o valor. Caso contrário, se o valor que estou buscando for menor que o nó atual, ele deve estar do lado esquerdo, então vamos buscar o valor apenas no lado esquerdo e por último, se for maior, procuramos do lado direito.

Perceba que encontrou o 10, pois ele tinha na árvore. Se procurarmos um valor que não está na árvore, será retornado o undefined.

Ela sempre dividirá o problema em dois, então ao pensarmos na complexidade do código, é o contrário de termos um ‘for’ dentro do outro.  Como ele sempre divide em dois, no pior caso, o nosso algoritmo é 0(raiz(n)) então se tivermos 25 elementos, teremos mais ou menos 5 comparações, no nosso caso que temos 4, vamos ter 2 comparações. É algo muito rápido, logo a complexidade do algoritmo é 0(log n) que é uma performance muito boa para um algoritmo de busca. O search é o mais importante das árvores, não é atoa que se chama de busca.

Finalizamos todas as operações em árvore, visitar em pré order, in order e pós order, inserção e a busca em si que é muito utilizada.

Confira o vídeo:

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/UqM6GFlnaOE" allowfullscreen></iframe>
</div>

 Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!