const express= require('express');
const res = require('express/lib/response');
const routes = express.Router();

module.exports = routes;

let db = [
    {'1':{nome:'Cliente 1',idade:'20'}},
    {'2':{nome:'Cliente 2',idade:'22'}},
    {'3':{nome:'Cliente 3',idade:'23'}} 
]
//adicionando funcionalidade get, atribuindo url a rota('/' representa o Default).
// buscar dados
routes.get('/',(req,response) =>{
    return res.json(db)
})
// adicionando dados
routes.post('/add',(req,res) =>{
    const body = req.body

    if(!body)
        return res.status(400).end()
        // se o envio for algo diferente de body, enviar o erro 400
   
    db.push(body)
    return res.json(body)
    // inserindo no array 'db'  mais informações no formato json via post
})

routes.delete('/:id',(req,res)=>{
    const id =req.params.id;

    let newDB = db.filter(item=>{
        if(!item[id])
            return item;
    })

    db=newDB;

    return res.send(newDB);
})