---
title: "Promise Race - Qual promise resolve/rejeita primeiro"
date: "2017-09-26"
tags: ["Dicas", "Video-Tutorial"]
thumbnail: "./PromiseRace.png"
author: Tulio Faria
keywords: "dicas"
---

---
Hoje quero mostrar uma funcionalidade que chamada Promise.race. Ela vai receber uma lista de promises no JavaScript e ele vai retornar apenas uma dessas promise: a que rejeitar ou resolver primeiro. Vamos criar uma função que é uma promise:

```jsx {numberLines: true}
const p = (time, name) => {
    return new Promise((resolve, reject) => {
        setTimeOut(() => resolve(time + ‘ ‘+ name), time)
    })
}
p(100, ‘opa’).then( e => console.log(e))
```

Ao rodar esse código, ele retorna opa depois de 100ms. Agora vamos criar uma lista chamada de OS, e dentro dela faremos uma lista de promises:

```jsx {numberLines: true}
const os = \[
    P(100, ‘opa’),
    P(200, ‘opa2’)
\]
Promise.race(os).then( e=> console.log(e))
```

Ao rodar, vai trazer a primeira promise, isso não quer dizer que ele pare a operação do outro. Ele continua executando, porém não retorna para o resultado, mesmo se rejeitarmos. Obviamente é o contrário do Promise.all, que é quando retornamos todos:

```jsx {numberLines: true}
Promise.all(os).then( e => console.log(e))
```

Assim vamos ter todos os retornos, ao contrário do race. 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Z_paUYXjqCI" allowfullscreen></iframe>
</div>

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](http://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!