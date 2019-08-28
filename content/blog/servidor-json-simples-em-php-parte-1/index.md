---
title: "Servidor JSON simples em PHP (parte 1)"
date: "2017-09-08"
thumbnail: "./ServidorJson.png"
author: Tulio Faria
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---

---
Hoje quero mostrar para vocês como criar um servidor JSON utilizando o PHP. Mas por que PHP e não JavaScript? Porque ainda é uma linguagem que tem hospedagem muito fácil de achar até mesmo gratuitamente. Se você já tiver um WordPress ou um site que suporte PHP já vai conseguir rodar isso, assim é possível rodar, por exemplo, projetos de teste como nosso Minhas Séries, que foi feito em ReactJS. A ideia é bem simples, apenas dois métodos por enquanto. Então vamos criar um arquivo chamado db.JSON e dentro dele vamos colocar assim:

```jsx
{
“series”: \[
\],
“genres”:\[
\]
}
```

Esse é nosso banco de dados. Feito isso, vou criar um index.php e adicionar alguns detalhes, primeiro dividir o que vier como get na variável e em seguida carregar o banco:

```jsx
<?php
$path = explode('/', $\_GET\['path'\]);
$contents = file\_get\_contents('bd.json');
$json = json\_decode($contents, true);
$method = $\_SERVER\['REQUEST\_METHOD'\];
header('Content-type: application/json');
$body = file\_get\_contents('php://input');
```

Agora que já lemos tudo, temos que adicionar um if. Caso o method for get, vamos apenas retornar o Json:

```jsx
if($method === 'GET'){
    if($json\[$path\[0\]\]){
    echo json\_encode($json\[$path\[0\]\]);
    }else{
        echo '\[\]';
    }
}
```

Com isso, caso tivermos uma série dentro do campo séries, ele retornará essa série. Além disso, podemos inserir também:

```jsx
if($method === 'POST'){
    $jsonBody = json\_decode($body, true);
    $jsonBody\[id\] = time();
    if(!$json\[$path\[0\]\]){
        $json\[$path\[0\]\] =  \[\];
    }
    $json\[$path\[0\]\]\[\] = $jsonBody;
    echo json\_encode($jsonBody);
    file\_put\_contents('db.json', json\_encode($json));
}
```

Caso não exista aquele caminho, vamos criar com um vazio, inserir um item novo e salvar. Caso olharmos o banco depois disso, temos a adição do novo item, caso usarmos o get novamente ele puxará todas as séries que existe lá mais a que foi adicionada por último. Você pode subir esse arquivo e o DB para o servidor que suporte PHP. 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/7s5_TmBqZR8" allowfullscreen></iframe>
</div>

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades.  Abraço!