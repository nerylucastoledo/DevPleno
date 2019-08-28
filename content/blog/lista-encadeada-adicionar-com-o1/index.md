---
title: "Lista encadeada - Adicionar com O(1)"
date: "2017-07-25"
thumbnail: "./AdicionarCom01.png"
author: "Tulio Faria"
tags: ["Video-Tutorial"]
keywords: "algoritmos"
---


Hoje vamos continuar falando mais um pouco sobre [algoritmos](https://www.devpleno.com/tag/algoritmos/) que principalmente caem ou em listas de emprego ou competições de programação, mas vai ser um pouco diferente. Estamos falando sobre listas encadeadas e já fizemos uma forma de [adicionar um nó em que a complexidade é 0(n)](https://www.devpleno.com/lista-encadeada-adicionar-no/), pois precisamos navegar até o final da lista toda vez que vamos adicionar um item novo. Porém uma das pessoas que acompanham a gente no YouTube comentou que podemos fazer com o O(1), ou seja, um valor constante, desde que a gente armazene além da cabeça da lista, o rabo, então eu decidi fazer dessa forma também para ficar bem claro as duas formas. A primeira coisa que temos que fazer no algoritmo é, além de utilizar o head, utilizar também o tail:

```jsx {numberLines: true}
let head = null
let tail = null
```

Agora vamos fazer um add e, caso estivermos adicionando pela primeira vez, vamos seguir a mesma regra utilizada anteriormente:

```jsx {numberLines: true}
const add2 = (value) => {
    if(!head){
        head = Node(value)
        tail = head
        length++
        return head
    }
}
```

Perceba que tail é igual a head, afinal se não tivermos nenhum nó, ao adicionar, o início e o fim serão o mesmo. 

Agora, caso o Head não for nulo, temos que fazer o Tail que será o nosso último. Para isso vamos criar um nó e pegar o tail.next e apontar para o novo nó:

```jsx {numberLines: true}
const add2 = (value) => {
    if(!head){
        head = Node(value)
        tail = head
        length++
        return head
    }
    let node = Node(value)
    tail.next = node
    tail = node
    return node
}
```

Quando a lista não está vazia criamos um novo nó, vamos nesse último nó e colocamos no ultimo, logo nosso tail será o novo nó. Para checar se isso funciona no return, temos que adicionar:

```jsx {numberLines: true}
add2: (value) => add2(value)
```

Vamos fazer um teste:

```jsx {numberLines: true}
list.add2(1)
list.add2(2)
list.add2(3)
list.print()
```

Perceba que retornou 0 e 1 e nossa lista, a diferença que guardamos uma referência para o tail e utilizou apenas dele para checar e adicionar novos itens. Pode ser que consigamos otimizar esse código, a grande questão é que agora nosso algoritmo tem complexidade 0(1), a vantagem é que independente do tamanho da minha lista, adicionar a ela sempre custará uma constante. 

O único detalhe é que guardamos dois valores, vamos pensar que esses valores variam dependendo do tamanho da lista, geralmente pensaríamos o seguinte: se ele variasse muito seria um um temporal 2,mas ele sempre será 0(1) mesmo com o resultado 2 porque não faz diferença quando nós falamos em escala. 

Confira o vídeo: 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/-spW0EURyNk" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!