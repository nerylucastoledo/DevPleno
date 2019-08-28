---
title: "Cheerio"
date: "2017-08-14"
thumbnail: "CHEEERIO-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Videos"]
keywords: "hands"
---


Cheerio é um módulo muito interessante porque é uma implementação do jQuery para Node. Vou criar um arquivo novo para ilustrar melhor. Vou salvar como cheereio.js e colocá-lo como dependência, mas para isso é preciso instalar ele primeiro:

```jsx {numberLines: true}
npm install cheereio
```

e dentro do arquivo faremos o seguinte:

```jsx {numberLines: true}
const cheerio  = require('cheereio')

let $ =  cheerio.load('<ul><li>1</li><li>2</li></ul>')
```

A partir desse momento, o Cheerio vai carregar esse HTML que coloquei dentro e permitir que eu navegue ou faça tudo que eu faria com jQuery no HTML. Por exemplo, eu posso pedir para pegar todos os li e caminhar por eles, depois escrever na tela:

```js
$('li').each(function(){

console.log($(this).html())

})
```

Ao rodar, ele irá retornar o 1 e 2. Podemos alterar o HTML também, vamos supor que eu queira adicionar mais um li:

```js {numberLines: true}
$('ul').append('<li>3</li>')

$('li').each(function(){

console.log($(this).html())

})
```

Com isso eu consigo manipular o HTML exatamente como se estivesse no jQuery ou no browser. Eu poderia pegar esse código, voltar para o request e, ao invés de escrever o site da UOL na tela, jogar o Body dentro. Vamos supor que eu quero saber qual o título do site:

```js {numberLines: true}
const request = require('request')

const cheerio  = require('cheereio')



request('http://www.uol.com.br' , function(err, res, body{

if(!err && res.statusCode == 200){

let $ =  cheerio.load(body)

$('tittle').each(function(){

console.log($(this).html())

})

}

})
```

Então o request buscou o HTML, trouxe para o Cheerio, mandei ele carregar e fizemos um transversing e caminhei pelo HTML. Posso fazer ele trazer todos os p's do site da uol:

```js {numberLines: true}
$('p').each(function(){

console.log($(this).html())

})
```

O Cheerio não é um browser completo, então vai permitir que você apenas navegue pelo HTML, isso é muito legal para fazermos um crowler, por exemplo, podemos acessar um outro site como se fosse um navegador e escolher a informação que a gente quer, usando seletores do próprio jQuery.

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal ](https://goo.gl/VBU2PR)e cadastre seu e-mail para não perder as atualizações.


<div class="embed-responsive embed-responsive-16by9">
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/j6dSq6k5Q6g" allowfullscreen></iframe>
  </div>