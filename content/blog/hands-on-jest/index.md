---
title: "Jest - Como utilizar a ferramenta de testes criada pelo Facebook"
date: "2017-07-08"
thumbnail: "./Jest2.png"
author: "Tulio Faria"
tags: ["Video-Tutorial"]
keywords: "hands-On"
---


O Jest foi criado pelo Facebook com o objetivo de rodar os testes de uma maneira eficiente e com menos configurações. 

Aqui eu já tenho um diretório para o nosso teste chamado jest-handson, então vou rodar:

```js
yarn add jest --dev
```

Vamos colocar como dependência de desenvolvimento, que é o que precisamos realmente e o yarn já vai resolver até mesmo a questão de criar um package.json. 

Dentro do Package.json tem o código:

```jsx {numberLines: true}
{
  "devDependencies": {
  "jest": "^19.0.2"
  }
}
```

E vamos adicionar:

```jsx {numberLines: true}
{
  "devDependencies": {
    "jest": "^19.0.2"
  },
  "scripts":{
    "test": "jest"
  }
}
```

Se rodarmos o yarn test agora, ele já sabe como rodar e retornou que não temos nenhum teste para rodar. 

Então vamos criar um módulo chamado modulo1 para testarmos:

```jsx {numberLines: true}
const modulo1 = {
  func1: (a) => a+1
}
module.exports = modulo1
```

Uma coisa que acho muito interessante de fazer com os testes é criá-los juntos com a implementação, por exemplo, modulo1.js e modulo1.test.js. Até os testes ficam mais fáceis  porque não é preciso navegar nos diretórios quando salvá-lo na mesma pasta do módulo. Dentro do modulo1.test, vamos importar o modulo1:

```jsx {numberLines: true}
const modulo1 = require('./modulo1')
describe('basic features', ()=>{
  it('should return the right value', () => {
    expect(modulo1.func1(10)).toBe(11)
  })
})
```

Perceba que o Jest tem as mesmas de outros test runners, como por exemplo, criar uma switch test  e dentro usar um it. Vamos passar 10 e ele deve retornar o valor 11. Ao rodar o yarn, ele organiza dizendo que os testes deram certo. Lembrando que é sempre bom fazer o teste falhar, colocando 12, por exemplo, no lugar do 11, e rodar para ver se o teste em si está funcionando. 

Agora imagine que por algum motivo no local de 'a' deve rodar uma função em específico, vamos supor uma função 2:

```jsx {numberLines: true}
const modulo1 = {
  func1: (a) => a+1,
  func2: (a, cb) => a+cb(a)
}
module.exports = modulo1
```

Podemos fazer o seguinte para testar essa função:

```jsx {numberLines: true}
const modulo1 = require('./modulo1')
describe('basic features', ()=>{
  it('should return the right value', () => {
    expect(modulo1.func1(10)).toBe(11)
  })
  it('func2', () => {
    const cb = jest.fn()
    cb.mockReturnValue(1)
    expet(modulo1.func2(10,  cb)).toBe(11)
  })
})
```

Não implementamos ali a função 2, mas passamos um mock para ele, ou seja, passamos uma função falsa para essa função 2 usando o jest.fn, que serve exatamente para mockar funções. Dentro do mock, queremos que ele retorne 1. 

Se colocarmos um

```js
console.log(cb.mock.calls)
```

vamos conseguir até mesmo inspecionar se a chamada foi com o valor correto. 

O Jest é muito interessante, pois já vem com esquema de mock, a parte de axceptions, parte de test runner e é um pouco mais rápido, principalmente quando formos testar componentes em React, e ainda tem um esquema chamado SnapShot, que tira 'fotos' dos componentes que você fizer no React para ele perceber se precisa ou não executar aquele componente. Por exemplo, renderizamos esse componente usando o JSDom e, se falhar, comparando essas fotos do componente de antes e depois, você será avisado.


Confira: 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/uRTKUjeua3g" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!
