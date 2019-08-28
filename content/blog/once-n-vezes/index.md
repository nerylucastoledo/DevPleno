---
title: "Once N vezes"
date: "2017-05-22"
thumbnail: "./OnceNVezes.png"
author: "Tulio"
tags: ["Video-Tutorial", "Dicas"]
keywords: "algoritmo"
---

Essa dica é sobre uma técnica em JavaScript de uma função utilitária que permite que uma outra função só seja executada uma única vez (Once).

**Para que fazer isso?**

Vamos supor que você carregou uma página ou algo via AJAX e deve fazer alguma operação,mas essa operação só pode acontecer uma única vez (e você pode ter mais de uma operação) então se colocar no final de cada uma, a que acontecer primeiro não deixa as posteriores acontecerem.  isso evita algum tipo de concorrência.

Vamos criar uma função func1. Ela só vai poder ser chamada uma vez, mesmo sendo chamada duas vezes. Para isso, vou criar uma função once, essa vai ser a função que permitirá que uma outra função qualquer (que no caso vai ser a fn) seja executada somente uma vez. Para isso, precisamos de uma variável resultado e uma return function.

```jsx {numberLines: true}
function once(fn, context){
    let result
    return function(){
    }

}
const func1 = once(function){
    console.log('opah')
})
func1()
func1()
```

Quando chamamos o once e passamos a function

```jsx {numberLines: true}
'console.log('opah')'
```

estamos passando ele para dentro de fn, então ela vai retornar uma outra função. O detalhe é que essa função que estamos retornando volta e fica dentro de func1, porém o contexto **let result** fica travado, então é possível saber quantas vezes essa função foi chamada.

```jsx {numberLines: true}
function once(fn, context){
    let result
    let contador = 0
    return function(){
        contador++
        console.log(contador)
    }
}
```

Chamando o arquivo.js será mostrado o número de vezes que foi chamada a função (no caso, 2 vezes).

Agora vamos fazer com que ele bloqueie as próximas chamadas usando um if. Se o contador for igual a 0, chamamos a função. Caso já tenha sido executada uma vez, ela vai parar.

Para isso, chamaremos a função fn, o contexto – caso não venha contexto nenhum, ele mandará o da própria função – guardamos isso dentro de result e por fim incrementamos o contador e damos o retorno do result.

```jsx {numberLines: true}
function once(fn, context){
    let result
    let contador = 0
    return function(){
        contador++
        if(contador===0){
            result = fn.apply(context || this)
        }
        contador++
        return result
    }
}
```

Podemos aumentar isso ainda mais, dizer o número máximo de vezes que queremos que chame a função, por exemplo.

```jsx {numberLines: true}
function once(fn, max, context){
    let result
    let contador = 0
    return function(){
        contador++
        if(contador<max){
            result = fn.apply(context || this)
        }
        contador++
        return result
    }
}
const func1 = once(function){
    console.log('opah')
}, 2)
```

Essa técnica é muito poderosa para fazer alguns tipos de restrições.

Perceba que fizemos duas coisas: travar a função para rodar apenas uma vez e em seguida rodar um número N de vezes que determinamos utilizando a mesma técnica.

Confira o passo a passo no vídeo:

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/6dB2dVep_UQ" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!