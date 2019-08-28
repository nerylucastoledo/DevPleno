---
title: "Multer upload de imagens com nodejs e express"
date: "2017-11-29"
tags: ["Dicas", "Video-Tutorial"]
thumbnail: "./Multer.png"
keywords: "dicas"
---

---
Hoje vou mostrar uma dica rápida de como podemos fazer upload no NodeJS utilizando o Express. Para isso vamos utilizar o Multer.

A primeira coisa que vamos fazer é o seguinte:

```jsx {numberLines: true}
yarn add express ejs multer
```

Agora, com o Visual Studio Code aberto, vamos criar um arquivo novo index.js e também uma pasta view com um arquivo home.ejs dentro dele, em seguida faremos o seguinte em index.js:

```jsx {numberLines: true}
const express = require('express')
const app = express()
app.set('view-engine', 'ejs')
app.get('/', (req, res) => res.render('home'))
app.post('/',(req, res) => {
    console.log(req.body, req.files)
    res.send('ok')
})
app.listen(3000, () => console.log('running...'))
```

Já dentro de home.ejs vai ter o seguinte:

```jsx {numberLines: true}
<h1>Upload</h1>

<form method="post" ectype="multipart/form-data">

    <input type="file" name="img" />
    <button type="submit">Enviar</button>

</form>
```

O ‘ectype=”multipart/form-data”‘ significa que vamos mandar os campos em vários formatos.

Quando enviamos uma foto, por exemplo, vai retornar dois undefined, isso significa que não estamos tratando nem o file e nem o body, por isso precisamos do multer.

O multer é um middleware, por esse motivo conseguimos rodar antes da requisição:

```jsx {numberLines: true}
const express = require('express')
const app = express()
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
app.set('view-engine', 'ejs')
app.get('/', (req, res) => res.render('home'))
app.post('/', upload.single('img'),(req, res) => {
    console.log(req.body, req.file)
    res.send('ok')
})
app.listen(3000, () => console.log('running...'))
```

Reparem que agora temos no body um arquivo vazio e o outro undefined traz informações sobre a imagem juntamente com onde foi salva a imagem.

Nós conseguimos controlar também qual o nome que vamos dar para essa imagem.

Podemos criar um diskStorage, ele é um objeto que tem duas keys, destination que é onde eu vou salvar. Além disso, posso pegar um filename:

```jsx {numberLines: true}
const express = require('express')
const app = express()
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+'-'+file.ogirinalname)
    }
})
const upload = multer({ storage })
```

Nós conseguimos controlar como vamos fazer o upload através do storage. Além disso, podemos criar um memory storage, onde ele vai retornar para nós um buffer dentro do file. É aconselhável utilizar ele exatamente onde você precisa, nunca coloque esse middleware como global.

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/FKnDvu_eODY" allowfullscreen></iframe>
</div>


Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!