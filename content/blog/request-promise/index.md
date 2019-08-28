---
title: "Hands-on: Request-promise"
date: "2017-08-17"
thumbnail: "./RequestPromisse.png"
author: Tulio Faria
tags: ["Video-Tutorial"]
keywords: "hands-on"
---

---
Este hands-on vai ser complementar a outro módulo que eu já mostrei por aqui, o Request. O módulo de hoje é o Request-Promise, que é basicamente o Resquest 'Promisificado', então ele retorna uma Promise e assim fica muito mais fácil de fazer tratamentos de várias requisições HTTP, porque podemos utilizar, por exemplo, tanto o Generator com o Wild ou dentro do Async/await, que é uma maneira mais moderna de se fazer. 

Então vamos colocar a mão na massa. Primeiro vou instalar as duas dependências que precisamos. Uma coisa importante: o Request promise depende do Request, então temos que adicionar os dois:

```jsx
yarn request

yarn request promise
```

Em seguida, basta simplesmente importar ele. A assinatura é exatamente a mesma do Request, então eu posso simplesmente trocar para o Request-Promise:

```jsx
const request = require('request-promise')
request('http://httpbin.org/ip')
.then((res) => console.log(res))
```

Então a versão com promise eu não tenho um callback, e sim um then com catch para tratar. Ao rodar, perceba que ele vai bater no servidor e retornar o IP. 

Outra vantagem que temos é que podemos fazer o seguinte:

```jsx
const pegarIp = async() => {
    const ip = await request('http://httpbin.org/ip')
    console.log(ip)
}
pegarIp()
```

Perceba que o código ficou muito mais simples, conseguimos fazer a mesma operação, porém trocando a Promise por Async/await. Outra coisa que poderíamos fazer é pegar esse IP e enviar de volta:

```jsx
const pegarIp = async() => {
    const ip = await request('http://httpbin.org/ip')
    const ipPost = await request({
        method: 'POST',
        json: ip,
        uri: 'http://httpbin.org/post'
    })
    console.log(ipPost)
}
pegarIp()
```

Ele já vai mostrar o data como o IP que eu recebi. 

O interessante é que poderiamos criar um Request-Promise se a gente quisesse, não é tão complicado, podemos importar ele direto e, utilizando com Async/await, podemos fazer várias operações de rede. Um detalhe importante, como sempre falo, o Async await não vai transformar esse código em síncrono, ele continua sendo assíncrono e tendo as mesmas vantagens. 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/YHdaewjbSAI" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal ](https://www.youtube.com/devplenocom)e cadastre seu e-mail para não perder nenhuma novidade. Deixe suas dúvidas e sugestões nos comentários. Abraço!