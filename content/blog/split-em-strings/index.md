---
title: "Dicas utilizando o Split em Strings"
date: "2017-10-05"
thumbnail: "./SplitString.png"
author: Tulio Faria
tags: ["Dicas", "Video-Tutorial"]
keywords: "Dicas"
---

---
Na dica de hoje quero mostrar alguns ‘macetes’ que podemos fazer com o Split, uma função de uma String em JavaScript. 

Primeiramente o que é Split? Ele divide uma String em partes, por exemplo:

```jsx
const str: ‘Tulio Faria’
const parts = str.split(‘ ’)
console.log(parts)
```

Com isso, criamos um vetor com o nome e o sobrenome. O interessante disso é que podemos combinar ele com algumas coisas, por exemplo, com o join:

```jsx
const parts = str.split(‘ ’).join(‘====’)
```

Assim o resultado seria Tulio===Faria. Em algumas situações, é possível fazer alguns processamentos mais inteligentes com essa técnica. 

Além disso podemos parar de utilizar expressão regular, afinal aqui usamos somente a string pura. Outra coisa interessante é que podemos utilizar até mesmo arrow functions, vamos supor que eu quisesse, por exemplo, fazer o seguinte:

```jsx
const str: ‘Tulio 0 Faria’
const parts = str.split(‘ ’).filter( p => p!= ‘0’)
```

Assim conseguimos remover o zero do meio da String. São algumas combinações bastante legais, principalmente quando começamos a cascatear ou fazer um link de uma para outra. 

Outro ‘macete’ interessante é o seguinte: se eu der um Split em espaço, ele divide letra a letra:

```jsx
.split(‘ ‘)
```

Assim poderíamos, por exemplo, tirar as vogais:

```jsx
const vogais = ‘aeiou’.plit(‘ ’)
.split(‘ ‘).filter( letra => vogais.indexOf(letra)<0)
```

Com isso retornamos apenas as consoantes do meu nome. 

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/3d-wAbwJKtk" allowfullscreen></iframe>
</div>

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](http://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!