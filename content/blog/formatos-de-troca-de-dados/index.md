---
title: "Formatos de troca de dados em Aplicações Web"
date: "2017-05-19"
thumbnail: "TROCA-DE-DADOS-790x400.png"
author: "Tulio Faria"
tags: ["Video-Tutorial"]
keywords: "web"
---


Hoje vamos continuar falando sobre arquitetura de uma aplicação WEB, mais especificamente sobre os formatos de troca de dados entre back-end e front-end. Lembrando que o Front-end envia algo ao back-end, como por exemplo um POST em /users. 

Quando fazemos isso, a requisição é formada por alguns componentes: O Header de requisição; O Body de requisição; Em seguida temos as respostas de ambos. Quando fazemos um post para o users, podemos passar estes dados em alguns formatos. O mais conhecido hoje em dia é o JSON, por exemplo:

```jsx {numberLines: true}
{"name" = "tulio"}
```

No body da requisição, vamos mandar esta string, já no Header temos que enviar a informação para o servidor de que o que estamos enviando no body é um JSON. Temos outras formas de envio como o XML:

```jsx {numberLines: true}
<user><name>tulio</name></user>
```

_(XML era muito comum de ser utilizado antes do JSON e RESTful ficarem tão famosos)._ A forma que ainda é muito comum de enviar estas strings é o URL encoded, nela vamos mandar os dados da seguinte forma no body da requisição:

```jsx {numberLines: true}
?name = tulio

Se colocarmos mais dados:

?name = Tulio & lastName = Faria.

Outra forma é o mult-part form data, que diz mais ou menos assim:

field = name value
```

No header ele envia um separador outro camp = valor outro separador. Quando ele faz este multiform data, conseguimos mandar grandes quantidades de informação. 

**Quando isso é recomendado?** Quando estamos fazendo um Upload como enviar uma foto ou vídeo, por exemplo. Estes são os formatos que temos para troca de dados enviando do front-end para o back-end. Já a resposta do servidor pode ser retornado com um JSON, um XML, os dados como textuais e também HTML, img, PDF, CSS, etc, basicamente qualquer tipo de arquivo que quisermos do servidor para o cliente, desde que o navegador suporte isso. 

 Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!


 <div class="embed-responsive embed-responsive-16by9"> 
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/BBNYp0YsE-s" allowfullscreen></iframe> 
 </div>