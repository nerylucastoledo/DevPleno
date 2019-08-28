---
title: "Corrigindo o erro \"Cannot overwrite 'Model' model once compiled\" no Mongoose"
date: "2016-10-03"
author: "Tulio Faria"
thumbnail: "nodejs-mongoose-790x400.png"
tags: ["Dicas", "Video-Tutorial"]
keywords: "node"
---


Durante o desenvolvimento de um protótipo aqui na empresa, eu me deparei com uma situação bem interessante no Mongoose. Por algum motivo, comecei a receber o seguinte erro: _OverwriteModelError: Cannot overwrite \`User\` model once compiled. _

```jsx {numberLines: true}
C:\\Arquivos\\devpleno\\conteudos\\mongoose-problem-windows\\node\_modules\\mongoose\\lib\\index.js:361                                 
      throw new mongoose.Error.OverwriteModelError(name);                                                                      
      ^                                                                                                                        
 OverwriteModelError: Cannot overwrite \`User\` model once compiled.                                                             
    at Mongoose.model (C:\\Arquivos\\devpleno\\conteudos\\mongoose-problem-windows\\node\_modules\\mongoose\\lib\\index.js:361:13)      
    at Object.<anonymous> (C:\\Arquivos\\devpleno\\conteudos\\mongoose-problem-windows\\User.js:8:27)                               
    at Module.\_compile (module.js:413:34)                                                                                      
    at Object.Module.\_extensions..js (module.js:422:10)                                                                        
    at Module.load (module.js:357:32)                                                                                          
    at Function.Module.\_load (module.js:314:12)                                                                                
    at Module.require (module.js:367:17)                                                                                       
    at require (internal/module.js:16:19)                                                                                      
    at Object.<anonymous> (C:\\Arquivos\\devpleno\\conteudos\\mongoose-problem-windows\\postsController.js:1:74)                    
    at Module.\_compile (module.js:413:34)                                                                                      
    at Object.Module.\_extensions..js (module.js:422:10)                                                                        
    at Module.load (module.js:357:32)                                                                                          
    at Function.Module.\_load (module.js:314:12)                                                                                
    at Module.require (module.js:367:17)                                                                                       
    at require (internal/module.js:16:19)                                                                                      
    at Object.<anonymous> (C:\\Arquivos\\devpleno\\conteudos\\mongoose-problem-windows\\index.js:6:1)
```

O que me intrigou muito foi que sempre utilizei o Mongoose praticamente da mesma forma. O exemplo que gerou este erro é este aqui:

```jsx {numberLines: true}
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-problem');

require('./usersController.js');
require('./postsController.js');

O model User:

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email        : String,
    password     : String,
});

module.exports = mongoose.model('User', userSchema);
```

E os 2 controllers, que simulam a utilização deste model:

```jsx {numberLines: true}
var User = require('./user');
// restante do código do controller

var Post = require('./User');
// restante do código do controller
```

Bom, analisando o erro novamente, podemos notar que por algum motivo ao executar o código, o módulo onde está o model está sendo instanciado mais de uma vez. E isso acarreta em setar o schema duas vezes, gerando assim este erro. 

Se analisarmos como está sendo dado o require em cada controller, vamos notar que um deles está como user e no outro User. No Windows, se tentarmos abrir um arquivo User.js ou user.js, ambos irão apontar para o mesmo local (que foi o que aconteceu aqui). 

Porém, o nodejs gerencia os módulos em si de maneira case-sensitive. Então se fizermos: require('./User') e require('./user'), o nodejs vai tentar registrar 2x. O que duplica o registro do schema User no mongoose. 

No Linux/Mac isso não aconteceria, pois bem antes de esse erro "pipocar", o node já iria gritar dizendo que o módulo User.js não existe. E ficaria bem mais simples de encontrar o erro.

## Outros efeitos colaterais deste problema:

Se por algum motivo, tivéssemos um trecho de código que não possuísse a restrição do mongoose+schema (de não poder ser registrado mais de uma vez). Este código seria executado 2x no Windows (pois o node registraria 2x o módulo). 

Isso poderia gerar um bug/efeito colateral que aconteceria somente no Windows. E o código quebraria quando fosse colocado em produção no Linux. O ideal então é manter um padrão, e chamar no require da mesma forma que o arquivo foi salvo. Evitando assim, muita dor de cabeça.