---
title: "PKG - Transforme seu aplicativo Node em executável"
date: "2017-05-09"
thumbnail: "./Pkg.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "hands-On"
---

---
Neste post, faremos um hands-on do módulo PKG, que serve basicamente para transformarmos nosso aplicativo node em executável, ou seja, podemos distribuir esta aplicação sem precisar instalar o ambiente do node ou até mesmo mandar o mesmo dentro deste executável.

**Qual a vantagem disso?** 

Com isso, podemos, por exemplo, efetuar demonstrações ou distribuir o software em si. Uma das ideias que vou mostrar aqui é distribuir uma aplicação em express, podendo enviar este arquivo a um cliente apenas dentro de um executável.  

Primeiramente vamos instalar este módulo:

```jsx {numberLines: true}
npm install -g pkg
```

Em seguida vamos adicionar um express:

```jsx {numberLines: true}
yarn add express
```

Depois iremos no Visual Studio Code e criamos um index.js

```jsx {numberLines: true}
const express = require('express')
const app =  express()
app.get('/', (req, res)=>{
    res.send('Bem vindo ao meu-app')
)}
app.listen(3000, ()=>{
    console.log('Running meu-app')
}
```

Ele irá 'ouvir’ a porta 3000 e, se tudo ocorrer bem, mostrará a mensagem "running meu-app" 

Originalmente o package virá assim:

```jsx {numberLines: true}
{
    "dependencies": {
        "express": "^4.15.2"
    }
}
```

Mas iremos fazer algumas modificações. A primeira coisa que devemos fazer é adicionar o nome do nosso aplicativo ("name": "meuapp"), precisamos também dizer quem é nosso ponto de entrada ("bin": "index.js") 

e a última modificação é opcional, pois nele podemos dizer se queremos mandar algum diretório além do module e qual target, ou seja, quais versões do Node quero 'empacotar' neste aplicativo.

```jsx {numberLines: true}
{
    name": "meuapp",
    "dependencies": {
        "express": "^4.15.2"
    },
    "bin": "index.js",
    "pkg":{
        "assets":\[
            "view/\*\*/\*"
        \],
        "target":\[
            "node7"
        \]
    }
}
```

Para executarmos isso, vamos no Node e colocamos:

```jsx {numberLines: true}
pkg . (pkg ponto)
```

Com isso, solicitamos o node para empacotar a aplicação utilizando o package.json. Isso é legal porque podemos entregar este aplicativo para o cliente, demo, trial, etc, criando um instalador. 

Lembrando que nós continuamos tendo acesso total ao código. Usando o express, podemos abrir em outra máquina e ler a faixa de IP que a máquina principal está rodando e na interface mostrar para o cliente "para acessar este aplicativo use o IP xxx.xxx.xxx.xxx em uma máquina de sua rede.”

Assim, várias pessoas conseguem acessar o mesmo aplicativo. É possível utilizar o Package sem a necessidade do Package.json, por exemplo passando direto o ponto de entrada, mas eu prefiro usar o package.json para ficar documentado, deste modo não precisamos lembrar todos os parâmetros sempre. 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/pZNeUcCPwEs" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Ah, fique à vontade para deixar suas dúvidas e sugestões nos comentários. Abraço!