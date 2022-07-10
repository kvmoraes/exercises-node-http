/*

  - TODO 1: Criar um servidor que recebe requisições HTTP na porta 8000 e responde com o conteúdo de um arquivo HTML.
  - TODO 2: Se for acessada a URL http://localhost:8000/about deve mostrar o conteúdo da pagina `pages/about.html`
  - TODO 3: Se for acessada a URL http://localhost:8000/ ou http://localhost:8000/home deve mostrar o conteúdo da pagina `pages/index.html`
  - TODO 4: Se for acessada qualquer outro caminho deve mostrar o conteúdo da pagina `pages/404.html`
 

  OBS: Deve ser utilizado apenas os módulos nativos do NODE (http, path, fs, etc), nada de instalar outras libs ( ˘︹˘ )
*/

const fs = require('fs');
const path = require('path');
const http = require('http');


