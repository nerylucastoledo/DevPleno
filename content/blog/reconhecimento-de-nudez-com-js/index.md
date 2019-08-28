---
title: "Reconhecimento de nudez com js"
date: "2017-11-24"
tags: ["Dicas", "Video-Tutorial"]
thumbnail: "./ReconhecimentoNudez.png"
author: Tulio Faria
keywords: "dicas"
---

---
Hoje quero complementar aquela dica passada sobre [reconhecimento facial](https://www.devpleno.com/reconhecimento-facial-com-js/). Outra atividade que fazemos bastante quando permitimos que um usuário envie uma foto é checar por nudez. Isso também é conhecido como feature detection.

O mais comum é checar o quanto de pele ou roupa tem naquela foto.

Para fazer isso vamos utilizar o nude.js, primeiramente vamos baixar as versões compressas, nude.min.js e worker.nude.min.js.

Agora em um html faremos o seguinte:

```jsx {numberLines: true}
<html>

    <head>

        <title>Nude</tittle>

    </head>

    <body>
        <img src="imgsemnudez.jpg" />
        <script src="nude.min.js"></script>
        <script>
            const img = document.getElementById('img')
            nude.load(img)
            nude.scan( result => {
                console.log(result)
            })
        </script>
    </body>

</html>
```

O próprio worker vai arrumar e carregar. Simplesmente temos que carregar essa foto nele e em seguida dar um scan.

No exemplo acima, eu coloquei uma imagem sem nudez, ao retornar o result percebam que será um false. Caso mudemos para uma imagem de uma pessoa nua ele vai retornar um true, com isso poderíamos negar essa foto. Por exemplo, quando o usuário tentar utilizar a foto podemos pegar a imagem quando selecionarmos, jogar em um canvas e passar pelo nude.js

Toda vez que for colocar uma imagem que você tenha medo, por exemplo, por serem desnecessárias, poderíamos rodar esse script para checar e ver se tem indícios de nudez. Outra coisa comum é checar. Se der falso, tudo bem, se der verdadeiro, você manda para uma checagem manual.

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/-JpM5ddlN5k" allowfullscreen></iframe>
</div>

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!