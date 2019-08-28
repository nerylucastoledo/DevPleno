---
title: "Programação Assíncrona - NodeJS Primeiros Passos"
date: "2017-06-16"
tags: ["Video-Tutorial"]
thumbnail: "./ProgramacaoAssincrona.png"
author: Tulio Faria
keywords: "nodejs"
---

---
Continuando nossa série sobre NodeJS, falando um pouco sobre como funciona a Programação Assíncrona do JS, vamos fazer alguns testes para você ver a diferença de como o JavaScript (e nesse caso alguns módulos do NodeJS) trabalham esse assincronismo. 

**Por que o assíncrono é tão interessante?** 

Quando temos uma tarefa ou alguma instrução que vamos fazer e ela pode ser demorada demais, por exemplo, se ela for um pouco diferente de qualquer estrutura de dados que estamos acostumados como IF e por ai vai, ele simplesmente deixa para executar quando os dados dessas operações estiverem disponíveis. 

Como exemplo, vamos ler um arquivo texto de modo síncrono e um de modo assíncrono e mostrar as vantagens disso. Em um novo arquivo, vamos criar um arquivo de texto 'dados.txt' e colocar dentro uma frase, "Conteúdo do arquivo texto." Agora criamos um novo arquivoJS, importamos o FS, um módulo padrão no Node para manipulação do file system.

```jsx {numberLines: true}
var fs = require('fs');
var contents = fs.readFileSyinc('dados.txt', 'utf8');
console.log(contents);
```

Vamos salvar como Sync.js e mandar rodar usando o comando

```jsx {numberLines: true}
node sync.js
```

Perceba o seguinte: como a linha **"var contents = fs.readFileSyinc('dados.txt', 'utf8');"**é síncrona, enquanto arquivo não for lido por completo ela não passa para a linha seguinte, isso pode ser legal ou não, dependendo do ponto de vista. Em linguagens que não são assíncronas como no JAVA ou PHP abrimos uma tread nova, ou seja uma linha de execução nova para caso chegue uma outra requisição não fique demorando muito para essa resposta demorar para o usuário. Na escala, isso é muito ruim. Imagine que apenas um usuário está usando, teremos pouco de prejuízo, mas se temos um sistema com 10 mil usuários ao mesmo tempo fazendo operações como essa, isso é muito problemático. 

Vamos fazer um exemplo com Assíncrono para que fique mais claro:

```jsx {numberLines: true}
var fs = require('fs');
fs.readFile('dados.txt', 'utf8'), function (err, contents){
    console.log(contents)
});
console.log('continuar...')
```

Vamos salvar como async.js. Note que eu passo como parâmetro para essa instrução um callback. 

**O que faz uma função de callback?** 

Essa operação de IO demora um pouco para finalizar, então como é assíncrono, ele vai rodar e vai passar reto enquanto os dados não estiverem prontos e não pararem nela como no sync.js. Quando ele bater na linha ReadFile ele vai passar todas as camadas do SO pedindo para fazer esse IO e, internamente, vai gerenciar avisando quando estiver pronto para leitura ou dado um erro, vai ser chamado o callback. 

No async, repare o seguinte: o 'continuar...' apareceu antes do conteúdo do contents. Imagine se fossemos ler mil arquivos, não teria problema nenhum porque os arquivos vão lendo a medida que vão chegando. Por exemplo, se eu mandei 10 arquivos, não significa que os 10 vão ser lidos ao mesmo tempo, pode ser que o primeiro esteja disponível primeiro, depois o quinto, depois o terceiro e por ai vai. Enfim, de forma assíncrona não consegue saber quando vai ser retornado mas isso é legal porque não travamos o nosso programa principal apenas para fazer uma leitura de IO. 

Isso é fantástico porque qualquer aplicação mais robusta hoje em dia é uma aplicação que chamamos de IO intensive, ou seja, eles usam muita entrada e saída. Se você for pensar, por exemplo, no facebook, a parte de chat e autorizações automáticas são muitas operações de IO acontecendo ao mesmo tempo, então se temos uma engine como o node que consegue lidar com isso de uma forma muito boa, podemos lidar com essas operações de IO intensive de forma assíncrona e não vai travar a tread principal. 

Se criarmos uma aplicação em node com 100 usuários usando ao mesmo tempo, ele consegue responder os 100 usuários com apenas uma linha de código. Para quem já programou em JAVA sabe que o minimo seriam 100 treads se não tivesse nenhuma otimização. O node é muito baseado em assíncrono, praticamente tudo que vamos fazer é feito de forma assíncrona e a única coisa que você precisa tomar cuidado é de não achar que o console.log de dentro do callback executaria antes do que está fora, as vezes a pessoa fica atentada a querer fazer uma operação atrás da outra mas são várias operações assíncronas, logo não vai funcionar porque vão retornar em tempos diferentes. Existe algumas estruturas que utilizamos para controlar esse fluxo e vamos falar mais a frente. 

Confira o vídeo: 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/wKqEwKP-E1E" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!