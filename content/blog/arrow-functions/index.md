---
title: "Arrow Functions - Construindo funções anônimas de forma mais simplificada"
date: "2017-08-02"
thumbnail: "ARROW-FUNCTIONS-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---


As Arrow Functions são uma maneira mais simples ou menor de construir funções anônimas. foi uma novidade no ES6, e hoje todo mundo já está utilizando bastante. Então, no modo anterior, tínhamos:

```jsx {numberLines: true}
const funct1 =  function(param1){

}

Se fossemos construir isso com uma Arrow Function, poderíamos fazer simplesmente  isso:

const funct1 = (param)=>{

}
```

**Por que ela se chama Arrow Function?**  Porque a definimos utilizando uma arrow. É a mesma funcionalidade, mas com uma arrow, existe apenas uma particularidade que vou mostrar para você. Quando temos algo com um cenário acima, chamamos essa arrow function de statement, ou seja, ela tem instruções dentro do corpo dela, por isso ela tem a chave. Temos um outro tipo de arrow function que é a seguinte:

```jsx {numberLines: true}
const2 = function(valor){

return valor\*2

}
```

Se quisermos criar uma Arrow Function nesse sentido, precisamos passar também o valor, mas podemos fazer apenas isso:

```jsx {numberLines: true}
const funct2 = (valor) => valor \* 2
```

Chamamos esse tipo de Expression Body, afinal o corpo dela é uma expressão. Perceba como fica bem mais simples. Vamos supor que eu tenha um vetor e eu quero fazer um map:

```jsx {numberLines: true}
const vetor = \[1,2,3\]

vetor

.map(valor => valor \*2)
```

A única diferença em relação ao function, no primeiro caso quando criamos uma function, ele cria um contexto novo, então se eu tivesse uma variável dentro, o contexto é o da função. Caso eu use this, vou estar referenciando a function, quando eu faço this dentro de uma arrow function, estou referenciando um contexto externo. Então, se eu estiver com duas funções, uma dentro da outra, o this irá referenciar o contexto global, logo ela não tem esse this que é somente dela, e sim é atrelada ao contexto do pai. Vamos supor que existe um botão em react e ele está dentro de um render:

```jsx {numberLines: true}
class Componente extends Component{

loadData(){

//anything

}

render(){

return(

<button onClick={() => this.loadData()}

)

}

}
```

Se eu quisesse chamar o loadData dentro do render, eu posso fazer um this dentro sem problema algum. Reparem que estou utilizando uma arrow function e existe um this dentro dela, mas esse this referencia o component de fora. Isso é muito útil porque reduz muito. Anteriormente tínhamos que travar uma variável no contexto de cima para depois poder referenciar dentro da função anônima:

```jsx {numberLines: true}
render(){

var that =  this

return(

<button onClick={() => that.loadData()}

)

}
```

Já com a Arrow Function não é mais necessário porque o contexto já é o contexto do pai e isso facilitou bastante na construção de códigos mais legíveis. Lembrando que nós temos as Expression Body, que são funções com apenas uma expressão no corpo e a Statement Body, em que existem instruções dentro do corpo. Confira a explicação em vídeo:



<div class="embed-responsive embed-responsive-16by9"> 
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/AgOwGKB8D2M" allowfullscreen></iframe> 
</div>


 Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades.  Abraço!