---
title: "ReactJS: comentários em JSX"
date: "2016-11-23"
thumbnail: "./React.jpg"
author: Tulio Faria
tags: ["Dicas", "React"]
keywords: "reactjs"
---

---
Estes dias passei por uma situação engraçada: queria apenas comentar uma parte de um JSX. JSX é a sintaxe utilizada para renderizar HTML do ReactJS. Porém, isso não foi tão simples :) 

A primeira tentativa seria fazer como um comentário em HTML:

```jsx {numberLines: true}
render(){
   return (
       <div>
          <!-- isso não vai funcionar :) -->
       </div>
    )
}
```

Porém, rapidamente iremos perceber que isso não funciona :) 

A segunda tentativa (já que JSX é meio HTML meio JS) seria tentar:

```jsx {numberLines: true}
render(){
   return (
       <div>
          /\* isso não vai funcionar :) \*/
       </div>
    )
}
```

Hum, mas não funcionou :( 

Bom, mas aí que está o pulo do gato. Precisamos avisar o JSX que ele tem que renderizar este trecho de código como javascript e não como JSX. 

E aí está o motivo do qual temos que usar { }.

```jsx {numberLines: true}
render(){
   return (
       <div>
          { /\* isso não vai funcionar :) \*/ }
       </div>
    )
}
```

Neste caso, quando utilizamos as chaves, estamos alternando o contexto entre JSX e JS, e por isso,o comentário agora irá funcionar. Basta lembrar que quando queremos "escrever" algo no JSX utilizamos { nomeDaVariavel }. 

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!