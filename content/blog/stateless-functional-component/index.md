---
title: "Criando componente mais simples e eficaz em React"
date: "2017-05-18T17:02:48.000Z"
thumbnail: "./StatellesFunctional.png"
author: Tulio Faria
tags: ["Dicas", "Video-Tutorial"]
keywords: "Hands-On"
---

---
Vamos começar esse hands-on Stateless Functional Component com um projeto do zero criado com Create-react-app. Primeiro vamos criar um arquivo novo chamado home.js _(iremos importar o React, pois ainda vamos usar JSX)._ 

Um Stateless Functional Component, na verdade, é apenas uma arrow function, então iremos fazê-lo desta forma:

```jsx
import React from 'react'
const Home = () => <p>Olá</p>
export default home
```

Este const home = () => <p>Olá</p> já é o nosso Stateless Functional Component. Ele é uma função, mas perceba que não tem classe, o que o deixa muito mais simples. Essa é a primeira vantagem se comparado com a outra forma de criar componente, afinal é muito simples para saber o que há dentro dele. Outra coisa bacana é que ele é mais rápido, já que não tem todo aquele overload de classe. 

**Por que ele é Stateless Functional?** 

Ele é uma função pura, ou seja, é mais fácil de ser testado e a qualidade do código é maior. Outro ponto interessante é que não usamos o this, pois se temos uma função pura, não temos um estado interno. Ela também só depende das entradas, que são os props. 

**Quando usamos esse component?** 

Quando temos um componente de apresentação, como por exemplo um componente que só é responsável por renderizar algo na tela. Isso faz com que ele não tenha um comportamento muito complexo. Podemos passar Props para ele também:

```jsx
import React from 'react'
const Home = ({name}) => <p>Olá {name}</p>
export default home
```

E no nosso arquivo App.js, faremos o seguinte:

```jsx
import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'

Class App extends Component {
    render() {
        return (
            <div className="App">
            <div className="App-header">
            <img src="{logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
            </div>
            <div className="App-intro">
            <home name='Tulio' />
            </div>
        );
    }
}
```
Perceba que passei um props chamado name, e então fiz o destructor assignment, extraindo do objeto apenas o que eu quero. Também poderia colocar Props e props.name, funcionaria normalmente, mas como temos uma forma mais simplificada, não é necessário. 

Podemos fazer também alguma checagem. Não tem problema nenhum o componente ter uma condicional, desde que retorne o JSX. 

Existe uma premissa no React que quanto mais você utiliza o Stateless Functional Component, mais seu código vai estar otimizado. 

Assista o passo a passo desse hands-on: 

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/LA80dqopg1M" allowfullscreen></iframe>
</div>

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!