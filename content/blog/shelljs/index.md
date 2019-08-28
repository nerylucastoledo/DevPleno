---
title: "ShellJS - Crie ferramentas multiplataformas baseadas no Shell do Linux"
date: "2017-08-06"
thumbnail: "./ShellJS.png"
author: Tulio Faria
tags: ["Video-Tutorial"]
keywords: "hands-on"
---

---
Neste hands-on,  vou falar mais especificamente sobre o ShellJS, uma implementação do Shell do linux em JavaScript. 

Qual a vantagem do ShellJS? 

A grande vantagem é que ele é multiplataforma, então podemos criar nossos códigos independente da plataforma. Caso a gente queira, por exemplo, criar um catch no arquivo para ver o conteúdo dele, podemos fazer isso tanto no Mac, quanto no Windows ou no Linux da mesma forma. Isso é muito legal para construir um sincronizador de log, por exemplo, ou alguma ferramenta que é só para uso interno. 

Para utilizar o ShellJS precisamos primeiro instalar a ferramenta:

```jsx
yarn add shelljs
```

Vou criar um arquivo novo teste1.js, e importar o o shell e usar o cat para ver o arquivo, por exemplo:

```jsx
const sh = require('shelljs')
const contents =  sh.cat('arq1.txt')
console.log(contents.toString())
```

Lembrando que estamos fazendo isso em multiplataforma, então se eu rodar o cat direto, pode ser que eu não consiga o mesmo resultado. Isso vale para todos os outros comandos, por exemplo copiar um arquivo:

```jsx
const sh = require('shelljs')
sh.cp('arq1.txt', 'arq2.txt')
```

É muito legal quando conseguimos fazer esse tipo de código que funciona em todas as plataformas, isso gera mais liberdade para construir nossos scripts que dependem de algum IO ou Shell virtual. Vamos supor que eu quisesse copiar um diretório de forma recursiva:

```jsx
sh.cp('-R', 'node\_modules', 'mods')
```

Ele replicou exatamente como nós queremos fazer no Shell do Linux. Uma curiosidade é que ele transforma esse código em síncrono, ele usa por baixo dos panos assíncrono, mas a interface que o Shell lida pra gente é síncrona, o que deixa muito mais fácil de fazer e construir os scripts. 

Nós utilizamos bastante em alguns projetos para, por exemplo, transformar dados, conectar no banco, atualizar o banco, manipular grandes quantidades de dados, etc. 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/7ICR9KhNTGo" allowfullscreen></iframe>
</div>

Deixe seu cometário, curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!