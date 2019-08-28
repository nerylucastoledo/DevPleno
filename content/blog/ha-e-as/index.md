---
title: "HA e AS em Aplicação Web - Web Basic"
date: "2017-06-16"
thumbnail: "./HaeAs.png"
author: "Tulio Faria"
tags: ["Video-Tutorial"]
keywords: "web"
---

Hoje vamos continuar com mais alguns conceitos de uma Aplicação WEB que são muito importantes quando falamos de Startups, onde temos um poder de escala muito grande. São duas siglas, HA e AS:

HA = High Availabilty (alta disponibilidade);

AS = Auto Scale (Escala automática).

**O que esses conceitos querem dizer na prática?**

A alta disponibilidade quer dizer que o sistema praticamente não cai ou vai ter a disponibilidade mais alta possível, assim o sistema não fica offline nenhum segundo sequer porque caso tenhamos uma escala de clientes muito grande, se ficarmos 10 segundos fora, o prejuízo financeiro que isso vai gerar é muito grande, então a disponibilidade traz dinheiro.

Outro fator para termos essa disponibilidade é o quanto a arquitetura que planejamos tem de elasticidade para suportar o sistema. Vamos supor que eu tenho um servidor que suporte 100 usuários, se tivermos uma carga de 300 usuários, precisamos de 3 servers, então o Auto Scale é uma forma de você escalar a aplicação para termos alta disponibilidade.

Essas duas palavras combinadas é o que nós desejamos para todo o sistema, principalmente em uma startup, que o sistema fique online 100% do tempo e quando se tem picos de acesso o Auto Scaling suporte a elasticidade tanto para cima quanto para baixo, por exemplo, se eu tenho 100 usuários eu uso apenas um servidor, se subir eu aumento o numero de servidores e se baixar novamente, volto para um servidor, aumentando e diminuindo meus recursos computacionais de forma dinâmica. Isso é muito famoso usando a AMAZON, ela já tem ferramentas para esse tipo de dinamismo.

Obviamente apenas a alta disponibilidade já envolve muitas coisas, além do auto scaling, talvez precisamos de uma migração com zero down time, por exemplo, caso precisarmos aplicar uma atualização de software, que é um desafio bem grande. Essas duas siglas são muito comuns em requisitos de sistemas para startups.

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/-ynU21-FPFY" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!
