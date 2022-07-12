const express = require('express');
const app = express();

app.listen(8081, function(){
    console.log('servidor rodando na porta 8081')
})

app.get('/', function(req,res){
    res.sendFile(__dirname + '/html/index.html')
})

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + '/html/sobre.html')
})
