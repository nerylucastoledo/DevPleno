---
title: "Resolvendo Expressão Aritmética do CodeFights"
date: "2017-11-13"
thumbnail: "Expressao.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "algoritmos"
---


Hoje vamos resolver um problema disponível no Code Fights, conhecido como Expressão aritmética. É bastante simples, basicamente temos um número A, B e C e temos que descobrir se existe um operador que faça  A#B = C ser verdadeira, temos algumas maneiras de fazer, a primeira que eu fiz foi a seguinte:

```jsx {numberLines: true}
function arithmeticExpression(a, b, c) {

const ops =  \['+','-','/','\*'\]\]

const op = (a, b, o) => {

if(o === '+'){

return a+b

}else if(o === '-'){

return a-b

}else if(o === '/'){

return a/b

}

return a\*b

}

return ops

.map(o =>(a, b, o)===c)

.filter(o => o)

.length > 0

}

console.log('2,3,5 =  ',arithmeticExpression(2,3,5))
```

Eu defini uma lista de operadores e cada uma delas representado com seu próprio operador aritmético em JavaScript, em seguida criei uma arrow function que dado a, b e a operação que eu quero, ele faça a operação em si.

 Feito isso, peguei todas as operações e fiz um map que converte uma lista de operações para uma lista do resultado dessas operações aplicadas. 
 
 Também poderia ter feito de outra maneira, por exemplo, já que eu já tenho o operador,  porque não tentar aplicar o operador sem utilizar o if? Uma das ideias seria algo nesse sentido:

```jsx {numberLines: true}
function arithmeticExpression(a, b, c) {

const ops =  \['+','-','/','\*'\]\]

const op = (a, b, o) => eval(\`a ${o} b\`)

return ops

.map(o =>(a, b, o)===c)

.filter(o => o)

.length > 0

}

console.log('2,3,5 =  ',arithmeticExpression(2,3,5))
```

Esse eval converte para código em JavaScritp e executa, não é um código que tem uma segurança muito grande e é até um pouco mais lento, mas é uma possibilidade.