---
title: "Web Basic - RESTful"
date: "2017-05-15"
thumbnail: "./Restful.png"
author: "Tulio"
tags: ["Video-Tutorial"]
keywords: "web"
---

---
Apenas para lembrar o que vimos no post anterior sobre arquitetura Web (se você não viu, clique AQUI) existem as duas pontas da aplicação: o back-end e o frond-end e uma troca de mensagens entre eles.

Entre essas duas camadas, há um padrão que é a forma que eles trocam essa mensagem. Quando o cliente fala com o server, temos o protocolo HTTP, o method diz algo como por exemplo “servidor, altere algo no servidor” (POST), mas temos outros tipos como Delete, Get, Put, etc.
Há algum tempo, usávamos bastante o POST e o GET, que seria um formulário com POST ou um link com o GET (praticamente não usávamos os outros dois) mas com o tempo a aplicação foi evoluindo até que chegou em um ponto que começou a voltar um padrão para não precisarmos mais passar informação na URL que estamos chamando, pois o método já faz isso.
Antigamente era comum, por exemplo, fazer um Script que se chamava usuários/save. Este save acaba não precisando ser assim, pois o POST já era feito para isso, com isso estávamos sendo redundantes. Assim,  começamos a adotar um padrão chamado RESTful

**O que é o RESTful?**

Basicamente seria usarmos estes métodos de uma forma que ele já indique que tipo de alteração queremos fazer no servidor, por exemplo:
POST(enviar dados) para /users, o back-end irá entender que queremos criar um usuário novo;
GET no /users ele nos passará todos os users;
GET em /users/tulio, quero apenas o usuário especifico; PUT (também submetemos dados para lá) e dizemos que queremos alterar os dados do user/tulio.
Com isso, ficou muito mais simples, pois não precisamos, por exemplo, passar na URL que tipo de operação queremos fazer, simplesmente fazemos no método. E com a evolução dos navegadores e a chegada de novos frameworks, conseguimos construir uma forma de comunicação que chamamos então de RESTful, conseguindo usar todos os métodos da especificação HTTP para essa comunicação entre front-end e back-end.
Graças ao HTTP e algumas padronizações que temos na comunicação, a internet é o que é hoje, pois sem padronização não teríamos comunicação, já que cada um faria seu próprio padrão.

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Ah, fique à vontade para deixar suas dúvidas e sugestões nos comentários. Abraço!