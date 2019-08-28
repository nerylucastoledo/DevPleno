---
title: "Verificando o tempo para executar um trecho de código em Javascript"
date: "2017-02-01"
thumbnail: "./js.png"
author: Tulio Faria
tags: ["Dicas", "JavaScript"]
keywords: "Dicas"
---

---
Uma tarefa que venho executando bastante nos últimos dias, principalmente por participar de alguns processos de seleção para projetos é em relação a performance de um trecho de código. Em muitas destas entrevistas, fui questionado sobre a complexidade de minha solução utilizando a notação big-o (sim, aquela que gera algo como O(n) ou O(n²) para uma dada complexidade - iremos falar mais sobre isso em outros posts). Fora do mundo acadêmico (ou destes testes), eu prefiro checar a complexidade através do tempo de execução de um trecho de código. Então, a ideia é a seguinte:

1.  salvamos a data/hora atual
2.  executamos o trecho de código
3.  pegamos a data/hora atual e subtraímos o valor encontrado no item 1.

Simples né? Vamos fazer agora em Javascritp:

```jsx
const inicio = new Date().getTime()
// trecho de código que queremos mensurar
const total = new Date().getTime()-inicio
console.log("Foi executado em: ", total)
```

O interessante é que em Javascript já temos uma maneira mais específica de fazer isso. Bastando apenas chamar console.time("nome do timer") no início, e console.endTime("nome do timer") no fim da execução. O código ficaria assim:

```jsx
console.time("TempoLoop")
// trecho de código a ser medido
console.endTime("TempoLoop")
```

O tempo de execução será exibido em milisegundos em ambos os casos. Um ponto muito importante quando estamos medindo o tempo de execução de um trecho de código é não executar console.log dentro de laços repetição ou dentro de algorítmo onde ele será executado várias vezes. O node/browser ou até mesmo a saída no console em outras linguagens é muito custosa, e vai atrapalhar seus testes, por deixar de maneira geral seu código rodando mais lentamente. Existem outras formas de fazer isso, com profiling e outras ferramentas. Mas esse será tema para outro post :) Não deixem de comentar e nos seguir em todas as redes sociais, até a próxima!

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e cadastra seu e-mail para não perder as novidades. Fique à vontade para deixar suas dúvidas e sugestões nos comentários. Abraço!