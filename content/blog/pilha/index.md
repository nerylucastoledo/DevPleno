---
title: "Estruturas de Dados - Pilhas"
date: "2017-08-21"
thumbnail: "./Pilha.png"
author: Tulio Faria
tags: ["Video-Tutorial"]
keywords: "hands-on"
---

---
Hoje vamos falar um pouco sobre uma estrutura de dados que é muito comum em computação, principalmente em sua base, a Pilha. O primeiro conceito que temos que saber sobre Pilha é que ela segue o conceito de LIFO (Last In First Out), então o último que entra é o primeiro que sai. Uma coisa bem legal em JavaScript é que já temos uma Pilha naturalmente no vetor, então se fizermos, por exemplo:

```jsx {numberLines: true}
const vetor = \[\]
vetor.push(1)
vetor.push(2)
console.log(vetor.pop())
console.log(vetor)
```

Percebam que quando desempilhamos ele volta o último item que foi empilhado e modifica o vetor. Agora vamos implementar isso sem precisar utilizar o vetor dessa forma, criando nossa própria implementação de stack:

```jsx {numberLines: true}
const Stack = () => {
    const data = \[\]
    let top = -1
}
```

Como estamos fazendo no modo funcional, não temos o this, estamos guardando apenas no próprio contexto e podemos retornar os métodos que queremos criar:

```jsx {numberLines: true}
const Stack = () => {
    const data = \[\]
    let top = -1
    const push = (value) => {
        top++
        data\[top\] = value
        console.log(data)
    }
    return {
        push
    }
}
const stack = Stack
stack.push(1)
stack.push(2)
```

Perceba que ele está montando o vetor perfeitamente adicionando sempre na frente. Agora precisamos remover esse último item:

```jsx {numberLines: true}
const push = (value) => {
    top++
    data\[top\] = value
    console.log(data)
}
const pop = () => {
    if(top < 0){
    return false
    } else {
        const itemToReturn = data\[top\]
        delete data\[top\]
        top--
        return itemToReturn
    }
}
return {
    push, pop
}
console.log(stack.pop())
```

Agora funcionou perfeitamente, ele retirou o um e deixou apenas o dois. Vamos criar um novo método chamado print para sabermos como está a estrutura:

```jsx {numberLines: true}
const print = () => {
    console.log(data)
}
return {
    push, pop, print
}
```

Perceba que nós temos um item vazio, então ele não removeu esse item. Ao invés de utilizar o delete, podemos utilizar o splice:

```jsx {numberLines: true}
    } else {
        const itemToReturn = data\[top\]
        data.splice(top, 1)
        top--
        return itemToReturn
    }
```

O splice já faz essa fatia, cortando nosso array no item top. 

Acabamos de implementar uma pilha. É muito interessante conhecer o que é pilha, faz mais sentido quando recebemos os erro stack overflow, acontece que as estruturas de dados vão se empilhando tanto que não aguenta mais o tamanho, por esse motivo é um erro bem comum. 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/DnHSTYuk-V4" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal ](https://www.youtube.com/devplenocom)e cadastre seu e-mail para não perder nenhuma novidade. Deixe suas dúvidas e sugestões nos comentários. Abraço!