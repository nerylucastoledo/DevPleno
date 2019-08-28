---
title: "3 dicas para NPM + 1 dica extra"
date: "2017-05-16"
thumbnail: "DICAS-PARA-NPM-790x400.png"
author: "Tulio Faria"
tags: ["Dicas"]
keywords: "hands"
---


Se você acompanha o DevPleno há algum tempo. deve ter percebido que eu utilizo bastante o learn, mas o repositório onde ficam esses módulos é o NPM. Esse repositório tem diversas funções interessantes para o nosso dia a dia, e é sobre algumas delas que vou abordar neste post.  Confira:

#1 – Se você quiser instalar algum módulo em uma versão especifica, pode utilizar o @ depois do nome do módulo que irá instalar. Por exemplo, o Express está no 4.1.5, mas você quer instalar o 4.0.0, então basta fazer o seguinte:

```jsx {numberLines: true}
npm install express@4.0.0
```

Uma das vantagens disso é em relação a compatibilidade. Caso você esteja utilizando um outro módulo, por exemplo,  que por questão de compatibilidade precisa do express 4.0.0, poderia fazer isso facilmente apenas utilizando o @.

 

#2 – Você pode usar repo (repositório) para acessar o repositório do módulo e procurar as issues dele.

```jsx {numberLines: true}
npm repo express
 ```

#3 – Você também pode usar home para ir direto ao site do módulo.

```jsx {numberLines: true}
npm home express
```

Obviamente ele está utilizando informações do próprio NPM, ou seja, se a informação não existir nele, não é possível recuperar.

 

Extra – NPM Outdated

O NPM Outdated checa suas dependências e vê se algo pode ser atualizado. Por exemplo, como forçamos o express 4.0.0, ele irá mostrar que a atual é a 4.0.0, a melhor a ser utilizada é a 4.15.2 e a ultima também é a 4.15.2.

Ele pode ser bastante útil caso você tenha muitas dependências para fazer na ‘mão’, o que é muito trabalhoso, e isso te livra de todo esse trabalho.

  Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Ah, fique à vontade para deixar suas dúvidas e sugestões nos comentários. Abraço!


<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/XR4iMcOKvkg" allowfullscreen></iframe> </div>