---
title: "Float e precisão"
date: "2017-07-28"
thumbnail: "FLOAT-E-PRECISÃO-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "hands"
---

![](https://www.devpleno.com/wp-content/uploads/2017/07/FLOAT-E-PRECIS%C3%83O-790x400.png)

Hoje quero dar uma dica e também mostrar um problema que acontece em várias linguagens que é quanto à precisão de número 'quebrados' ou Float. Esse problema em específico já caiu em uma entrevista de emprego que eu fiz.

 Me passaram um caso de teste e infelizmente eu não lembro exatamente como foi, mas eu vou mostrar como podemos resolver isso de uma forma interessante.
 
  Primeiramente vou mostrar qual o problema que nós temos com precisão de números float, tanto em Node quanto em outras linguagens. Vamos supor que temos a seguinte situação:

```jsx {numberLines: true}
const num1 = 0.1

const num2 = 0.2

const num3 = num1 + num2
```

Ao darmos  o console.log no num3 reparem o número que nós temos: [![](040ee09b-d219-4f76-8f82-e805253affdc.png)](040ee09b-d219-4f76-8f82-e805253affdc.png) Essa sujeira atrapalha tudo que vamos fazer. Lembrando que essa sujeira vem da conversão para binário e esses números acabam se atrapalhando.

 Qual a solução para isso? Quando temos números monetários, como preço ou algo nesse sentido, nós tentamos tratar esses números como inteiro, por exemplo, no caso de um banco que fizemos o sistema, eles precisavam de cinco casas decimais de precisão, então nós multiplicávamos isso por 100000 e em seguida dividíamos

```jsx {numberLines: true}
const precisao = 100

const num1 = parseInt(0.1 \* precisao)

const num2 = parseInt(0.2 \* precisao)
```

A regra é multiplicar pelo número de casas decimais que queremos e converter em seguida para inteiro, depois fazemos a conta com inteiros, já que ele não tem esse problema. Depois disso, quando formos retornar o valor, nós dividimos pela precisão:

```jsx {numberLines: true}
const num3 = ((num1 + num2)/precisao).toFixed(2)
```

Obviamente, depois precisamos fazer mais um tratamento porque ele volta a ficar sujo, então precisamos fixar, por exemplo, com 2 zeros depois da vírgula. 

Quando fazemos essa conversão para inteiro, não temos mais esse problema de precisão. Um exemplo para ficar mais claro: vamos supor que você quer armazenar uma camisa que custa R$10.99, ao invés de armazenar 10.99, armazena 1099 centavos, com um centavo não é divisível fica muito mais simples de fazermos essa conta. 

Se você passar por esse problema, agora já sabe como resolver. :) 

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!


<div class="embed-responsive embed-responsive-16by9"> 
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/CnmcnS70Soc" allowfullscreen></iframe>
 </div>