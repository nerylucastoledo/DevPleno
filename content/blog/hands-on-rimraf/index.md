---
title: "Rimraf - Remova diretórios inteiros mesmo que eles não estejam vazios"
date: "2017-08-10"
thumbnail: "./Rimraf.png"
author: "Tulio Faria"
tags: ["Video-Tutorial"]
keywords: "hands-On"
---


Durante a semana fizemos diversos procedimentos em lot, e uma das coisas que nós fizemos foi apagar um diretório de maneira recursiva (pegar o diretório completo e apagar).

Seria mais ou menos o seguinte: tenho um diretório no VS Code e dentro desse diretório tivesse um dir1, dentro dele um dir2, dentro um dir3 e por aí vai. Precisamos apagar a estrutura toda.
 
A forma que temos para fazer isso no padrão do node usando o FS é ter que apagar um por um, mas vamos utilizar um módulo chamado Rimraf para que ele faça esse processo.

```jsx {numberLines: true}
yarn add rimraf
```

Ele é um pacote bem simples. Ao adicionar, o [Yarn](https://www.devpleno.com/hands-on-yarn/) já cria o package.json e o yarn.lock para travar as versões. Agora vamos criar um arquivo que vai apagar o diretório. Esse arquivo vai se chamar apagar.js:

```jsx {numberLines: true}
const rimraf = require('rimraf')
rimraf('dir1', function(){
  console.log('done')
})
```

Ao rodar, o código perceba que ele apagou o diretório. É muito legal utilizar isso porque o filesystem padrão do node não permite que a gente apague diretório de forma recursiva, isso é muito importante para conseguir agilizar, já que não precisamos criar nada recursivamente.

O Rimraf tem outra coisa muito interessante que é apagar diretórios que não estão vazios, temos algumas limitações como, por exemplo, se pegarmos os rmdir que só apaga diretório vazio.
 
<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/N9lvwnRZIoM" allowfullscreen></iframe>
</div>

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](http://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!