---
title: "Request - Requisições HTTP de forma rápida e simples"
date: "2017-08-14"
thumbnail: "./Request.png"
author: Tulio Faria
tags: ["Video-Tutorial"]
keywords: "hands-on"
---

---
O Request é um pacote que permite que façamos requisições HTTP. Uma coisa interessante sobre ele é que é uma ferramenta muito simples, conseguimos fazer requisições em algum ambiente ou servidor HTTP de uma forma rápida. 

Primeiramente vamos instalar:

```jsx
npm install request
```

Agora vamos criar um novo  arquivo e fazer um require no nosso request e pegar o site da UOL por exemplo:

```jsx
const request = require ('request')
request('http://www.uol.com.br', function (err, res, body){
    if(!err && res.statusCode === 200){
        console.log(body)
}
}
```

Então se não retornar nenhum erro e a resposta for um http 200, ele retorna o body, que é um parâmetro da nossa function. 

Ao rodar o código, perceba que retornará todo o HTML da página principal do UOL, isso é útil, pois sempre que quisermos consumir uma API, podemos usar o request, lembrando que ele permite outros métodos HTTP também, como um post e principalmente para baixar dados. 

Vamos supor que eu quisesse salvar o site da UOL (pode ser um site, um arquivo, uma imagem, mas vou salvar o site todo para demonstrar):

```jsx
const request = require ('request')
const fs = require('fs')
request('http://www.uol.com.br').pipe(fs.createWriteStream('home.html'))
```

_(Lembrando que o 'fs' já faz parte do core do Node, então não precisamos instalar nada)._ Então ele vai ligar o output stream do request com o writeStream do 'fs' que acabamos de criar, no fim das contas ele vai salvar em um home.html. 

Um caso de uso que eu já fiz com esse pacote foi a seguinte: eu tinha um serviço em que agregava os logs entre as minhas aplicações, então ela estava distribuída em servidores distintos e esse serviço que utilizava o request para baixar os arquivos de log e depois de baixado ele fazia o processamento das informações. Isso era bastante útil para poder importar os dados, mas lembrando que podemos usá-lo para muitas outras coisas além disso. 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/elOGmIL7qws" allowfullscreen></iframe>
</div>

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal ](https://goo.gl/VBU2PR)e cadastre seu e-mail para não perder as atualizações.