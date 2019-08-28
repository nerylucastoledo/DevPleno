---
title: "Javascript - ES6 Default Parameters"
date: "2017-10-10"
thumbnail: "Default-Parameters-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial", "JavaScript"]
keywords: "dica"
---


Hoje vou falar um pouquinho de JavaScript, mais especificamente sobre como podemos fazer o parâmetro padrão para uma função e as alternativas que a gente tem atualmente com ES6 para esse tipo de atividade.

O que é um parâmetro padrão?

Vamos supor que temos uma função aplicarImposto, um valor e o quanto de imposto que queremos aplicar para esse valor:

```jsx {numberLines: true}
function aplicarImposto(valor, imposto){

return valor+valor\*imposto

}

console.log(aplicarImposto(100, 0.1))
```

Então estamos aplicando o imposto nesse valor. Agora vamos supor que eu não quero deixar o imposto ser obrigatório, deixando um valor padrão para ele:

```jsx {numberLines: true}
function aplicarImposto(valor, imposto){

console.log(imposto)

return valor+valor\*imposto

}

console.log(aplicarImposto(100, 0.1))

console.log(aplicarImposto(200))
```

Ao retornarmos apenas isso vai ser retornado NaN (not a number). Isso acontece porque se tentarmos checar o imposto como boolean, sabemos que ele é um falsy por ser undefined. Para corrigir isso, podemos fazer o seguinte:

```jsx {numberLines: true}
function aplicarImposto(valor, imposto){

Imposto = imposto || 0.07

return valor+valor\*imposto

}

console.log(aplicarImposto(100, 0.1))

console.log(aplicarImposto(200))
```

Se rodarmos novamente, temos o 7% em cima do 200. Mas temos um outro problema. Vamos supor que eu não queira aplicar um imposto _(por algum milagre o produto não cobre imposto):_

```jsx {numberLines: true}
console.log(aplicarImposto(100, 0.1))

console.log(aplicarImposto(200))

console.log(aplicarImposto(300, 0))
```

Repare que ele retorna 321 ao invés de 300, mesmo colocando 0 de imposto. Isso acontece porque checamos **Imposto = imposto || 0.07** como falsy, e como zero é false, ele retorna o imposto. Poderíamos contornar isso checando se o tipo da variável não é uma undefined:

```jsx {numberLines: true}
Imposto = (typeof imposto === ‘undefined’) ? 0.07 : imposto

Ainda podemos fazer de uma outra forma, com o ES6:

function  aplicarImpostES6(valor, imposto = 0.07){

return valor+valor\*imposto

}



console.log(aplicarImpostoES6(100, 0.1))

console.log(aplicarImpostoES6(200))

console.log(aplicarImpostoES6(300, 0))
```

Com isso fica um pouco mais simples, porém podemos ir um além. Vamos supor que eu tenha um adicional, posso colocar esse adicional passando um valor, ou ele é um valor vezes o imposto mais porcentagem:

```jsx {numberLines: true}
function  aplicarImpostES6(valor, imposto = 0.07, adicional = valor \* (imposto+0.1)){

return valor+valor\*imposto+adicional

}



console.log(aplicarImpostoES6(100, 0.1, 0))

console.log(aplicarImpostoES6(200))

console.log(aplicarImpostoES6(300, 0, 0))
```

No primeiro e último setei adicional como 0, então apenas no 200 ele vai aplicar os 10% além dos 7% já colocados antes. Essas são possibilidades interessantes de utilizar o default parameters no ES6, isso aumenta muito as possibilidades no nosso código.

 
 Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](http://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!


 <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/1QiaCrc-fms" allowfullscreen></iframe> 
  </div>