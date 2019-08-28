---
title: "Pegadinha #1 de entrevistas em JavaScript"
date: "2017-11-07"
thumbnail: "./Pegadinha.png"
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---

---
Hoje quero comentar uma questão muito comum em entrevistas de JavaScript.

Qual é a saída desse código?

```jsx {numberLines: true}
const arr = ['a', 'b', 'c', 'd']
    for (var i=0; i<arr.length; i++){
    setTimeOut(() => {
        console.log(i, arr[i])
    },0)
}
console.log('out', i)
```

Detalhe que estamos utilizando um setTimeOut com um zero, mas poderia ser qualquer valor.

O primeiro detalhe é que percebemos que o out saiu primeiro com o número 4. O ‘var’ foi definido dentro do for, porém eu consegui dar um console log lá é baixo. Podemos chegar a conclusão que ele não respeitou o escopo. Outro ponto importante é que ele aconteceu antes do restante, isso acontece porque sempre que utilizamos o setTimeOut, ele leva essa execução da arrow function para dentro do event loop.

Como o i já está com 4, ele não é um número válido, pois nosso array inicia-se em zero e termina em 3. Por esse motivo virá o seguinte:

```jsx {numberLines: true}
out 4

4 undefined
4 undefined
4 undefined
4 undefined
```

Como arrumamos essa função?

Temos algumas formas de arrumar isso. Existe uma bem simples e algumas que podemos brincar um pouco mais.

A primeira bem simples é trocar o var por let:

```jsx {numberLines: true}
for (let i=0; i<arr.length; i++){
    setTimeOut(() => {
    console.log(i, arr[i])
    },0)

```

Agora funcionou perfeitamente:

```jsx {numberLines: true}
0 'a'
1 'b'
2 'c'
3 'd'

```

Por que essa diferença?

Quando estamos com o var, seria equivalente a quando ele estiver executando o código ele puxa todos os vars pra cima, isso é conhecido como hoisting.

Por esse motivo, sempre que possível, utilize let e const.

Outra maneira seria transformar em setTimeOut em uma maneira que eu consiga injetar as variáveis dentro dele mesmo, como uma self invoked:

```jsx {numberLines: true}
setTimeOut(function(ii) {
    return()=> {
    console.log(ii, arr[ii])
    }
}(i), 0)

```
Iremos executar a função e a partir da function o ii vai estar válido. Assim funcionará também do jeito que esperávamos.

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ODBoaezEfMo" allowfullscreen></iframe>
</div>

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!