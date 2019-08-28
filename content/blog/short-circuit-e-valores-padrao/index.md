---
title: "Short-circuit e valores padrão"
date: "2017-08-07"
thumbnail: "./ShortCircuit.png"
author: Tulio Faria
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---

---
Essa dica pode ser utilizada tanto em JavaScript quanto em outras linguagens de programação, apenas com um pouco de adaptação. Vamos falar primeiramente sobre o short-circuit. 

Imagine que temos uma constante que se chama debug, que eu posso ligar e desligar esse debug. Quando o debug estiver ligado, eu quero que ele tenha mais saídas no console.log, por exemplo, caso ele não esteja ativado, não vai escrever nada:

```jsx
const DEBUG = true
console.log(1)
Geralmente as pessoas fariam algo assim:
if(DEBUG)
console.log(1)
```

O detalhe é que existe outra forma de fazer isso, chamada de short-circuit, onde deixamos o DEBUG na frente e colocamos && ('e' comercial). Vai acontecer a mesma coisa:

```jsx
DEBUG && console.log(1)
```

Se colocarmos o false em DEBUG, o console.log não irá rodar. Isso acontece porque quando fazemos os 'E's comerciais, temos uma precedência, ou seja, ele depende que tudo seja verdade para que retorne verdadeiro, se DEBUG é false, ele nem valida o restante do código, por esse motivo chamamos de short-circuit (curto-circuito), afinal nós cortamos esse circuito e isso evita de executarmos o restante das operações. Eu posso definir todas as minhas linhas de DEBUG dessa forma por exemplo. 

Essa variável pode vir de uma variável de ambiente, podemos rodar nosso script em modo DEBUG e setar algumas coisas a mais, como definir um banco diferente ou coisas no sentido que funcionaria normalmente. 

A segunda dica que quero mostrar é o uso do operador || ('ou'), que usamos para valores padrão. Vamos supor que 'a' eu não defina nada dentro dele e em 'b' eu quero colocar o valor de 'a' ou um valor padrão caso o 'a' seja vazio.

```jsx
let a = null
let b = a || 'padrão'
```

Se o 'a' for iniciado com algo, como por exemplo a= 'valor de a', a atribuição de 'b' será o valor de 'a', com isso conseguimos fazer uma leitura de dados de formulário e utilizar esse valor padrão utilizando o ||. 

Temos dois usos alternativos dos operadores && e ||, posso usar o 'ou' para o valor padrão e o && para um short-circuit e evitar que a linha continue sendo executada. 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/GBcsH6LXzK8" allowfullscreen></iframe>
</div>

Deixe seu cometário, curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!