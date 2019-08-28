---
title: "Falsy e Truthy Values - Valores considerados verdadeiro e falso em JS"
date: "2017-08-07"
thumbnail: "TRUTHY-VALUES-790x400.png"
keywords: "dicas"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial", "JavaScript"]
---


Hoje eu gostaria de falar sobre um assunto que surgiu nos comentários do vídeo sobre [short-circuit e valores padrão](https://www.devpleno.com/short-circuit-e-valores-padrao/).

 Eu não comentei sobre que valores são convertidos para verdadeiro ou falso porque, na verdade, eu não sabia que eram chamados de falsy e truthy values, então quero trazer essa racionalização. O exemplo que tínhamos feito era:

```jsx {numberLines: true}
let a = null

let b = a || 'teste'
```

Quando eu passo o valor e o operador ou é atribuído o valor padrão. Existe uma série de valores que fazem ele retornar false e consequentemente ele traria o valor padrão ‘teste’, alguns desses valores são ‘null’, uma string vazia ‘ ‘, o ‘false’ em si, undefined, que seria o caso de uma entrada no express, outro valor considerado ou convertido para false é o Zero ‘o’ e um último é o NaN.

Existe uma situação, que está documentada no site da mozilla, que é o (document.all)[1]. Ele é bastante utilizado para verificar navegadores antigos, mas vamos focar nos anteriores principalmente para o Node.

Em contrapartida, temos tudo que não são valores passados anteriormente, nesse caso seria retornado o valor ‘true’, por exemplo:

```jsx {numberLines: true}
let c = true
```

Outros valores considerados truthy seriam por exemplo {}, que seria um objetct, um array \[\], um número qualquer, uma string com algo dentro 'test' , um new Date(), um número negativo, float e uma constant em JavaScript (Infinity), que também retornaria True. Por esse motivo em alguns condicionais, como por exemplo:

```jsx {numberLines: true}
{ comments && comments.map() }
```

Vai retornar true porque ele é um object, já que podemos iterar sobre os comments, porém se comments for undefined ou algum valor falso que a gente não consiga iterar no Map, ele não executa a instrução. Por esse motivo é interessante que a gente saiba os valores possíveis. Uma observação importante, se nós fizemos a conversão para apenas um, por exemplo:

```jsx {numberLines: true}
console.log(42 == true)
```

Irá retornar False, mas se fizermos isso:

```jsx {numberLines: true}
console.log(!!(42) == true)
```

Estamos negando ele para ser true, então irá retornar true. Inicialmente ele não funcionou porque o == não faz essa conversão de tipos, já os &&, que é um operador booleano, força esse valor a ser convertido para truthy ou falsy value. Sempre for fazer comparações desse tipo, é bom fazer com === para que realmente fique idêntico e assim ele realmente verifica se os valores são os mesmos e isso evita qualquer problema no futuro.

 Deixe seu cometário, curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!


 <div class="embed-responsive embed-responsive-16by9"> 
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/gQl0DCNImqw" allowfullscreen></iframe>
  </div>