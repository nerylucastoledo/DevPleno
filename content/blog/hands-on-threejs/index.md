---
title: "Hands-on - Three.JS"
date: "2017-11-16"
thumbnail: "./ThreeJS.png"
author: "Tulio Faria"
tags: ["Video-Tutorial"]
keywords: "hands-On"
---

---
Hoje vamos falar um pouco sobre Three.JS, que é uma biblioteca muito interessante para conseguirmos fazer 3d no browser, melhor dizendo, ele faz essa compatibilidade para renderizar no browser com WebGL ou canvas. Para testar isso, vamos fazer um teste utilizando um cubo em 3d. No site deles, existem vários exemplos que já fizeram utilizando o three.js. Nós podemos baixar ele direto no site threejs.org ou simplesmente pegar um three.js de um CDN. Vamos criar um arquivo HTML. Quem já trabalhou com software 3d sabe que basicamente temos uma cena onde acontece as coisas em 3d :

```jsx {numberLines: true}
<html>

    <body>
        <script src="//cdnjs.cloudflare.com/ajax/libs/three.js/88/three.js">
        </script>
        <script>
            const scene = new THREE.Scene()
            const camera = new THREE.PerspectiveCamera(75, window.in
            nerWidth / window.innerHight, 0.1, 1000)
            const renderer = new THREE.WebGLRenderer()
            renderer.setSize(window.innerWidth, window.innerHeight)
            documnet.body.appenChild(renderer.domElement)
        </script>
    </body>

</html>
```

Esse parâmetro 75 é a profundidade de campo e o window é a proporção da câmera. Com isso, vamos criar uma câmera que tem uma visão cônica, igual a visão de uma câmera normal. Além disso, temos um renderizador que vai ser responsável por transformar isso em algo a ser enxergado. Por fim vamos adicionar ele dentro do body. 

Ao rodar, temos uma tela preta, que é nossa scene. Agora vamos começar a adicionar alguns objetos:

```jsx {numberLines: true}
<html>

    <body>
        <script src="//cdnjs.cloudflare.com/ajax/libs/three.js/88/three.js">
        </script>
        <script>
            const scene = new THREE.Scene()
            const camera = new THREE.PerspectiveCamera(75, window.in
            nerWidth / window.innerHight, 0.1, 1000)
            const renderer = new THREE.WebGLRenderer()
            renderer.setSize(window.innerWidth, window.innerHeight)
            documnet.body.appenChild(renderer.domElement)
            const box = new THREE.BoxGeometry(1,1,1)
            const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
            const cube = new THREE.Mesh( box, material )
            scene.add( cube )
            camera.position.z = 5
            const animated = () => {
                requestAnimationFrame( animate )
                renderer.render( scene, camera)
            }
            animate()
        </script>
    </body>

</html>
```

O renderizador pega uma câmera e renderiza a cena na câmera, com isso ele cria a imagem a partir disso.

O animated fica renderizando a todo momento, então caso eu faça alguma alteração no meu objeto que está dentro da cena, vai ser atualizado na tela:

```jsx {numberLines: true}
const animated = () => {
    requestAnimationFrame( animate )
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    cube.rotation.z += 0.01
    renderer.render( scene, camera)
}
```

Fazendo isso, nosso cubo começa a girar em todas as direções. Isso está sendo renderizado com o WebGL e 3D. Conseguimos carregar modelos 3d, etc.

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/WMFNaTFkVyg" allowfullscreen></iframe>
</div>