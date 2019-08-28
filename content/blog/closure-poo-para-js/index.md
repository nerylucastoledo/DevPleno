---
title: "Closure Série - POO para JS"
date: "2017-11-07"
thumbnail: "CLOSURE-790x400.png"
author: "Tulio Faria"
keywords: "dicas"
tags: ["Dicas", "Videos"]
---


Hoje vou continuar a falar sobre como passar de Programação Orientada-objetos para JavaScript cada vez mais funcional.

Uma outra coisa bastante diferente para se comparar entre ambos os paradigmas é o uso de closure. No JavaScript, anteriormente tínhamos reproduzido aquela “classe” e acabamos criando uma closure. Vamos supor que eu faça uma função dessa forma:

```jsx {numberLines: true}
function func1() {

const name = ‘tulio faria’

function func1b(){

console.log(name)

}

func1b()

}



func1
```

Em JavaScript é normal e podemos fazer uma função dentro de uma função como no exemplo acima. Você percebeu que eu consegui acessar o ‘name’? Isso é uma característica do JS. Por conseguir colocar uma função em uma variável, é possível ter funções dentro de funções. Essa função interna consegue acessar o escopo da função pai.

No cenário, vamos executar esse código todo síncrono e em seguida ele morre, porém, existe uma outra situação onde eu consigo manter esse escopo vivo. Vamos supor que eu queira passar uma saudação:

```js {numberLines: true}
function func1() {

const saudacao = ‘Ola’ +name

function func1b(){

console.log(saudacao)

}

return func1b

}



const saudarOTulio = func1(‘Tulio Faria’)

saudarOTulio()
```

Quando eu fiz isso, a func1 passou a ser uma closure porque ela travou esse escopo inteiro, nisso eu posso a qualquer momento chamar essa saudação. Existem alguns tipos de funcionalidades dentro do JS  que permitem que a gente faça alguns tipos interessantes, como por exemplo:

```js {numberLines: true}
const contador = function(num){

let atual = 1

let timer = setInterval(() => {

if (atual===num){

clearInterval(timer)

}

console.log(atual++)

}, 1000)

}

contador(5)
```

Temos um contador que está usando todas as variáveis do lado de fora e temos um contador separado. Perceba que o setInterval está usando as variáveis de fora, isso cria um enclausuramento dessas variáveis. Outra coisa importante: esse código é assíncrono, então sempre que chamamos o setInterval, colocamos isso no event loop.

 Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](http://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!


<div class="embed-responsive embed-responsive-16by9">
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Iyp4F5TRjU8" allowfullscreen></iframe>
  </div>