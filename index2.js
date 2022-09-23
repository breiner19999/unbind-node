/* const http = require('http');
const host = '127.0.0.1';
const port = 8083;
const express = require('express')
const app = express()

const routes = {
  '/': (request, response) => {
    response.writeHead(200);
    response.end("Probando Query String ...");
  }
}

const server = http.createServer((request, response) =>{
  let miURL = new URL(`http://${host}:${request.url}`);
  console.log(miURL);
  console.log(miURL.pathname);
  console.log(miURL.pathname.split("/")[4]);

})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 */