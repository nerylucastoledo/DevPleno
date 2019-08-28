---
title: "Hands-on: Streams Parte 2 - Writable"
date: "2017-05-09"
thumbnail: "./StreamPart2.png"
author: Tulio Faria
tags: ["Dicas", "Video-Tutorial"]
keywords: "Hands-On"
---
---

Vamos continuar falando sobre o Stream em node, mais especificamente sobre o Writable, lembrando que podemos usar estes conceitos em outras linguagens. Se você ainda não viu a parte 1, clique [AQUI](https://www.devpleno.com/streams-parte-1/).    

**O que é Writable Stream?** 

São Stream's onde podemos escrever algo neles, diferente do Readable que apenas lemos os dados. Dizemos que o Writable é um stream de destination. Podemos utiliza-los, por exemplo, em operações em rede, escrever em arquivos, etc. Hoje vamos trabalhar fazendo testes em um arquivo por ser mais simples.   

**Qual a vantagem em relação ao modo sem Stream?** 

Do mesmo modo que o readable Stream, iremos escrever 'parcelado' neste arquivo, sem necessidade de termos ele inteiro em memória.   

**Como ulizamos o Writable Stream?** 

Primeiro vamos chamar o fs para ter acesso a ele e em seguida chamar o WritableStream, lembrando que no Writable temos algumas opões, como flags, que irá indicar como eu vou escrever este arquivo e o encoding para setar o tipo de codificação (UTF8 é o mais consolidado).

```jsx
const  sf = require('sf')
const writable = sf.createWriteStream('arquivo.txt', { flags: 'w', encoding: 'utf8'})
writable.write('exemplo\\n')
writable.write('acabou')
```

Temos então o Writable Stream, dizendo onde eu quero gravar meu arquivo e qual flag quero utilizar, neste caso utilizamos o W que é somente para escrever criando um novo arquivo ou sobrescrevendo um já existente por completo. 

Ao trocar o W pelo A entramos no modo append, ou seja, ele acrescenta a escrita no final do arquivo, somando o anterior com as novas adições. 

**Por que utilizamos o Writable Stream?** 

Podemos construir um arquivo nosso com stream parcialmente e, a medida em que temos acesso a novos dados para serem escritos, podemos adiciona-los.   

**Concluindo** 

Percebam que quando usamos xpress, a requisição tem um Readable Stream e a saída é um Writable Stream, então já podemos imaginar que é possível criar algumas coisas no próprio xpress, isso acontece por que o xpress implementa stream. 

Outras comunicações que utilizam streams como socket io também seguem a mesma sintaxe.   Confira o hands-on completo no vídeo: 

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/elOGmIL7qws" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Ah, fique à vontade para deixar suas dúvidas e sugestões nos comentários. Abraço!