---
title: "Faker - Como gerar grandes massas de dados fictícios para testes"
date: "2017-05-16"
thumbnail: "FAKER-790x400.png"
author: "Tulio Faria"
tags: ["Video-Tutorial"]
keywords: "dicas"
---


O Faker é um módulo do Node que usamos para gerar dados fictícios para testes, como para popular um banco de dados, por exemplo. Isso é muito útil quando queremos gerar uma grande massa de dados e estamos sem criatividade para gerá-la. Além disso, ele evita a utilização de dados que pareçam reais, pois eles podem gerar algum desconforto posteriormente.  A primeira coisa que você precisa fazer é instalar o módulo:

```jsx {numberLines: true}
yarn add faker
```

Vamos criar um arquivo novo. _(No meu caso, usarei o nome gen-data.js, mas pode ser qualquer nome que lhe agrade)._ :) Dentro dele faremos o seguinte código:

```jsx {numberLines: true}
const faker = require ('faker')

console.log(faker.name.firstName(), faker.name.lastName())
```

Neste código, primeiro vamos importar o módulo Faker. (Perceba que nele existem vários tipos de dados: nome, phone, random, image, etc). Vamos importar o nome por exemplo. Irá aparecer mais tipos de dados como firstName, lastName, jobArea, entre outros. Salvamos e rodamos no Node, ele nos dará um Nome e um Sobrenome aleatório. Podemos pedir para o Faker fazer isso várias vezes gerando, assim, uma grande massa de dados sem que tenhamos tanto trabalho para popular um banco de dados. Veja o exemplo abaixo.

```jsx {numberLines: true}
const faker = require ('faker')

for(let i=0; i<10; i++)

console.log(faker.name.firstName(), faker.name.lastName())
```

O Faker gera uma série dados interessantes, como:

```jsx {numberLines: true}
console.log(faker.helpers.createCard())
```

Que irá gerar uma lista com todos os dados de uma pessoa fictícia. Outro exemplo poderia ser:

```jsx {numberLines: true}
console.log(faker.internet.avatar())
```

Nele, o Faker busca uma imagem aleatória como avatar.   

Isso é diferente de gerar o loren y, pois nele geralmente há um formato padrão que começa sempre com "loren y", o que não fica muito interessante para nomes. 

Depois de utilizar o Faker, você perceberá que vai ajudar muito na hora de criar novos dados para testes de forma rápida. Confira o hands-on em vídeo

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!


<div class="embed-responsive embed-responsive-16by9">
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/bvfHQHgVzG8" allowfullscreen></iframe> 
 </div>