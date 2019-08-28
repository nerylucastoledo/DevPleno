---
title: "Factory Function em JavaScript"
date: "2017-07-20"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial", "JavaScript"]
keywords: "dicas"
thumbnail: "FACTORY-FUNCTION-790x400.png"
---


Hoje vou dar uma dica de JavaScript, mais especificamente como implementar o Patern Factory. Factory é bastante conhecido em Java, C# e outras linguagens com orientação a objeto. Nessas linguagens, retornamos uma instancia de uma classe, no JavaScript, poderíamos também, mas para ser mais funcional, podemos retornar um objeto de forma literal, ou seja, já em JavaScript. Vamos supor que eu tenha um Person Factory onde é passado o name:

```jsx {numberLines: true}
function personFactory(name){

return{

name: name,

type: 'person'

}

}

console.log(personFactory('Tulio'))

console.log(personFactory('João'))
```

Quando executarmos o código, ele vai criar um objeto novo com o nome Tulio e outro com o nome João. Então uma das funcionalidades que temos para factory é criar objetos novos. Outra coisa bacana, mas bem especifico de linguagens funcionais e até da característica do JavaScript, é que temos uma closure, então acabamos conseguindo fazer um contador, por exemplo, com um count retornando uma arrow function..

```jsx {numberLines: true}
function personFactory(name){

let count = 0

return{

count () => count++,

name: name,

type: 'person'

}

}

const tulio = personFactory('Tulio')

const joao = personFactory('João')

console.log()

console.log()
```

O primeiro count não é o mesmo que o de dentro, o de dentro é o que retornamos para a factory. Quando eu chamo o Person Factory passando o nome 'Tulio', ele vai criar um escopo novo que vai retornar somente esses dados, e junto com ele vai travar o contexto. O count vai ter o valor 0 para o objeto Tulio e depois para o objeto João, então se fizermos o seguinte:

```jsx {numberLines: true}
const tulio = personFactory('Tulio')

const joao = personFactory('João')

console.log(tulio.count())

console.log(tulio.count())
```

Assim, conseguimos manter um estado para esse objeto porque temos uma closure sem nenhum this ou coisa desse sentido, com isso não temos problema nenhum de localização. Muita gente vai falar que não conseguimos o isolamento das variáveis, só que, na verdade, conseguimos sim utilizando closure. Vamos fazer um outro teste só que ao invés de chamar de count vou chamar de opa:

```jsx {numberLines: true}
function personFactory(name){

let count = 0

return{

opa () => count++,

name: name,

type: 'person'

}

}

const tulio = personFactory('Tulio')

const joao = personFactory('João')

console.log(tulio.opa())

console.log(tulio.opa())
```

    Continua funcionando normalmente, porém se eu tentar fazer um console.log(tulio.count), que teoricamente seria o count de fora, ele apareceria undefined porque  está dentro da closure. 

Quando retornado, ele cria uma nova interface publica para o objeto e as únicas que temos é o opa, name e type. Então podemos utilizar para gerar como se fosse uma classe de uma maneira mais funcional ou quando queremos retornar um objeto com várias propriedades que queremos deixar um ou dois dinâmicos apenas, construindo uma factory de um objeto que é um pouco mais complexo. 

O factory em outras linguagens segue mais ou menos a mesma linha, a única diferença é que ele instancia realmente uma classe. Uma dica é que quando for pensar em programação funcional comece a restringir o uso do this, quanto mais longe estamos do this, mais próximo estamos da programação funcional. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!


 <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/w5rzHhGx-bw" allowfullscreen></iframe>
   </div>