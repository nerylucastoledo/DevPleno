---
title: "Fetch - Uma nova forma de fazer requisições HTTP"
date: "2017-07-27"
thumbnail: "FETCH-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "hands"
---


Neste hands on, vamos testar o Fetch, uma alternativa que vem sendo adotada e implementada nos navegadores para substituir a forma como fazíamos requisições http no browser. Já existem módulos que implementam isso no Node, o interessante é que podemos usar a mesma API para os dois lados. Quando o navegador não tem suporte, podemos usar um Polifill.

 A primeira coisa que vou fazer é adicionar como dependência no meu projeto:

```jsx {numberLines: true}
yarn add node-fatch
```

Agora precisamos importá-lo. A primeira coisa muito interessante no fetch é que ele retorna promises, com isso fica muito mais simples de trabalharmos:

```jsx {numberLines: true}
const fetch = require('node-fetch')

const url = 'http//httpbin.org.get'

fetch(url).then((res)=>{

console.log(res)

}
```

Perceba que estou dando um fetch para mandar pegar essa url e em seguida ele retorna o res. Ele retorna os resultados e também um json, que é uma promise. Então simplesmente se eu fizer:

```jsx {numberLines: true}
fetch(url)

.then((res)=> res.json())

.then((json) => console.log(json))
```

Ele vai dar o retorno do nosso httpbin, vamos passar algum parâmetro para saber se está alterando mesmo:

```jsx {numberLines: true}
const url = 'http//httpbin.org.get?t=1'
```

Perceba que o args dele virá com o t=1 Utilizando essas promises fica muito mais fácil de se fazer o código e assim podemos utilizar também outros módulos, como generator ou até mesmo fazer um post com essa mesma ideia:

```jsx {numberLines: true}
const urlPost =  'http//httpbin.org/post'

fetch(urlPost, {method: 'Post', body: 'tulio=faria'})

.then((res)=>res.json())

.then((json)=> console.log(json))
```

A única diferença é que passamos um método para ele. Ele pega esse post e mostra para mim, inclusive o data. O interessante é que conseguimos fazer o mesmo controle de erro:

```jsx {numberLines: true}
.catch((e)=>console.log(e))
```

Caso a URL esteja errada, ele vai retornar que não foi encontrada. Fica muito mais fácil de fazer essas requisições em HTTP. Como é uma promise, nós conseguimos fazer várias ao mesmo tempo, utilizar com generator, await async e por ai vai, fica bem mais organizado. 

Eu mostrei essas duas formas, post e get, mas é simples fazer as outras formas também.  Uma última coisa interessante é que, nos navegadores, ele já está disponível como window.fetch

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal ](https://www.youtube.com/devplenocom)e cadastre seu e-mail para não perder nenhuma novidade. Deixe suas dúvidas e sugestões nos comentários. Abraço!


<div class="embed-responsive embed-responsive-16by9"> 
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/z3GOk4nOf7g" allowfullscreen></iframe>
 </div>