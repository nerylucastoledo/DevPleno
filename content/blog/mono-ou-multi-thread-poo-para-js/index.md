---
title: "Mono ou multi thread - POO para JS"
date: "2017-11-06"
thumbnail: "./MonoOuMulti.png"
author: "Tulio Faria"
tags: ["Video-Tutorial"]
keywords: "javascript"
---

---
Hoje vou continuar falando um pouco mais sobre como podemos fazer a transição de uma linguagem orientada-objeto, como PHP ou Java, para JavaScript cada vez mais funcional. 

Mais especificamente vamos falar sobre “processamento concorrente”, entre aspas, porque hoje, com vários núcleos, nós conseguimos ter um processamento praticamente concorrente. Quero mostrar um problema que é muito comum quando a gente quer exercitar concorrência em linguagens POO. Principalmente em Java, trabalhamos muito com isso para mostrar essa concorrência. 

O que fazemos com concorrência em Java? 

Nós criamos o que chamamos de threads, que é uma linha de execução. Por exemplo, se eu criar algo 

como:

```jsx {numberLines: true}
const a =  1
const b = 10
```

Essa linha de execução em Java, por ser uma linguagem síncrona, então eu posso travar a linha de execução.  Para evitar que isso aconteça, nós criamos uma nova thread. 

É muito comum nessas linguagens termos um while(true) checando se algo chegou, como por exemplo conexão de socket. Ela tem suas vantagens e suas desvantagens, mas ela tem um limite onde acabamos tendo alguns problemas para gerenciar essas threads. 

Já o JavaScript é mono-thread, com isso ele não mantém várias linhas de execução em paralelo, e sim mantém uma estrutura que vai ser executada depois. Por exemplo:

```jsx {numberLines: true}
const a =  1
const b = 2
```

Quando executamos essa linha de código em JavaScript, ele entra em algo que chamamos de event loop. É como se fosse uma caixa onde colocamos coisas lá dentro, tudo que vai para ela podemos desempilhar depois. É assim que ele consegue lidar com várias coisas ao mesmo tempo. 

Por que isso é tão importante? 

Principalmente no navegador, essa característica do JavaScript permite que a gente não bloqueie a tela. É muito comum em Java por exemplo, se você não criar uma thread nova e clicar em um botão swing, ao passar o mouse em cima da interface, ela fica com loading. Em JavaScript isso não acontece porque um dos stacks que ele tem é o de processamento gráfico, então ele não deixa acontecer se utilizarmos as boas práticas. 

Para evitar que nosso programa trave no tempo que está executando uma linha de código, podemos utilizar o seguinte:

```jsx {numberLines: true}
const fs = require('fs')
const a = 1
const b = 2
console.log('inicio')
fs.readdir('./', (err, files) => console.log(files))
console.log('fim')
```

Com isso o resultado é que o início e fim virão antes do readdir. Ela vai ser empilhada no event loop e quando acabar a execução, vai sair da pilha. 

Agora vamos supor que eu tenho uma operação um pouco pesada, temos uma forma de mandar para o event loop utilizando o setTimeOut(() => console.log('event loop'), 0) e ao invés de passar um tempo, se passarmos zero vamos empilhar isso dentro do event loop. 

Para fechar, vamos fazer um problema conhecido como Produtor-Consumidor, esse é um problema muito recorrente que utilizamos para aprender essa forma de lidar com várias threads em Java. 

Temos uma função producer, que é a que produz, e uma função consumer, onde consome algo:

```jsx {numberLines: true}
const stock = \[\]
function producer(){
}
function consumer(){
}
```

Então, quando eu produzo, jogo em stock e o consumidor irá consumir do stock. O problema é que essas duas functions rodam separadamente, se fossemos fazer isso em Java, teríamos que ter duas threads. Para simular essa questão em JavaScript:

```jsx {numberLines: true}
const stock = \[\]
function producer(){
    console.log('producer')
    setTimeOut(producer, Math.ceil(Math.random()\*3000))
}
function consumer(){
    console.log('consumer')
    setTimeOut(consumer, Math.ceil(Math.random()\*3000))
}
```

Lembrando que o math.random retorna um número de 0 a 1, em seguida vamos multiplicar pelo valor máximo e arredonda para cima. 

Com isso vamos mandar produzir pelo menos um e começar a consumir:

```jsx {numberLines: true}
producer()
consumer()
```

Agora, quando quisermos produzir, vamos colocar no stock:

```jsx {numberLines: true}
const stock = \[\]
function producer(){
    console.log('producer', stock.length)
    stock.push(Math.random()\*100)
    setTimeOut(producer, Math.ceil(Math.random()\*3000))
}
```

Agora eu preciso consumir esse valor:

```jsx {numberLines: true}
function consumer(){
    const item =  stock\[stock.length-1\]
    stock.splice(stock.length-1, 1)
    console.log('consumer', stock.length)
    setTimeOut(consumer, Math.ceil(Math.random()\*3000))
}
```

Se tentarmos consumir e não tiver no estoque, não vai dar certo, então podemos fazer o seguinte:

```jsx {numberLines: true}
function consumer(){
    if(stock.length===0){
        console.log('não foi possível consumir')
    } else {
        const item =  stock\[stock.length-1\]
        stock.splice(stock.length-1, 1)
        console.log('consumer', stock.length)
    }
    setTimeOut(consumer, Math.ceil(Math.random()\*3000))
}
```

Com isso temos uma sensação de que estão trabalhando separadamente, mas na verdade estamos empilhando e depois desempilhando após um tempo aproximado. 

Por que é importante saber que isso acontece? 

Porque basicamente qualquer operação pesada acontece de forma assíncrona. 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/iGV8gjzx3to" allowfullscreen></iframe>
</div>

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](http://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!