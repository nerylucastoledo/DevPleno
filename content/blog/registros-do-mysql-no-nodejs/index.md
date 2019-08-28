---
title: "[SEGREDO] Muitos registros do MySQL no NodeJS"
date: "2017-08-18"
thumbnail: "./RegistrosMYSQL.png"
author: Tulio Faria
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---

---
Hoje quero contar um segredo para você: como utilizar o driver padrão do MySQL no Node para lidar com grandes quantidades de dados. 

A primeira coisa que vamos fazer é instalar o driver padrão:

```jsx {numberLines: true}
yarn add mysql
```

Tudo que formos fazer em Node, e envolve grandes quantidades de dados, temos que pensar em Stream,fique com isso na cabeça. Precisamos utilizar o Stream de alguma forma:

```jsx {numberLines: true}
const mysql = require('mysql')
const conection = mysql.createConection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'cadastro'
})
connection.connect(()=> console.log('connected'))
```

Lembrando que eu já tenho um banco de dados para testes. Fizemos algo bem rápido para chegar logo na parte que interessa :) 

Depois que conectamos, temos que fazer uma busca. Imagine que você tem que retornar um milhão de registros, a primeira coisa é que você não vai conseguir retornar isso em interface nenhuma, então provavelmente terá que gerar um arquivo xml, json ou qualquer coisa desse tipo.

```jsx {numberLines: true}
connection.connect(()=> {
    console.log('connected')
    connection.query('select \* from pessoas', (err, results) => {
        console.log(results)
    })
})
```

Com isso ele vai mostrar todas as pessoas estão cadastradas, no meu caso tenho mais de 900 itens, isso já é muito peso para ser lidado dessa forma porque a query vai pro banco e volta de uma vez dentro de results. Nesse ponto, estamos matando as duas pontas porque precisamos fazer o banco inteiro trazer todos os resultado e depois processando todos os resultados. Pensando em uma escala de milhão, quando trouxermos para o Node,teremos problema de memória. 

Precisamos então fazer essa query de uma outra maneira:

```jsx {numberLines: true}
connection.connect(()=> {
    console.log('connected')
    const query = connection.query('select \* from pessoas')
    query.on('results', (row) => {
        console.log(row)
    }
})
```

A query tem algo bem interessante, ela mostra que algum resultado chegou no Stream porque quando fazemos essa consulta, ela é muito pesada, então trás de linha a linha. Perceba que à medida que ele for recebendo de forma assíncrona, a gente vai processando os registros e isso é muito mais performático do que tentar usar o callback como estávamos fazendo antes. 

Imagine, por exemplo, que temos algum arquivo que não fosse executado de primeira:

```jsx {numberLines: true}
query.on('results', (row) => {
    setTimeOut(()=>{
        console.log(row)
    },300)
})
```

Quando trazemos esse resultado, travamos o Stream, lembrando que o Node é mono thread, então enquanto eu estiver processando, ele vai ter várias coisas pendentes e corre o risco de ser mais rápido trazer da rede do que processar. Temos que falar para o driver do MySQL segurar:

```jsx {numberLines: true}
query.on('results', (row) => {
    connection.pause()
    setTimeOut(()=>{
        console.log(row)
        connection.resume()
    },300)
})
```

Assim vamos conseguir controlar esse fluxo de dados e podemos processar grandes quantidades de dados sem ter problema com memória. Outra coisa que podemos fazer é o seguinte: terminou de processar, pode finalizar a conexão:

```jsx {numberLines: true}
    },300)
})
query.on('end', ()=> connection.end())
```

É muito interessante utilizarmos essa query como um eventStream, ele vai enviando eventos e pausa a conexão, restabelecendo ela para continuar mandando dados sempre que estiver fazendo esse processamento dos dados, assim evitamos trazer todos os registros para memória de uma vez. 


Se você for fazer processo em lote, que é muito pesado, deixe os 'console.log' somente para debug porque o console.log também é pesado. Pensando em escala, você perde alguns mili segundos sempre que o faz. Outra coisa, se o processamento é muito lento, limite enquanto está testando:

```jsx {numberLines: true}
const query = connection.query('select \* from pessoas limit 100')
```

Obviamente que não elimina você ter que testar, mas ajuda a agilizar seus testes de começo.

Veja o vídeo:

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/dCpXvk7Pngc" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal ](https://www.youtube.com/devplenocom)e cadastre seu e-mail para não perder nenhuma novidade. Deixe suas dúvidas e sugestões nos comentários. Abraço!