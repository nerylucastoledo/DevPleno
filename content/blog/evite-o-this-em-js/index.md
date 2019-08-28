---
title: "Evite o this em JavaScript"
date: "2017-07-03"
thumbnail: "javascript-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial", "JavaScript"]
keywords: "dicas"
---


Venho programando cada vez mais de forma funcional e muitas coisas que víamos com preconceito começamos a entender o porque faz sentido ser da forma que é. Toda vez que você for pensar em utilizar o 'this' em JavaScript pense 10 vezes antes, porque toda vez que tem um 'this' você tem um estado interno nesse componente ou classe caso fossemos utilizar ES6.

 **Qual o problema disso?** Se eu estou utilizando o 'this', naturalmente esse método já não é mais puro.
 
  **O que é uma função pura?** É uma função que depende exclusivamente da entrada dela para ter um retorno. Então, ao utilizar o this dentro do seu componente, pense melhor, pois ele não é funcional e isso vai atrapalhar o seus testes. Por exemplo, podemos utilizar o exemplo que fizemos anteriormente do [React recursivo](https://www.devpleno.com/renderizar-estruturas-em-formato-de-arvore/), que fizemos utilizando uma functional stateless component, ou seja, um componente em React, que é uma closer. No exemplo, foi criado com uma arrow function e retorna JSX, nela eu não tenho 'this' e sim o contexto onde posso guardar algumas variáveis.

```jsx {numberLines: true}
const Node = (props) =>{

return(

<span>

{ props.node.l && props.node.r && <span>(</span> }

{ props.node.l && <Node node={props.node.l} /> }

{ props.node.v }

{ props.node.l && props.node.r && <span>)</span> }

</span>

)

}
```

Com isso, é possível saber qual o resultado esperado, ou seja, consigo testar esse componente de uma forma muito melhor. Prefira sempre utilizar uma closer, arrow function ou functional stateless component onde não se tem o 'this'.

 Uma coisa interessante é que quando você começa a ficar mais ciente para isso, naturalmente, no caso do React, você começa a construir os componentes dessa forma e evita alguns deslizes.

  Isso deixa muito mais fácil manutenção, testabilidade e etc. Principalmente se houver outro método e nesse método você usa o 'this' tem que se criar um construtor, deixando o código muito mais verboso.

   Obviamente tem algumas situações que não conseguimos não utilizar, inclusive temos alguns exemplos anteriores que criamos utilizamos o 'this' dentro de um componente só e depois replicamos esse state do componente para frente através de uma passagem props.

 <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ACZi0KRIsoc" allowfullscreen></iframe> 
  </div>

 Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e cadastre seu e-mail para não perder nenhuma novidade. Deixe suas dúvidas e sugestões nos comentários. Abraço!
    
    