---
title: "Promisify-Node: Convertendo funções clássicas do Node em Promises"
date: "2017-05-04"
thumbnail: "./PormisifyNode.png"
author: Tulio Faria
tags: ["Dicas", "Video-Tutorial"]
keywords: "hands-on"
---

---
Neste post, vamos fazer um hands-on do Promisify-Node, uma forma de converter as funções clássicas do Node em JavaScript que retornam callback em promises. Existem vários módulos que já fazem isso, como em módulos utilitários de promises, o q, bluebird, por exemplo.   

**Então por que usar o Promisify-Node?** 

Ele tem uma funcionalidade bastante relevante que vou mostrar durante o hands-on, vamos lá. Para instalar e adicionar como dependência o Promisify-Node:

```jsx {numberLines: true}
yarn add promisify-node
```

Vamos importar o promisify e o fs(file system) para termos uma função com o callBack.  

```jsx {numberLines: true}
const promisify = require('promisify-node')
const fs = require('fs')
```

Se fossemos utilizar o fs normalmente, iriamos fazer o seguinte:

```jsx {numberLines: true}
fs.readFile('arquivo.js', (err, data) => console.log(data.toString()))
```

Então ele retorna um callBack, onde eu consigo escrever o conteúdo do arquivo. Então vamos converter essa função em promise para, por exemplo, usar o then dentro de um generator ou com async/await. 

Podemos pegar essa função fs.readFile, criar uma nova readFile e passar para promisify, assim:

```jsx {numberLines: true}
const readFile = promisyfy(fs.readFile)
```

**Qual a diferença?** 

Agora eu posso chamar a readFile, falar qual arquivo eu quero (no caso o arquivo.js) e chamar ele no modo promisify.

```jsx {numberLines: true}
readFile('arquivo.js').then((data)=> console.log(data.toString()))
```

**Qual a vantagem?** 

Além da promisify ser mais fácil de manipular, evitamos o callback hell ou código hadouken, que faz uma barrigona de tanto callback que tem um dentro do outro. 

Também podemos utilizar com generator e com async/await. Outra coisa legal é que, se quisermos usar todas as funções do fs como uma promise, podemos mudar o Const fs = require(‘fs’) assim:

```jsx {numberLines: true}
const fs = promisify('fs')
```

E, assim, qualquer função que eu for utilizar, como por exemplo:

```jsx {numberLines: true}
fs.readFile('arquivo.js', (err, data) => console.log(data.toString()))
```

Já irá virar naturalmente uma promise, com isso posso fazer:

```jsx {numberLines: true}
fs.readFile('arquivo.js').then( data => console.log(data.toString()))
```

Convertendo todos os métodos e funções disponíveis dentro desse módulo, de callback para promise. 

**Concluindo** 

Ainda estamos usando o fs.readFile, mas em uma versão ‘promisifiada’ :) Isso é bastante poderoso, afinal assim podemos converter um módulo inteiro, de callback para promise utilizando generator ou async/await tranquilamente.   

Você também pode conferir o passo a passo desse hands-on por vídeo: 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/-Uy6Ri631H4" allowfullscreen></iframe>
</div>

Fique à vontade para deixar suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!