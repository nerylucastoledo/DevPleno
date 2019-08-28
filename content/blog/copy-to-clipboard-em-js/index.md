---
title: "Ctrl+C / Copy to Clipboard em JS"
date: "2017-05-18"
thumbnail: "Copy-to-Clipboard-em-JS-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial", "Videos"]
keywords: "dicas"
---


Essa é uma dica bem rápida de como podemos mandar algo com o clipboard, ou seja, o equivalente a dar um CTRL + C em um texto na sua página. 

Para fazer este exemplo, vamos usar o jQuery por que escrevemos pouquíssimas linhas de código. Então temos uma página bem simples, apenas com algumas tags, e vamos criar um input type text com um ID url e um value:

```jsx {numberLines: true}
<html>

<head>

<title>Copy to Clipboard</title>

<style>

#url{

text-align: center;

padding: 40px;

}

</style>

</head>

<body>

<input type="text" id="url" value="https://devpleno.com">

<script src="https://code.jquery.com/jquery-3.2.1.min.js">

</script>

</body>

</html>
```

Com isso teremos o input, e a ideia é que quando clicarmos nele. já ser copiado para a área de transferência, apenas precisando dar CTRL + V para funcionar. 

Lembrando que já importamos o jQuery da CDN. Vamos então abrir no body um novo Script. Nele, quando clicar na URL, quero que selecione e depois execute o comando copy.

```jsx {numberLines: true}
<script>

$("url").click(function(){

$(this).select();

document.execCommand('copy');

})

})

</script>
```

Algumas pessoas colocam um Botão para copiar e deixam apenas o select quando clicarmos no texto. Isso é muito útil quando temos URL's para compartilhar e é legal para deixar essa facilidade na experiência do usuário quando ele estiver utilizando o seu sistema.

 Um exemplo de onde isso é muito útil é na URL do github, pois poupamos a tarefa de copiar do usuário. Confira a explicação em vídeo para entender melhor
 
 Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!


  <div class="embed-responsive embed-responsive-16by9">
   <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/K7r2-hBydBE" allowfullscreen></iframe> 
   </div>