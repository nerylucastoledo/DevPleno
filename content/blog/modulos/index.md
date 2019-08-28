---
title: "NodeJS Primeiros Passos: Módulo em NodeJS"
date: "2017-05-30"
thumbnail: "./Modulos.png"
tags: ["Video-Tutorial"]
author: "Tulio Faria"
keywords: "nodejs"
---

---
**O que é Módulo em NodeJS?** 

É um script php no qual você consegue incluir em um outro script. É uma maneira bem tradicional de se organizar as partes funcionais do código. 

Vamos fazer um teste simples apenas para testar o require, que é a forma de importar esse módulo. 

Crie um novo arquivo no Node e coloque um nome qualquer, o meu será modulo01.js, esse arquivo será meu módulo, dentro dele terá:

```jsx {numberLines: true}
console.log('Dentro do modulo');
```

Salve e crie um novo arquivo chamado app.js. Nele vamos fazer o seguinte:

```jsx {numberLines: true}
require('./modulo01')
```

Ao executar o app.js, o require chama o modulo01 e apresenta a frase do nosso arquivo modulo01.js 

O interessante nessa forma de gerir os módulos no node é que seria como se ele estivesse em uma closer como uma self invoking, porque ele isola o nosso escopo inteiro. 

Para fazermos uma funcionalidade um pouco melhor, podemos falar para esse módulo exportar, por exemplo, um contar:

```jsx {numberLines: true}
var contador = 0;
module.exports.contar = function(){
    contador++;
    console.log(contador);
}
```

Com isso estamos expondo um pedaço do nosso módulo para o que está externo, criando uma pequena interface chamada contar.

Quando fizermos o require do módulo no app.js, podemos atribuir ele a uma variável:

```jsx {numberLines: true}
var m1 = require('./modulo01')
m1.contar();
```

Assim o m1 recebe uma self invoking e conseguimos ter acesso ao contar que expomos para o que está externo. 

Um exemplo que podemos fazer é o seguinte:

```jsx {numberLines: true}
var m1 = require('./modulo01')
m1.contar();
var m2 = require('./modulo01')
m2.contar();
```

O require só é executado uma vez. Mesmo sendo executado duas vezes, a primeira vez que ele executar a self invoking function vai ser mantida. Esse comportamento é semelhante ao singleton do java e c#, por exemplo. 

Vamos criar um novo arquivo modulo02 e um app02, no módulo 2 terá um exemplo um pouco diferente, ao invés de deixar ele criar o escopo como quiser, eu vou criar o modulo02 dentro de uma variável e criar minha própria function, ou seja, vou criar um escopo só para esse módulo:

```jsx {numberLines: true}
var modulo02 = function(initialValue){
    var contador = initialValue;
    return{
        contar: function(){
            contador++;
        },
        escrever: function(){
            console.log(contador);
        }
    }
}
module.exports = modulo02;
```

Essa variável contador é semelhante a um atributo da classe de forma privada, ou seja, não está disponível de forma global, com isso podemos 'explicitar' uma interface que queremos que todos os outros enxerguem, retornando um objeto com duas funções. 

A primeira vai só incrementar, a segunda function só escreve e finalmente vamos expor o nosso módulo todo para o 'mundo'. 

Agora, indo para o app02.js, faremos o seguinte:

```jsx {numberLines: true}
var m1 = require('./modulo02');
```

Se fizermos apenas isso, perceba que a function será retornada mas não vai executar a função, então temos que passar o valor inicial que eu quero:

```jsx {numberLines: true}
var m1 = require('./modulo02')(1);
var m2 = require('./modulo02')(2);
m1.contar();
m2.escrever();
```

Fazendo isso, isolamos os 2 módulos através de uma closer, que é muito semelhante a uma classe. 

Teríamos atributos, métodos públicos e métodos privados, pois como eu não exponho ele, então seria visível em um mesmo escopo.

```jsx {numberLines: true}
var modulo02 = function(initialValue){
    //atributos
    var contador = initialValue;
    //metodo privado
    var ooo = function(){
    }
    //metodos publicos
    return{
        contar: function(){
            contador++;
        },
        escrever: function(){
            console.log(contador);
        }
    }
}
```

Isso seria um constructor porque ele consegue definir os valores iniciais e seria executado quando instanciamos o módulo. 

Essa é uma das maneiras que temos de organizar módulos, vamos falar mais sobre isso posteriormente. 

Confira a explicação completa em vídeo: 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/9yX4ifWa0YU" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!