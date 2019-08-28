---
title: "Injeção de dependência - Aumente a testabilidade do seu código"
date: "2017-06-01"
thumbnail: "./InjecaoDependenciaPrin.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---


Pode parecer besteira, mas eu sempre ouvia sobre injeção de dependência. porém nunca tinha refletido tanto sobre ela. Quando passei a testar mais o meu código com teste unitário, comecei a usar essa técnica e percebi que fez muita diferença. Para contextualizar, vamos supor que temos o código:

```jsx {numberLines: true}
const model = require('./model1')


function findAll(){
    return model.find({})
}
```

Desconsiderando a parte assíncrona, temos, por exemplo, uma função que depende do model que está em um contexto externo. Quando estamos no ambiente de testes, perdemos totalmente a visibilidade de onde ele está, isso deixa extremamente complicado para realizarmos um teste de forma unitária já que dependemos do ambiente para ele rodar. 

No contexto do Node, quando vamos testar, temos apenas o escopo da função, não temos o escopo de onde ele está sendo executado, inclusive se rodarmos com mocka, o contexto será do mocka e não um global. 

Se passarmos ele para dependência, passando como model, na hora de chamar essa função temos que injetar esse model

```jsx {numberLines: true}
function findAll(model){
    return model.find({})
}
const modelAA = require('./model1')
findAll(modelAA)
```

Estou simplificando bastante apenas para ilustrar, já que até assim seria ruim. Precisaríamos de uma forma melhor de organizar, mas mesmo assim temos uma visibilidade maior do código. Eu sei que findAll depende do model, coisa que eu não sabia antes, pois na função eu não sabia que ela dependia de model. Então, quando fazemos injeção de dependência, estamos dando uma documentação 'a mais', afinal ele é um código que se auto descreve. Ele também fica um pouco mais puro, pois dependemos apenas dos parâmetros para fazer o que queremos, já que não há dependência externa. 

Vamos fazer o seguinte teste: imagine que temos um código que valida, e essa função vai haver um if que se for maior que 100 ela mostrará ERROR e retorna false:

```jsx {numberLines: true}
function valina(um){
    if(num>100){
        alert('erro')
        return false
    }
    return true
}
```

Se rodarmos isso no node, teremos um erro, já que o alert não está no contexto do Node, pois o alert é um window.alert que faz parte do browser. Então, mesmo que eu chame ele direto no navegador, em qualquer lugar que eu chamar vai ser como um global, ou seja, ele pega de qualquer lugar que executarmos no browser, mas quando formos fazer um teste unitário, não vai funcionar porque ele não tem o alert, isso é um problema. Outro problema é que o alert não está sendo usado mais por exemplo. Então como trocamos ele? Isso gera muita dependência. 

O que podemos fazer? 

Se transformarmos ele em uma injeção de dependência, podemos passar o alert. Quando formos utilizar no browser, manda um window.alert e quando formos testar nossa função, se ela retornar false e erro caso o número for maior que 100.

```jsx {numberLines: true}
function valina(um){
    if(num>100){
        alert('erro')
        return false
    }
    return true
}

const assert = require('assert')
describe('validations', ()=>{
    it('should return false and an error if num gt 100', ()=>{
        const fakeAlert = (msg) =>{
            assert.equal(msg, 'erro')
        }
        const returnedValue  = valida(fakeAlert, 101)
        assert.equal(returnedValue, false)
    })
})
```

Perceba que adicionamos um fakeAlert, que é uma função, e dentro dela quero checar se a mensagem que vai chamar é igual a mensagem que eu espero. Para fazer isso, usamos o const assert, que é do próprio node, ele verifica se a msg é igual a erro e quando formos chamar o valida, vamos passar esse fake Alert. Fizemos dois testes. Para o primeiro, passar os dois assert tem que valer, lembrando que vamos rodar ele com mocha. 

Vamos supor que agora você vai dar manutenção neste código e a mensagem mudou, então vamos apenas no alert e corrigimos que está tudo certo. 

O que eu quero ressaltar é o seguinte: fica mais claro para nós o que o valida faz, assim que expomos as dependências dele, o nosso código começa a criar essa auto documentação, o que gera uma qualidade de código muito grande. 

Confira a explicação em vídeo: 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/L_Hp97n2als" allowfullscreen></iframe>
</div> 

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!