---
title: "CHAVES DINÂMICAS"
tags: ["Dicas", "Videos"]
author: "Tulio Faria"
date: "2017-11-23"
thumbnail: "CHAVES-DINÂMICAS-790x400.png"
keywords: "dicas"
---

Hoje eu quero comentar uma novidade no ES6, mostrando a forma de como faríamos isso anteriormente. A partir do ES6, conseguimos inicializar um objeto JavaScript passando uma Key dinâmica, mas anteriormente nós conseguiamos fazer isso apenas posteriormente, ou seja, tínhamos que criar o objeto para depois conseguir alterá-lo.

Anteriormente fazíamos dessa forma:

```jsx {numberLines: true}
const obj = {

a: 1

}

obj['b'] = 2

console.log(obj)

```

Porém, assim não tínhamos um jeito de fazer dinamicamente. Inspirado por essa forma de construir, o ES6 trouxe essa novidade, onde podemos fazer isso já de começo. Se eu quisesse colocar esse 2 na inicialização do objeto, eu poderia fazer simplesmente:

```jsx {numberLines: true}
const obj = {

a: 1

['b']: 2

}

console.log(obj)

```

Assim já inicializamos esse objeto com o key dinâmico, coisa que não era possível no ES6. É muito interessante eles aproveitarem o property accessor já na inicialização.


 Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](http://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!

<div class="embed-responsive embed-responsive-16by9"> 
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/V-lJhz4gyFs" allowfullscreen></iframe>
 </div>