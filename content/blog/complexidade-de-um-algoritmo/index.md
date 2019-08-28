---
title: "Como saber a complexidade de um algoritmo"
date: "2017-07-11"
thumbnail: "COMPLEXIDADE-DE-UM-ALGORITMO-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Videos", "Algoritmos"]
keywords: "algoritmos"
---


Hoje eu gostaria de dar uma dica rápida, principalmente para o pessoal que estiver fazendo alguns testes no codelite, porque ele considera a complexidade de um algoritmo quando vai avaliar, obviamente depende muito de enunciado de problema.

 O grande problema que eu vejo é saber se a notação big-O, que usamos para saber a complexidade do algoritmo, é uma solução boa ou não. Uma ideia que gosto bastante de usar é a seguinte: se você tem uma função qualquer, e você passa um vetor para essa função:

```jsx {numberLines: true}
function calculo(vetor){

}
```
Como saber a complexidade desse cálculo? Temos que olhar as coisas que podem variar no cálculo, no caso acima, o tamanho do vetor. Geralmente o tamanho do vetor seria um const n por exemplo:

```jsx {numberLines: true}
function calculo(vetor){

const n = vetor.lenght

for(let i=0; i<n; i++){

console.log(n)

}

}
```

Então ela poderia variar de acordo com N. Se considerarmos que o tamanho do vetor é N (geralmente no problema eles falam isso) logo esse é um algoritmo O(n) porque ele vai rodar a coisa mais pesada dele e vai iterar N vezes, quanto maior for esse N, mais vezes vamos rodar esse pedaço de código.

 Se tivermos outra função, por exemplo um outro _for,_ e tivermos que fazer um cálculo baseado no N:

```jsx {numberLines: true}
function calculo(vetor, m){

const n = vetor.lenght

for(let i=0; i<n; i++){

console.log(n)

for(let k=0; k<m; k++){

console.log(n\*k);

}

}

}
```

Nesse cenário, sabemos que tem dois for, um dentro do outro, o de cima varia em N e o de baixo varia em M. Se o M for um valor diferente, a complexidade dele é O(n*m), porque ele depende de dois fatores de entrada para saber a complexidade e o número de vezes que vai rodar o segundo console.log  vai ser n*m.

Se por algum propósito do algoritmo o M for N, então teremos uma complexidade O(n²) que é o pior algoritmo que temos, porque ele cresce de forma exponencial.

Por isso em algumas entrevistas em inglês eles vão te questionar se essa é a melhor solução, se você sabe que ela é O(n²), pode ser que não seja a melhor.

Existe ainda um outro cenário, no qual passamos o for para fora:

```jsx {numberLines: true}
function calculo(vetor){

const n = vetor.lenght

for(let i=0; i<n; i++){

}

for(let k=0; k<n; k++){

console.log(n\*k);

}

}
```

Esse algoritmo volta a ser O(2n), pois ele vai rodar N depois rodar novamente o N. Ele não é nada comparado a 1000, por exemplo, porque ele varia muito pouco. O grande problema então é o N e não o 2, por isso consideramos a complexidade O(n) porque somamos os dois.

 Agora vamos supor que esse algoritmo faça uma ordenação de sort:

```jsx {numberLines: true}
functon(vetor){

vetor = vetor.sort()

}
```

O quick sort na média é  N log N, ou seja, ele tem uma complexidade boa e qualquer coisa que fizermos, além disso temos que multiplicar ou somar, então provavelmente vai predominar o N log N.

No codelite, ele vai usar algo muito interessante que é uma estimativa do tempo que demorou para rodar o seu algoritmo para descobrir a complexidade, por isso quando você roda o algoritmo para ser avaliado, toda complexidade que ele descobre é estimada e não a real, por isso se tivermos essa noção de como evolui o algoritmo já é muito importante para resolvermos os problemas.

Confira o vídeo:

 Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!


 <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/f--A1FK6KK4" allowfullscreen></iframe>
   </div>