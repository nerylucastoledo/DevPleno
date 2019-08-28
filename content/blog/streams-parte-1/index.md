---
title: "Hands-on: Streams - Parte 1"
date: "2017-05-08"
thumbnail: "./StreamPart1.png"
author: Tulio Faria
tags: ["Video-Tutorial", "Hands-On"]
keywords: "Dicas"
---
---

Olá! 

Neste post, vamos falar sobre Streams, um conceito utilizando em JavaScript mas que pode ser aplicado em outras linguagens. Nele temos uma grande quantidade de conteúdo para explorar.   

**O que é um Stream?** 

É um Fluxo de dados. Quando queremos ler um arquivo muito grande, por exemplo, ele permite que façamos um fluxo de dados na leitura deste arquivo.   

**Qual a vantagem de existir este fluxo de dados?** 

Primeiramente isso permite lermos arquivos gigantescos e transformar os dados na medida que vamos lendo estes dados. 

Outra coisa interessante sobre o Stream é que podemos fazer o Pipe (uma ligação) de um Stream com outro, como por exemplo um Stream de leitura com um Stream de escrita integrando os dois de forma fluída. Isso é muito bom para trabalharmos com movimento de dados, tratando pedaços deste arquivo à medida que eu vou lendo, sem precisar colocar ele todo na memória. 

No JavaScript, temos quatro tipos de Stream: Readable (leitura), Writable (escrita), Duplex(ambos os anteriores juntos) e Transform (permite transformação de dados). 

**Readable** 

Primeiro vamos pegar um arquivo grande, por exemplo arquivo.txt e vamos ler ele com Stream. Vamos chamar o fs para ter acesso a isso. 

_Uma curiosidade: o Stream no Node é implementável, ou seja, quando algum módulo implementa o Stream, podemos tratá-lo da mesma forma, podendo utilizar os mesmos métodos em outros Streams._

```jsx
const fs = require('fs')
const readable = sf.crateReadStream('arquivo.txt')
```

Nós temos dois tipos de readable Stream: o paused mode, onde ele para e eu solicito os dados, e o flowing mode, em que a medida que ele consegue ler os arquivos já vai devolvendo os dados. 

Para fazermos o Flowing mode, vamos criar uma arrow function data passando o data para dentro. Lembrando que o data é um buffer, então precisamos adicionar um toString para sabermos o que tem dentro dele.

```jsx
const fs = require('fs')
const readable = sf.crateReadStream('arquivo.txt')
readable.on('data', (data)=>{
    console.log(data.toString())
})
```

Quando colocamos o readable.on, ele 'ouve' o tipo data e o readable entra em modo flowing, também conhecido como modo push. Este modo é muito utilizado em operações de rede, como por exemplo ler um upload de um arquivo de um usuário (javaScritp client side), com isso vamos tratando estes dados na medida que vai sendo enviado. 

Podemos criar, também, uma forma em que o readable nos envie a leitura de tempo em tempo usando readable.pause e readable.resume, da seguinte forma:

```jsx
const fs = require('fs')
const readable = sf.crateReadStream('arquivo.txt')
readable.on('data', (data)=>{
    console.log(data.toString())
    readable.pause()
    setTimeout(()=>readable.resume(), 2000)
})
```

No exemplo acima, o readable nos retorna partes do arquivo a cada 2 segundos. A segunda forma que podemos fazer é usando o paused mode. Quando o arquivo tiver um evento readable (consegue ler dados do Stream), eu solicito o envio desses dados ao invés dele me enviar de tempo em tempo. Fazemos isso usando o chunk.

```jsx
const fs = require('fs')
const readable = sf.crateReadStream('arquivo.txt')
readable.on('readable', ()=>{
    while(chunk = readable.read()){
        console.log(chunk.toString())
    }
})
```

**Qual a vantagem do modo paused?** 

Eu posso ir processando uma pequena quantia de dados de acordo com o que eu quero.   

**Conclusão** 

Essa foi uma noção inicial dos readable Streams, vamos passar por todos os outros modos, mas dentro do readable temos os 2 modos, o pause e o flowing.   Confira o hands-on completo no vídeo: 

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/PcvJm2QqSS4" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Ah, fique à vontade para deixar suas dúvidas e sugestões nos comentários. Abraço!