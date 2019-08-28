---
title: "Preview de imagens antes do upload"
date: "2017-11-13"
tags: ["Dicas", "Video-Tutorial"]
thumbnail: "./PreviewDeImagens.png"
author: Tulio Faria
keywords: "dicas"
---

---
Hoje vamos fazer o preview da imagem que está sendo selecionada para fazer upload, isso é bastante interessante de se fazer quando o usuário está selecionando uma foto.

Vamos criar inicialmente um html, em seguida criar um input type do tipo file e um img:

```jsx {numberLines: true}
<html>

    <head>Preview Upload</head>

    <body>
        <input type="file" id="upload" />
        <img id="img" />
        <script
            src="https://code.jquery.com/jquery-3.2.1.slim.js"
            integrity="sha256-tA8y0XqiwnpwmOIl3SGAcFl2RvxHjA8qp0+1uCGmRmg="
            crossorigin="anonymous">
        </script>
    </body>

</html>

```

Agora vamos abrir uma tag script nele. Quando o documento estiver pronto e for feito um change, vamos fazer um console.log this:

```jsx {numberLines: true}
<script>

    $(function(){
        $('#upload').change(function(){
            console.log($(this)[0].files)
        })
    })

</script>
```

Assim estamos pegando o arquivo na posição zero. A partir disso, vamos criar um const que vai ser igual a this na posição 0. Já que ele é uma instância de files, conseguimos utilizar um fileReader e ler e processar esse arquivo:

```jsx {numberLines: true}
<script>

    $(function(){
        $('#upload').change(function(){
            const file = $(this)[0].files[0]
            const fileReader = new fileReader()
            fileReader.onLoadend = function(){
                console.log(fileReader.result)
            }
            fileReader.readAsDataURL(file)
        })
    })

</script>
```

Como a imagem gera uma URL válida, se eu colocá-lo como source da imagem, ele vai dar um preview.

```jsx {numberLines: true}
<script>

    $(function(){
        $('#upload').change(function(){
            const file = $(this)[0].files[0]
            const fileReader = new fileReader()
            fileReader.onLoadend = function(){
                $('#img')attrib('src', .fileReader.result)
            }
            fileReader.readAsDataURL(file)
        })
    })

</script>
```
Isso é muito interessante para a experiência do usuário como um todo. Imagine se eu estivesse selecionando um documento, seria muito mais fácil se eu estivesse prevendo ele.

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/euUtDQcwsYk" allowfullscreen></iframe>
</div></iframe>

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!