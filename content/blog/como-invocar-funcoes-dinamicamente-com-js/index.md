---
title: "Como invocar funções dinamicas em JavaScript"
date: "2018-02-19"
author: "Tulio Faria"
thumbnail: "INVOCAR-FUNÇÕES-790x400.png"
tags: ["Dicas", "Video-Tutorial"]
keywords: "dica"
---

Em programação, blocos de código que executam instruções específicas são chamadas de funções e, no Javascript, são conhecidas como métodos. Agora, imagine o seguinte cenário: como desenvolvedor, você não conhece o nome do método que quer chamar mas sabe que existe o nome dele em uma variável. Então, como faremos para chamá-lo?

Os métodos são muito úteis em casos onde queremos uma programação mais dinâmica, por exemplo: você tem um serviço e não sabe os nomes dos métodos disponíveis e é possível programar a forma como serão chamados ou se você tem uma forma de integrar módulos com pontos de entrada na aplicação para importar o módulo baseado nessa variável, chamando seus métodos dinamicamente.

Imagine o seguinte cenário em temos um console como o da imagem abaixo, onde deixamos para o usuário a opção de escolher o método **log** ou o **debug**:

![](ee3e4af7-e305-4b07-b8dc-6b89ad845b2b.png)

Ao executarmos o código acima (dinamicamente.js) no prompt de comando, vemos o resultado a seguir com destaque para o “opa” que foi impresso:

![](f1479302-5455-4de5-992a-b2895a8fc040.png)

Ao criar um objeto obj, definindo valores para suas variáveis a e b, tal qual a imagem abaixo:

![](b5a5732c-9784-490c-8689-aa0ca2d9c0f2.png)

Podemos pegar o valor da variável a do objeto obj com a instrução console.log(obj.a) e mostrar o conteúdo de a como um resultado:

![](8b328403-f896-4bd5-84f1-c8d290947dfa.png)

Outra forma de obter o valor de a consiste em definirmos uma constante (variável com valor fixo) que chamaremos de key e com a instrução console.log(obj[key]) conseguimos o valor de a como resultado:

![](d9b43f66-b423-47d3-affa-1d3e0e59f3e0.png)

Com os métodos, o processo é semelhante. Alteremos o código acima para deixar apenas a definição da constante key como ‘log’ e, como não sabemos a posição do método que iremos chamar, colocamos console[key].

![](f07b0ccb-43c2-4b32-ab41-329b91806f31.png)

Para entender o que console[key] retornaria, escreveremos a instrução console.log(console[key]) para observar o valor de retorno:

![](7251b686-324c-4117-96bb-201286874331.png)

Pelo resultado, notamos uma coisa muito legal no Javascript: as funções também são valores – o que nos permite escrever console[key](‘valor1’) e obter seu resultado no prompt:

![](2ad70e26-f38f-4062-833a-0fd88cc4c07c.png)

O resultado anterior permite que façamos coisas como imprimir com console[key](‘valor’), a partir de um vetor de constantes key, o valor associado a cada constante:

![](7aa0a9d1-88e8-4e33-be22-de062373704f.png)

![](494afd56-2b54-4a03-9d1c-b9f63285910a.png)

Modificando a definição de const keys, podemos obter todos os métodos de console: 

![](0b5a79bb-db9b-4f8b-9cc8-e594cce81b86.png)

![](24e5a378-262f-42ac-ae02-32e7ef04be24.png)

ou então passar a constante key como um valor:

![](69e0b8c0-c0a3-473c-8e0a-259c7b6d288f.png)

![](0176837b-d7d6-402d-874e-7fa2162e7866.png)

Se você seguiu os passos até aqui, então conseguiu chamar métodos de uma forma dinâmica – algo muito poderoso no Javascript. Outra coisa que podemos fazer está no Web Console do navegador (Ctrl+Shift+I no Google Chrome). Nesse console, temos um objeto chamado window que traz as mesmas funcionalidades para chamada dinâmica de métodos, assim como fizemos com **console**, vide o exemplo abaixo:

![](a6593685-2ae7-4c45-8819-2d884be791d1.png)

E assim, surge uma mensagem “opa” na tela do navegador:

![](541d05d0-a49f-4719-8e9c-dc40e883e8e2.png)

Podemos, ainda, guardar uma função dentro de uma constante alertOpa:

![](a189c254-1702-49c8-b6b0-8677939c9626.png)

E, ao acessarmos alertOpa como um objeto, faremos a chamada da função com o texto ‘lopa’ que escrevemos como valor:

![](2cdbbd23-6e5f-4ea2-b635-387c58d698a9.png)

A principal ideia do que aprendemos é criar funções dinâmicas e facilitar o uso de módulos de extensões de uma aplicação com essa abordagem, tanto para carregar um módulo dinâmico quanto para executar algo dentro desse módulo dinamicamente.

E essa é a dica de hoje. Confira o passo a passo no vídeo abaixo.



<div class="embed-responsive embed-responsive-16by9">
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/c6C5j1_Xwig" allowfullscreen></iframe>
  </div>

Até a próxima! 