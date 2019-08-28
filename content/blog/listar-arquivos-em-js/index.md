---
title: "Listar arquivos em JS (async, await, promise e Promise.all)"
date: "2017-05-08"
thumbnail: "./ListarArquivos.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---

---
Hoje eu quero corrigir um exercício que passei no FullStack Academy que gera muitas dúvidas, principalmente para quem está começando na linguagem e quer aprender a lidar melhor com assincronia. 

Então o exercício passado foi o seguinte: Dado uma lista de arquivos e diretórios retornada de uma função que lista o que tem no diretório, precisamos mostrar quais delas são arquivos. Para isso usamos uma função FS.stat. 

Primeiramente precisamos saber a lista de arquivos que tem em um diretório, então vamos importar o nosso 'fs' e testar a função de ler um diretório retornando o nosso callback:

```jsx {numberLines: true}
const fs = require('fs')
fs.readdir('./', (err, paths) => {
    console.log(paths)
})
```

Ao executar esse código, ele irá trazer um monte de nomes, alguns com extensão, outros sem. Podemos concluir então que esse diretório tem arquivos e diretórios misturados. Agora como eu vou checar se cada um desses arquivos são ou não arquivos? Precisamos criar uma versão em promise desse fs.readdir e, baseado nesse readdir, podemos resolver a promise ou recusar essa promise:

```jsx {numberLines: true}
function readdir(path){
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, paths) =>{
            if(err){
                reject(err)
            } else {
                resolve(paths)
            }
        }
    }
}
```

Simplesmente estou retornando uma promise desse readdir, o que muda é que agora eu posso chamar o readdir passando o ./ com o then:

```jsx {numberLines: true}
readdir('./')then((paths) => console.log(paths))
```

Do ponto de vista de assincronismo, continua tendo a mesma coisa, usufruindo das vantagens da parte assíncrona do JavaScript e no nosso caso, no Node. Agora a função que eu tenho para saber se um arquivo é arquivo mesmo é o fs.stat, eu falo qual o path que eu quero e nesse path ele vai retornar stat desse arquivo:

```jsx {numberLines: true}
fs.stat(path, (err, stat) =>{
    console.log(stat.isFile())
})
```

Com isso conseguimos saber se é um arquivo ou não através do isFile, por exemplo, se eu passasse o diretório atual  e executar  o código, ele vai passar false, Isso acontece porque ele não é um arquivo:

```jsx {numberLines: true}
fs.stat('./', (err, stat) =>{
    console.log(stat.isFile())
})
```

Agora precisamos transformar o fs.stat também em uma função:

```jsx {numberLines: true}
function stat(path){
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stat) =>{
            if(err){
                reject(err)
            } else {
                resolve(stat)
            }
        })
    }
}
```
Agora podermos fazer uma nova versão:

```jsx {numberLines: true}
fs.stat('./').then, ( stat => {
    console.log(stat.isFile())
})
```

Agora precisamos de um jeito de unir os dois para ter o resultado que queremos.No exercício no Fullstack Academy, utilizamos a função assíncrona 'async', então fizemos o seguinte:

```jsx {numberLines: true}
async function lista(){
    const paths = await readdir('./')
    console.log(paths)
}
lista()
```

Lembrando que descobrimos durante o Fullstack Academy que se utilizarmos o 'await' para uma promise, essa função continua sendo assíncrona, porém visualmente quando estamos construindo o código, podemos garantir que embaixo só vai ser executado quando o readdir terminar. 

Perceba que vai continuar retornando a listagem, então na verdade o 'await' seria como fazermos um then com paths com a única diferença que eu posso fazer meu próximo passo, que será checar todos os arquivos se eles são ou não realmente arquivos. Para isso vamos fazer um const stats que vai utilizar um map para passar por todos os caminhos e utilizar um async passando um path e dar um await no stat.path:

```jsx {numberLines: true}
async function lista(){
    const paths = await readdir('./')
    const stats =  paths.map(async (path) => await stat(path))
    console.log(paths)
}
lista()
```

Se dermos um console.log no stats, vamos ter uma lista de promises pendentes, então esse código roda síncronamente, até mesmo o map, toda vez que tenho um async tenho uma promises disfarçada e como ele retorna uma outra promise, eu tenho várias sem resolver. Com isso eu precisaria pensar em uma forma de resolver todas essas promises. Para resolver, podemos utilizar o promises.all que também retorna uma promise e retornar todas as promises que estão pendentes:

```jsx {numberLines: true}
async function lista(){
    const paths = await readdir('./')
    const stats =  paths.map(async (path) => await stat(path))
    const stats = await Prmise.all(statsPromises)
    console.log(paths)
}
lista()
```

Agrupamos então todas essas promises em uma, o await vai esperar a promise retornada do promise.all, se rodarmos o código agora, teremos os resultados de todos os arquivos. 

Agora como eu vou saber qual caminho é o que? 

Na minha função stat, ao invés de retornar só o  stat, vou retornar o path também para sabermos que arquivo é esse:

```jsx {numberLines: true}
function stat(path){
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stat) =>{
        if(err){
            reject(err)
            } else {
                resolve({path, stat })
            }
        })
    }
}
```

Agora precisamos filtrar qual desses caras são realmente arquivos, para isso vamos fazer o seguinte:

```jsx {numberLines: true}
async function lista(){
    const paths = await readdir('./')
    const stats =  paths.map(async (path) => await stat(path))
    const stats = await Prmise.all(statsPromises)
    const pathsWithIsFile = stats.map( path => ({ path: path, isFile: path.stat.isFile()} ))
    const files = pathsWithIsFile.filter( path => path.isFile)
    console.log(files)
}

lista()
```

Agora ele irá retornar apenas os caminhos que são arquivos, o grande segredo de tudo  é essa parte:

```jsx {numberLines: true}
const stats =  paths.map(async (path) => await stat(path))
const stats = await Prmise.all(statsPromises)
```

Onde concatena essas promises de volta, isso é muito importante para conseguirmos fazer esse exercício. Se você esta vendo esse exercício e não participou do Fullstack Academy, confira a gravação das aulas no nosso [Canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww/featured).