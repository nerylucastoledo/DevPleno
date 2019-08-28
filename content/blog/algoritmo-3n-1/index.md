---
title: "Algoritmos: Problema 3n+1"
date: "2017-02-19"
author: Tulio Faria
tags: ["Algoritmos", "Video-Tutorial"]
thumbnail: "ALG.-3n-790x400.png"
keywords: "algoritmos"
---

Criando a solução em Javascript para o Problema 3n+1.Neste post continuamos a série de conteúdos sobre algoritmos. Principalmente sobre tipos de algoritmos que são utilizados em competições de programação e em entrevistas de emprego. O Problema 3n+1 foi retirado do livro Programming Challenges de Miguel Skiena. O objetivo do algoritmo é, dado i e j, como um intervalo de início e fim, achar o maior ciclo. O processo começa processando os valores de n. Se n é um número par, o próximo valor de n será n /2. Caso n seja impar, o próximo valor de n será 3 * n + 1. O algoritmo termina em n = 1. A ideia é calcular o número de passos até que n seja 1. Fazendo este processo entre i e j, e achando o maior número. Neste vídeo, explico um pouco melhor como funciona o algoritmo e como ele foi resolvido. 

<div class="embed-responsive embed-responsive-16by9"> 
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/voV5OBCqlVs" allowfullscreen></iframe> 
</div>

<a href="https://gist.github.com/tuliofaria/a92d387b68931d1294fddb1c4e259723">GitHub</a>


Não deixe de comentar com sua opinião, sugestão ou dúvida! E cadastre seu e-mail para receber nossas últimas novidades. Abraços!


E aqui o algoritmo completo:

```js {numberLines: true}
{
      function cycleLen(n){
  let steps = 1
  while(n !== 1){
    if ( n % 2 === 0){
      n = n / 2
    }else{
      n = 3 * n + 1
    }
    steps++
  }
  return steps
}
function maxCycle(i,j){
  let max = cycleLen(i)
  for (let k = i + 1; k <= j; k++) {
    let currentCycle = cycleLen(k)
    if (currentCycle > max) {
      max = currentCycle
    }
  }
  return i+' '+j+' '+max
}
console.log(maxCycle(1,10))
console.log(maxCycle(100,200))
console.log(maxCycle(201,210))
console.log(maxCycle(900,1000))
}




