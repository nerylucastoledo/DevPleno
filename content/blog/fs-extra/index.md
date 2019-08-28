---
title: "Fs-extra - Filesystem com Promises e mais funcionalidades"
date: "2017-05-15"
thumbnail: "FS-EXTRA-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "hands"
---


O Fs-extra é uma forma de otimizar as funcionalidades do SF normal do node. Primeiramente, temos que executar o comando yarn sf-extra. Uma utilidade interessante do SF-extra é que, importando o outputFile, é possível criar um arquivo, um TXT, por exeplo. Ele funciona tanto com callback quanto com promises.

```jsx {numberLines: true}
fs.outputFile('file.txt', 'olá')
.then(()=> console.log('ok'))
```

Com isso, ele irá criar um arquivo file.txt com o texto _olá_ dentro e o console nos enviará uma mensagem _ok_. Isso possibilita usarmos mais facilmente com async await, generator e por aí vai. Outra coisa interessante é que ele trás alguns métodos que não são comuns no FS como o fs.copy, que é possível copiar o arquivo diretamente por ele usando uma versão 'promiseficada'.

```jsx {numberLines: true}
fs.copy('file.txt', 'file2.txt')
.then(() =>console.log('ok'))
```

Assim. será criado um arquivo file2.txt copiando o arquivo file.txt Este foi apenas uma pequena apresentação do FS-extra, ele permite utilizarmos mais tranquilamente essas novidades do ES6, ES7, async await e por ai vai, isso fica muito legal para usarmos com promises. 

Ele também agiliza bastante, já que com generator poderíamos, por exemplo, só usar o yield fs.copy sem mesmo usar o then, e já resolveria a promise tranquilamente.

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!


<div class="embed-responsive embed-responsive-16by9"> 
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fTf-fORqQrs" allowfullscreen></iframe>
 </div>