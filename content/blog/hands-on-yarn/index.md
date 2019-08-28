---
title: "Yarn (uma alternativa ao gerenciador de pacotes/dependências NPM)"
date: "2017-08-10"
thumbnail: "./Yarn.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "hands-On"
---


O 'Yarn' é uma maneira que temos de agilizar a instalação de algumas dependências. É uma alternativa ao NPM, um pouco mais rápido. A primeira coisa que temos que fazer é instalar:

```jsx {numberLines: true}
npm install -g yarn
```

O Yarn usa o mesmo package.json que já temos no projeto em JavaScript e não adiciona nenhuma outra dependência, vai ser usado exatamente o mesmo repositório que o NPM já roda. 

**Qual a vantagem do Yarn?** Uma das vantagens do Yarn é ele ser mais rápido, tende a resolver alguns conflitos de versão de módulo, cria um cash local para, por exemplo, caso você já tenha utilizado algum módulo qualquer com Yarn, aquela versão específica do módulo fica salva na sua máquina, caso você precise usar em outro projeto, ele utiliza do cash e não precisa baixar um novo. Além disso, ele resolve algumas coisas interessantes, por exemplo, é muito comum fazermos:

```jsx {numberLines: true}
npm install nome-do-pacote
```

Quando fazemos isso, não adicionamos o pacote no package.json e isso gera um problema, nós podemos fazer um comid e em seguida um push para o git e quebrar na máquina de um outro desenvolvedor ou servidor porque na sua máquina vai rodar e quando chegar em outro computador, vai dar erro. Uma das coisas que o Yarn resolve é exatamente isso, não temos essa distinção de save ou não, se você adicionou um pacote, ele vai entrar no package.json. Vamos fazer um teste de velocidade. Eu criei um projeto onde só tem o package.json e só adiciona o async, primeiramente vamos fazer o npm:

```jsx {numberLines: true}
npm install
```

A instalação demorou mais ou menos 6 segundos, não demorou tanto, agora vou deletar o node\_modules e instalar via yarn:

```jsx {numberLines: true}
yarn
```

O tempo de instalação foi de 3.39 segundos

Uma coisa que chateia bastante em projetos grandes é a ordem em que os pacotes são instalados. No NPM, ele segue uma forma não determinística, se rodarmos duas vezes com as mesmas circunstâncias, pode acontecer dos pacotes serem instalados em uma ordem diferente, o yarn resolve isso e ainda gera um checkson para cada dependência, então ele checa realmente se você está instalando a mesma versão que você travou no projeto. Além disso, é muito simples de verificar o yarn.lock, afinal é um arquivo texto bem simples.

Também podemos colocar:

```jsx {numberLines: true}
yarn global add nome-do-pacote
```

Com isso ele deixa em escopo global.

Então ele é muito bom para aumentar a velocidade de instalação, principalmente no servidor de continuous integration porque, a medida que o servidor vai cacheando os módulos, é possível fazer o build da sua aplicação muito mais rápido.

Apenas por curiosidade, o Yarn foi desenvolvido pelo facebook em parceria com o google porque eles perceberam exatamente isso, quando você começa a escalar o projeto e aumentar o número de dependências, o npm começa a atrapalhar um pouco.

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/3BPfDo4arHc" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!