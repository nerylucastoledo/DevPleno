---
title: "FS-Watch - Checando mudanças em um arquivo-diretório"
date: "2017-10-17"
thumbnail: "FS-WATCH-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---

Hoje eu quero mostrar duas funcionalidades que nós temos no FS padrão no Node e que podem ajudar bastante em alguns tipos de situações, como por exemplo checar se algum arquivo de log foi gerado em um diretório ou, às vezes, um arquivo de exportação. 

Primeiramente temos uma pasta criada, nele vou criar um arquivo novo chamado fs-watch.js e fazer o seguinte:

```jsx {numberLines: true}
const fs = require(‘fs’)
```

Dentro do próprio FS eu tenho duas possibilidades: o watchFile, onde eu posso checar se um arquivo está sendo alterado:

```jsx {numberLines: true}
fs.watchFile(‘file.txt’, curr, next) => {

console.log(curr, next)

})
```

Basicamente ele vai mostrar para o que mudou em cada alteração do arquivo, por exemplo, se rodarmos ele, editar o arquivo file.txt e salvar, vai ser mostrado o que foi mudado. Se colocarmos apenas o size, podemos ver como era atualmente e anteriormente esse mesmo arquivo:

```jsx {numberLines: true}
fs.watchFile(‘file.txt’, curr, prev) => {

console.log(curr.size, prev.size)

})
```

Assim, sempre que mudarmos o número de caracteres do arquivo, ele vai mostrar o quanto nós temos agora e o quanto tinha anteriormente.

 Essa é uma das formas que temos de saber se o arquivo foi ou não alterado. O que podemos fazer com isso? Podemos, por exemplo, fazer um WatchFile simplesmente para saber se o atual é maior que o anterior, pensando em arquivos de log, geralmente colocamos no final para caso haja algum incremento no arquivo, com isso é possível saber quantos bytes foram adicionados. 
 
 Outra forma que temos de fazer é utilizando o fs.watch(). Com ele podemos checar um diretório contra mudanças:

```jsx {numberLines: true}
Fs.watch(‘./’, (changeType, file) =>{

Console.log(‘change’, changeType, file)

})
```

Ao fazermos isso, ele vai checar nesse diretório qualquer arquivo que foi alterado, assim temos bastante precisão neste tipo de operação. 

 Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](http://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!


<div class="embed-responsive embed-responsive-16by9">
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/kJxdeJ55GOI" allowfullscreen></iframe>
  </div>