---
title: "Módulo Co - Organize o fluxo de seu código assíncrono"
date: "2017-07-29"
thumbnail: "./CO.png"
author: "Tulio Faria"
tags: ["Video-Tutorial"]
keywords: "hands-On"
---

---
Neste hands-on, vamos utilizar uma ferramenta bastante útil no nosso dia a dia, o módulo CO, que é uma forma de controlar o fluxo das funções por meio de generator no JavaScript. Vamos lá, a primeira coisa é adicionar o co:

```jsx {numberLines: true}
yarn add co
```

O problema que tínhamos era de ler um arquivo, baseado no conteúdo desse arquivo, iterávamos sobre ele e dentro dessa iteração tínhamos que escrever outros arquivos. Se formos fazer isso com código assíncrono normal, isso se torna extremamente confuso porque temos iteração sobre operações assíncronas que dependem de outras operações assíncronas, já com o generator é muito mais simples porque podemos fazer o seguinte: 

No diretório CO, eu criei um arquivo test.js, dentro dele vou importar o CO e o FS e criar uma função readFile onde passamos apenas o arquivo que queremos.

```jsx {numberLines: true}
const co = require('co')
const fs = require('fs')
function readFile(file){
    fs.readFile(file, 'utf-8', function(err, data){
        console.log(data)
    })
}
readFile('yarn.lock')
```

Teoricamente, para fazer essa função funcionar, normalmente eu preciso passar para ela um callBack, mas vamos fazer um pouco diferente. Para usar o generator, as funções que chamamos assíncronas têm que ser promises, ou seja, temos que converter essas funções:

```jsx {numberLines: true}
function readFile(file){
    return new promise(function(resolve, reject){
        fs.readFile(file, 'utf-8', function(err, data){
            if(err){
                reject(err)
            }else{
            resolve(data)
            }
        })
    })
}
readFile('yarn.lock')
.then(function(data)){console.log(data)})
```

Estamos pegando essa função que depende de um callBack e ao invés de retorná-la, retornamos uma promise e isso será executado no futuro. Quando ele chamar o callBack, vai rejeitar a promise ou resolver e passa os dados de volta. 

Esse código funcionou igual o anterior, mas perceba que ainda está muito chato. Imagine se tivermos que ler 10 arquivos, como faríamos? Vamos melhorar isso usando o CO:

```jsx {numberLines: true}
function readFile(file){
    return new promise(function(resolve, reject){
        fs.readFile(file, 'utf-8', function(err, data){
            if(err){
                reject(err)
            } else {
            resolve(data)
            }
        })
    })
}
co(function\*(){
    const contents = yield readFile('yarn.lock')
    console.log(contents)
})
```

Como tem um \* ele é um generator, e podemos interromper a execução dele com yield e por baixo dos panos ele retorna um iterator que consegue voltar depois, o código continua sendo assíncrono, mas a única diferença é que ele mostra o código de uma forma mais fácil de entender. 

Nós transformamos um código que era assíncrono com callBack, o transformamos em uma promise e quando usamos o CO conseguimos fazer que essa função seja executada de uma forma que parece que ela é síncrona, mas na verdade é assíncrona. Podemos, por exemplo, ler dois arquivos ao invés de um:

```jsx {numberLines: true}
co(function\*(){
    const file  = \['yarn.lock', 'package.json'\]
    for(let i=0; i<file.length; i++){
        let contents = yield readFile(file\[i\])
        console.log(contents)
    }
})
```

Executando esse código ele conseguiu carregar todos os arquivos em sequência. Imagine o quanto você consegue simplificar o seu fluxo de um programa assíncrono só utilizando o próprio CO e o generator function. Podemos também fazer uma lista de promises e depois retornar todos os arrays processados segurando o código com o yield. A vantagem disso é que criamos um paralelismo, fazendo com que as promises sejam executadas de forma paralela.

```jsx {numberLines: true}
co(function\*(){
    const file  = \['yarn.lock', 'package.json'\]
    const filePromises = \[\]
    for(let i=0; i<file.length; i++){
        filePromises.push(readFile(file\[i\]))
    }
    const contents = yield filePromises
    console.log(contents)
})
```

Agora colocamos o yield para baixo e ele está esperando uma lista de promises para serem resolvidas, já o contents é um vetor com todas as respostas dessas promises. Isso é muito legal quando você for fazer um script que precisava mover arquivo, movendo diretório, fazendo coisas recursivas, etc. Com o generator e ajuda do CO fica muito mais fácil de entender o processo. 

Agora entenda melhor sobre [Generators Functions e tudo que acontece "por baixo dos panos".](http://www.devpleno.com/generators-functions/) 

Confira o Hands-on em vídeo: 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/IXsxtIZuY90" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!