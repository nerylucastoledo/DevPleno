---
title: "Lista encadeada - Adicionar nó"
date: "2017-07-12"
thumbnail: "./AdicionarNo.png"
author: "Tulio Faria"
tags: ["Video-Tutorial"]
keywords: "algoritmos"
---


Vamos explorar um pouco mais de estrutura de dados de algoritmos que são comuns na base curricular, principalmente em computação, e caem muito em competição de programação e em entrevistas de emprego. Quando falamos de entrevista no exterior, é muito comum fazer essa entrevista com esse tipo de questão. 

Hoje vamos falar sobre lista, com questões do google. Isso mostra que você tem essa desenvoltura, mesmo que não use na prática, nas entrevistas o que eles procuram é essa capacidade de conseguir resolver o problema. 

A lista encadeada, também conhecida como Linked-List basicamente é  composta por nós que têm dois valores dentro, sendo que o segundo valor aponta para o próximo nó, por esse motivo se chama lista encadeada. Podemos ter uma estrutura de dados que represente isso, para isso podemos, por exemplo, citar uma função em JavaScript que vai funcionar quase que igual a uma classe em orientação de objeto, mas vamos utilizar somente closure e travar o contexto dentro da função para fazer toda a operação na lista. 

Então eu vou criar algumas variáveis dentro e retornar qual vai ser a interface pública dessa lista:

```jsx {numberLines: true}
function LinkedList(){
    let head = null
    length =  0
    return{
        length: () => length
    }
}
```

Perceba que eu defini um head, que é o ponto inicial da nossa lista, e além disso eu defini o length, que é o tamanho da nossa lista. O legal é que estamos retornando um length, porém esse length vai ser uma função que retorna length. Nós não utilizamos o this, esse tipo de operação é o melhor possível porque não temos essa mistura de contexto. No JavaScript funcional, quanto mais utilizarmos dessa forma melhor vai ser. 

Se eu fizer:

```jsx {numberLines: true}
const list = LinkedList()
console.log(list.length())
```

Ele irá retornar o objeto length, como é uma função, ela será executada. Ao executar será retornado o valor 0, então temos que implementar todas as operações dentro de LinkedList, por exemplo, eu quero fazer a operação Add para adicionar um valor novo:

```jsx {numberLines: true}
function LinkedList(){
    let head = null
    length =  0
    const add (value) =>{
        if(!head){
        }
    }
    return{
        length: () => length
    }
}
const list = LinkedList()
console.log(list.length())
```

A lógica é que o head seria a cabeça de nossa lista, por isso utilizamos o if, então se existe um nó no head, eu tenho que andar até o final para poder colocar esse valor, se não existe eu vou poder criar um valor dentro do próprio head. 

Como eu tenho que criar um novo nó, vamos criar um const Node que vai retornar um outro nó:  

```jsx {numberLines: true}
function LinkedList(){
    let head = null
    length =  0
    const Node = (value) => {
        return {
            value,
            next: null
        }
    }
    const add (value) =>{
        if(!head){
        }
    }
    return {
        length: () => length
    }
}
const list = LinkedList()
console.log(list.length())
```

Então criamos uma outra função, que é uma arrow function, ela vai receber um value e retornar um objeto composto por esse value e um next igual a null. Voltando ao nosso if, se o head não existir ou false, vamos fazer o head ser igual a Node, passar nosso value e podemos retornar o head:

```jsx {numberLines: true}
const add (value) =>{
    if(!head){
        head = Node(value)
        length++
        return head
    }
}
return{
    length: () => length
    add: (value) => add(value)
}
```

Lembrando que o return é a interface pública desse método, então tudo que eu quero mostrar para o exterior é passado ali. Vamos fazer um teste adicionando um valor 1:

```jsx {numberLines: true}
const list = LinkedList()
console.log(list.length())
list.add(1)
console.log(list.length())
```

A lista estava vazia eu adicionei um valor e ele retornou uma lista igual a 1. Para escrever a lista, vamos escrever um método print que vai escrever head:

```jsx {numberLines: true}
return{
    length: () => length
    add: (value) => add(value)
    print: () => console.log(head)
}
const list = LinkedList()
console.log(list.length())
list.add(1)
console.log(list.length())
list.print()
```

Perceba que é retornado 0, 1 e em seguida **value:1 next: null**, mas tem um detalhe: se eu chamar novamente um add e adicionar um valor dois, não vai acontecer nada; vamos continuar apenas com um porque agora o head não é mais um false. Agora eu preciso descobrir qual o nó que o next vai ser null para aí sim adicionar nesse null:

```jsx {numberLines: true}
const add (value) =>{
    if(!head){
        head = Node(value)
        length++
        return head
    }
    let node = head
    while(node.next){
        node = node.next
    }
    node.next = Node(value)
    length++
    return node.next
    console.log(node)
}
```

Então conseguimos chegar no nó, começa com o head e enquanto o node.next for verdadeiro vai andar para frente, quando ele for falso o nó vai ter a representação do último item, então podemos colocar o nó igual a node(value), novamente dou um length++ e um return no next, já que estou retornando o nó que foi adicionado. 

Vamos recapitular o que fizemos: se minha lista está vazia, eu vou adicionar no head um novo nó, incremento o length. Se isso não acontecer eu vou pegar o head, coloco em uma variável node e enquanto esse nó for verdadeiro, eu vou para o próximo, quando chegar no próximo, que está com null, pego ele e adiciono um novo nó, incremento e retorno esse nó. 

A ideia é a gente conseguir adicionar novos nós infinitamente. Quando pensamos isso em uma estrutura de dados sem ser JavaScript, conseguimos adicionar nós dinamicamente, podemos alocar esses espaço de memória e ir adicionando de forma dinâmica, por exemplo, em linguagens como C é um pouco mais utilizado. 

A última observação importante é que como estamos falando bastante de entrevistas, é importante sabermos qual a [complexidade do algoritmo](https://www.devpleno.com/complexidade-de-um-algoritmo/), para isso temos que avaliar como ele cresce. Se pensarmos em proporção, ela crescer mais ou menos em **0(length)**, quando é do tamanho, geralmente o pessoal chama de **0(n)** porque n seria o número máximo de itens que você tem que colocar. Vamos imaginar que temos 2 whiles ao invés de apenas um, teoricamente um while fora do outro seria 0(2n), mas o 2 perto do N não é nada, então continua 0(n). Já se o while fosse dentro, caminhando até o final do nó ai sim teriamos um 0(n²), como não temos, ele está crescendo baseado no tamanho da lista. A complexidade de espaço também será 0(n) porque eu vou ocupar espaços de memória baseado no tamanho de N. 

Vamos continuar esse algoritmo comparando e comentando a complexidade de cada uma delas, lembrando que estou resolvendo em JavaScript para mostrar como podemos fazer isso em uma entrevista, afinal meu propósito é ajudar você a se recolocar no mercado ou achar sua vaga sonhada. Em qualquer cenário isso é muito importante para treinar algoritmo. 

Confira o vídeo: 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ANrh76RUvHs" allowfullscreen></iframe>
</div> 

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!