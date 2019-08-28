---
title: "Currying -  Uma técnica interessante usada em programação funcional"
date: "2017-05-26"
thumbnail: "CURRYING-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---


O Currying é basicamente uma forma de informar para uma função os parâmetros de forma parcial. Você pode pegar uma função qualquer que recebe, por exemplo, três parâmetros, mandar um por vez e no fim obter o resultado. Assim, você injeta os parâmetros à medida que estiverem disponíveis. Um exemplo usando JavaScript puro e Currying _(lembrando que ele é uma função normal. Nele teremos os valores 1 e 2)._

```jsx {numberLines: true}
function func(valor1, valor2){

return valor1+valor2

}

console.log('normal', func1(1,2))
```

  A única forma que temos de chamar essa função é passando os valores para ele, mas o ideal é passarmos o 1, e o valor 2 só quando ele estiver disponível. Vamos criar agora uma função 2 onde isso seja possível. 

Essa função não vai receber os dois valores, apenas um e dar um return em uma função que recebe o segundo valor e essa, por sua vez, retorna valor 1 mais valor 2.

```jsx {numberLines: true}
function func2(valor1){

return function(valor2){

return valor1+valor2

}

}



const func2Valor1 = func2(10)

console.log('curried', func2Valor1(20)
```

  Suponhamos que quero fazer um read de um arquivo curried e cada hora que eu ler ele será passado um callback diferente, deixando apenas o primeiro parâmetro fixo. Isso é o Currying. 

Vamos preenchendo os parâmetros à medida com que vamos executando o código e, quando chegamos no passo final, estará disponível todos os valores que passamos. 

Quando fazemos isso, precisamos retornar a função e guardar em uma variável, e uma segunda função espera que você passe o segundo valor. Podemos também executar de uma vez fazendo assim:

```jsx {numberLines: true}
console.log('curried', func2(10)(20))
```

  Na versão curried, precisamos lembrar que a primeira parte retorna uma função e então conseguimos chamar a segunda função com o segundo parâmetro que queremos. Uma outra coisa que podemos fazer é uma curried function só com arrow function, por exemplo:

```jsx {numberLines: true}
const functArrow = (valor1) => (valor2) => (valor3) =>{

return valor1+valor2+valor3

}

console.log(functArrow(1)(2)(3))
```

  Perceba que isso deixa ainda mais simplificado uma curried function e vamos compondo cada vez mais nossas funções. Isso deixa mais fácil de ser testado, pois, à medida que a parte elementar dela é testada, só precisamos passar os valores corretamente que não vai ter problema. Confira a explicação em vídeo

 
 Deixe seu cometário, curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!


<div class="embed-responsive embed-responsive-16by9"> 
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/rec4I8zfYjc" allowfullscreen></iframe>
 </div>