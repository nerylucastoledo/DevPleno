---
title: "ES7 Array Includes"
date: "2017-10-10"
thumbnail: "ES7-ARRAY-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial", "JavaScript"]
keywords: "dica"
---


Na dica de hoje, quero falar um pouco sobre o ES7 e uma funcionalidade que foi adicionada ao vetor. Primeiramente vou mostrar como fazemos comumente em ES6 e ES5, seguido de como podemos começar a fazer no ES7 citando sua vantagem. Vou criar um vetor:

```jsx {numberLines: true}
const nums = \[1,2,3,4\]
```

Se quiséssemos checar se um valor está ou não dentro desse vetor, faríamos normalmente, checaríamos se o índice não é -1:

```jsx {numberLines: true}
console.log(nums.indexOf(4) != -1)
```

Com isso, quando ele não encontrar, vai ser retornado -1. O problema do indexOf falha quando tentamos buscar por NaN (not a number). Já com o includes, é possível checar e buscar dentro dele se temos o valor:
```jsx {numberLines: true}
console.log(nums.includes(NaN))
```

Com isso, conseguimos buscar o NaN de uma forma mais coesa. Outra coisa que ganhamos com isso é que o nosso código fica mais legível, já que não fazemos mais “gambiarra”, afinal estamos apenas checando se ele inclui ou não, isso de maneira funcional.

  Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](http://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!


 <div class="embed-responsive embed-responsive-16by9"> 
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ZwJ8\_kJdvmk" allowfullscreen></iframe> 
 </div>