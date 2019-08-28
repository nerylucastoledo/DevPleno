---
title: "Entenda sobre CORS - Cross Origin Resource Sharing"
date: "2017-09-06"
thumbnail: "CORS-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial", "Videos"]
keywords: "dicas"
---


Hoje vou falar sobre um assunto que é bastante interessante: CORS (ou Cross Origin Resourse Sharing).

O que isso quer dizer?

É como dois servidores ou dois domínios diferentes poderiam compartilhar um recurso. Imagine o seguinte: nós temos o site do DevPleno e o tuliofaria.net, se eu fizer uma requisição no DevPleno, especificamente utilizando o AJAX, que tenta fazer uma requisição de dados do tuliofaria.net, o servidor do tuliofaria.net corre um risco de ter uma forma de exploração.

Imagine o site dos Correios, se tivéssemos que fazer isso direto com o CEP, as pessoas não sairiam do site delas e faríamos as requisições todas do site dos Correios, isso sobrecarregaria o site, além de ser uma falha de segurança porque podemos fazer algo nesse script para fazer um exploid e mandar para outro servidor. Um exemplo disso é onde você coloca o nome em uma aplicação, é possível colocar um script ali que quando o administrador for listar todos os nomes, tenha um script injetado que mande os dados para outro servidor. Por esse motivo não é possível fazer requisições para outro domínio a não ser que esse domínio permita isso.

Algumas operações falamos que são ‘pre-fligth’, isso quer dizer que antes dela executar é mandado uma requisição chamada ‘option’, nisso ele pergunta algo como “nesse CEP, quais são as opções que eu tenho nesse servidor?” e o servidor vai responder essas opções, como um GET, POST ou ditar o domínio. Caso ele responder qual o domínio, o próprio navegador não vai fazer a outra requisição, por exemplo, caso tenhamos feito um post para salvar algum dado no tuliofaria.net, o próprio navegador manda um Options, checa esse retorno e aí sim faz o post se ele puder.

CORS nada mais é do que esse bloqueio, ou como a gente controla esses recursos, então durante essa troca de informações temos algumas trocas de cabeçalhos que vão dizer se esse servidor permite outro servidor acessar ou manipular os dados.

É sempre bom tomarmos cuidado com isso porque vamos supor que se a gente testar nossa API no postman, por exemplo, ele não tem problema de CORS, já que ele é uma aplicação stand-alone e não uma página estática.

Algumas coisas que aconteceram conosco aqui na empresa foi colocar sistemas com domínios diferentes mas acessando a mesma API, por exemplo. O desafio era controlar o CORS para saber se esse domínio tinha acesso ou não. Esse é mais um conceito da arquitetura WEB.

 Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades.  Abraço!


 <div class="embed-responsive embed-responsive-16by9"> 
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/3hzidd-sQfY" allowfullscreen></iframe>
  </div>