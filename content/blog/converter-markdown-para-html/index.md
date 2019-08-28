---
title: "Como converter Markdown para HTML usando Marked"
date: "2017-05-03"
thumbnail: "MARKED-POST-2-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "hands"
---


O Markdown é uma forma de escrevermos documentação que foi popularizada pelo Github (e que é uma mão na roda, diga-se de passagem). Com ele, podemos pegar um texto e criar algumas marcações, o que gera uma interface mais organizada, sem perigo de existir sujeiras provenientes do Word por exemplo.

 

**1 – Usando o módulo Marked**

Para entender como o Markdown funciona, vamos fazer um hands-on no módulo chamado Marked, que tem a função de converter Markdown para HTML.

Primeiro, vamos criar um arquivo novo para testarmos (vou chamar o meu de teste.js)

 

**2 – Importando o Marked**

Com o arquivo aberto, vamos dar um Require chamando o módulo  Marked

```jsx {numberLines: true}
const marked = require('marked')

console.log(marked('# teste'))
```


**3 – Rodando o arquivo**

Ao dar node no arquivo teste.js, perceba que ele vai retornar

 
```jsx {numberLines: true}
<h1> id='teste'>Teste</h1>
 

O # trás pra gente a tag H1, podemos usar 2 # por exemplo e ele nos retornaria a tag H2

console.log(marked('## teste'))

<h2> id="teste">Teste</h2>
 ```

**4 – Por que usar o Markdown?**

Com ele, conseguimos colocar esses textos de forma mais limpa e também plugarmos renderes nele.

Por exemplo, quando renderizar o H1, quero que seja um pouco diferente. Se colocarmos um texto formatado, poderia converter isso em view no react native, text, HTML, etc.

Exemplo:

 
```jsx {numberLines: true}
constmarked = requie('marked')

constrenderer = new marked.Renderer()

renderer.heading = functionText, level){

return 'Text: ' +text+' Level: '+level

}



Console.log(marked(‘# teste’, { renderer: renderer}))
 ```

Lembrando que ao criar um renderer temos que avisar o marked que estamos criando um renderer diferente. Neste caso, como ele é um Heading, vamos chamar o  renderer.heading. Novamente, para visualizarmos o que foi feito, vamos dar um node teste.js e ele vai retornar pra gente:
```jsx {numberLines: true}
Text: Teste Level: 2
 ```

Com isso, o Marked sabe que o texto que eu quero é o Teste, e o level que eu quero é o 2, ou no caso a heading tag H2. Eu consigo retornar uma fontSize maior como no exemplo abaixo:

 
```jsx {numberLines: true}
renderer.heading = functionText, level){

return<Textstyle={{fontSize: }}>'Text: ' +text+' Level: '+level

}
```
Checando obviamente o level e por aí vai. Assim podemos gerar uma interface que vai ser reproduzida de forma igual tanto no react native quanto na Web, já que é possível converter para HTML e estaria tudo rodando normalmente.

 

**5 – Concluindo**

Venho usando bastante Markdown para documentação. Uma outra ideia interessante seria pegar esse HTML gerado pelo Markdown e, a partir dele, gerar um PDF para salvar isso para outros desenvolvedores. 

Marked é uma forma que temos no Node de converter o Markdown em HTML, mas também podemos utilizá-lo no browser.   

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Ah, fique à vontade para deixar suas dúvidas e sugestões nos comentários. Abraço!