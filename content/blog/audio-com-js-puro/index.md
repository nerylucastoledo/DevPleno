---
title: "Tocando um Áudio com JS puro"
date: "2017-05-24"
thumbnail: "AUDIO-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---


Uma das coisas que utilizaremos na interface que vamos construir no Minicurso de Socket.io para que fique mais próximo do real são os efeitos sonoros. Por isso, essa dica é para você entender como dar play em um arquivo de áudio com JS puro, ou seja, usando somente HTML, sem usar nenhuma lib.

A primeira coisa que vamos fazer é criar uma tag audio no HTML. Esse áudio vai representar um arquivo de som (lembrando que também há, em especificações mais novas, a tag vídeo, que é parecida com a tag audio, mas é um pouco mais complicada, pois temos várias ‘camadas’, como por exemplo vídeos específicos para celular).

```jsx {numberLines: true}
<html>

<head><tittle>Audio</tittle></head>

<body>

<h1>Audio</h1>

<audio></audio>

</body>

</html>
```

No caso do áudio, tenho um arquivo chamado clap.wav e, quando o coloco dentro da tag áudio, ele automaticamente coloca esse áudio quando a página carregar em memória.

Em seguida, vamos criar um botão com o nome de Play e adicionar alguns scripts, um com uma instância desse botão e outro com um eventListener, assim, quando alguém clicar no botão vai ser ser pego esse áudio e dar um play.

```jsx {numberLines: true}
<html>

<head><tittle>Audio</tittle></head>

<body>

<h1>Audio</h1>

<audio></audio>

<button></button>

<script>

const button = document.querySelector('button')

button.addEventListener('click', function(){

cont audio = document.querySelector('audio')

audio.play

})

</script>

</body>

</html>
```

Outra ponto interessante é que podemos começar a tocar o áudio a partir de um ponto específico,, por exemplo, aos 0.2 segundos. Para isso adicionamos apenas o código entre o querySelector e o audio.play:

```jsx {numberLines: true}
audio.currentTime =0.1
```

Dentro desse clap podemos fazer até alguns efeitos diferentes, pois à medida com que eu mexo o currentTime e dou o play, o efeito do áudio é um pouco diferente. Para fazer isso, usamos apenas o javaScript. 


<div class="embed-responsive embed-responsive-16by9">
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ESq1xOs2HsU" allowfullscreen></iframe> 
 </div>

Gostou dessa dica sobre áudio com JS puro? Deixe seu comentário!  Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!