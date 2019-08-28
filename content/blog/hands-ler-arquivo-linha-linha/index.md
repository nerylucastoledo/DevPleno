---
title: "Hands-on: Ler arquivo linha a linha"
date: "2017-05-08"
thumbnail: "./LerArquivos.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "hands-On"
---


Neste hands-on, vamos ver como conseguimos utilizar o readline em conjunto com Readable Stream para ler linhas de um arquivo texto.

**Como faremos isso?** 

Primeiramente vamos importar o headline (que já faz parte do core do node) e o FS (file System). Em seguida, vamos ler o arquivo com o readable.

```jsx {numberLines: true}
const readline =  require('readline')
const fs = require('fs')
const readable = sf.createReadStream('arquivo.html')
```

Vamos criar uma instancia do readline e no imput vamos passar o readable

```jsx {numberLines: true}
const rl = readline.creatInterface({
    input: readable,
    output: process.stdout
})
```

**Mas para que isso serve?** 

Isso é legal, pois podemos fazer assim por exemplo: rl

```jsx {numberLines: true}  
.on('line', (line)==>{
    console.log('>>>', line)
})
```

Se rodarmos este código, o node vai mostrar o HTML inteiro linha a linha. 

Para provar realmente que ele esta fazendo isso, podemos fazer o seguinte:

```jsx {numberLines: true}
rl.on('line', (line)==>{
    console.log('>>>', line.toUpperCase())
})
```

Então o node retornará tudo em maiúsculo. Neste código, também podemos ler um CSV, bastaria eu processar a linha do CSV dentro do console.log e temos uma forma de rodar o arquivo sem precisar gastar muita memória.   

**Conclusão** 

Quando temos muitos dados, não é necessário jogar na memória. Utilizando essa forma, a leitura vai ser bem mais vantajosa. 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/bNKi8_J4TLI" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Ah, fique à vontade para deixar suas dúvidas e sugestões nos comentários. Abraço!
