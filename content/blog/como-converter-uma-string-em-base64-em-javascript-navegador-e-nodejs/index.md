---
title: "Como converter uma string em Base64 em JavaScript (Navegador e NodeJS)"
date: "2016-10-04"
thumbnail: "javascript-790x400.png"
author: "Tulio Faria"
tags: ["Dicas", "Video-Tutorial"]
keywords: "js"
---


A codificação em Base64 é uma maneira de converter qualquer texto/conteúdo para uma codificação que utiliza apenas 64 caracteres. Provavelmente você já deve ter se deparado com uma string destas por aí. Muitos sites e aplicações web utilizam esta códificação para trocar dados entre páginas "ocultando" informações na URL. Porém, é bom lembrar que Base64 não é uma forma segura de criptografia. Mas se ele não é seguro quais as vantagens de utilizá-la? Bom, algumas:

*   Você pode converter caracteres que geram problemas na URL (ou em algum protocolo), como por exemplo: ?, & e "
*   Você pode simplesmente atrapalhar um pouco pessoas ficarem _chutando_ ids em suas URLs
*   Você pode transferir dados binários codificados em Base64. Aliás, é assim que o protocolo HTTP lida com o upload de arquivos.

## Utilizando Base64 no navegador (Internet Explorer 10 e acima):

O código abaixo pode ser copiado e colado dentro do Console do Chrome, para vê-lo executando.

```js {numberLines: true}
// Uma string qualquer
var string = 'DevPleno';

// Convertendo para Base64
var emBase64 = btoa(string);
console.log(emBase64); // Saída: "RGV2UGxlbm8="

// Voltando para string
var deBase64 = atob(emBase64);
console.log(deBase64); // Outputs: "DevPleno"
```

## Método cross-browser (pode ser utilizado no NodeJS também):

```jsx {numberLines: true}
// Criar objeto Base64
var Base64={\_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function
(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64.\_utf8\_encode(e);while(f<e.length){n=e.charCodeAt(f++);
r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}
else if(isNaN(i)){a=64}t=t+this.\_keyStr.charAt(s)+this.\_keyStr.charAt(o)+this.\_keyStr.charAt(u)
+this.\_keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace
(/\[^A-Za-z0-9+/=\]/g,"");while(f<e.length){s=this.\_keyStr.indexOf(e.charAt(f++));o=this.\_keyStr.indexOf
(e.charAt(f++));u=this.\_keyStr.indexOf(e.charAt(f++));a=this.\_keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=
(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64)
{t=t+String.fromCharCode(i)}}t=Base64.\_utf8\_decode(t);return t},\_utf8\_encode:function(e){e=e.replace
(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}
else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else
{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}
return t},\_utf8\_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);
if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode
((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode
((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

// Uma string qualquer
var string = 'DevPleno';

// Convertendo para Base64
var emBase64 = Base64.encode(string);
console.log(emBase64); // Saída: "RGV2UGxlbm8="

// Decode the String
var deBase64 = Base64.decode(emBase64);
console.log(deBase64); // Saída: "DevPleno"
```
## Em NodeJS:

Em NodeJS você pode utilizar Buffers para converter de uma codificação para outra. Por exemplo:

```js {numberLines: true}
var string = 'DevPleno';
var emBase64 = new Buffer(string).toString('base64');
console.log(emBase64); // Saída: RGV2UGxlbm8=

var deBase64 = new Buffer(emBase64, 'base64').toString('ascii');
console.log(deBase64); // Saída: DevPleno
```