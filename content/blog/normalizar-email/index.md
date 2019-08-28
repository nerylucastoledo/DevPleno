---
title: "Normalizar-email"
date: "2017-11-30"
tags: ["Dicas", "Video-Tutorial"]
thumbnail: "./NormalizarEmail.png"
keywords: "dicas"
---

---
Hoje eu quero comentar um detalhe de implementação de e-mail muito interessante e como podemos contornar essa característica que temos em alguns endereços de e-mail.

Uma coisa que muita gente acredita é que nossos e-mails somente funcionam dessa maneira:

```jsx {numberLines: true}
tuliofaria@devpleno.com
```

Um detalhe é que podemos adicionar alguns itens a mais nesse e-mail e aí depende do provedor permitir ou não esse e-mail.

No caso do Gmail nós conseguimos colocar alguma string qualquer na frente:

```jsx {numberLines: true}
tuliofaria+string@devpleno.com

tulio.faria@devpleno.com
```

Nós podemos utilizar o primeiro exemplo em alguns sistemas, onde queremos criar mais de uma conta com o mesmo e-mail e também para verificar de onde veio esse e-mail.

Se eu cadastrei esse e-mail em [americanas.com](https://www.americanas.com.br/) eu posso utilizar por exemplo:

```jsx {numberLines: true}
tuliofaria+americanas@devpleno.com

```

Se a gente quiser construir um sistema e desconsiderar essas características de que cada provedor corrige podemos utilizar um módulo chamado normalize-e-mail, ele vai fazer exatamente isso, pegar esse e-mail que está sujo e, dependendo das normalizações que o provedor faz, vai fazer também:

```jsx {numberLines: true}
yarn add normalize-email
const normalize-email = require('normalize-email')
console.log(normalizeEmail('tuliofaria+americanas@gmail.com'))
console.log(normalizeEmail('tulio.faria+americanas@outlook.com'))
```

Com isso ele vai fazer as devidas correções. É muito simples, porém muito útil.

<div class="embed-responsive embed-responsive-16by9 mb-4">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/6urhRR9es5M" allowfullscreen></iframe>
</div>

Deixe suas dúvidas e sugestões nos comentários. Curta o [DevPleno no Facebook](https://www.facebook.com/devpleno), se inscreva no [canal no YouTube](https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww) e cadastre seu e-mail para não perder as atualizações. Abraço!