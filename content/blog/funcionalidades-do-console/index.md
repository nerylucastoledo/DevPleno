---
title: "4 funcionalidades do Console no DevTools que você não conhece"
date: "2017-05-25"
thumbnail: "CONSOLE-790x400.png"
keywords: "dicas"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
---


O console no DevTools do Chrome apresenta algumas funcionalidades que muitos utilizam raramente ou até mesmo nem sabem que existem.

 Para fazer este teste, vamos criar um HTML simples com um script começando com o console.log normal.

```jsx {numberLines: true}
<html>

    <body>
        <script>
        console.log('este é um log')
        </script>
    </body>

</html>
```

Nele temos apenas uma saída e nada além disso. Agora vamos falar sobre alguns que quase não utilizamos.   **#1  error**

```jsx {numberLines: true}
console.error('um erro')
```

Caso tenha algum erro no console, você pode marcá-lo de vermelho, assim, ele te mostra onde ocorreu esse erro. Quando estiver debugando o código e quiser achar algo, pode usar o console.error e ele irá pegar o stack trace também.   

**#2 time** Com ele você pode checar quanto tempo foi gasto para executar uma dada função.

```jsx {numberLines: true}
console.time('nomeCounter')
console.log('este é um log')
console.log('este é um log')
console.timeEnd('nomeCounter')
```

Em muitos testes que fazemos, o console.log consome recurso da máquina pois ele tem que lidar com o IO.   **#3 count**

```jsx {numberLines: true}
console.count(contador)
```

Ele conta quantas vezes uma string foi chamada ou quantas você passou em um trecho específico de código, o que é muito bom para fazer algum check.   

**#4 table** Nele você pode colocar uma lista de nomes e ele monta uma tabela no auto do console. Isso facilita bastante na hora de depurar o código, pois pode mostrar os dados em forma de tabela se quiser.

```jsx {numberLines: true}
console.table(\[
{nome: 'Tulio'};
{nome: 'Faria'};
\])
```

Todos eles, se bem utilizados, podem ajudar muito na melhora de desempenho do código ou simplesmente ajudar a depurar mais facilmente. 

 Deixe seu cometário, curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!


<div class="embed-responsive embed-responsive-16by9">
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/v4GFy72sIR8" allowfullscreen></iframe>
  </div>