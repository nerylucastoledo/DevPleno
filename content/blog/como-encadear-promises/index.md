---
title: "Como encadear promises"
date: "2017-08-31"
thumbnail: "ENCADEAR-PROMISES-1-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---


Na dica de hoje, vamos continuar falando sobre promises. Vou mostrar um detalhe na promise que é bastante interessante: como podemos encadear promises, ou seja, vincular uma promise à outra.

Para poder fazer isso funcionar, vamos começar importando nosso tão usado FS, já que ele é sempre uma chave para isso e em seguida vamos criar uma função readFile, que vai ser uma arrow function. Nós passamos para ele um path de um arquivo e ele vai retornar uma promise nova:

```jsx {numberLines: true}
const fs = require('fs')

const readFile = (file) => {

return new Promise((resolve, reject) => {

fs.readFile(file, (err, contents) => {

if(err) {

reject(err)

}else{

resolve(contents.toString())

}

})

})

}
```

Consideramos que quem vai receber o conteúdo da nova promise queira esse conteúdo em string. Vamos fazer também um writeFile, que também irá passar um file, e um contents, que vai retornar uma nova promise:

```jsx {numberLines: true}
const writeFile = (file, contents) => {

return new Promise((resolve, reject) => {

fs.writeFile(file, contents), (err) => {

if (err){

reject(err)

}else{

resolve()

}

})

} )

}
```

O nosso problema agora é que precisamos ler um arquivo e passar para o write, então precisamos fazer o seguinte:

```jsx {numberLines: true}
readFile('promises.js').then((contents) => console.log(contents))
```

Ao mandar rodar o arquivo, perceba que ele retorna o nosso código em string, a vantagem disso é que agora conseguimos 'encavalar' uma promise depois da outra. A primeira alternativa que temos é utilizar o then dessa forma, então precisamos colocar o próprio writeFile:

```jsx {numberLines: true}
readFile('promises.js')

.then((contents) => writeFile('tst.js', contents))
```

Essa é a primeira maneira que temos de encadear as promises. Ao rodar o arquivo, perceba que foi criado um tst.js como queríamos. A segunda forma é colocarmos encadeado realmente:

```jsx {numberLines: true}
readFile('promises.js')

.then(writeFile('tst.js', contents))
```

Vamos dizer a ele para ler o nosso arquivo e em seguida escrever um outro arquivo, o problema é que se fizermos dessa forma, quando ele passar 'parseando' o código, ele já vai executar esse primeiro writeFile, se não estivéssemos passando um file, poderíamos fazer isso direto, mas como isso não acontece, temos que utilizar o bind, pois ele vai criar uma nova função, a onde eu posso passar o contexto que eu quero executar essa função e fazer um curring fixando alguns atributos da esquerda para a direita:

```jsx {numberLines: true}
readFile('promises.js')

.then(writeFile.bind(null, 'tst2.js'))
```

A grande dica é entender como funciona isso. Podemos colocar um then após o outro, podemos fazer um novo teste:

```jsx {numberLines: true}
const out (contents) => {

return new Promise(resolve =>{

setTimeout(() => {

console.log(contents)

resolve()

}, 2000)

})

}
```

Com isso, caso a gente queira fazer um teste no then, podemos fazer o seguinte:

```jsx {numberLines: true}
readFile('promises.js')

.then(out)

.then(() => console.log('final'))
```

Retornando as promises nós conseguimos encadear, essa é uma grande vantagem em relação a um callback, afinal conseguimos fazer o código crescer para baixo ao invés de crescer para frente, evitamos o callback hell.

 Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades.  Abraço!


<div class="embed-responsive embed-responsive-16by9"> 
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/-xcbKhbk2ec" allowfullscreen></iframe> 
</div>