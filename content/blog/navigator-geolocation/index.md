---
title: "Navigator Geolocation API - Sabendo a localização do usuário"
date: "2017-10-05"
thumbnail: "./Navigator.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "dicas"
---

---
Hoje quero dar uma dica para vocês sobre geolocalização no navegador. É uma API que está cada vez mais disponível nos navegadores. O interessante é que conseguimos fazer aplicações WEB que tenham esse senso de localização. 

Alguns dos métodos que eles têm:

```jsx {numberLines: true}
<html>

    <body>
        <script>
            if(‘geolocation’ in navigator){
                } else {
                Alert(‘ops’)
            }
        </script>
    </body>

</html>
```

A partir disso, conseguiríamos checar a nossa localização. Podemos, por exemplo, fazer:

```jsx {numberLines: true}
if(‘geolocation’ in navigator){
    navigator.geolocation.getCurrentPosition(function(position){
        console.log(position)
    }, function(error){
        Console.log(error)
    })
} else {
    Alert(‘ops’)
}
```

Ao rodar o código e inspecionar, perceba que ele retorna a nossa posição. 

Se sua aplicação necessita ter essa possibilidade de checar a posição, é importante checar se não retornou um erro caso o usuário não aceite a verificação. 

Outra coisa bem interessante é que podemos checar, de tempos em tempos, a posição do usuário, fazendo um tracker, por exemplo:

```jsx {numberLines: true}
watcher: navigator.geolocation.watchPosition(function(position){
    console.log(position)
})
```

Agora, à medida que essa coordenada ficar mais precisa, vai ser melhor, pois ela vai nos trazendo essas informações. 

Conseguimos aumentar essa precisão também utilizando o enableHighAccuracy:

```jsx {numberLines: true}
watcher: navigator.geolocation.watchPosition(function(position){
    console.log(position)
}, 
function(error){
    console.log(error)
}, {enableHighAccuracy: true, maximumAge: 30000, timeout: 30000})
```

No caso do watcher, podemos apagar, equivalente ao que podemos fazer com o clear interval:

```jsx {numberLines: true}
Geolocation.clearWatch(watcher)
```

Esse é um pouco do geolocation. Eu trouxe essa dica pois a utilizamos no Fullstack Academy e eu já construí algumas aplicações utilizando isso também. 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/WrzA8oqcxjA" allowfullscreen></iframe>
</div>

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](http://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!