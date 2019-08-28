---
title: "3 Padrões para Iniciar com Expressões Regulares (RegExp)"
date: "2017-08-21"
thumbnail: "EXPRESSÕES-REGULARES-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---


Hoje venho trazer três padrões de expressões regulares que você pode utilizar para checar se uma string parece com algo. O que é expressão regular? É uma forma que temos de tentar achar um padrão dentro de um texto.

 Agora vou mostrar como funciona uma expressão regular utilizando três formas que são muito úteis para checar se uma string começa com alguma coisa, se ela termina com alguma coisa ou se no meio dela tem algo que pode ser alternado:

```jsx {numberLines: true}
const str1 = 'Olá DevPleno'

const pattern1 =  new RegExp('^Ol')

console.log(pattern1.test(str1))
```

Toda vez que eu uso, dentro da expressão regular, o circunflexo, eu indico que estou travando o início da string. Por exemplo, se eu quero saber se a string começa com “Olá” basta criar a expressão baseada em “Ol”. Nesse nosso caso será retornado True, pois ele começa com “Ol”. O segundo padrão que vou mostrar é quando terminamos com outro padrão:

```jsx {numberLines: true}
const pattern2 = new RegExp('DevPleno$')

console.log(pattern2.test(str1))
```

Assim ele irá retornar o True novamente, pois ele termina com “DevPleno”, caso a gente modifique e coloque, por exemplo, um 's' no fim da string vai ser retornado false. Lembrando que travamos o fim da string utilizando o $.

 Agora o último padrão. Imagine o seguinte: se quiséssemos encontrar um padrão no meio, utilizando ou um ou outro:

```jsx {numberLines: true}
const str1 = 'Olá oi DevPleno'

const pattern3 =  new RegExp('Olá (oi|tchau) DevPleno')

console.log(

'====' ,

pattern3.test('Olá Mundo')

pattern3.test('Olá oi DevPleno')

pattern3.test('Olá tchau DevPleno')

pattern3.test('Olá opa DevPleno')

)
```

Perceba que temos false para o primeiro, true para o segundo, true para o terceiro e false para o último. Esses são padrões que já podemos combinar entre eles, por exemplo, começar com o “Olá” e terminar com o “DevPleno”.

 Isso é algo muito poderoso. Essas são dicas para dar os primeiros passos se você nunca ouviu falar de expressão regular.
 
  Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal ](https://www.youtube.com/devplenocom)e cadastre seu e-mail para não perder nenhuma novidade. Deixe suas dúvidas e sugestões nos comentários. Abraço!


 <div class="embed-responsive embed-responsive-16by9"> 
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/skJE3zpaj_M" allowfullscreen></iframe>
  </div>