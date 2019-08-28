---
title: "Chainability com Javascript"
date: "2017-11-10"
thumbnail: "CHAINABILITY-790x400.png"
author: "Tulio Faria"
keywords: "dicas"
tags: ["Dicas", "Videos"]
---

Hoje eu quero mostrar como podemos construir um pattern que é muito utilizado no Jquery. Apesar de não ser um pattern que muita gente gosta, é bastante interessante.

Vamos construir um para você ter uma ideia de como podemos fazer e também para entender um pouco da linguagem que está ali por trás.

Ele também pode ser utilizado em outras linguagens além do JavaScript.

Em jQuery, podemos fazer o seguinte:

```jsx {numberLines: true}
$('.opa').attr('', '').css('', '').click()
```

Essa possibilidade de encadear coisas relacionadas a um elemento é chamado de Chainability, isso é bastante interessante para o JavaScript.

Como podemos ter um comportamento semelhante a esse?

Vamos criar uma calculadora para você ter uma ideia de como se utiliza:

```jsx {numberLines: true}
const calculador = (initial=0) => {

const obj = {

total: initial,

add: (num) => { },

sub: (num) => { },

div: (num) => { },

mult: (num) => { }

}

return obj

}
```

A calculadora foi construída, mas até agora não temos a possibilidade de fazer esse chain. O que permite a gente fazer isso é o seguinte:

```jsx {numberLines: true}
const calculador = (initial=0) => {

const obj = {

total: initial,

add: (num) => {

obj.total+=num

return obj

},

sub: (num) => {

obj.total-=num

return obj

},

div: (num) => {

obj.total/=num

return obj

},

mult: (num) => {

obj.total\*=num

return obj

}

out: () => {

console.log(obj.total)

return obj

}

}

return obj

}
```

Só o fato de conseguirmos retornar o obj, já é possível fazer o seguinte:

```jsx {numberLines: true}
calculadora().add(10).sub(5).out
```


Assim já conseguimos saber qual é o retorno dele. A ideia do chainlability é que toda operação que ele faz ele vai retornar o próprio objeto. Isso faz muito sentido para o jQuery, já que mudamos o html de forma imperativa.

 Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](http://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!


<div class="embed-responsive embed-responsive-16by9">
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/L3dyVrLP6Ic" allowfullscreen></iframe>
  </div>