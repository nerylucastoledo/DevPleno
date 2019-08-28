---
title: "Injeção de Dependência em ReactJS"
date: "2017-06-05"
thumbnail: "./InjecaoDependencia.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
---



Como estávamos comentando anteriormente sobre [injeção de dependência](https://www.devpleno.com/vantagens-da-injecao-de-depencia/), achei relevante mostrar como podemos fazer Injeção de Dependência em ReactJS. 

Para ilustrar, temos o exemplo abaixo, que quando carregamos o componente, utilizamos o axios para fazer uma requisição http e pegar o IP da origem e seta no estado atual do componente mostrando o IP na tela.

```jsx {numberLines: true}
import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            ip:' '
        }
    }
    componentDiMount(){
        const url = 'http://httpbin.org/ip'
        axios.get(url)
        .then((res)=>{
            this.setState({
                ip: res.data.origin
            })
        })
    }
    render(){
        return (
            <div>
                Your IP adress is: {this.state.ip}
            </div>
        )
    }
}
```

O problema aqui é que se fossemos testar esse app, teríamos que contornar o axios de alguma forma,pois estamos importando ele direto. Assim, o componente está muito dependente do axios. Se quisermos rodar o componente ou testar com o Indesign, por exemplo, não vai ser possível. 

O que podemos fazer? 

Uma coisa que às vezes esquecemos com o ReactJS: ele tem um ponto de montagem. Temos um index.js que faz a montagem inicial.

```jsx {numberLines: true}
import React from 'react'
import reactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
    <App />
    document.getElementById('root')
)
```

Perceba que temos o App e ele faz a montagem em si do html. 

Com isso, podemos simplesmente passar a dependência do código anterior para o nosso index.js, já que podemos colocá-las em lugares onde não vamos testar códigos. 

Então, ao invés de importarmos o axios no nosso app.js, por exemplo, vamos colocar no ponto de montagem

```jsx {numberLines: true}
app.js:

import React, { Component } from 'react'


index.js:


import React from 'react'
import reactDOM from 'react-dom'
import App from './App'
//dependencias
import axios from 'axios'
```

Como o index monta a aplicação React no HTML, vou trazer o axios. Podemos fazer uma lista de dependências para injetar no componente. 

Qual a diferença? 

Ao invés de utilizar o axios direto, vou passar essa dependência via props:

```jsx {numberLines: true}
ReactDOM.render(
    <App  axios={axios}/>
    document.getElementById('root')
)
```

O App vai ter acesso a propriedade axios, que é o que eu importei. 

Podemos, então, ir no componente em si e fazer o seguinte:

```jsx {numberLines: true}
componentDiMount(){
    const url = 'http://httpbin.org/ip'
    this.props.axios.get(url)
    .then((res)=>{
        this.setState({
            ip: res.data.origin
        })
    })
}
```

E fazemos a requisição normal. Se quiser fazer um teste unitário desse componente, posso fazer tranquilamente porque, quando for renderizar este componente para testar, eu crio um mock ou um axios fake e vejo se esse componente chama o axios falso, da mesma forma que fizemos anteriormente. 

O mais importante aqui é lembrarmos que o props é uma forma que temos de injetar dependência, por isso que muitas vezes construímos aplicação com o estado todo da aplicação em um app e passamos as funções para os próximos componentes, assim ele pode ser executado em qualquer ambiente. 

Em toda a arquitetura, seja ela em React, em Node, etc, vai ter um lugar com uma cola (ou um ponto de montagem) e eu acredito que estes pontos são interessantes para analisar como potenciais locais de adicionar dependências. 

Confira o vídeo-tutorial: 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/tQ80uAP_B_M" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!