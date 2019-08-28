---
title: "Busca Binária"
date: "2017-08-29"
thumbnail: "BUSCA-BINÁRIA-790x400.png"
author: "Tulio Faria"
tags: ["Video-Tutorial"]
keywords: "algoritmos"
---

Hoje vamos falar um pouco mais sobre algoritmos, que são as bases da computação. Especificamente sobre um tipo de busca que eu já utilizei em um projeto e nunca imaginei que iria utilizar, a busca binária.

Os algoritmos de busca inicialmente parecem teóricos demais, mas, na verdade, podemos usar bastante em projetos. Há algum tempo, antes de termos o Android e IOS, era comum termos os Palmtops, eles tinham memória péssima e precisávamos fazer uma busca que nem era tão grande (essa busca demorava demais de forma sequencial) a partir disso, assumimos uma restrição nos dados, deixando-os ordenados para a busca binária e assim conseguimos resolver o problema.

Vou dar um exemplo de um problema com um vetor de 5 itens. Deixávamos o vetor de forma sequencial e salvavamos esses slots de dados sequencialmente, mas isolados, com isso era possível saber que quando fossemos naquele ponto de memória, teria poucas iterações.

A estratégia era a seguinte: tentamos acertar primeiro o item do meio, por exemplo, o número 3, se o número 3 é igual ao número que eu estou buscando, ele é retornado, caso eu esteja procurando o 2 por exemplo, eu sei que ele é menor que o 3, então meu próximo espaço de busca será 1 ou 2, com isso é tentado de novo, se acertar, ele retorna, caso contrário tentará de novo e por aí vai.

Por esse motivo é chamado de busca binária, porque sempre vamos dividir em dois espaços. O pior dos casos é ele dividir todos pela metade. Vamos implementar agora:

```jsx {numberLines: true}
const vetor = \[1, 2, 3, 4, 5\]

const binSearch = (vetor, left, right, valor) => {

if (right >= left){

const indice =  parseInt(left + (right-left)/2)

if(vetor\[indice\] === valor){

return valor

}

if(vetor\[indice\] > valor){

return binSearch(vetor, left, indice-1, valor)

}

return binSearch(vetor, indice+1, right, valor)

}

return -1

}

console.log(binSearch(vetor, 0, vetor.length-1, 20))

console.log(binSearch(vetor, 0, vetor.length-1, 5))
```

Para saber se o algoritmo acabou, uma das maneiras é se por algum motivo o item do lado direito for maior que do lado esquerdo, é válido, já que vamos marcar os lados para acertar a metade, caso ele não encontre do lado esquerdo, vamos procurar do lado direito, e por fim retornar -1 caso não encontrarmos em nenhum dos lados.

Nos casos, fizemos um valor que não existe, 20, e um que existe, 5. A vantagem que tirei nesse projeto é que toda vez que acessavamos o índice sempre gastava muito tempo, então poderíamos fazer o  seguinte para economizar:

```jsx {numberLines: true}
const binSearch = (vetor, left, right, valor) => {

if (right >= left){

const indice =  parseInt(left + (right-left)/2)

const  atual = vetor\[indice\]

if(atual === valor){

return valor

}

if(atual > valor){

return binSearch(vetor, left, indice-1, valor)

}
```

A medida que escalamos, isso vai ficando cada vez mais interessante já que aumentamos muito o número de itens e o número de vezes que ele passa é pequeno.


 Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal ](https://www.youtube.com/devplenocom)e cadastre seu e-mail para não perder nenhuma novidade. Deixe suas dúvidas e sugestões nos comentários. Abraço!

 <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/l6pxuyV3mKQ" allowfullscreen></iframe>
   </div>