---
title: "ES6 - Async/Await"
date: "2017-05-05"
thumbnail: "Await-790x400.png"
tags: ["Dicas"]
author: "Tulio Faria"
keywords: "dicas"
---

Olá!
Neste post, falo sobre o Async/Await, uma funcionalidade que vem com o ES6 e é possível ser utilizada no Node, permitindo o aumento da qualidade do nosso código.
Obs: A versão do Node que estou rodando é a 7.7.3.
O Async/Await, assim como um generator, depende de uma promise para funcionar.

```jsx {numberLines: true}
const fs = require('fs')
const readFilePromise = (filename) = > new Promise((resolve, reject = {

}))
```

Com isso, transformamos uma função callBack, que segue a forma do Node tradicional, em uma promise, criando uma Arrow Funciton Filename, que retornará uma new Promise, passando uma nova Arrow Function para ela com resolve e reject.

  **Como fazemos isso?**
 
  Chamaremos então um readFile comum no Node, passando o nome do arquivo desejado. Em seguida, recebemos o callBack passando uma arrow function e, caso existir um erro e não for vazio, ele irá rejeitar e envia esse erro. Caso tenha dado tudo certo, será enviado o data para o solicitante:  

```jsx {numberLines: true}
const fs = require('fs')
const readFilePromise = (filename) = > new Promise((resolve, reject = {
fs.readFile(filename, (err, data) =>{
if(err){
reject(err)
}else{
resolve(data)
}
}
}))
```

Com o Arrow Function, fica muito mais simples como vocês podem ver. Para verificarmos se esta tudo OK fazemos:

```jsx {numberLines: true}
readFilePromise('arquivo.js').then( data => console.log(data.toString()))
```

Depois de testado, vamos lá. Crie uma function que terá um Async, ele irá ler o conteúdo do arquivo, e este arquivo vai ter um Await que lerá o arquivo.js:

```jsx {numberLines: true}
async function read(){
const contents = await readFilePromise('arquivo.js')
console.log(contents.toString())
}
```

Quando o código for executado, ele vai chegar até o await e vai parar até a promise ser resolvida, então vai retornar o que tiver dentro do arquivo para dentro do contents.

    **Para que serve?**
 
  Com isso, podemos, por exemplo, ler 2 arquivos seguidos apenas adicionando um novo Await no código. Dois detalhes importantes: 1. Se formos usar o Await dentro de uma função, eu tenho que marcar esta function como Async. 2. Caso haja uma rejeição da promise, o node irá retornar o erro, mas com o código quebrado, com isso temos uma maneira correta de checar os erros com o Async/Await, usando o try catch:  

```jsx {numberLines: true}
try{
async function read(){
const contents = await readFilePromise ('arquivo.js')
console.log(contents.toString())
}catch(e){
console.log('erro', e)
}
}
```

**Conclusão**
Uma coisa que percebemos muito nessa evolução do javaScript é que está ficando cada vez mais fácil de escrever código assincrono, que realmente era o calcanhar de Aquiles da linguagem, pois temos callBack hell e vários outros erros, atrapalhando a qualidade do código, então essas features novas que vem sendo adicionadas simplifica muito nossa forma de construir códigos.

Confira o vídeo:

<div class="embed-responsive embed-responsive-16by9">
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/D01xWkT2W7c" allowfullscreen></iframe>
  </div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Ah, fique à vontade para deixar suas dúvidas e sugestões nos comentários. Abraço!