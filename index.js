const express = require('express');
const app = express();


app.get('/', function(req, res){
    res.send('seja bem vindo ao meu app');
});

app.get('/sobre', function(req, res){
    res.send('minha pagina sobre');
});
app.get('/pessoa/:nome', function(req, res){
    res.send('<h1> Ola '+req.params.nome+'</h1>');
})


app.listen(8080,function(){
    console.log('servidor rodando na porta 8080')
});