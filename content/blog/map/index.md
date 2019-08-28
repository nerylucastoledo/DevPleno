---
title: "High-order Function MAP"
date: "2017-06-27"
tags: ["Dicas", "Video-Tutorial"]
thumbnail: "./MAP.png"
keywords: "dicas"
author: Tulio Faria
---

---
Hoje vamos continuar falando sobre programação funcional e High Order Functions, alguns tipos específicos que já vêm com o JavaScript, o primeiro que vamos falar é o MAP, ele transforma os dados ou cada item de um vetor. Vou mostrar um exemplo para ficar mais fácil:

```jsx {numberLines: true}
const vetor = \[{id: 1, nome: 'Bicicleta', categoria: 1}
{id: 2, nome: 'Toca de natação', categoria: 2}\]
vetor.map( function(item){
    console.log(item)
    return item
})
```

Esse MAP que utilizamos é uma High Order Function porque ela aceita uma função e retorna alguma coisa. Ela fica mais interessante quando utilizamos uma Arrow Function porque conseguimos reduzir o código:

```jsx {numberLines: true}
vetor.map( (item) =>{
    console.log(item)
    return item
})
```

Então, uma das utilidades do MAP é apenas fazer ele passar pelos itens do vetor. Em React, é muito comum renderizar uma lista de valores na tela dessa forma. A segunda forma é realmente transformar esse vetor, mapear cada valor desse para uma coisa diferente. Para complementar, vamos fazer um exemplo: 

Vou criar um outro vetor no qual utilizaria a função para retornar algo específico como só o nome dos itens.

```jsx {numberLines: true}
const vetor2 = vetor.map( (item) =>{
    return 'Nome: '+item.nome
})
console.log(vetor2)
```

Então eu estou transformando esse vetor1 em um vetor que só tem nome, poderíamos fazer um cálculo ou algo do tipo. Podemos simplificar ainda mais o código:

```jsx {numberLines: true}
const vetor2 = vetor.map(item=>item.nome)
console.log(vetor2)
```

Se fossemos fazer sem utilizar o MAP, teríamos que utilizar um _for_ e isso daria bem mais trabalho. Uma outra ideia que podemos ter é, por exemplo, definir quais são as categorias que eu tenho e que a gente atribua um item a mais, trocando o ID da categoria pelo nome:

```jsx {numberLines: true}
const categoria ={
    1: 'Bicicletas',
    2: "Natação'
}

const vetor2 = vetor.map(item=> {
    item.categoria = categorias\[item.categoria\]
    return item
})

console.log(vetor2)
```

Essas são algumas ideias do que podemos fazer com o MAP, é bastante interessante utilizar isso porque a gente consegue fazer uma sequência de transformações dos dados que provavelmente consiga resolver boa parte dos problemas nos sistemas convencionais. Lembrando que no caso acima ela é uma função pura porque depende exclusivamente dos parâmetros que vêm pra ela, então isso a deixa mais fácil de ser testada, consequentemente a qualidade do código aumenta. 

Confira o vídeo: 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Ax101agfFB0" allowfullscreen></iframe>
</div>   

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!