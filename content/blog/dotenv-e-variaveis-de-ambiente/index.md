---
title: "Dotenv e variáveis de ambiente no NodeJS"
date: "2017-08-23"
thumbnail: "VARIÁVEIS-DE-AMBIENTE-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---


Hoje eu tenho duas dicas, como podemos configurar uma aplicação sem precisar alterar o código fonte. Essa é uma boa prática, apesar de muita gente ainda não usar, então quero reforçar o conceito de como podemos fazer isso. A ideia é que o sistema fique immutable e que a gente construa esse artefato no sistema e se colocarmos em uma máquina de desenvolvimento, ele vira desenvolvimento, em uma máquina de produção vai virar produção, isso baseado somente em variáveis de ambiente. Como pegamos uma variável de ambiente?

```jsx {numberLines: true}
console.log(process.env.NODE\_ENV)
```

Ao rodar, perceba que vai dar undefined, porém se fizermos:

```jsx {numberLines: true}
NODE\_ENV- production node test.js
```

vamos ter uma variável de ambiente production. Porém se rodar de novo, ele volta para undefined, então quando definimos essa variável ele carrega de forma automática qual banco conectar e qual usuário. Isso fica no ambiente e não mais na aplicação. Mas se toda vez que formos desenvolver tivermos que lembrar as informações, é bastante trabalhoso, correto? Então podemos utilizar um módulo que se chama Dotenv, onde criamos um arquivo com uma variável de ambiente que a gente quer e ele carrega automaticamente:

```jsx {numberLines: true}
yarn add dotenv
```

Já no nosso script, vamos fazer o seguinte:

```jsx {numberLines: true}
require('dotenv').load()
```

Assim carregamos o arquivo .env Agora vamos criar um arquivo na raiz do projeto chamado .env, nele vamos colocar o nome da variável que a gente quer, por exemplo:

```jsx {numberLines: true}
NODE\_ENV=tulio
```

Ao rodar novamente percebam que agora vai ser retornado 'tulio'. A ideia é que, na máquina de desenvolvimento, você vai criar o arquivo .env com todas as variáveis que você precisa para rodar na máquina e quando você colocar no servidor, vão ser colocadas essas variáveis no ambiente e não mais no arquivo. Podemos também, se ele estiver em produção, evitar que ele acesse o ambiente de desenvolvimento:

```jsx {numberLines: true}
if(process.env.NODE\_ENV !== 'production'){

require('dotenv').load()

}
```

Quando começamos a utilizar essas técnicas, a nossa aplicação fica muito mais independente, rodando em qualquer lugar, basta que você informe qual a configuração de banco de dados, Mongo, SQL, etc e ela vai se moldar para cada ambiente.

 Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal ](https://www.youtube.com/devplenocom)e cadastre seu e-mail para não perder nenhuma novidade. Deixe suas dúvidas e sugestões nos comentários. Abraço!


 <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/KOYQDxaL9ag" allowfullscreen></iframe>
   </div>