/*

  - TODO 1: Criar um servidor que recebe requisições HTTP na porta 8000 e responde com o conteúdo de um arquivo HTML.
  - TODO 2: Se for acessada a URL http://localhost:8000/about deve mostrar o conteúdo da pagina `pages/about.html`
  - TODO 3: Se for acessada a URL http://localhost:8000/ ou http://localhost:8000/home deve mostrar o conteúdo da pagina `pages/index.html`
  - TODO 4: Se for acessada qualquer outro caminho deve mostrar o conteúdo da pagina `pages/404.html`
 

  OBS: Deve ser utilizado apenas os módulos nativos do NODE (http, path, fs, etc), nada de instalar outras libs ( ˘︹˘ )
*/
const http = require ('http');
const path = require ('path');
const fs = require ('fs');

const port = 8000;
const host = 'localhost';

function readFile(file) {
  const filePath = path.join(__dirname, 'pages', `${file}`);

  return fs.readFileSync(filePath, () => {
    if (err) throw err;
  })
}

http
.createServer((req, res) => {
  res.setHeader('content-type', 'text/html');

  function createPage(path) {
    if (path === '/' || path === '/home') {
      res.writeHead(200);
      return readFile('index.html');
    } else if (req.url === '/about') {
      res.writeHead(200);
      return readFile('about.html');
    } else {
      res.writeHead(404);
      return readFile('404.html');
    }
  }
  
  res.end(createPage(req.url));
})
.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
})
.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log('Adress in use, retrying...');
    setTimeout(() => {
      server.close();
      server.listen(port, host);
    }, 1000);
  }
})
