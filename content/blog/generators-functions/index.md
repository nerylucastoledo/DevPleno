---
title: "Generators Functions - o que acontece por baixo dos panos"
date: "2017-06-29"
thumbnail: "GENERATORS-FUNCTIONS-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Videos"]
keywords: "hands"
---


Hoje vamos continuar falando sobre Generators Functions em JavaScript.

**O que é Generator?**

É uma função que podemos pausar ou iterar sobre ela. Já falamos sobre generators no hands-on do Módulo CO, que resolve um generator, mas hoje vamos falar como ele funciona ‘por baixo dos panos’ e até mesmo como o CO foi construído.

A primeira coisa que temos que saber é que a sintaxe do generator é criada com uma function e um asterisco. Se fizermos isso, dizemos que é uma função generator, então é possível pausar essa função com CO, o que deixa o código mais linear:

```jsx {numberLines: true}
function \* generator(){
    console.log('Entrou no generator')
}
const gen = generator()
```

Ao executar o código, perceba que não saiu nada. Primeiro precisamos iterar sobre ele para que consigamos ter um valor, para isso criamos um:

```jsx {numberLines: true}
const iteration = gen.next()
```

O next é muito comum em outras linguagens, nas quais temos algumas estruturas que são iteráveis. Enquanto você utilizar o .next significa que você ainda tem dados para iterar.

Agora executamos para ver o que acontece novamente. Perceba que aparece a mensagem (‘Entrou no generator’) porque ele depende do next para entrar na primeira linha.

Agora vamos fazer algo diferente:

```jsx {numberLines: true}
function \* generator(){
    console.log('Entrou no generator')
    console.log('Segundo passo)
    console.log('Penultimo passo')
    console.log('fim do generator')
}
const gen = generator()
const iteration = gen.next()
```

Ele executou tudo de uma vez. Agora vamos fazer o seguinte:

```jsx {numberLines: true}
yeild 'outro valor'
```

Olha que interessante, ele parou agora no segundo passo, se eu der um console.log no iteration ele retorna um objeto com um value 'outro valor' dentro  e um done: false. Ele parou e retornou esse valor, então ela é uma função que além de iterável, conseguimos ter vários retorno de valor. Se eu quisesse continuar executando, tenho que chamar novamente gen. next:

```jsx {numberLines: true}
function \* generator(){
    console.log('Entrou no generator')
    console.log('Segundo passo)
    yeild 'outro valor'
    console.log('Penultimo passo')
    console.log('fim do generator')
}
const gen = generator()
const iteration = gen.next()
gen.next()
```

Perceba que ele fez os dois primeiros passos, pausou para retornar o yeild, e por fim fez os dois últimos passos, por isso é chamada de função pausavel. 

No yeild, podemos por exemplo retornar uma promise:

```jsx {numberLines: true}
function \* generator(){
    console.log('Entrou no generator')
    console.log('Segundo passo)
    yeild new Promise((resolve, reject) => {
        setTimeout(() => resolve(10),  2000
    })
    console.log('Penultimo passo')
    console.log('fim do generator')
}
const gen = generator()
const iteration = gen.next()
iteration.value.then(()=>{
    gen.next()
})
```

Imagine que estamos buscando no banco de dados alguma informação; quando fazemos isso, estamos fazendo uma operação assíncrona e ela vai demorar mais tempo porque é um IO, o yeild está simulando essa busca e o iteration.value.then está esperando essa 'busca' para retornar as próximas informações. 

Então o que o CO faz é o controle de chamar o next e executar o then de forma organizada. Vamos supor que esse código fosse um function ReadFilePromise:

```jsx {numberLines: true}
function ReadFilePromise:
return new Promise((resolve, reject) => {
    setTimeout(() => resolve(10),  2000
)}
function \* generator(){
    console.log('Entrou no generator')
    console.log('Segundo passo)
    const value = yield readFilePromise()
    console.log('Penultimo passo' value)
    console.log('fim do generator')
}
const gen = generator()
const iteration = gen.next()
iteration.value.then(()=>{
    gen.next()
})
```

Ao fazer isso, ele vai chamar a nossa function ReadFilePromise e esperar. Para aproximar mais do CO o value tem que vir preenchido, mas perceba que ele veio com undefined porque não aproveitamos o value no then. Então vamos aproveitar:

```jsx {numberLines: true}
const gen = generator()
const iteration = gen.next()
iteration.value.then((val)=>{
    gen.next(val)
})
```


Assim vai ser retornado o penúltimo com o valor 10. O CO faz exatamente isso, conseguimos transformar facilmente em uma função genérica que resolva qualquer generator, por isso é tão legal resolver com promise, porque se fosse com readFile comum a gente não tem esse retorno de valor. Confira a dica em vídeo: 
 
Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!

<div class="embed-responsive embed-responsive-16by9"> 
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/H13rOIqFVPk" allowfullscreen></iframe>
</div>