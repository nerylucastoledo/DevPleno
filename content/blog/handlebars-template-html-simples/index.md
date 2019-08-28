---
title: "Template HTML simples - Hands-on Handlebars"
date: "2017-06-13"
thumbnail: "./HandleBars.png"
tags: ["Video-Tutorial"]
author: "Tulio Faria"
keywords: "hands-On"
---


O Handlebars é uma forma de lidarmos com template HTML. É algo simples, mas que possui diversas opções que podemos fazer. Vou mostrar um caso bem específico dele. Podemos utilizar com NodeJS, ExpressJS, mas eu vou mostrar em conjunto com jQuery para um tipo de solução que eu venho utilizando para fazer algumas coisas mais rápidas.

 Tenho aqui um arquivo dados.json que vai servir para simular o consumo de uma EPI, vamos carregar os dados via AJAX para o html:  

```jsx {numberLines: true}
\[{
    "name": "Tulio",
    "lastName": "Faria"
},{
    "name": "Vitor",
    "lastName": "Machado"
}\]
```

No HTML, vamos importar da CDN o jQuery e o Handlebars e testar se estão carregando os nomes do Json:  

```jsx {numberLines: true}
<html>

    <body>
        <div id="people">
         people
        </div>
        <script  src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/handleba
        rs.js/4.0.10/handlebars.amd.js"</script>
        <script>
            $function(){
                $.get('dados.json't=' +new Date().getTime(),  function(data){
                    console.log(data);
                }
            })
        </script>
    </body>

</html>
```

Se eu quiser criar uma lista com esses nomes para colocar na DIV 'people' e que seja da seguinte forma:  


```jsx {numberLines: true}
<div id="people">
    <div>
        <strong>Name: </strong>nome<br>
        <strong>Last Name: </strong>last<br>
    </div>
</div>
```

Se fossemos fazer isso com jquery teríamos que interpolar a string dentro da function, como por exemplo:  

```jsx {numberLines: true}
<script>
    $function(){
            $.get('dados.json't=' +new Date().getTime(), function(data){
                $("#people").append('<div><strong>Name: </strong> '+nome)
                $("#people").append('<div><strong>Last Name: </strong> '+last)
            }
        })
</script>
```

  Isso dá muito trabalho, então vamos criar uma parte do template usando Script do handlebars. Ao invés de ficar concatenando Strings, vou colar a div dentro dele e onde eu quiser colocar o nome apenas coloco {{name}}:  

```jsx {numberLines: true}
<script type="text/x-handlebars-templete" id="person-templete">
    <div>
        <strong>Name: </strong>{{nome}}<br>
        <strong>Last Name: </strong>{{lastName}}<br>
    </div>
</script>
```

  Temos, então, que pegar essa String de dentro do script, correto? Então vamos fazer o seguinte: pegar o html que está ali dentro, que é um template do Handlebars, ele vai trocar de forma automática. Depois disso, vamos criar um template do handlebars. Lembrando que o personTemplete você pode renderizar:

```jsx {numberLines: true}
<script>

    $function(){
        $.get'dados.json't=' +new Date().getTime(), function(data){
        const templeteString = $("#person-templete").html();
        const personTemplete = Handlebars.compile(templeteString);
        const html = personTemplete({
            name: 'Tulio',
            lastName: 'Faria'
        })
        $("people").html(html);
        }
    })
</script>
```

Com isso, o template já ficou bem mais fácil, pois apenas damos um append no html. Se funcionar, podemos até tirar a div da parte de cima do nosso HTML que vai funcionar perfeitamente. 

Obviamente, para uma pessoa, só daria para fazer na mão, mas imagine se quisermos colocar várias pessoas, é possível fazer isso também por meio da linguagem de script e ao invés de passar uma pessoa só, vou passar a minha lista de pessoas.  

```jsx {numberLines: true}
<html>

    <body>
        <div id="people">
            Loading...
        </div>
        <script type="text/x-handlebars-templete" id="person-templete">
            {{#earch people}}
            <div>
                <strong>Name: </strong>{{nome}}<br>
                <strong>Last Name: </strong>{{lastName}}<br>
                <hr>
            </div>
            {{/each}}
        </script>

        <script  src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/handleb
        ars.js/4.0.10/handlebars.amd.js"</script>

        <script>
            $function(){
                $.get('dados.json't=' +new Date().getTime(), function(data){
                    const templeteString = $("#person-templete").html();
                    const personTemplete = Handlebars.compile(templeteString);
                    const html = personTemplete({ people: data })
                    $("people").html(html);
                }
            })
        </script>
    </body>

</html>
```
Perceba que o Name e o lastName ele pega de dentro do contexto do people do dados.json. Outra coisa legal é que se eu colocar algo dentro de dados.json:  

```jsx {numberLines: true}
\[{
    "name": "Tulio",
    "lastName": "Faria",
    "adress":{
        "city": "Pouso Alegre"
    }

},{
    "name": "Vitor",
    "lastName": "Machado"
    "adress":{
        "city": "São Paulo"
    }
}\]
```

Podemos utilizar a seguinte estrutura:  

```jsx {numberLines: true}
{{#earch people}}
    <div>
        <strong>Name: </strong>{{nome}}<br>
        <strong>Last Name: </strong>{{lastName}}<br>
        <strong>City: </strong>{{adress.city}}<br>
        <hr>
    </div>
{{/each}}
```

Perceba que estamos pegando o adress e o que tem dentro dele. Isso é bem bacana, podemos fazer muitas coisas com Handlebars. 

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/-bJl1zBJbFU" allowfullscreen></iframe>
</div>

Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), [inscreva-se no canal](https://www.youtube.com/devplenocom) e não se esqueça de cadastrar seu e-mail para não perder as novidades. Abraço!