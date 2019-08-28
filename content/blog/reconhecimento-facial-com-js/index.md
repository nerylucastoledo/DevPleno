---
title: "Reconhecimento facial com JS"
date: "2017-11-24"
thumbnail: "./ReconhecimentoFacial.png"
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---

---
Hoje vamos fazer um hands-on em uma biblioteca que eu achei muito interessante chamada TrackingJS. Ela nos ajuda a trabalhar com visão computacional. 

Visão computacional é uma forma que temos de processar imagens para extrair alguma coisa delas, nesse exemplo vamos fazer um tracking facial, reconhecer a face em uma imagem. 

Um exemplo prático seria por exemplo, se a pessoa subir uma foto para o perfil dela, esse tracking facial poderia te ajudar a centralizar e realizar o crop da foto. 

A primeira coisa que vamos fazer é acessar o site "trackingjs.com" e baixar um pacote com todos os arquivos. Vamos pegar a pasta build e deixar dentro do diretório em que vamos criar a aplicação. Além disso, vou rodar também o HTTP server na pasta que eu estou criando os arquivos. 

Vamos criar um arquivo index.html. O trackingjs já vem com várias coisas que podemos reaproveitar,uma delas é reconhecer o vídeo da webcam. Para fazer isso, vamos importar da pasta build o traking-min.js e o data/face-min.js:

```jsx {numberLines: true}
<html>

    <head>
        <title>Face Traking</title>
        <style>
            video, canvas {
            position: absolute;
            border: 1px solid red;
            }
        </style>
    </head>
    <body>
        <script rsc="tracking-min.js"></script>
        <script rsc="data/face-min.js"></script>
    </body>

</html>
```

O reconhecimento de faces funciona basicamente por meio de um treinamento, onde fazemos em uma rede neural e precisamos desse arquivo de dados, que é o treinamento realizado. 

Agora vamos criar dois itens, um deles é uma tag víde. Vamos definir uma largura e altura. O outro é um canvas para podermos desenhar em cima desse vídeo e mostrar onde está sendo reconhecido realmente o rosto:

```jsx {numberLines: true}
<body>
    <video id="video" width="320" height="240" preload autoplay loop muted /></video>
    <canvas id="canvas" width="320" height="240"></canvas>
    <script rsc="tracking-min.js"></script>
    <script rsc="data/face-min.js"></script>
</body>
```

Agora vamos começar realmente a fazer esse tracking do rosto. Quando carregarmos a página, vamos chamar a função init que vai ter nosso vídeo, canvas um contexto para o canvas e um tracker, que é nosso rastreador em específico:

```jsx {numberLines: true}
<script>
    function init(){
        const video = document.getElementById('video')
        const canvas = document.getElementById('canvas')
        const context = canvas.getContext('2d')
        const tracker = new traking.ObjectTracker('face')
    }
    window.onload = init()
</script>
```

Agora podemos mandar rastrear a tag vídeo utilizando a câmera. Fazendo isso, eu consigo enviar um event:

```jsx {numberLines: true}
tracking.track('#video', tracker, {camera: true})
tracker.on('track', event => {
    console.log(event)
})
```

Ao dar F5 no browser e acessar o F12, percebam que ele muda à medida que o rosto se mexe dentro do limite que escolhemos, com isso vamos desenhar em cima do canvas:  

```jsx {numberLines: true}
<script>
    function init(){
        const video = document.getElementById('video')
        const canvas = document.getElementById('canvas')
        const context = canvas.getContext('2d')
        const tracker = new traking.ObjectTracker('face')
        tracking.track('#video', tracker, {camera: true})
        tracker.on('track', event => {
            console.log(event)
            context.clearRect(0,0,canvas.width, canvas.height )
            event.data.foEach( rect => {
                console.log(rect)
            })
        })
    }
    window.onload = init()
</script>
```

O retângulo já está lá reconhecendo a cabeça ao se mexer, porém ainda não conseguimos visualizar ele. 

Então, para cada retângulo reconhecido, vamos desenhar ele na tela:

```jsx {numberLines: true}
event.data.foEach( rect => {
    context.strokeStyle = '#ff0000'
    context.lineWidth = 2
    context.strokeRect(rect.x, rect.y, rect.width, rect.height)
})
```

Com isso já conseguimos ver o reconhecimento do meu rosto. Em uma aplicação real, eu poderia, por exemplo, reconhecer o rosto, dar um freeze e cortar a imagem um pouco para cima e para os lados para ajudar no crop. 

Além disso ainda podemos mostrar uma informação de onde está sendo reconhecido esse retângulo:

```jsx {numberLines: true}
event.data.foEach( rect => {
    context.strokeStyle = '#ff0000'
    context.lineWidth = 2
    context.strokeRect(rect.x, rect.y, rect.width, rect.height)
    context.fillText(\`x: ${rect.x}, w: $:{rect.width}\`, rect.x+rect.width+20, rect.y+20)
    context.fillText(\`y: ${rect.y}, h: $:{rect.height}\`, rect.x+rect.width+20, rect.y+40)
})
```

Assim temos a informação precisa de onde foi encontrado o nosso rosto. Poderíamos utilizar isso para fazer o crop. 

Como colocamos isso em um vetor, é possível reconhecer mais de um rosto no vetor, a partir disso podemos fazer, por exemplo, um sistema de tag para marcar os amigos. 

Veja o vídeo:

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/KV7mZc3D93Y" allowfullscreen></iframe>
</div>

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](http://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!