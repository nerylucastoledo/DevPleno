---
title: "Escopos e Closures - NodeJS Primeiros Passos"
date: "2017-05-25"
thumbnail: "ESCOPUS-E-CLOSURES-790x400.png"
author: "Tulio Faria"
keywords: "dicas"
tags: ["Dicas", "Video-Tutorial", "Videos"]
---

Entender Escopos e Closures do JavaScript  é muito importante para conseguir avançar no NodeJS. Primeiramente tenho um diretório criado com nossos exemplos. Vou criar um arquivo novo e mostrar um exemplo básico:

```jsx {numberLines: true}
var a = 10;

console.log(a);

ou simplesmente:

a = 10;

console.log(a);
```

Perceba que tem apenas uma declaração de variável e o console.log para fazer a saída dela, ou seja, escrever a variável no console. Se rodarmos este script, teremos o retorno 10. Esse tipo de variável está sendo criada no escopo Global, mas o que é interessante nisso? Se eu fizer um function de incrementação a ela, terei um segundo escopo.

```jsx {numberLines: true}
var a = 10;

function inc(){

a++;

}

inc();

console.log(a);
```

Esse segundo escopo consegue enxergar o escopo de fora. Podemos manipular as variáveis do lado de fora. Embora pareça vantagem, em alguns momentos pode atrapalhar o escopo principal. Logo acima, fizemos uma versão sem a variável var. Quando não colocamos o var, não travamos o escopo dela.

```jsx {numberLines: true}
var a = 10;

function inc(){

a++;

b = 11;

}

inc();

console.log(a, b);
```

Se fizermos como no exemplo acima, o segundo escopo já morreu, mas mesmo assim vai sair o valor de b, pois conseguimos escrever o b fora do escopo definido a ele. Então, quando criamos arquivos JavaScript que fazem esse tipo de coisa, estamos sujando o escopo global, e isso não é algo que desejamos fazer.

 **Por que?** Vamos supor que exista um outro trecho de código que dependesse desse b, então a função 'inc' estaria alterando essa variável que está no contexto global podendo alterar o comportamento do código, isso para achar bug é extremamente difícil.
 
  **O que podemos fazer para isso não acontecer?** Uma das coisas que podemos utilizar é guardar a variável sendo válida apenas dentro do escopo, utilizando o var, por exemplo:

```jsx {numberLines: true}
function inc(){

a++;

var b = 11;

}
```


Com isso, travamos a variável apenas para o escopo definido. Temos um tipo de escopo que chamamos de Self involking function, onde temos um parenteses e colocamos uma função anônima dentro.

```jsx {numberLines: true}
(function(){

var a, b = 1;

console.log(1);

})();
```

Perceba que existe um abrir e fechar parênteses no fim, assim, estamos 'chamando' a função. Sem isso, nada acontece. 

**Qual a vantagem de fazermos códigos dentro de uma Self Involking function?** Tudo que fizer lá dentro, como var a, b = 1, não estará sujando o escopo global, além disso, caso eu queira alterar o escopo dentro não consiguirá, as únicas que conseguem são as que estiverem dentro do self involking. Uma outra coisa interessante no JavaScript é que podemos fazer é a seguinte:

```jsx {numberLines: true}
(function(){

var a = 10;

function inc(){

a++;

}

inc();

console.log(a);

})()
```

Assim o escopo é realmente isolado. Note que o escopo filho (a++) busca o valor do escopos pai. Isso nos permite fazer, por exemplo, um contador tentando imitar um comportamento de singleton, ou seja, mantendo uma função só de uma classe. Como não temos classe, podemos simular algo semelhante.

```jsx {numberLines: true}
var conta = (function(){

var contador = 0;

return function(){ contador++; console.log(contador); }

}();

conta();

conta();

conta();
```

Pegamos essa função e jogamos dentro de uma variável.

 **O que aconteceu ali?** A var 'conta' vai receber a self invoking function, que retorna automaticamente uma outra function, e como ela está dentro do escopo, é possível acessar o escopo pai. O javaScript mantém esse escopo mesmo quando a função deixou de ser executada, e então temos um comportamento parecido com o singleton. Quando uma função tem acesso a uma variável do escopo pai mesmo depois que acabou de ser executada, chamamos de Closer. Mais um exemplo:

```jsx {numberLines: true}
var conta = (function(){

var contador = 0;

return {

contar = function(){

contador++;

},

out: function(){

console.log(contador);

}

}

}();

conta.contar();

conta.out();

conta.contar();

conta.out();
```

Complicando um pouco mais, podemos fazer essa Self Invoking function retornar um objeto com duas funções dentro. Então ele contou a primeira, deu um out, contou a segunda e deu outro out.

 Podemos fazer algumas composições e organizações de código muito interessantes apenas utilizando esse tipo de construção. Confira a explicação em vídeo
 
  Dúvidas? Deixe nos cometários! :) Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!


  <div class="embed-responsive embed-responsive-16by9"> 
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Xexyc2J-Di0" allowfullscreen></iframe>
   </div>