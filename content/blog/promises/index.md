---
title: "NodeJS Primeiros Passos - Promises"
date: "2017-06-27"
tags: ["Video-Tutorial"]
thumbnail: "./Promises.png"
author: Tulio Faria
keywords: "nodejs"
---

---
Continuando nosso assunto sobre NodeJS, vamos tratar sobre como podemos organizar o fluxo para que o código fique realmente organizado. Olhe esse exemplo:

```jsx {numberLines: true}
var fs = require('fs');
fs.readFile('arquivo1.txt', 'utf8', function(err, arquivo1){
    fs.readFile('arquivo2.txt', 'utf8', function(err, arquivo2){
        fs.readFile('arquivo3.txt', arquivo1+"\\n"+arquivo2, function(err){
            console.log('tudo certo');
        });
    });
});
```

Aqui faço três operações assíncronas e você pode perceber que o código vai crescendo para frente, porque  os dois códigos estão dentro do callback do primeiro readFile, o terceiro está dentro do segundo e o console log está dentro do terceiro. Imagine se eu tivesse mais trechos de código assíncrono e estivesse tratando com IO, então o código iria crescendo cada vez mais para frente, deixando a manutenção muito complicada. Chamamos esse tipo de código de código hadouken.   **Como podemos fazer para esse código saia dessa forma e comece a crescer para baixo?** Uma das alternativas é utilizar promises. Para isso, vamos utilizar um módulo hamado 'q'.

```jsx {numberLines: true}
npm install q
```

No meu caso, retornou um warning porque eu não tenho o package.json, mas como estamos apenas testando, está tudo bem. Então vamos lá:

```jsx {numberLines: true}
var Q = require('q')
var fs = require('fs')
function readArquivo1(){
    fs.readFile('arquivo1.txt', 'utf8', function(err, arquivo1){
    });
}
function readArquivo2(){
    fs.readFile('arquivo2.txt', 'utf8', function(err, arquivo2){
    });
}
function readArquivo3(){
    fs.readFile('arquivo3.txt', arquivo1+"\\n"+arquivo2, function(err){
    });
}
```

Vamos salvar ele como com.promises.js. Apesar de estar com bastante texto, podemos perceber que o arquivo ficou mais fácil de ler. Se eu chamar esses arquivos, ele vai executar a linha 1, pular, executar a próxima e depois de um certo tempo vai executar o callback:

```jsx {numberLines: true}
function readArquivo1(){
    ... <linha1>
    fs.readFile('arquivo1.txt', 'utf8', function(err, arquivo1){
    });
    ...< linha 2>
}
```

Não é muito bem isso que queremos, afinal queremos um atrás do outro, então podemos fazer o seguinte:

```jsx {numberLines: true}
function readArquivo1(){
    var deferred = ".defer();
    fs.readFile('arquivo1.txt', 'utf8', function(err, arquivo1){
        deferred.resolve(arquivo1);
    });
    return deferred.promise;
}
```

Perceba que estou retornando uma promise avisando que vai ser retornado algo. Quando esse algo estiver pronto, ele devolve a promise, no caso o arquivo 1. Como eu chamo os arquivos agora usando promises? Valos ler os arquivos e quando ele estiver pronto vai ser chamado o then.function(arquivo1):

```jsx {numberLines: true}
function readArquivo1(){
    var deferred = ".defer();
    fs.readFile('arquivo1.txt', 'utf8', function(err, arquivo1){
    deferred.resolve(arquivo1);
    });
    return deferred.promise;
}
function readArquivo2(){
    var deferred = ".defer();
    fs.readFile('arquivo2.txt', 'utf8', function(err, arquivo2){
        deferred.resolve(arquivo2);
    });
    return deferred.promise;
}
function readArquivo3(){
    var deferred = ".defer();
    fs.readFile('arquivo3.txt', arquivo1+"\\n"+arquivo2, function(err){
        deferred.resolve();
    });
    return deferred.promise;
}
readArquivo1().then(function(arquivo1){
    console.log(arquivo1)
})
```

O readArquivo1 retorna uma promise dizendo que quando tiver essa operação IO disponível, eu chamo de volta para então executar o then. Ao executar o código, vai ser retornado o conteúdo do arquivo 1. Poderiamos fazer também:

```jsx {numberLines: true}
var conteudo="";
readArquivo1()
.then(function(arquivo1){
    conteudo+= arquivo1;
    return readArquivo2();
}).then(function(arquivo2){
    conteudo+= arquivo2;
    console.log(conteudo);
});
```

Então vamos ler o arquivo 1, colocar no conteúdo, ler o arquivo 2 e então dar o console.log no conteúdo, a resposta será o conteúdo dos dois arquivos concatenados. Podemos chamar o arquivo 3 e passar o conteúdo nele.

```jsx {numberLines: true}
function readArquivo3(conteudo){
    var deferred = ".defer();
    fs.readFile('arquivo3.txt', conteudo, function(err){
        deferred.resolve();
    });
return deferred.promise;
}
var conteudo="";
readArquivo1()
.then(function(arquivo1){
    conteudo+= arquivo1;
    return readArquivo2();
}).then(function(arquivo2){
    conteudo+= arquivo2;
    return writeArquivo3(conteudo)
}).then(function())
console.log('tudo certo');
});
```

Perceba que meu código começa a crescer para baixo e, ao executar, será retornado a mensagem e criado o arquivo 3 com o conteúdo dentro. A manutenção desse código fica muito mais simples porque eu consigo ver claramente o que cada função está fazendo e também a sequência de passos. Uma das coisas que dá para ser feito também é a seguinte:

```jsx {numberLines: true}
readArquivo1()
.then(readArquivo2)
.then(readArquivo2);
```

Ele vai passar pelo arquivo 1, arquivo 2 e novamente no arquivo 2. Se eu não tiver que passar atributo para frente,  posso fazer isso. Caso a gente queira que o arquivo 2 receba um conteúdo que veio arquivo 1, também podemos utilizar assim, mas o problema é que ela fica muito dependente uma função da outra, eu prefiro fazer de uma forma que uma função não dependa muito da outra para que eu consiga modularizar melhor. 


Confira todos os detalhes no vídeo:

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ogg4mDfgGHg" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!