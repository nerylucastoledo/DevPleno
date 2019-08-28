---
title: "Classificação de imagens com Azure"
date: "2017-11-30"
tags: ["Dicas", "Video-Tutorial"]
author: "Tulio Faria"
thumbnail: "classificação-de-IMAGENS-790x400.png"
keywords: "dicas"
---


Na dica de hoje, vamos continuar falando sobre classificação de imagens de forma automática, mas será uma outra abordagem, a de utilizar um serviço de visão computacional para reconhecer e classificar essa imagem.

Vamos utilizar a API Azure Computer Vídeo. Como pegamos uma key dessa API?

Se você colocar no Google Azure Cognitive Services, vamos ter serviços cognitivos, clique no link e você pode experimentar os serviços gratuitamente, apenas acessando ‘computer vision API’ para conseguir a Key.

Novamente no Google, vamos procurar o ‘axios http’ e importá-lo utilizando a cdn:

```jsx {numberLines: true}
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

Agora, no Visual Studio Code, vou criar um arquivo novo e salvar como azure-image.html. A ideia é a seguinte, vamos ter um input type text onde vamos por uma url para poder reconhecer a imagem:

```jsx {numberLines: true}
<html>

<head>

<tittle> Image </tittle>

</head>

<body>

<input type='text id='imgInput'  value='http://tudosobrecachorros.com.br/wp-content/uploads/precos-de-cachorro.png'/>

<input type='button' id='btn' value='Analisar imagem' />

<img src='' id='img' />

<script src="http://unpkg.com/axios/dist/axios.min.js"></script>

<script>

const imgInput = document.getElementById('img')

const img = document.getElementById('img')

imgInput .addEventListener('blur', () ={

img.src= imgInput .value

})

</script>

</body>

</html>
```

Assim podemos colocar a url de uma imagem e clicar em analisar imagem, mas temos também uma imagem padrão. Toda vez que essa imagem padrão for trocada, nós trocamos essa imagem.

Agora vamos fazer uma requisição utilizando axios para que a gente consiga classificar essa imagem. Agora vamos classificar, para isso precisamos colocar nossa chave do Azure e também uma instância do axio para passarmos o baseURL e o headers que é onde preciso mandar algumas coisas como content type:

```jsx {numberLines: true}
<script>

const btn = document.getElementById('btn')

const imgInput = document.getElementById('imgInput')

const img = document.getElementById('img')

const key = 'keyDoAzure'

const azure = axios.create({

'https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze',

headers:{

'Content-type':  'application/json',

'Ocp-apim-Subscription-Key': key

}

})



imgInput .addEventListener('blur', () ={

img.src= imgInput .value

})

btn.addEventListener('click', () => {

azure.post('?visualFeactures=Categories, Description, Color&details=&language=en', {

url: ImgInput.value

})

.then( data => {

console.log(data)

})

})

</script>
```

Ao rodar, perceba que ele consegue capturar várias tags, além de cores dominantes no background, na frente, etc. Podemos utilizar isso para classificar, por exemplo, se a foto tem algum tipo de violência.


<div class="embed-responsive embed-responsive-16by9">
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Evl1tRMMh0o" allowfullscreen></iframe>
  </div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!
