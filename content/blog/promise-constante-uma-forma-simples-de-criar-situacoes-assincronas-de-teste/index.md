---
title: "Promise Constante - Uma forma simples de criar situações assíncronas de teste"
date: "2017-10-03"
tags: ["Tecnologia"]
thumbnail: "./PromiseConstante.png"
author: Tulio Faria
---

---
A dica de hoje é bastante interessante porque ela nos ajuda a criar algumas situações de teste, principalmente envolvendo promises, que é uma forma de lidar com o assincronismo em JavaScript. Muitas vezes precisamos testar essa promise, então imagine o seguinte cenário, onde eu quero construir uma função readDir e promisificá-la:  

```jsx {numberLines: true}
const fs = require(‘fs’)
const readdir = path => new Promise((resolve, reject) => {
    fs.readdir(path,(err, list) => {
        if(err){
            reject(err)
        } else {
            resolve(list)
        }
    })
})
```

Agora imagine que temos uma outra função chamada path, que é assíncrona:

```jsx {numberLines: true}
const functA = (path) => {
    const list = await readdir(path)
    console.log(list)
}
```

Se nós quiséssemos, por exemplo, testar essa função, rodaríamos o funcA:

```jsx {numberLines: true}
funcA(‘./’)
```

Ela irá trazer todos os arquivos que eu tenho no meu diretório atual. Agora imaginem que eu quero testar esse readdir, mas sem efetivamente passar pelo fs, quero que minha promise retorne os valores para que possa apenas testar se o funcA está correto. É equivalente ao mock. 

Quando queremos ter uma promise que é uma constante para a situação que estamos utilizamos, podemos fazer o seguinte:

```jsx {numberLines: true}
const readdir = path => Promise.resolve(\[‘arquivo1.txt’, arquivo2.txt\])
```

Ele irá retornar uma lista com esses resultados. Então se eu quiser ter uma lista que sempre resolve pro mesmo valor, sendo utilizado parecido com mock para teste, utilizamos o promise.resolve. 

Quando estamos aprendendo programação assíncrona e queremos fazer esses testes, isso é muito interessante. 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/OeI0CCzl0y4" allowfullscreen></iframe>
</div>

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](http://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!