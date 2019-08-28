---
title: "algoritmos: Contar números negativos"
date: "2017-03-03"
tags: ["Video-Tutorial"]
author: "Tulio Faria"
thumbnail: "CONTAR-NÚMEROS-NEGATIVOS-790x400.png"
keywords: "algoritmos"
---

Continuando nossa série sobre algoritmos que caem em entrevistas e competições, neste vídeo falo sobre Contar Números Negativos, que já caiu em entrevistas da Amazon. Então fique ligado no vídeo:


<div class="embed-responsive embed-responsive-16by9"> 
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/eFC51WkFge4" allowfullscreen></iframe> 
</div>

Não perca nenhuma atualização do DevPleno. Se inscreva no canal, curta a <a href ="http://www.facebook.com/devpleno">página no Facebook</a> e cadastre seu melhor e-mail. Fique à vontade para deixar sugestões e dúvidas nos comentários. Abraços!

confira o codigo abaixo:

```js {numberLines: true}
const input = [[-3, -2, -1, 1],
               [-2, 2, 3, 4],
               [4, 5, 7, 8]]                 

function countNegative(input) {
    let line = 0
    let column = input[line].length-1
    let count = 0
    while(line < input.length && column >= 0) {
        if(input[line][column]< 0){
            count += column+1
            line++
        }else {
            column--
        }
    }
    console.log(input[line][column])
}
countNegative(input[line][column])
```





