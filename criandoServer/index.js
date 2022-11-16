const { createServer } = require('http');

let server = createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(`<h1>Hello World!</h1>
    <h1>Primeira pagina com node</h1>`);

    response.end();
});

server.listen(8000);

console.log('Rodando na porta 8000!');
console.log('Servidor atualizado!')