---
title: "Algoritmos: XOR Swap"
date: "2017-08-04"
thumbnail: "XOR-SWAP-790x400.png"
author: "Tulio Faria"
tags: ["Video-Tutorial", "Algoritmos"]
keywords: "algoritmos"
---


A dica de hoje é sobre o operador XOR, que eu achei bem interessante. Estava estudando outra coisa e apareceu
 essa informação, então resolvi checar e realmente faz muito sentido.

Imagine que temos duas variáveis:

```jsx {numberLines: true}
let a = 3

let b = 4
```

Eu quero simplesmente colocar A em B e B em A, geralmente faríamos uma variável TMP, colocaríamos A, 
colocaríamos A = B e em seguida B = TMP:

```jsx {numberLines: true}
let TMP =  a

a = b

b = TMP
```
Precisamos de mais uma variável para conseguir fazer essa troca. Se a gente quisesse fazer utilizando o XOR, é possível:

```jsx {numberLines: true}
a =  a ^ b

b = a ^ b

a = a ^ b

console.log(a, b)
```

Com isso conseguimos inverter os valores, essa é uma forma diferente de fazer troca de valores. Algo que acho muito legal na nossa área é quando começamos a pegar operadores que nem são tão famosos, como o XOR mesmo, e começamos a ter alguns usos incomuns.

Imaginamos que em binário seria:

```jsx {numberLines: true}
3 | 011

4| 100
```

Então no primeiro XOR nós teriamos de resultado o 1

```jsx {numberLines: true}
a | 111
```

Agora vamos pegar nosso x que agora é o valor de A e fazer com o B:

```jsx {numberLines: true}
a | 111

4 | 100
```

Nosso resultado sera:

```jsx {numberLines: true}
b | 011
```

Agora faremos um terceiro XOR com o A:

```jsx {numberLines: true}
b | 011

a | 111
```

E o resultado será:

```jsx {numberLines: true}
a | 100
```

Perceba que o A agora é 100, que é 4, e o B ficou com 011, que é 3. O legal é que se formos lembrar daquele algoritmo que fizemos de achar os pares que estão faltando, é o mesmo caso porque a medida que nós aplicamos duas vezes o mesmo número, em cima nós removemos, então podemos adicionar ele com outro e tirar o que não queremos. Resumindo, colocamos em A a soma de A com B, em B nós somamos B novamente.

Obviamente  ele só funciona com tipos de variáveis numéricas e do mesmo tipo, no nosso exemplo são dois inteiros.

Confira o vídeo:



<div class="embed-responsive embed-responsive-16by9">
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/5E_1usjXc_E" allowfullscreen></iframe>
  </div>

 E Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades.  Abraço!