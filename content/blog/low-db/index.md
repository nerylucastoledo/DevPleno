---
title: "Low-DB - Banco de dados para NodeJS baseado em JSON"
date: "2017-05-11"
thumbnail: "./Low-db.png"
author: "Tulio Faria"
tags: ["Video-Tutorial"]
keywords: "hands-On"
---

---
O Low-DB é uma forma bem interessante de termos um banco de dados baseado em JSON para utilizarmos em aplicações mais simples ou talvez aplicações desktop, onde podemos utilizar electron, por exemplo. 

Primeiro vamos instalar o módulo:

```jsx {numberLines: true}
yarn add lowdb
```

Criamos então o low-db. Com isso, precisamos de uma instância de um banco mostrando qual arquivo queremos utilizar.

```jsx {numberLines: true}
const lowdb = require('lowdb')
const db = lowdb('banco.json')
db
.defauts({
    noticias: \[\],
    usuarios:\[\]
})
.write()
```

O interessante é que podemos definir os valores padrão quando o banco for criado, como por exemplo notícias e usuários. Lembrando que com o low-db temos que escrever estas operações para a classe começar a valer. 

Ao dar um node no arquivo.js, ele irá criar um novo arquivo com o nome banco.json com os valores padrão pra cada um deles. 

Vamos fazer mais alguns testes,  por exemplo, adicionar uma notícia nova com id, assunto e conteúdo e por fim escreva no json.

```jsx {numberLines: true}
db
.get('noticias')
.push({
    id: '1',
    assunto: 'crime',
    conteudo: 'teste'
})
.write()
```

O mais interessante: você mandar adicionar novamente, ele irá adicionar ao anterior e não sobrepor. Podemos setar um valor de uma maneira em que podemos guardar as configurações.

```jsx {numberLines: true}
db
.set('settings.toggledOption', true)
.write
```

Utilizamos o ponto no código acima para dizer que a opção toggledOption do settings deve estar aberta. Podemos gerar estas atualizações mais profundas apenas colocando ponto.   

**Um banco não é um banco se não pudéssemos buscar as informações nele, correto?** 

Então vamos buscar uma informação (e única do nosso banco de exemplo) que é a notícia com o ID igual a 1.

```jsx {numberLines: true}
const n = bd
.get('noticias')
.find({ id: '1'})
.value()
console.log(n)
```

Percebam que atribuímos um value para o bd, e então chamamos este value no console.log. Por fim, podemos remover um item deste banco, fazemos isso apenas retirando o set do bd e trocando o .find por .remove

```jsx {numberLines: true}
bd
.get('noticias')
.find({ id: '1'})
.write()
```

Esta é uma ótima ferramenta para utilizarmos em projetos pequenos, não vamos utilizar um banco de dados expansive ou até mesmo para armazenar settings de sua aplicação.   

Confira o Hands-on no vídeo: 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Zej3O0o7v4o" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Ah, fique à vontade para deixar suas dúvidas e sugestões nos comentários. Abraço!