---
title: "Generators: O que há \"por baixo dos panos\""
date: "2017-05-08"
thumbnail: "GENERATORS-FUNCTIONS-790x400 (1).png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "hands"
---


Neste post, continuo falando sobre Generatiors em javaScript e como funciona ‘por baixo dos panos’.

 
**O que é um Generator?**

É uma função que podemos pausar (ou iteravel). A primeira coisa que temos que saber é que a sintaxe do generator é criada com um function e um asterisco, com isso é possível pausar esta função. Se for utilizado com CO, por exemplo, é possível transforma-la em uma função mais linear.

Primeiro vamos criar uma function generator e em seguida criar uma variavel denominada gen e chamar um generator.

```jsx {numberLines: true}
function \* generator(){
    console.log('entrou  no generator')
}
const gen = generator()
```

Percebam que nada aconteceu, por isso eu gosto de dizer que ela é iteravel, pois precisamos iterar sobre ele para que a gente consiga ter um valor e comece a executar.

**Como fazemos isso?**

Precisamos criar um const = iteration no código.

Lembrando que o next é bastante comum em outras linguagens como java que existe algumas  estruturas que são iteraveis (no Java, Iterator). Enquanto você conseguir ter um .next significa que você ainda tem dados para iterar.

```jsx {numberLines: true}
function \* generator(){
    console.log('entrou  no generator')
    console.log('segundo passo')
    console.log('fim do generator')
}
const gen = generator()
const iteration = gen.next()
```

Com isso é possível entrar no Generator. Perceba que ele executou tudo de uma vez. Agora vamos fazer da seguinte forma:

```jsx {numberLines: true}
function \* generator(){
    console.log('entrou  no generator')
    console.log('segundo passo')
    yield 'outro valor'
    console.log('penultimo')
    console.log('fim do generator')
}
const gen = generator()
const iteration = gen.next()
```

Ao testar o código, note que ele parou em ‘segundo passo’. Se dermos um console.log(iteration) ele irá retornar um value: ‘outro valor’ e um done: false, ou seja, é uma função que além de iteravel conseguimos ter vários retornos de valor.

**Se eu quiser continuar executando o que eu preciso fazer?**

Chamaremos novamente gen.next()

```jsx {numberLines: true}
function \* generator(){
    console.log('entrou  no generator')
    console.log('segundo passo')
    yield 'outro valor'
    console.log('penultimo')
    console.log('fim do generator')
}
const gen = generator()
const iteration = gen.next()
gen.next()
```

Com isso será retornado os valores em três etapas. Podemos, por exemplo, chamar uma function:

```jsx {numberLines: true}
function readFilePromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10), 2000)
}
function \* generator(){
    console.log('entrou  no generator')
    console.log('segundo passo')
    const value = yield readFilePromise()
    console.log('penultimo' value)
    console.log('fim do generator')
}
const gen = generator()
const iteration = gen.next()
iteration.value.then((val) =>{
    gen.next(val)
}
```

Afinal, o que o CO faz?

Com ele conseguimos transformar facilmente em uma função generica que resolva qualquer Generator. Por este motivo é interessante resolvermos com Promise, pois se fosse com o ReadFile comum não teríamos este retorno de valor.

 

<div class="embed-responsive embed-responsive-16by9"> 
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/H13rOIqFVPk" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Ah, fique à vontade para deixar suas dúvidas e sugestões nos comentários. Abraço!