---
title: "ES6 - Template Strings"
date: "2017-05-30"
thumbnail: "./TemplateStrings.png"
author: Tulio Faria
tags: ["Dicas", "Video-Tutorial"]
keywords: "Dicas"
---
---

Como já citei em [outros posts](https://www.devpleno.com/1155-2/), o ES6 apresenta algumas novidades, uma delas é o Template Strings, uma forma de declarar uma string em JavaScript.

```jsx
const str1 = \`teste\`
console.log(str1)
```

Ela será o mesmo que se fizermos uma String convencional, porém podemos fazer algumas coisas extras. Exemplo: Se eu quisesse uma String multilinha, teria que fazer o seguinte:

```jsx
const str1 = \`teste\`
const strMultiLinha = 'linha1\\n\\
linha2'
console.log(strMultiLinha)
```

Ou seja, teria que utilizar o contra barra (ou scape) em todas as linhas, o que é um tanto chato.   

**O que pode ser feito?** 

Com o Template String é possível fazer simplesmente isso:

```jsx
const strMultiLinha = \`linha1
linha meio
linha2\`
console.log(strMultiLinha)
```

Não é mais necessário utilizar o \\n, isso deixa o código mais limpo. Outra coisa do Template String é que podemos criar uma string interpolada, ou seja, misturar uma expressão com a string que vai ser avaliada e depois colocar ela entre pólos, ao invés de concatenar. Fazemos isso apenas abrindo um ${expressão}, por exemplo:

```jsx
const str = \`Ola ${1+1} !\`

console.log(str)
```

Obviamente também podemos colocar variáveis dentro:

```jsx
const a = 10
const str = \`Ola ${a+1} !\`
console.log(str)
```

 Existe ainda uma outra funcionalidade interessante: utilizar algumas tags com o Template String. Exemplo: Vamos criar uma tag e ela vai receber strings e values.

```jsx
function tag(strings, ...values){
    console.log(strings, values)
    return 'opa'
}
const  str = tag\`Olá ${10} mundo!\`
```

Perceba que a strings vai ter olá e mundo e o value terá o 10. Ele está entre as strings, por isso o nome interpolação. Com isso podemos criar uma tag em HTML sem grandes problemas. Uma última coisa que conseguimos fazer é checar o valor row das variáveis apenas adicionando:

```jsx
console.log(strings.raw\[0\])
```

Estamos pegando o row da posição zero neste exemplo. Quando colocamos o row, ele mostra exatamente como foi definido, então se você colocar um \\n, será mostrado realmente o row disso, o \\n.   Confira o vídeo: 

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Ooqm6jUCD6E" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!