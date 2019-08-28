---
title: "Bind - Altere comportamento e contexto de execução de suas funções"
date: "2017-07-27"
thumbnail: "BIND-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---

O que é um bind em JavaScript? Para mostrar uma das utilidades do bind, eu criei um pequeno exemplo:

```jsx {numberLines: true}
(function(){

this.valor = 10

const modulo = {

valor: 20,

getValor: function(){

return this.valor

}

}

console.log(modulo.getValor())

const getValor = modulo.getValor

console.log(getValor())

})()
```

Eu tenho um objeto literal que cria um contexto novo. Para esse contexto, o this.valor vai ser igual a 20 e quando eu der um getValor, ele irá retornar o this.valor.  Logo acima temos um this.valor que faz referência a primeira função e ao colocarmos o console.log = modulo.getValor ele vai executar referente ao pai dele.

Se criarmos uma nova constante e pegamos só a função extraindo desse objeto literal de cima, quando eu dou console.log(getvalor()), ele trás 20 e 10. 20 é o valor que está dentro do módulo e a segunda vez está pegando o 10 que está fora do módulo.

Isso acontece porque quando eu criei a cópia dele e não especifiquei nada, ele vai utilizar o this na chamada de onde ele está, então acabamos criando um cenário meio inconsistente.

Uma das coisas que o bind permite é exatamente isso, quando eu crio essa cópia, eu posso passar um  bind onde eu falo em qual contexto eu quero que ele execute. Por exemplo, eu quero que ele execute no contexto do módulo:

```jsx {numberLines: true}
const getValor = modulo.getValor.bind(modulo)
```

isso é bastante útil quando criamos as classes em ES6 porque naturalmente ele não tem o bind para o contexto da classe, então podemos fazer no construtor.

A outra utilidade que temos para o bind é, por exemplo, criar uma função que recebe dois parâmetros e criar uma função2, que é a função1 com bind fixando o parâmetro:

```jsx {numberLines: true}
function func1(param1, param2){

console.log(param1, param2)

}

const funct2 = func1.bind(null, 'paramfixo')

console.log(func2('param2'))
```

Ao executar, ele vai chamar o paramfixo e param2, então eu consigo criar novas funções que tenham um valor fixo, isso também é conhecido como funções parciais. Podemos utilizar por exemplo para criar funções que filtram determinados valores em um filter.

Utilizamos bastante o bind quando estamos criando um componente em react utilizando as classes em ES6 por causa dessa característica dela não ter o bind automático para this.

Uma coisa interessante é que quando você dá o bind, tem que estar ciente de que está alterando alguma coisa do estado atual do seu componente. Quando estamos tentando cada vez mais programação funcional, mesmo que seja alguns métodos do componente, a ideia é que elas se transformem em funções puras, então sempre que se deparar tendo que criar um bind para o método, precisa checar se realmente é necessário, porque muitas vezes conseguimos fazer isso sem o bind. Quando isso é possível, fazemos uma função pura, então a testabilidade do código fica melhor porque ela não depende de nada do contexto.

Confira o vídeo:

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!

<div class="embed-responsive embed-responsive-16by9"> 
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/96Gfio4Tiz0" allowfullscreen></iframe>
 </div>