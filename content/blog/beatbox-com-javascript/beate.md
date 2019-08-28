---
title: "Como construir um beatbox com JavaScript"
date: "2017-05-29"
thumbnail: "BEATBOX-MANIPULÁVEL-COM-JS-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---

Continuando nossos experimentos utilizando áudio no HTML (você deve ter percebido que me empolguei com este assunto), vamos mudar o exemplo do metrônomo para construir uma ‘bateria’ e poder criar uma música somente dando ‘plays’ de forma ordenada em alguns trechos. Então vamos lá!

Vamos ter um botão que será um play/stop. Ao dar o play, será tocado uma sequência de áudios para simular uma bateria em loop. Para que isso ocorra, temos que ter alguns áudios e também tratar isso em javaScript.

```jsx {numberLines: true}
<html>

<head><tittle>beat-box</tittle></head>

<body>

<button id="play">Play</button>



<audio src="prato.wav" id="prato"></audio>

<audio src="prato-fechado.wav" id="prato-fechado"></audio>

<audio src="bumbo.wav" id="bumbo"></audio>

<audio src="boca.wav" id="boca"></audio>

<audio src="caixa.wav" id="caixa"></audio>



<script>



</script>

</body>

<html>
```

Dentro do Script, vamos tratar como fizemos no exemplo do metrônomo, então vamos criar o mesmo timer, criar uma função tick, porém fazer ela rodar a 90bpm (60*1000/90), isso dá a distância entre uma batida e outra.

A ideia é que a cada interação do tick, toque um áudio. Exemplo: Supondo que nossa música seja prato, bumbo, boca e caixa, o tick vai tocar essas 4 coisas para cada repetição que fizer. Para isso vamos pegar o music na posição currentAudio++.

```jsx {numberLines: true}
<script>

const  play = constGetElementById('play')

let timer = null

let currentAudio = 0

const bpm = 90

const music = \['prato', 'bumbo', 'boca', 'caixa'\]

function tick(){

console.log(music\[(currentAudio++)%music.length\])

}

play.addEventListener('click', function(){

timer = setInterval(tick, (60\*1000/bpm)

})

</script>
```

  Acabamos de criar uma técnica para fazer os áudios circularem. A cada interação vamos incrementar o currentAudio e quando esse currentAudio chegar em 4, ele voltará para o 0. Com isso já é possível fazer uma bateria apenas mudando o console.log por:

```jsx {numberLines: true}
function tick(){

const audioID = (music\[(currentAudio++)%music.length\]

const audio = document.getElementById(audioID)

audio.play()

}
```

  Conseguimos tocar uma trilha, mas para a música ficar legal, podemos colocar essa trilha de uma forma diferente, por exemplo:

```jsx {numberLines: true}
<script>

const  play = constGetElementById('play')

let timer = null

let currentAudio = 0

const bpm = 90

const music = \[

\['bumbo', 'bumbo', 'bumbo', 'bumbo', \],

\['prato', 'prato-fechado', 'boca', 'caixa'\]

            \]

function tick(){

const current = (music\[(currentAudio++)%music\[0\].length\]

const audioID1 = music\[0\]\[current\]

const audioID2 = music\[1\]\[current\]

const audio1 = document.getElementById(audioID1)

audio1.play()

audio1.currentTime = 0

const audio2 = document.getElementById(audioID2)

audio2.play()

audio2.currentTime = 0

}

play.addEventListener('click', function(){

timer = setInterval(tick, (60\*1000/bpm)

})

</script>
```

Você pode baixar os arquivos de áudio aqui: [Download](https://goo.gl/zHKuad)    

 Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!


 <div class="embed-responsive embed-responsive-16by9"> 
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/01iPnENtCiQ" allowfullscreen></iframe> 
 </div>
