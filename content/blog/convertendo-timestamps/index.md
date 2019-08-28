---
title: "Módulo MS - Convertendo timestamps"
date: "2017-09-05"
thumbnail: "MS-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "hands"
---


O hands-on de hoje é bem curto, apenas para mostrar um módulo que achei bastante interessante e funciona tanto para Node quanto para Browser. Esse módulo se chama MS e faz a conversão de qualquer formato para milissegundo e vice-versa. Primeiramente precisamos adicionar as dependências:

```jsx {numberLines: true}
yarn add ms
```

Em um arquivo qualquer, no meu caso criei um chamado timestamp, vamos fazer alguns testes:

```jsx {numberLines: true}
const  ms = require('ms')
```

A forma como ele funciona é bastante interessante porque, por exemplo, se passarmos um valor inteiro para ele, ele já converte para uma string:

```jsx {numberLines: true}
console.log(ms(100000))
```

Vai ser retornado o valor de 2m. Lembrando que ao contrário ele também faz:
```jsx {numberLines: true}
console.log(ms('1d'))
```
O resultado será 86400000. Além disso, ainda podemos fazer algo bem interessante:

```jsx {numberLines: true}
console.log(ms(100000){

long: true

})
```
Assim, ao invés de falar a inicial, ele trará o nome completo 'minutes'. Isso é muito útil principalmente quando queremos saber delta de tempo, quando temos dois timestamps com milissegundos e queremos achar a diferença entre eles. 

Uma coisa bastante comum é utilizar o timestamp desde a era linux, tudo que fazemos é em relação a essa data. Só por curiosidade, eu achei o MS quando estava procurando coisas sobre JWT e uma das formas de passar a validação do token é através de uma string curta. 

 Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades.  Abraço!


<div class="embed-responsive embed-responsive-16by9"> 
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/30WpotUCUso" allowfullscreen></iframe>
 </div>