---
title: "Algoritmos: Campo Minado (Minesweeper)"
date: "2017-02-24"
thumbnail: "ALG.-CAMPO-MINADO-790x400.png"
author: "Tulio Faria"
tags: ["Video-Tutorial", "Algoritmos"]
keywords: "algoritmos"
---


Continuando nossa série sobre algoritmos que são utilizados em questões de competições/maratonas de programação e em entrevistas, neste post, iremos tratar sobre o algoritmo campo minado (minesweeper), retirado do livro Programming Challenges de Miguel Skiena. No vídeo, explico detalhadamente sobre o algoritmo e como resolvê-lo. 


<div class="embed-responsive embed-responsive-16by9"> 
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/lJbqOpm2WGg" allowfullscreen></iframe> 
</div>

```jsx {numberLines: true}
const input = \`4 4
\*...
....
.\*..
....
3 5
\*\*...
.....
.\*...
0 0\`

let lines = input.split('\\n')

let current = 0
let currentField = 1

function minesweeper(field, numCols){
  let filledField = \[\]
  const len = field.length
  for(let i = 0; i<len; i++){
    let line = \[\]
    for(let k=0; k<numCols; k++){
      if(field\[i\].charAt(k)==='\*'){
        line.push('\*')
      }else{
        line.push(0)
      }
    }
    filledField.push(line)
  }
  for(let i = 0; i<len; i++){
    for(let k=0; k<numCols; k++){
      if(filledField\[i\]\[k\]!=='\*'){
        if(i>0){
          if(k>0){
            if(filledField\[i-1\]\[k-1\]==='\*'){
              filledField\[i\]\[k\]++
            }
          }
          if(filledField\[i-1\]\[k\]==='\*'){
            filledField\[i\]\[k\]++
          }
          if(k+1<numCols){
            if(filledField\[i-1\]\[k+1\]==='\*'){
              filledField\[i\]\[k\]++
            }
          }
        }

        if(k>0){
          if(filledField\[i\]\[k-1\]==='\*'){
            filledField\[i\]\[k\]++
          }
        }
        if(k+1<numCols){
          if(filledField\[i\]\[k+1\]==='\*'){
            filledField\[i\]\[k\]++
          }
        }

        if(i+1<len){
          if(k>0){
            if(filledField\[i+1\]\[k-1\]==='\*'){
              filledField\[i\]\[k\]++
            }
          }
          if(filledField\[i+1\]\[k\]==='\*'){
            filledField\[i\]\[k\]++
          }
          if(k+1<numCols){
            if(filledField\[i+1\]\[k+1\]==='\*'){
              filledField\[i\]\[k\]++
            }
          }
        }
      }
    }
  }
  for(let i=0; i<len; i++){
    console.log(filledField\[i\].join(''))
  }
  console.log('')
}

do{
  line = lines\[current++\]
  let nums = line.split(' ')
  if(nums.length===2){
    const numLines = parseInt(nums\[0\])
    const numCols = parseInt(nums\[1\])
    if(numLines!==0 && numCols!==0){
      console.log('Field #'+currentField+':')
      minesweeper(lines.slice(current, current+numLines), numCols)
      currentField++
    }
  }
}while(line !== '0 0')
```

Caso tenha ficado alguma dúvida, comente aqui embaixo e fique à vontade também para mandar sugestões. Cadastre seu e-mail para receber nossas últimas novidades. Abraços!