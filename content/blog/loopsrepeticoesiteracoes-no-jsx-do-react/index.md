---
title: "Loops/Repetições/Iterações no JSX do React"
date: "2016-12-27"
thumbnail: "./Lops.jpg"
author: "Tulio Faria"
tags: ["Dicas", "React"]
keywords: "react"
---

---
JSX é a sintaxe que permite escrevermos HTML dentro do Javascript (sim, isso parece estranho, rs) em componentes ReactJS. E um fator muito interessante do JSX é que ele não permite trocar o escopo, assim como é possível fazer um loop/repetição em PHP. Onde apenas deixamos o for/foreach/while dentro do escopo do PHP e o HTML fora do escopo seria repetido. 

Algo como:

```jsx {numberLines: true}
<ul><!-- aqui temos HTML normalmente -->
<?php for($i=0; $i<10; $i++){ // trocamos o escopo para PHP ?>
<li><?php echo $x ?></li><!-- aqui alternamos o escopo entre HTML/PHP -->
<?php } ?>
</ul>
```

Perceba que no exemplo anterior, sempre que queremos alternar para PHP, apenas usamos o <?php. Em JSX podemos tentar fazer algo semelhante, porém isso não funcionaria. Pois JSX é Javascript, então não tem como alternarmos o escopo. :(

## Forma 1:

Nesta maneira geramos fragmentos de JSX dentro de um array e escrevemos este array onde desejamos a nossa saída. Olhando o código fica mais simples entender:

```jsx {numberLines: true}
class Loop1 extends React.Component{
  render(){
    let rows = \[\]
    for(let i=0; i<5; i++){
      rows.push(<li>Num: {i}</li>)
    }
    return (
      <div>
        <h1>Loop 1:</h1>
        <ul>
          {rows}
        </ul>
      </div>
    )
  }
}
```

Apesar de funcionar bem, esta maneira acaba ficando um pouco confusa em componentes um pouco mais complexos.

## Forma 2:

Nesta maneira utilizamos um método separado para renderizar cada linha e o método array.map para iterar sobre os valores. Na verdade, poderíamos até mesmo utilizar outro componente na renderização.

```jsx {numberLines: true}
class Loop2 extends React.Component{
  renderRow(row){
    return (<li>Num: {row}</li>)
  }
  render(){
    let rows = \[\]
    for(let i=0; i<5; i++){
      rows.push(i)
    }
    return (
      <div>
        <h1>Loop 2:</h1>
        <ul>
          {rows.map(this.renderRow)}
        </ul>
      </div>
    )
  }
}
```

Esta forma é a minha favorita para renderizar lista de dados, pois mantem o código bem organizado e permite tratar quando a lista é vazia. Veja este exemplo:

```jsx {numberLines: true}
class Loop3 extends React.Component{
  renderRow(row){
    return (<li>Num: {row}</li>)
  }
  render(){
    let rows = \[\]
    /\*for(let i=0; i<5; i++){
      rows.push(i)
    }\*/
    if(rows.length==0){
      return(<p>Nenhum item</p>)
    }
    return (
      <div>
        <h1>Loop 3:</h1>
        <ul>
          {rows.map(this.renderRow)}
        </ul>
      </div>
    )
  }
}
```

Se a lista for vazia, ele retorna uma mensagem e não renderiza o loop :) 

Você pode ver estes exemplos rodando aqui: [http://codepen.io/tuliofaria/pen/NbZgqK](http://codepen.io/tuliofaria/pen/NbZgqK) 

Bom pessoal, estas são algumas ideias para utilizar loops em JSX. Como sempre, fiquem a vontade para comentar e até a próxima!

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!