---
title: "Async - Como Controlar Operações Assíncronas"
date: "2017-07-30"
thumbnail: "ASYNC-790x400.png"
author: "Tulio Faria"
tags: ["Video-Tutorial"]
keywords: "node"
---

O Async é um módulo que nos ajuda a controlar processamento assíncrono. Primeiramente temos que instalar o async:

```jsx {numberLines: true}
npm install async
```

Outro detalhe é que eu tenho 2 arquivos de texto, um escrito “arquivo 1” e o outro “arquivo 2”, vamos usá-los posteriormente.

Se você lembra bem, no exemplo de promises, nós escrevemos 2 arquivos e concatenou o conteúdo desses arquivos. Aqui vou fazer um exemplo um pouquinho diferente. Vou criar um vetor com o nome dos arquivos dentro:

```jsx {numberLines: true}
var fs = require('fs');

var async = require('async');

var files = \['arquivo1.txt, 'arquivo2.txt'\]
```

Vamos supor que eu tenha que ler 100 arquivos de log e processá-los, então são 100 arquivos, um atrás do outro, de operações assíncronas, esse é o grande detalhe do que vamos fazer agora. Se fosse uma linguagem síncrona, seria muito fácil.


```jsx {numberLines: true}
async.each(files, function(file, callback){

fs.readFile(file, 'utf-8', function(err, contents){

console.log(contents);

callback(null);

});

});
```

Para cada arquivo, ele irá executar uma vez o código acima, quando ele retornar o conteúdo vou escrever na tela e o async espera que você o avise quando terminou esse processamento, então temos que chamar esse callback. Nele passamos null, mas também podemos passar um error, que é o padrão de callback no Node, se esse Error for Null significa que não deu erro nenhum.

Ao rodar o arquivo, vai ser retornado arquivo1 e arquivo2. Pode acontecer do arquivo 1 terminar mais rápido que o arquivo 2 porque não estamos impondo nenhuma ordem. Para o async não importa, ele vai executar todos, mas vai respeitar a ordem das operações de IO que vão sendo resolvidas.

Um detalhe é que ele abre isso de forma paralela, então o ‘each’ é para otimizar pode abrir ao mesmo tempo. Para forçar a abrir um de cada vez, faremos o seguinte:

```jsx {numberLines: true}
async.eachSeries(files, function(file, callback){

fs.readFile(file, 'utf-8', function(err, contents){

console.log(contents);

callback(null);

});

});
```

Agora garantimos que ele vai abrir um após o outro.

O async é muito bom para fazermos esse tipo de processamento, por exemplo, podemos fazer uma busca no banco, retornar  uma sequência de registros e fazer um outro processamento com esse resultado de forma assíncrona.

Confira o vídeo:


 <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Hllw7QKsJac" allowfullscreen></iframe>
   </div>
 
 Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!