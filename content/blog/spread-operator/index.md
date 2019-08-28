---
title: "Testando o Spread Operator: Novidade do ES6"
date: "2017-05-05"
thumbnail: "./SpreadOperator.png"
author: Tulio Faria
tags: ["Dicas", "Video-Tutorial"]
keywords: "Hands-On"
---

---
Olá! 

Neste post, vou mostrar uma novidade do ES6: o Spread Operator. 

Você deve estar se perguntando agora _(ou não)_: 

**Para que serve o Spread Operator?** 

O Spread Operator é usado com bastante frequência principalmente quando queremos utilizar a imutabilidade, ou seja, criar um objeto novo a partir de um objeto existente.   

**Mãos na massa** 

Ele é bastante simples, vou criar um exemplo utilizando Array. 

Primeiramente temos que criar o Array:

```jsx
const arr = \[0,1,2\]
```

Então, se eu quisesse criar um novo vetor eu faria:

```jsx
constNewArr = \[...arr, 3\]
```

Somente esses 3 pontinhos já é o Spread Operator.   

**E o que ele faz?** 

Vai ficar bem claro quando fizermos um teste com funções. Se eu pedir para rodar:

```jsx
console.log(newArr)
```

Ele nos retornará um vetor novo com o 0,1,2,3. 

Eu adicionei o item 3 no final e posso manipulá-lo em qualquer posição, por exemplo

```jsx
constNewArr = \[3, ...arr\]
```

Ele irá aparecer 3,0,1,2. Não ficou claro? Então vamos para outro exemplo e ficará mais fácil de entender. Quando colocamos ...arr é basicamente o mesmo que colocarmos o que está dentro do Array, por esse motivo se chama Spread Operator, pois é um operador que espalha os valores. 

Se pensarmos assim, podemos fazer o seguinte:

```jsx
function soma(a,b,c){
    returna+b+c
}
```

Ao mandar rodar o

```jsx
console.log(soma(...arr))
```

Ele irá espalhar estes valores em a, b e c e vamos conseguir somar esses valores. 

Podemos utilizar isso de várias maneiras, como por exemplo tirando um valor do arr

```jsx
const arr = \[0,1,2\]
```

deixando

```jsx
const arr = \[0,2\]
```

E passando para o

```jsx
console.log(soma(1, ...arr))
```

**Dica** 

Uma dica fácil é lembrar que ele espalha os valores colocando virgula entre eles. Isso é bastante útil, principalmente quando a gente quer duplicar um vetor.   

Você pode conferir o Hands-on também pelo vídeo: 

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Uft_UkXtqT0" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. 

Ah, fique à vontade para deixar suas dúvidas e sugestões nos comentários. Abraço!