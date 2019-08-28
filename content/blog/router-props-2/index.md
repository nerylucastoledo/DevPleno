---
title: "Router Props - Como injetar props em rotas"
date: "2017-05-17"
thumbnail: "./RouterProps.png"
author: Tulio Faria
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---

---
Confesso que tive muito trabalho até conseguir encontrar uma maneira não tão difícil de fazer a passagem de propriedades para o componente. Neste post, você vai conferir uma dica sobre React Router. 

Vamos fazer a partir de um exemplo básico no qual ele só tem um componente criado com Create-react-app.

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
            </div>
        );
    }
}
```

Primeiramente vamos colocar a navegação com o React Router em

```jsx
<home name='Tulio' />
```

Isso significa que agora temos uma rota exata que vai apontar para o caminho padrão e qual componente ele vai usar. Vamos colocar Home, mas também criaremos um componente em seguida.

```jsx
import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Teste from './Teste'
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom'

Class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="App-header">
                        <img src="{logo} className="App-logo" alt="logo" />
                        <h2>Welcome to React</h2>
                    </div>
                    <div className="App-intro">
                        <Route exact path='/' component={Home} />
                        <Route exact path='/teste' component={Teste} />
                    </div>
                </div>
            </Router>
        );
    }
}
```

Feito isso, vamos criar o teste.js

```jsx
import React from 'react'

const Teste = () => <p>Teste</p>

export default Teste
```

Agora vamos até o cabeçalho da aplicação e criar um link para a home e um link para teste, assim, já temos uma navegação funcionando normalmente.

```jsx
<div className="App">
    <div className="App-header">
        <img src="{logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
        <p>
            <Link to='/'>Home</Link>
            <Link to='/teste'>Teste</Link>
        </p>
    </div>
</div>
```

**Qual o problema?** 

Eu preciso passar parâmetros ou props para o componente Home, mas ele não irá funcionar se fizermos assim:

```jsx
<Route exact path='/' component={Home}  name='Tulio' />
```

**Como podemos passar essa props para o componente home?** 

Ao invés de chamar component, vamos chamar render. Ele é legal porque podemos passar uma arrow function com props e dizemos que essa arrow function vai retornar este componente /Home.

```jsx
<div className="App-intro">
    <Route exact path='/' render{(props) => <Home />} name='Tulio' />
    <Route exact path='/teste' component={Teste} />
</div>
```

Esses props são as propriedades que o próprio route passa para o componente, então temos que injetar essas props _(vai que por algum motivo ele precisa saber em qual URL ele está, ou algo nesse sentido)._ 

Com isso, conseguimos efetivamente passar os props que queremos.

```jsx
<Route exact path='/' render{(props) => <Home {...props} name='Tulio'/>} 
name='Tulio' />
```

Além das propriedades que já tínhamos no componente por causa da route, caso olharmos em teste, percebemos que só temos as propriedades que foram passadas pelo route e não pela importação do componente. 

Isso é muito importante para conseguirmos injetar dependência, eu descobri essa forma de utilizar a passada de props através de uma rota por que precisava injetar uma dependência. 

Confira o passo a passo em vídeo: 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/VD7ojK3deWE" allowfullscreen></iframe>
</div>

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!