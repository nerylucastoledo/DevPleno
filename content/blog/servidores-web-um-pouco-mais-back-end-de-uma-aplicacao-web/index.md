---
title: "Servidores Web -  Um pouco mais do back-end de uma Aplicação Web"
date: "2017-05-23"
thumbnail: "./ServidorWeb.png"
author: Tulio Faria
tags: ["Dicas", "Video-Tutorial"]
keywords: "web basics"
---

---
Servidores Web são um serviço usado no servidor que fornece páginas ou algum asset para o front-end. Dentro de uma máquina, configuramos uma pasta (/site por exemplo) e quando a pessoa tenta acessar, por exemplo, na porta 80 dessa máquina, o servidor aponta para ela e essa pasta vai ser 'servida' para o front-end. 

Este tipo de arquitetura ainda é muito comum. Atualmente temos algumas outras alternativas, mas esse formato ainda é o mais utilizado. 

Quando o front-end solicita um .php, por exemplo, o servidor não sabe o que tem que fazer com esse .php, mas na configuração ele sabe que tem um php.exe que sabe o que deve ser feito, então ele envia o script php para o php.exe e este manda a resposta para o APACHE HTTPD. Por fim, o APACHE envia para o cliente. Essa estrutura acontece em grande parte dos sites em que acessamos, como nos que são feitos em Wordpress. 

Geralmente, quando é um arquivo como uma IMG ou um CSS, o APACHE já envia diretamente, pois ele já sabe que não precisa pré-processar esses arquivos. 

**Quais as opções disponíveis no mercado?** 

O APACHE HTTPD - mais conhecido e utilizado para o PHP - o  HAProxy, NgineX e o IIS da Microsoft. Podemos escolher qualquer um desses e configurar o site para rodar. 

Antigamente comparavam linguagens dizendo coisas como: "O PHP é mais lento que o NodeJS", mas essa comparação é um pouco injusta, já que o PHP precisa do APACHE, que se não for configurado para ser apto a receber muita requisição, pode atrapalhar os acessos do site. Para compararmos as duas, temos que desconsiderar o APACHE ou colocá-lo na frente do Node também. 

Hoje temos algumas linguagens que não precisam de servidor WEB como é o caso do NodeJS, pois ele já é um servidor embutido, já consegue abrir uma porta e responder solicitações por si só, e por esse motivo ele acaba sendo um pouco mais rápido e visível. 

Sempre que for utilizar PHP ou ASP precisa utilizar servidores web, mas em alguns casos, que chamamos servidor de aplicação, ainda existem umas coisas a mais, muito comum no mundo JAVA, mas isso fica para uma próxima vez. 

Deixe suas dúvidas e sugestões nos comentários. 

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!