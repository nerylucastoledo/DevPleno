---
title: "WebAudioAPI - Gerando um som no browser"
date: "2017-10-17"
thumbnail: "./Webaudi.png"
author: Tulio Faria
tags: ["Dicas", "Video-Tutorial"]
keywords: "Dicas"
---

---
Hoje eu quero falar um pouco sobre WebAudioAPI e como podemos gerar sons dinamicamente no browser. Vamos começar fazendo uma função que toca um som e depois vamos fazer uma variação do formato de onda. Todo som que eu quiser reproduzir aqui eu preciso de um contexto de áudio. Eu consigo trazer ele de duas formas: utilizando o áudio contexto ou nos browser de webkit, webkit audiocontext:

```jsx
<html>
    <head><tittle>WebAudioAPI</tittle></head>
    <body>
        <script>
        const contexto = (window.AudioContext || window.webkitAudioContext
        </script>
    </body>
</html>
```

Agora, com o contexto pronto, precisamos criar um oscilador, que é uma forma de gerar essa onda dinâmica:

```jsx
const osc =  contexto.createOscillator()
```

Com isso conseguimos começar a brincar com o oscilador, por exemplo:

```jsx
osc.type = ‘sine’

osc.frequency.value = 440
```

No exemplo, colocamos ele em uma frequência de 440 hertz e agora vamos linkar com o destino do contexto e iniciar o oscilador e depois pedimos para ele pausar depois de dois segundos:

```jsx
osc.connect(context.destination)

osc.start()

osc.stop(contexto.currentTime +2)
```

Ao rodar por dois segundos, ele emitirá um som. Agora vamos criar um select, dentro dele podemos variar o tipo de onda:

```jsx
<select id=”type” onchange=”play()”>

    <option>-</option>
    <option value=”sine”>Sine</option>
    <option value=”square”>Square</option>
    <option value=”sawtooth”> Sawtooth </option>
    <option value=”triangle”> Triangle </option>

</select>
```

Agora, dentro de script, colocaremos uma function play:

```jsx
<script>

    function play(){
        const contexto = (window.AudioContext || window.webkitAudioContext
        const osc =  contexto.createOscillator()
        osc.type = document.getElementById(‘type’).value
        osc.frequency.value = 440
        osc.connect(context.destination)
        osc.start()
        osc.stop(contexto.currentTime +2)
    }
</script>
```

Assim já conseguimos criar um sintetizador de áudio, sem precisar de um arquivo de áudio. Podemos, por exemplo, pegar a frequência de cada nota e trabalhar em cima dela. 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/H005spSyxeA" allowfullscreen></iframe>
</div>

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](http://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!