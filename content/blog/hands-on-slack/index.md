---
title: "Hands-on: Slack"
date: "2017-03-06"
thumbnail: "./Hands0nSlack.png"
tags: ["Video-Tutorial"]
author: "Tulio Faria"
keywords: "hands-On"
---

---
Neste hands-on iremos fazer um bot simples que envia notificações utilizando o Slack.O Slack vem sendo bastante utilizado para comunicação corporativa (eu mesmo uso bastante). E concentrar informações a respeito da sua empresa ou projeto nele é bem interessante. 

[Para criar um bot no slack entre aqui.](https://my.slack.com/apps/A0F7YS25R-bots)

```jsx {numberLines: true}
const token = 'xoxb-....'
const Api = require('@slack/client').WebClient
const api = new Api(token)
const RtmClient = require('@slack/client').RtmClient
const rtm = new RtmClient(token)
const RTM\_EVENTS = require('@slack/client').RTM\_EVENTS
api.channels.list(function (err, info) {
    const channelId = info.channels
    .filter((channel) => channel.name === 'general')
    .map((channel) => channel.id)\[0\]
    rtm.on(RTM\_EVENTS.MESSAGE, (msg)=>{
        rtm.sendMessage(msg.text, channelId)
    })

rtm.start()
})
```

Já pensou o que você vai criar notificar no Slack para sua equipe de forma automática?

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/dfM5ZPETIEI" allowfullscreen></iframe>
</div>