---
title: "ReactJS Recursivo?"
date: "2017-06-28"
thumbnail: "./ReactRecursivo.png"
author: Tulio Faria
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---

---
Hoje vamos fazer algo que é bastante convencional em sistemas: renderizar estruturas de dados em formato de árvore. No exemplo, será uma árvore binária, mas como poderíamos renderizar no ReactJS. 

Em que isso é útil? 

Vamos supor que você tenha uma interface com um menu lateral e esse menu tem formato de uma pasta dentro da outra, seria muito útil, pois você poderia fazer um item dentro do outro sendo renderizado de forma 'infinita'. Recursividade é algo muito importante para qualquer sistema, e podemos fazer isso dentro do React utilizando alguns conceitos de recursividade. 

Eu já tenho um projeto criado, apenas com create React App, nada além disso. Primeiro vamos criar uma estrutura chamada nodes que vai ser nossa árvore em si. Teremos o lado direito, esquerdo e o valor que será uma multiplicação. Do lado esquerdo, vamos ter um valor 1, do lado direito, um outro valor 2 e o 'v' dele vai ser uma divisão.

```jsx {numberLines: true}
class App extends Component {
    render(){
        const nodes = {
        l:{ l:{ v: 1 }, r:{v: 2}, 
        v: '/'},

        r:{v: 10}
        v:'\*'
        }
        return(
            <div>
                <h1> welcome to React</h1>
            </div>
        )
    }
}
```

Perceba que do lado direito temos somente um valor 10. Vamos colocar como se fosse um parênteses do lado esquerdo e depois colocar multiplicado por 10 do lado direito, temos que renderizar os itens do lado esquerdo e depois do lado direito de forma recursiva, então não preciso fazer nenhum _for_. 

Como fazemos isso de forma recursiva? 

A primeira coisa que vamos fazer é criar um outro arquivo chamado node.js, importar o react para usarmos o JSX e, para ficar simples, vamos fazer com functional stateless component:

```jsx {numberLines: true}
import React from 'react'

const Node = (props) =>{
    return(
        <p> Node </p>
    )
}
export default Node
```
Voltando ao App.js vamos importar o node e ao invés de colocarmos o H2 vamos colocar o nó dentro dele:

```jsx {numberLines: true}
import Node from './node'
return(
    <div>
        <h2> <Node node = {nodes} /></h2>
    </div>
)
```

Então ele escreveu o node, que é o que está dentro do nó. 

Vamos mudar, colocar um span em node.js e colocar um JSON com um props.node para sabermos o que tem ali dentro:

```jsx {numberLines: true}
const Node = (props) =>{
    return(
        <span> {JSON.stringfy(props.node) </span>
    )
}
```

Perceba que é retornado o nó inteiro. Se eu tiver o lado esquerdo, tenho que renderizar esse nó, para isso podemos pedir para o node renderizar do lado esquerdo.

```jsx {numberLines: true}
const Node = (props) =>{
    return(
        <span>
        { props.node.l && <Node node={props.node.l} /> }
        { props.node.v }
        </span>
    )
}
```

Com isso ele andou apenas para o lado esquerdo. Podemos adicionar também, por exemplo, apenas o lado direito:

```jsx {numberLines: true}
{ props.node.r && <Node node={props.node.r} /> }
```

Agora eu quero saber quando eu renderizar um nó colocar um parênteses para saber quando foi realizado uma conta:

```jsx {numberLines: true}
const Node = (props) =>{
    return(
        <span>(
            { props.node.l && <Node node={props.node.l} /> }
            { props.node.v }
        )</span>
    )
}
```

Com isso conseguimos reparar como foi feito a conta, afinal ele mantém as precedências dos parênteses, ou seja, ele está entrando realmente na árvore. 

Perceba que fizemos recursividade sem utilizar nada de repetição, apenas mandamos renderizar a função, que nada mais é do que um componente chamando ele mesmo. Uma coisa importante é sabermos que ele tem um nó base, então toda vez que ele for um V não tem nel left nem right, logo ele é o passo base, onde eu paro a recursividade. 

Poderíamos fazer o parênteses não aparecer nos valores, deixando o resultado muito mais simples.

```jsx {numberLines: true}
const Node = (props) =>{
    return(
        <span>
        { props.node.l && props.node.r && <span>(</span> }
        { props.node.l && <Node node={props.node.l} /> }
        { props.node.v }
        { props.node.l && props.node.r && <span>)</span> }
        </span>
    )
}
```

Uma coisa interessante é que se fizermos um inspect no browser e usar o react dev tools é possível ver toda a estrutura sendo criada. 

Fizemos aqui um forma de renderizar expressões, mas poderíamos utilizar para renderizar uma árvore, lista de diretórios, etc. Tudo isso utilizando essa simples estrutura. 

Confira todos os passos no vídeo: 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ZYomEoLdtdE" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!