---
title: "Hands-on: Readline"
date: "2017-05-08"
thumbnail: "./Readline2.png"
author: "Tulio Faria"
tags: ["Video-Tutorial"]
keywords: "hands-On"
---


Neste post vamos fazer um hands-on é de um modo padrão com o core do node: o readline.  

**O que temos que fazer?** 
 
Vamos importar primeiro o readline e instanciar um novo readline.

```jsx {numberLines: true}
const readline = require('readline')
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stout
})
```

Como o readline é um modulo que permite que lidemos com entrada e saída, podemos atrelar um readable stream no input e output padrão.   

**Pra que serve isso?** 

Podemos construir várias 'ferramentinhas' com o readline, a principal delas é a seguinte:

```jsx {numberLines: true}
rl.on('line', (line)==>{
    console.log('line >>', line)
})
```

E toda vez que eu digitar algo, ele irá retornar o que escrevi adicionando o que esta no line. Mas não é só isso. Podemos saber, por exemplo, se o usuário apertou Ctrl+C para fechar o prompt:

```jsx {numberLines: true}
rl.on('line', (line)==>{
    console.log('line >>', line)
})
rl.on('SIGINT', () => {
    console.log('bye'),
    rl.pause()
})
```

Ao fazer isso, quando o usuário apertar Ctrl+C ele irá escrever 'bye' e irá sair, isso acontece, pois estamos chamando o rl.pause() já que estamos pausando e não pegando mais nada do stdin. 

Podemos criar várias formas de interação, vou dar mais um exemplo prático.

```js
rl.question('qual o seu nome?', (nome)=>{
    console.log('prazer ', nome)
})
```

Rodando o node, a pergunta irá aparecer e ao escrever o console.log vai ser retorndado: prazer mais o nome que você digitou. 

Em Java, temos algo bem semelhante. Conseguimos dar o readline no stream e ele devolve a linha digitada pelo usuário.   

**Conclusão** 

Apenas com o realine já é possível construir uma ferramenta simples como ler dois arquivos e fazer algo apenas utilizando puramente o rl.on e o rl.question.  

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ebFK_aSxo2Y" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Ah, fique à vontade para deixar suas dúvidas e sugestões nos comentários. Abraço!