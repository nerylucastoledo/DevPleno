---
title: "Hands-on: Streams Parte 4 - Transform"
date: "2017-05-10"
thumbnail: "./StreamPart4.png"
author: Tulio Faria
tags: ["Video-Tutorial"]
keywords: "Hands-On"
---
---

Continuando nossa série sobre Streams, iremos falar sobre como podemos ligar um readable em um writable e vice-versa, e como criamos o tipo Transform. Primeiramente, para linkarmos um stream a outro, temos que importar o fs. Em seguida, criamos os Streams que vão ser linkados, por exemplo:

```jsx
const fs = require('fs')
const readable = fs.createReadStream('arquivo.txt')
const writable = fs.createWritableStream('arquivo-2.txt')
readable.pipe(writable)
```

Com isso, estamos vinculando o on data do Readable com o Write do Stream Writable. Ao executar o código acima, criaremos uma cópia do arquivo.txt.  

**Para que serve o Pipe?**
 
O Pipe permite criar a saída de um Stream com a entrada de outro, o readable, que somente envia dados com o writable, que apenas recebe dados. Podemos utilizar vários Pipes de uma vez, como por exemplo:

```jsx
const fs = require('fs')
const zlib = require('zlib')
const readable = fs.createReadStream('arquivo.txt')
const writable = fs.createWritableStream('arquivo-2.txt')
const zipper = zlib.createGzip()
readable.pipe(zipper).pipe(writable)
```

Com a execução do código, iremos pegar esta saída do readable, jogar na entrada do zipper e a saída do zipper adicionando em writable. Lembrando que  zlib já faz parte do core do Node, com isso é possível compactar usando apenas o mesmo.   

**O que o Zipper faz?** 

O Zipper é um Stream do tipo Transform, basicamente ele transforma a entrada em uma saída utilizando pipe. Podemos transformar estes dados a medida que utilizamos este pipe. É interessante que o readable seja a entrada e o Writable seja a saída. Vamos a outro exemplo para que fique mais claro:

```jsx
const fs = require('fs')
const zlib = require('zlib')
const readable = fs.createReadStream('arquivo.txt')
const readable = fs.createWriteStream('arquivo-upper.txt')
const Transform = require('Stream').Transform
const upperCase = new Transform({
    transform(chunk, encoding, callback){
        const chunkUpper = (chunk+'').toUpperCase()
        this.push(chunkUpper)
        callback()
    }
})
readable.pipe(upperCase).pipe(writable)
```

No código acima, criamos um Stream transform pegando o Stream do core do Node utilizando a instancia de transform. Em seguida, criamos uma função upperCase e essa mesma função espera que passamos um método transform, enviando um chunk, encoding e um callback. Transformamos este chunck em um tipo string eo  retornamos eem push. 

Temos um callback ali, pois este método poderia ser assíncrono, fazendo outra operação que dependesse de um IO e, com isso, chamaríamos o callback quando tivéssemos terminado de transformar o chunk de dado. 

Em resumo, pegamos o que o readable enviou, criamos uma variável nova e passamos esta informação para maiúsculo.   

**Qual a utilidade do Transform?** 

É muito comum utilizarmos este stream para zippar arquivos e transformá-los para maiúsculos. Isso é muito poderoso para podermos criar aplicações que não precisam ler realmente estes dados em memória para depois ser processados. Por exemplo, o zipper que criamos irá zippar pedaços do arquivo e isso não consome tanto recurso da maquina.   

**Conclusão** 

Este tipo de Stream é muito interessante e eu recomendo fortemente que você faça alguns testes. Existem outras maneiras de fazer o transform, como por exemplo em alguns casos em que estendemos a classe, mas acredito que a forma explicada aqui seja mais convencional ou 'java way'.   

Confira também o vídeo do hand-on: 

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/gp7sB7-bPAg" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Ah, fique à vontade para deixar suas dúvidas e sugestões nos comentários. Abraço!