---
title: "Render condicional em ReactJS"
date: "2017-01-25"
thumbnail: "./RenderCondicional.jpg"
author: Tulio Faria
tags: ["Dicas", "React"]
keywords: "reactjs"
---

---
Durante a criação de componentes em ReactJS é muito comum que dado um estado do componente, renderizarmos uma estrutura ou outra. Para fazermos isso no ReactJS/JSX temos algumas alternativas.

## Primeira maneira: utilizando if´s

JSX é basicamente um Javascript disfarçado de HTML (sim, apenas para facilitar a criação de templates). Então, podemos utilizar JS para renderizar ou não um treco de template.

```jsx {numberLines: true}
import React, { Component } from 'react'

class CondComIf extends Component{
  render(){
    if(this.props.condicao){
       return <p>Condicao eh verdadeira</p>
    }
    return <p>Condicao eh falsa</p>
  }
}

// para renderizarmos este componente
// <CondComIf condicao={true} />
```

**Importante:** sempre o método render precisa retornar algo e que este algo seja apenas uma tag.

## Segunda maneira: condicional com operador lógico

Este formato utiliza a precedência de operadores para funcionar como uma condicional. Por exemplo, se fizermos isso:

```jsx {numberLines: true}
((a===10)&&(b===20))
```

Temos uma característica interessante. Caso a===10 retorne falso, na grande maioria das linguagens (por termos um &&) não ira nem executar a comparação de b===20. 

Isso nos permite fazer o seguinte:

```jsx {numberLines: true}
const a = 10
const b = 20

a===b && console.log('A eh igual a B)
```

Claro que neste exemplo, nunca o console.log será executado, mas creio que fez sentido para você. 

Utilizando a mesma ideia, podemos fazer o seguinte:

```jsx {numberLines: true}
import React, { Component } from 'react'

class CondComOp extends Component{
  render(){
    return (<p>
       <h2>Vamos fazer o condicional: </h2>
       { this.props.condicao && <span>Condicao eh verdadeira</span> }
       { !this.props.condicao && <span>Condicao eh falsa</span> }
    </p>)
  }
}

// para renderizarmos este componente
// <CondComOp condicao={true} />
```

**Importante:** o trecho de template que vem após o && deve seguir a mesma regra do return do render. Ou seja, temos que retornar sempre um nó filho (no caso do exemplo um span). 

A combinação destas técnicas nos permite chegar a componentes muito bem organizados. Pois se precisarmos renderizar algo totalmente diferente, podemos usar o if. Caso desejamos apenas mostrar/ocultar trechos menores dentro do render, a segunda opção é muito viável. 

Não deixe de comentar e nos seguir em todo lugar :) _Ah, e para você que quer aprender ReactJS mais rapidamente, temos o nosso curso completo!_

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!