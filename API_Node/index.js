const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./config/routes')

const app = express();
//o servidor esta configurado com o bodyparser
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json);
app.use(cors());
app.use(routes);



//iniciando o servidor, e indicando qual porta sera usada.
app.listen(21262, () =>{
    console.log('Express started at http://localhost:21262')
})
