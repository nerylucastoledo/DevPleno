---
title: "Vantagens da Injeção de dependência para a testabilidade do código"
date: "2017-06-01"
thumbnail: "./VantagemInejcao.png"
author: Tulio Faria
tags: ["Dicas", "Video-Tutorial"]
keywords: "Hands-On"
---
---

Já havia falado por aqui sobre [injeção de dependência](https://www.devpleno.com/injecao-de-dependencia-2/), disse que muitas vezes não temos acesso ao que estamos testando.Desta vez, falo sobre as vantagens da injeção de dependência na testabilidade do código. Vamos criar um alert que é uma arrow function no qual eu passo um alert e uma mensagem. Lembrando que, nesse caso, o alert é a injeção de dependência, então é ele quem eu estou mandando para essa função chamar.

```jsx
const alerts = {
    alerts: (alert, message) => alert(message)
}

module.exports = alerts
```

 No exemplo acima, temos um módulo que alerta o usuário. É igual o alert do browser, tanto é que chamamos o alert. Então, qual a diferença? Se eu chamasse realmente o alert do browser, ele não conseguiria rodar este teste no node, então usualmente rodamos os testes sem o browser primeiro e depois rodamos em um browser que ainda não tem tela. A ideia é conseguir testar as funcionalidades do código sem necessariamente startar um browser porque isso é muito pesado. Se fossemos utilizar essa função no browser, faríamos assim:

```jsx
const alerts = {
    alerts: (alert, message) => alert(message)
}
alerts.alert(window.alert,'message')
module.exports = alerts
```

Mas como vamos testar sem ter um browser, eu sei que tem um window.alert, e quando for utilizar, eu vou passar este valor para ele, mas na hora do meu teste temos que importar o alertUser:

```jsx
const alertUser = require('./alert-user')
test('it calls alert', () => {
    const alertMock = jest.fn()
    alertUser.alert(alertMock, 'message')
    console.log(alertMock.mock.calls)
}
```

Perceba que criei um Mock para o alert.   **O que é um Mock?** Uma função que está no nosso controle e que usamos apenas para retornar um valor. Assim é possível testar o nosso código. Temos, então, que garantir que o alert faça o que ele deveria fazer, que é passar a mensagem. Note que se passarmos o alertMock.mock.calls, sabemos exatamente que o alert foi chamado. Se quisermos deixar o código mais organizado, sem aquele aspecto de gambiarra, podemos fazer o seguinte:

```jsx
const alertUser = require('./alert-user')
test('it calls alert', () => {
    const alertMock = jest.fn()
    const msg = 'message'
    alertUser.alert(alertMock, msg)
    expect(alertMock.mock.calls \[0\]\[0\]).toBe('msg')
}
```

Agora vamos supor que nosso código tem algum erro, então ele não chama o alert, apenas retorna

```jsx
const alerts = {
    alerts: (alert, message) =>  1
}
module.exports = alerts
```

Perceba que ele daria um erro, pois o mock não foi chamado. Quando 'mockamos' temos um controle ainda maior dos nossos testes, sem depender de nada externo ou gambiarra de injetar no módulo. O grande detalhe é o seguinte: quando vamos chamar o alertUser no visual studio, ele já mostra o alert e qual message eu quero, assim fica muito mais claro o que precisa para ele rodar. Portanto, a vantagem de injetarmos dependência é ter essa facilidade de testar sem depender desse load dinâmico das dependências. Simplesmente mockamos a dependência que temos e nosso código vai funcionar. Além disso, fica mais fácil de ler. Confira o hands-on em vídeo:

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/sCt69a0i4WE" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!