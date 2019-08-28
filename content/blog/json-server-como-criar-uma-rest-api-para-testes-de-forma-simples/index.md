---
title: "Json-server - Como criar uma REST API para testes de forma simples"
date: "201-07-31"
thumbnail: "./JsonServer.png"
author: "Tulio Faria"
tags: ["Video-Tutorial"]
keywords: "algoritmos"
---


Neste hands-on onde vou mostrar uma ferramenta que é bastante interessante no dia a dia, o Json-server. 

Primeiro vamos instalar:

```jsx {numberLines: true}
npm install -g json-server
```

**O que ele faz?**

Muitas vezes estamos criando uma aplicação apenas front-end, como React ou Angular e ele é uma rest API para podermos testar, trazer dados, alterar esses dados, etc. Ele permite que a gente faça isso de uma forma muito simples. 

Vou criar um novo arquivo, por exemplo db.json, e dentro dele vou colocar o seguinte:

```jsx {numberLines: true}
{   "produtos":\[
    {"id": 1, "name": "bike"}
    \]
}
```

Criamos uma base de produtos onde tenho uma bicicleta com o ID 1. Com isso posso ir por exemplo no Shell e escrever:

```jsx {numberLines: true}
json-server --watch db.json
```

Ele retorna que já temos um recurso, que é:

```jsx {numberLines: true}
http://localhost:3000/produtos
```

Esse produto é o key que foi criado, que seria como se fosse nosso banco de dados. Se abrirmos o [Postman](https://www.devpleno.com/postman-como-testar-apis/) para testar, podemos colar essa url e dar um get, ele irá retornar nosso json. 

Então podemos fazer uma requisição em jQuery, por exemplo, que ele já baixa. O mais legal é que podemos criar um produto novo copiamos o retorno do nosso get:

```jsx {numberLines: true}
{
"id": 1,
"name": "bike"
}
```

E depois mudamos o parâmetro para post e vamos postar um produto com ID 2. No body, temos que colocar que ele será em Raw

```jsx {numberLines: true}
{
"id": 2,
"name": "carrinho"
}
```

Se clicarmos em Send e voltarmos a dar um Get, ele retorna os dois produtos, então eu consigo criar um registro e retornar esse registro apenas fazendo isso. Podemos também fazer com um ID direto dessa maneira:

```jsx {numberLines: true}
http://localhost:3000/produtos/1
```

Ele retornará apenas o ID 1. 

Perceba que ele transforma um Json em um banquinho de dados para podermos testar. À medida que vamos trocando, percebemos que o Json vai mudando também, então podemos criar essas alterações de uma forma persistida. 

Use bastante, é uma ótima forma para poder ilustrar que está havendo uma comunicação com o servidor, e ele também é muito flexível, já vem com os métodos do HTTP implementados, então se quisermos excluir, podemos também. Não dá para usar em produção, seria muito inseguro, mas é possível para prototiparmos uma interface ou quem sabe um aplicativo móvel. 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/VrPByfYy9PE" allowfullscreen></iframe>
</div>

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!