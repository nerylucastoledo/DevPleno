---
title: "JavaScript: Apply"
date: "2017-05-24"
thumbnail: "./Apply.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---


Hoje vou falar um pouco sobre o Apply em JavaScript e mostrar um exemplo de como podemos utilizá-lo para calcular o menor e o maior valor em um conjunto de dados. Primeiramente vamos fazer um teste: criar uma função e se chamar a funTeste junto com o this, virá o contexto de onde a função está sendo executada.

```jsx {numberLines: true}
Function funTeste(at1, at2){
    console.log(this, at1, at2)
}
funTeste(1,2)
```

Porém, ao invés defazer funTeste e executar, podemos fazer um apply, e dentro dele podemos fazer, por exemplo:

```jsx {numberLines: true}
funTeste.apply(1, \[2,3\])
```

O primeiro atributo do apply (um), é o que eu quero para o this, ou seja, em qual contexto eu quero que essa função seja executada, e o segundo atributo são os valores que eu quero dar para os parâmetros que a função espera. 

Se executarmos novamente, o resultado virá: \[Number: 1\] 2 3, referente ao número 1, e o 2 e 3 referentes aos atributos 1 e 2. 

Mais alguns testes seguindo essa ideia:

```jsx {numberLines: true}
Function funTeste(at1, at2){
    console.log(this, at1, at2)
}
console.log(Math.min(98, 78, 50))
```

Ao executar o número retornado, será 50, pois 50 é o menor valor daquele conjunto de dados. 

**O interessante no apply** 

Note que não estamos passando um vetor de valores e sim com vírgula, como se fossem vários atributos. Podemos utilizar o apply para que possamos passar um vetor onde tiver uma função que recebe uma lista de parâmetros. 

Exemplo: Vamos passar um vetor em que quero descobrir o menor dos valores. A forma mais fácil é utilizando o apply.

```jsx {numberLines: true}
Function funTeste(at1, at2){
    console.log(this, at1, at2)
}
const vetor1 = \[89, 70, 50, 48\]
console.log(Math.min.apply(Math, vetor1))
```

O Math é o meu this, pois o que estiver dentro dele como contexto está ótimo. 

Podemos fazer a mesma coisa com o valor máximo apenas trocando o min por max:

```jsx {numberLines: true}
console.log(Math.max.apply(Math, vetor1))
```

Com o apply, podemos adaptar como vamos executar a função e também é uma forma de manipular em qual contexto essa função está sendo executada, assim como o bind. Ela é muito útil quando precisamos converter ou passar atributos para a função como vetor ao invés de individualmente. 

Confira o vídeo: 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/_IiC50zIUlY" allowfullscreen></iframe>
</div> 

Deixe seu comentário.  Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!