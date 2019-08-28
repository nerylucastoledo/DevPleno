---
title: "NPM e Módulos de Terceiros - NodeJS Pm="
date: "2017-07-05"
thumbnail: "./NpmEModulos.png"
author: "Tulio Faria"
keywords: "node"
tags: ["Video-Tutorial"]
---

---
O Node já vem com um gerenciador de pacotes chamado NPM (Node Package Mananger), com o qual é possível gerenciar todas as dependências de pacotes, então ele é tanto um repositório de  módulos quanto uma ferramenta que já vem instalada com o Node. Se colocarmos no CMD:

```jsx {numberLines: true}
npm -v
```

Depois de ter instalado o Node, conseguimos ver a versão do NPM, no meu caso é o 3.6.0. 

Por exemplo, eu quero instalar um módulo chamado String, então coloco:

```jsx {numberLines: true}
npm install string
```

É meio estranho, mas esse módulo String tem algumas facilidades a mais. Feito isso, será mostrado a mensagem de que foi instalado, no meu caso deu um warning pois eu não tenho um package.json, mas vamos criá-lo mais tarde. 

Agora, na pasta do seu projeto, vai ser criada uma pasta node\_modules, nela fica todos os módulos que foram instalados pelo NPM, como o módulo String. Especificamente esse pacote String usamos com o S maiúsculo

```jsx {numberLines: true}
var S = require('string');
var txt = S('olá').replaceAll("o", "O').toString();
console.log(txt)
```

Usamos, por exemplo, o replaceAll, que não tem efetivamente no javaScript. Perceba que ele trocou o 'o' de minúsculo para maiúsculo. 

Quais os detalhes temos que reparar quando usamos módulos de terceiros? 

Fizemos um módulo anteriormente, e nele importávamos colocando ./, por exemplo:

```jsx {numberLines: true}
var S = require('./string');
```

Mas usamos ./ apenas quando os módulos são locais e não uma dependência externa ao seu projeto. No caso do String, que é publicado no NPM, podemos referenciar diretamente pelo nome porque o node vai procurar no módulo da sua pasta. Se não acha, ele começa a procurar nas pastas pai. 

Note que quando formos instalar uma dependência, não precisa falar para todo mundo 'olha, ele depende do String', senão toda vez que for copiar o projeto para alguém e não copiar as dependências, tem que avisar qual vamos usar. Para evitar de ter que fazer isso, conseguimos colocar um Descriptor, onde já dizemos todas as dependências que tem no projeto. 

Uma maneira bem fácil de fazer isso é utilizando o:

```jsx {numberLines: true}
npm init
```

Ele irá perguntar qual o nome do projeto, qual o description, qual o entry point (que no nosso caso é o test.js), password, author, etc. No fim, ele gera um JSON e pergunta se eu quero salvar. Então ele gera as informações do projeto ali. 

**Qual a vantagem quando eu tenho um package.json?** 

Vamos supor que eu fiz um teste com a minha lib. Se ele funcionar, então o inserimos como dependência. 

**Como fazemos isso?***

```jsx {numberLines: true}
npm install string --save
```

Além de eu instalar a dependência, também estamos salvando ele no package.json. Se abrirmos ele na área e dependência vamos ver o módulo String.

Perceba que ele tenta achar o major version e o mantém, por exemplo '3.3.1' e pode atualizar para '3.4.1'. Ele faz isso para manter seu projeto estável. Isso serve para que quando for comitar esse código no git, você não coloque os módulos, pois caso você esteja rodando no Windows, quando fizer um npm install, alguns módulos compilam algumas coisas a mais como código em C. 

Quando baixar esse código em outra máquina, você só vai rodar o NPM install. O próprio NPM vai resolver os módulos e instalar as dependências. Por isso é importante termos as dependências dentro do package.json. 

Tempos atrás, as pessoas programavam em Java e ainda não tinham tão definido alguns repositórios de dependência, então tinham que sair caçando as dependências. Atualmente, apenas com esses gerenciadores conseguimos fazer isso adicionando um descritor e isso deixa seu projeto muito mais organizado e independente de plataformas, já que não têm módulos extremamente dependentes de arquitetura. 

Confira a explicação em vídeo: 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/p6XThe7spdE" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!