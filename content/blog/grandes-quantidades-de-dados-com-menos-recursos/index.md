---
title: "Grandes quantidades de dados com menos recursos"
date: "2017-10-17"
thumbnail: "MAIS-DADOS-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial", "Videos"]
keywords: "dicas"
---

A dica de hoje é um ponto bastante importante para performance em NodeJS. Eu já comentei um pouquinho sobre esse assunto, mas vou reforçar esse cuidado que a gente pode ter aqui para poupar memória quando estamos processando grandes quantidades de dados.

Primeiramente eu baixei um arquivo com mil registros em CSV, eu quero então processar esses arquivos. Vou criar um arquivo sem-otimizar.js:

```jsx {numberLines: true}
const fs = require(‘fs’)
fs.readFile(‘data.csv’, (err, contents) =>{
    console.log(contentes.toString())
})
```

Uma outra abordagem seria, por exemplo:

```jsx {numberLines: true}
const fs = require(‘fs’)
fs.readFile(‘data.csv’, (err, contents) =>{
    const lines = contents.toString().split(‘\\n’)
    line.forEach(line => console.log(lines.split(‘,’)))
})
```

Agora imagine o seguinte, ao invés de colocar da forma anterior, vamos imaginar que vai ser salva a linha no banco de dados:

```jsx {numberLines: true}
const fs = require(‘fs’)

fs.readFile(‘data.csv’, (err, contents) =>{
    const lines = contents.toString().split(‘\\n’)
    line.forEach(line => {
        console.log()
    })
})
```

Nosso primeiro erro é fazer essa operação sem se preocupar muito se ela retornou algo ou não. Para simular isso, vamos fazer um record e retornar uma promise:

```jsx {numberLines: true}
const saveDB = record => {
    return new Promise((resolve, reject) =>{
        setTimeOut(resolve, Math.ceil(Math.random()\*4000))
    })
}
```

Com isso vamos simular um save no banco de dados, variando o tempo de resposta não ultrapassando 4 segundos. Agora vamos fazer algumas modificações no código readFiles:

```jsx {numberLines: true}
fs.readFile(‘data.csv’, (err, contents) =>{
    const lines = contents.toString().split(‘\\n’)
    line.forEach(line, i) => {
        saveDB(line).then(() => console.log(i))
    })
})
```

Perceba que ao rodar o código, ele trará os registros lentamente e fora de ordem. Estamos empilhando de forma gigantesca, gastando muita memória, porque carregamos todos os registros, fizemos um split e depois ainda mandei salvar tudo de uma vez, além do banco tendo que lidar com todas as requisições ao mesmo tempo.

**Mas qual a maneira ideal de fazer isso?**

Deixar que esses dados passem pelo aplicativo, nós resolvemos o que tem que resolver e vamos para o próximo.

Vou criar um arquivo otimizado.js para fazer da maneira correta e vou utilizar o fast-csv:

```jsx {numberLines: true}
yarn add fast-csv
```

Em seguida, no código, faremos algo um pouco diferente. Vamos importar o fast-csv e criar um readStream para a entrada e outro construtor para essa entrada:

```jsx {numberLines: true}
const fs = require(‘fs’)
const csv =require(‘fast-csv’)
const entrada = fs.createReadStream(‘data.csv’)
const csvStream = csv.fromStream(entrada, {
    headers: true
}).on(‘data’, data => {
    console.log(data)
})
```

Agora imagine que temos a mesma função de salvar, o caminho mais interessante é passar os dados, porém, enquanto não terminarmos de salvar esses dados, não manda mais nada:

```jsx {numberLines: true}
const fs = require(‘fs’)
const csv =require(‘fast-csv’)
const entrada = fs.createReadStream(‘data.csv’)
const saveDB = record => {
    return new Promise((resolve, reject) =>{
        setTimeOut(resolve, Math.ceil(Math.random()\*4000))
    })
}
const csvStream = csv.fromStream(entrada, {
    headers: true
}).on(‘data’, data => {
    csvStream.pause()
    saveDB(data).then((){
        console.log(data)
        csvStream.resume
    })
})
```

Dessa maneira, utilizando o pause, não jogamos tudo na memória para processar. Resolvido o problema no banco de dados, vamos mandar mais informações. 

 Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](http://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!


<div class="embed-responsive embed-responsive-16by9"> 
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/apAP7IrO3Fg" allowfullscreen></iframe> 
</div>