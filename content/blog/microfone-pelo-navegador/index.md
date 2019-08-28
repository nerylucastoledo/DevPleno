---
title: "Capturando áudio do microfone pelo Navegador"
date: "2017-11-13"
tags: ["Dicas", "Video-Tutorial"]
thumbnail: "./Microfone.png"
keywords: "dicas"
author: Tulio Faria
---

---
Hoje eu quero mostrar como podemos capturar um áudio do microfone pelo navegador.

Da onde surgiu essa ideia?

Nós construímos um chat em tempo real no Curso Completo de Socket.io, que faz parte do Fullstack Master. Nele construímos um chat semelhante ao WhatsApp, onde conseguiríamos mandar uma mensagem de voz. Quero mostrar mais ou menos a ideia de como podemos capturar este áudio.

Primeiramente vamos acessar o jQuery CDN para conseguirmos copiar o link do jQuery.

Vamos criar um arquivo index.html bem rápido, apenas para começarmos o nosso exemplo:

```jsx {numberLines: true}
<html>

    <body>
        <script
            src="https://code.jquery.com/jquery-3.2.1.slim.js"
            integrity="sha256-tA8y0XqiwnpwmOIl3SGAcFl2RvxHjA8qp0+1uCGmRmg="
            crossorigin="anonymous">
        </script>
    </body>

</html>
```

Vou criar um script que vai dentro do próprio body, já que o que importa mesmo é o que estamos executando:

```jsx {numberLines: true}
<script>
    $(function(){
        navigator
        .mediaDevices
        .getUserMedia({audio: true})
        .then( stream => {
            console.log(stream)
        }, err =>{
            console.log(err)
        })
    })
</script>
```

Quando temos o getUserMedia, temos uma promise e essa promise pode ser resolvida tendo o stream ou tendo um erro.

Repare que ao rodar o navegador ele já está capturando o áudio e foi criado um stream para isso. Se formos fazer um sistema real, ao dar erro como acesso negado, precisamos avisar o porque não funcionou:

```jsx {numberLines: true}
}, err =>{
    $('body').append('<p>Você deve permitir o áudio</p>')
})

```

Eu sempre gosto de definir um mediaRecorder, assim, quando o stream for criado, é criado junto o mediaRecorder:

```jsx {numberLines: true}
<script>
    $(function(){
        let mediaRecorder
        navigator
        .mediaDevices
        .getUserMedia({audio: true})
        .then( stream => {
            mediaRecorder = new MediaRecorder(stream)
            mediaRecorder.ondataavailable = data => {
                console.log(data)
            }
            mediaRecorder.onstop = () => {
                console.log('stop')
            }
            mediaRecorder.start()
            setTimeOut(() => mediaRecorder.stop(), 3000)
        }, err =>{
            console.log(err)
        })
    })
</script>
```

Feito isso, ele vai começar a gravar e três segundos depois ele da um stop e diz que tem dados disponíveis para ser utilizados.

Depois que terminamos de gravar, pode ser que seja interessante fazer alguma coisa com esse áudio, mandar para algum lugar ou coisa nesse sentido. Caso o evento seja muito longo, podemos definir que algumas partes desse áudio vão ser colocados em um vetor e no ondataavailable à medida que formos recebendo os dados do stream vai ser organizado dentro de chunks que são grupos de informação:

```jsx {numberLines: true}
mediaRecorder = new MediaRecorder(stream)
let chunks = []
mediaRecorder.ondataavailable = data => {
    chunks.push(data.data)
}
```

Agora, no Stop, podemos fazer algo para transformar isso em algum dado que podemos utilizar de alguma forma:

```jsx {numberLines: true}
mediaRecorder.onstop = () => {
    const blob = new Blob(chunks, { type: 'audio/ogg; code=opus' })
    const reader = new window.fileReader()
    reader.readAsDtaURL(blob)
    reader.onloadend = () => {
        console.log(reader.result)
    }
}
```

Com isso, ele junta os dados em binário em um só chamado blob. Além disso, utilizamos um reader para gerar um URL.

Ao rodar, perceba que ele converteu para um base 64, que é um texto, ou seja, ele transformou o que era binário em texto.

Por que isso é importante?

Porque geralmente o protocolo HTTP em si não lida bem com binário, principalmente quando precisamos misturar binário com conteúdo em texto. Por esse motivo usamos essa codificação dos dados binários para algo e transferimos isso como texto.

Além disso, temos uma outra vantagem, podemos, por exemplo, utilizar a url para dar play no body:

```jsx {numberLines: true}
mediaRecorder.onstop = () => {
    const blob = new Blob(chunks, { type: 'audio/ogg; code=opus' })
    const reader = new window.fileReader()
    reader.readAsDtaURL(blob)
    reader.onloadend = () => {
        const audio = document.createElement('audio')
        audio.src = reader.result
        audio.controls = true
        $('body').append(audio)
    }
}
```

A partir disso podemos por exemplo mandar o áudio em um post, ou fazer o start e o stop baseado em um botão, assim cada vez que apertarmos um botão vai ser feito a ação. Isso abre um leque de possibilidades muito grande.

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/80giIJkO5V8" allowfullscreen></iframe>
</div>

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!