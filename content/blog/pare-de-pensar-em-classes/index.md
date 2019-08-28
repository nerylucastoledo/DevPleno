---
title: "Pare de pensar em classes!  Série - POO para JS"
date: "2017-10-25"
thumbnail: "./ParaDePensar.png"
author: Tulio Faria
tags: ["Dicas", "Video-Tutorial"]
keywords: "javascript"
---

---
Nesta nova série do DevPleno, mostro como podemos passar de programação orientada-objetos para JavaScript mais funcional. 

A primeira coisa _(que é muito importante)_ é tentar parar de pensar estruturado.Se você quer mudar de programação orientada objetos para JavaSxript cada vez mais funcional funcional, precisa parar de pensar em classes. Apesar do JavaScript ter uma forma de criar classes, 

por exemplo:  

```jsx {numberLines: true}
class Calc{
    constructor(num1, num2){
        this.num1 = num1
        this.num2 = num2
    }
    out(){
    console.log(this.num1, this.num2)
    }
}
const a = new Calc(1,2)
a.out()
```

Devo utilizar? 

Se você quer programar mais de uma maneira que faça sentido em JavaScript, você deve evitar. Vou mostrar algo que é bastante estranho principalmente para quem vem de Java, PHP, etc:

```jsx {numberLines: true}
a.out.bind({num: 4, num2: 5})()
```

Então eu peguei o meu objeto 'a', o método out e dou um bind passando num1 e num2, com isso eu consigo sobrescrever um parâmetro que teoricamente estaria restrito a esse objeto.

Uma forma de construir sem utilizar o class seria assim:

```jsx {numberLines: true}
const Calc =  function(num1, num2){
    this.num1 = num1
    this.num2 = num2
    return {
        out: function(){
        console.log(this.num1, this.num2)
        }
    }

}
```

Mas eu consigo resolver isso de mutar o objeto, evitando por exemplo que o bind funcionasse? Toda function cria um contexto novo. 

Para que isso não aconteça, podemos utilizar uma outra construção que não permita que façamos isso:

```jsx {numberLines: true}
return {
    out: () => {
        console.log(this.num1, this.num2)
    }
}
```

A partir de uma arrow function, não temos mais uma forma de sobrescrever o this. Assim eu evitei essa criação excessiva de contextos. Utilizando dessa forma, você vai perceber que ele parece muito uma classe mas existem vários conceitos de programação funcional que vão fazer muito sentido à medida que você for evoluindo. 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/po9Ik_v5koU" allowfullscreen></iframe>
</div>

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](http://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!