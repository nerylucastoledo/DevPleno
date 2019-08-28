---
title: "Composição de componentes em ReactJS"
date: "2017-08-01"
thumbnail: "COMPOSIÇÃO-REACTJS-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial", "React"]
keywords: "dicas"
---


A dica de hoje é sobre o ReactJS, mais especificamente sobre como podemos criar composição de componentes em ReactJS de uma forma um pouco diferente, como podemos utilizar algumas áreas de um componente para ejetar outros componentes por exemplo. Na prática ficará mais simples de entender. 

Eu criei um aplicativo básico utilizando o create react app e agora vou criar dois componentes para mostrar como podemos utilizar essa composição. No app.js, logo após o importe do React e do './app.css';  criarei um Panel, ele será um functional stateless component porque não temos o estado interno dele.

```jsx {numberLines: true}
const Panel = (props) => {

return(

<div>

<h1>header</h1>

</div>

<p>Footer</p>

)

}
```

Ele me retorna duas coisas, uma div e tem header que pode ser um H1. Abaixo temos um P com um footer, isso para termos uma ideia de como podemos fazer. A primeira forma de composição é exatamente essa, eu posso trocar esse header e esse footer,  por exemplo, ao invés de um texto chamar outra coisa:

```jsx {numberLines: true}
const Panel = (props) => {

return(

<div>

<h1>{props.header}</h1>

<p>{props.footer}</p>

</div>

)}
```

Se eu pegar esse código e chamar mais abaixo, dentro do nosso app component:

```jsx {numberLines: true}
<p className="App-intro">

To get started, edit <code>src/App.js</code>

</p>

<Panel header='Olá mundo!' footer='rodape' />
```

Então onde eu mandar esse valor, ele vai escrever o texto, mas o interessante é que eu posso fazer algo diferente: ao invés de mandar dessa forma, posso mandar um JSX:

```jsx {numberLines: true}
<Panel header={

<span>'Olá <u>mundo!</u></span>

}
```

Com isso fizemos uma composição porque eu posso passar outro componente para ele, como é um JSX eu posso passar o html ou passar efetivamente um outro componente. Por exemplo, podemos passar um componente que depende de dois outros componentes, um que fica só no header e um no footer e qualquer coisa que você quiser colocar você pode, como um mapa por exemplo. 

Isso facilita bastante criar essa composição. Podemos criar componentes mais genéricos, principalmente os estilo containers e injetamos duas informações dentro. Outra coisa que podemos fazer o é o seguinte:

```jsx {numberLines: true}
const Panel = (props) => {

return(

<div>

<h1>{props.header}</h1>

<p>{props.footer}</p>

</div>

)}

const Header = (props) => {

return (

<div>.....</div>

)}
```

O que passarem para ele eu vou colocar dentro do div. Como assim? Imagine que isso é meu header:

```jsx {numberLines: true}
<Panel header={

<span>'Olá <u>mundo!</u></span>

}
```

E eu vou dizer para ele que é um header com as coisas dentro:

```jsx {numberLines: true}
<Header><span>'Olá <u>mudo!</u></span></Header>
```
Para utilizar o que está dentro do header e o /header utilizamos uma outra  propriedade chamada props.children:

```jsx {numberLines: true}
const Header = (props) => {

return (

<div>{props.children}</div>

)}
```

Essas duas formas são bastante interessantes de se criar uma composição, ou com uma props normal ou se eu passar no corpo desse componente podemos gerar o props.children, com isso consigo pensar em componentes cada vez mais genéricos, porque eu posso fazer um header, por exemplo, para todas as minhas páginas e se eu quiser aplicar um class diferente, aplico no div.

 Isso libera um potencial para o React muito grande, porque a gente consegue reutilizar muito código a partir dessa componentização.
 
  Confira o vídeo
  
   Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!

  <div class="embed-responsive embed-responsive-16by9">
   <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/HdSrcNnZPEM" allowfullscreen></iframe>
    </div>