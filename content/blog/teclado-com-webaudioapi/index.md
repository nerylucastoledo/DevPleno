---
title: "Criando um teclado com WebAudioAPI"
date: "2017-10-18"
thumbnail: "./TecladoComWebAudi.png"
author: Tulio Faria
tags: ["Dicas", "Video-Tutorial"]
keywords: "Dicas"
---

---
Hoje quero continuar falando sobre [WebAudioAPI](https://www.devpleno.com/webaudioapi/). Vamos um pouco além do que já fizemos anteriormente. No nosso arquivo HTML, teremos dois scripts com função para ler qual tecla no teclado estamos apertando  e outra para quando soltarmos a tecla:

```jsx
<html>

    <body>
        <script>
            function onKeyDown(key){
                console.log(key)
            }
            function onKeyUp(key){
                console.log(key)
            }
            window.onkeydown = onKeyDown
            window.onkeyup = onKeyUp
        </script>
    </body>

</html>
```

A partir disso, podemos utilizar o contexto para tocar um áudio, mas não podemos utilizar vários deles, por esse motivo temos que checar se já apertamos a tecla, mas antes disso vamos fazer um check para saber qual tecla estamos pressionando. Para isso, tenho o mapeamento das teclas:

```jsx
<html>

    <body>
        <script>
            const notes = { 'C3': 130.81,
                'C#3': 138.59,
                'D3': 146.83,
                'D#3': 155.56,
                'E3': 164.81,
                'F3': 174.61,
                'F#3': 185.00,
                'G3': 196.00,
                'G#3': 207.65,
                'A3': 220.00,
                'A#3': 233.08,
                'B3': 246.94,
                'C4': 261.63,
                'C#4': 277.18,
                'D4': 293.66,
                'D#4': 311.13,
                'E4': 329.63,
                'F4': 349.23,
                'F#4': 369.99,
                'G4': 392.00,
                'G#4': 415.30,
                'A4': 440.00,
                'A#4': 466.16,
                'B4': 493.88,
                'C5': 523.25,
                'C#5': 554.37,
                'D5': 587.33,
                'D#5': 622.25,
                'E5': 659.25,
                'F5': 698.46,
                'F#5': 739.99,
                'G5': 783.99,
                'G#5': 830.61,
                'A5': 880.00,
                'A#5': 932.33,
                'B5': 987.77
            }
            const map = {
                65 = ‘C3’,
                83 = ‘D3’,
                68 = ‘E3’,
                70 = ‘F3’,
                71 = ‘G3’,
                72 = ‘A3’,
                74 = ‘B3’
            }
            const context = new (window.AudioContext || window.webkitAudioContext)()
            function onKeyDown(key){
                if(key.keyCode in map){
                    const osc = constext.createOscillator()
                    osc.type = ‘sine’
                    osc.frequency.value = notes\[map\[key.keyCode\]\]
                    osc.connect(contexto.destination)
                    osc.start()
                    osc.stop(contexto.currentTime+2)
                }
            }
            function onKeyUp(key){
                console.log(key)
            }
            window.onkeydown = onKeyDown
            window.onkeyup = onKeyUp
        </script>
    </body>

</html>
```

Dessa maneira fica mais interessante, pois conseguimos recapear caso quisermos. Além disso, posso guardar uma lista de osciladores para dar um stop. Dessa maneira, quando apertarmos a tecla, ele se inicia, e quando eu solto, ele para:


```jsx
const  mapOsc = {
}
function onKeyDown(key){
        if(map\[key.keyCode\] && !mapOsc\[key.keyCode\]){
            const osc = constext.createOscillator()
            osc.type = ‘sine’
            osc.frequency.value = notes\[map\[key.keyCode\]\]
            osc.connect(contexto.destination)
            osc.start()
            mapOsc\[key.keyCode\] = osc
        }
    }
    function onKeyUp(key){
        if(key.keyCode in mapOsc){
            const osc = mapOsc\[key.keyCode\]
            osc.stop(0)
            mapOsc\[key.keyCode\] = undefined
        }
    }
```

Assim temos um teclado bem interessante. Além disso, utilizando a tabela de notas, podemos colocar, por exemplo, os sustenidos. Caso você queira treinar, pode transformar isso em forma visual utilizando uma imagem de teclas de piano e quando você clicar em cada uma delas, é gerado os áudios. 

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/lKuFqfkVZy0" allowfullscreen></iframe>
</div>

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](http://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!