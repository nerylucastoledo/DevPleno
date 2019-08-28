---
title: "4 novos Métodos Strings que você precisa conhecer"
date: "2017-05-30"
thumbnail: "STRING-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---


Quatro novas funções foram adicionadas às Strings no ES6 e são bastante interessantes para usarmos no dia a dia. Veja só:

 

#1 StartsWith

Nela temos uma string qualquer e fazemos o seguinte:

```js {numberLines: true}
console.log('Tulio Faria' .startsWith('Tulio'))
```

Será que Tulio Faria começa com a palavra Tulio? Se sim, é retornado true. Lembrando que ele é case sensitive, então se tiver a palavra ‘tulio’ dentro do startsWith, seria retornado um false. Ainda não é possível fazer isso sem o case sensitive.

Podemos também definir a partir de qual parte ele comece a considerar, por exemplo:

```js {numberLines: true}
console.log('Tulio Faria' .startsWith('ulio', 1))
```

Assim ele começa a considerar a partir da primeira letra.

 

#2 endsWith

Ele que faz basicamente a mesma coisa que o Starts, mas pega o final, por exemplo:

```js {numberLines: true}
console.log('Tulio Faria' .endsWith('ria'))
```

Lembrando que no endsWith também conseguimos escolher a partir de qual parte considerar:

```js {numberLines: true}
console.log('Tulio Faria' .endsWith('ulio', 5))
```

Consideramos o parâmetro onde irá parar a string.

 

#3 Includes

Supondo que eu quero saber se no meu nome inclui ‘Machado’:

```js {numberLines: true}
console.log('Tulio Machado Faria' .includes('Machado'))
```

Ele verifica se a string está incluída.

 

#4 Repeat

Com ela podemos repetir a string quantas vezes quisermos:
```js {numberLines: true}
console.log('01'.repeat(10))
```

Podemos paddings de strings, pegar essa string e colocar na frente de outra, por exemplo, que funciona normalmente.

Considerando as três primeiras, se quisermos de forma insensitiva, temos algumas alternativas como passar todas para maiúsculas, todas para minúsculas ou por expressão regular.

 

Confira o vídeo:


<div class="embed-responsive embed-responsive-16by9">
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/CuR966gt1CU" allowfullscreen></iframe>
  </div>

 Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!