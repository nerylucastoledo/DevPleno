---
title: "Lista encadeada - Como retornar um item"
date: "2017-07-25"
thumbnail: "./ListaEncadeada.png"
author: "Tulio Faria"
keywords: "algoritmos"
tags: ["Dicas", "Video-Tutorial"]
---

---
Hoje vamos continuar falando sobre algoritmos e também estrutura de dados. Vamos discutir um pouco sobre essas técnicas que aprendemos na base da computação e que é bastante útil tanto para entrevistas de emprego quanto para competições em programação, pois geralmente aplicam esse tipo de teste para saber se você sabe gerenciar uma lista encadeada, por exemplo. Vamos continuar falando sobre [lista encadeada](https://www.devpleno.com/lista-encadeada-adicionar-no/) que é um assunto bastante interessante, nós já fizemos a adição de itens nessa lista, agora vamos criar um método para retornar um item que eu quero.

```jsx {numberLines: true}
const getByIndex = (index) => {
    if(index < length){
    }
}
```
Perceba o seguinte, se eu quiser pegar o item 0 e minha lista estiver vazia ou seja, o length for igual a zero, temos que adicionar ao return primeiramente:  

```jsx {numberLines: true}
return{
    length: () => add(value),
    print: () => console.log(head),
    getByIndex: (index) => getByIndex(index)
}
```

Em seguida faremos o seguinte:

```jsx {numberLines: true}
const getByIndex = (index) => {
    if(length===0){
        return null
    }
    let node = head
    let count =  0
    while(count < index && node.next){
        node = node.next
        count++
    }
    return node
}
```

Teoricamente, ao retomarmos o node, já temos nosso método. Vamos recapitular o que fizemos: se a minha lista estiver vazia eu retorno null; se não eu pego o primeiro nó e coloco em node, minha contagem está em zero; caso meu count for zero e meu index for zero, ele irá retornar o nó. 

Vamos fazer o teste:

```jsx {numberLines: true}
console.log(list.getByIndex(0))
```

Perceba que o índice zero tem toda a estrutura montada anteriormente, em um segundo caso de teste vamos fazer o seguinte:

```jsx {numberLines: true}
console.log(list.getByIndex(1))
```

Já o resultado do índice um retorna o 2 e o 3. Se pegarmos o índice 2 irá retornar apenas o 3, agora se tentarmos pegar o índice 3, ele irá retornar null, porque o 3 não existe. 

O que podemos fazer para corrigir? 

Temos que pensar o seguinte, se o length for igual a zero ou o índice que queremos é maior do que o length, então temos que retornar null:

```jsx {numberLines: true}
const getByIndex = (index) => {
    if(length===0 || index >= length){
        return null
    }
    let node = head
    let count =  0
    while(count < index && node.next){
        node = node.next
        count++
    }
    return node
}
```

Novamente essa complexidade é 0(n), porque em meu pior cenário eu não tenho índice ou vou pegar o último. Esse é o algoritmo para pegar o índice, caso a gente queira pegar por valor conseguimos também, com a única diferença que temos que checar se o valor é igual e retornar caso seja:

```jsx {numberLines: true}
const getByValue =  (value) => {

    if(length===0){
        return null
    }
    let node = head
    if(node.value===value){
        return node
    }
    while(node.net){
        node = node.next
        if(node.value===value){
            return node
        }
    }
    return null
}
```

Lembrando que temos que exportar ele também:

```jsx {numberLines: true}
getByValue (value) => getByValue(value)
```

No teste **console.log(list.getByValue(2))** ele funcionará, agora caso pegarmos um valor que não existe, vai ser retornado null. Fizemos duas abordagens, uma voltando por valor e outra pelo índice. Lembrando que o segundo IF que fizemos não altera a complexidade do algoritmo, então ela também será 0(n), então no pior cenário ele vai passar em todos os nós e não encontrar. Esses são os exemplos de como podemos retornar um nó em lista encadeada, uma dica final é: resolva da forma que você conseguir e depois vai discutindo como chegar com o melhor desempenho possível, mas sempre resolva primeiro. 

Confira todos os passos em vídeo: 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/yUz6MlTPAfU" allowfullscreen></iframe>
</div>  

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!