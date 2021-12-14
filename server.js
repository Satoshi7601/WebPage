//Carregando modulos
const express = require("express");
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const { Session } = require("inspector");
//const mongoose = require("mongoose")

const app = express();

//configuraçoes rotas
app.set('View engine','ejs');

app.use(session({

    secret: "Chave criptografia",
    secure: false,
    resave: false,
    cookie: {

        maxAge:1000

    },saveUninitialized:false

}
));
//rotas
app.get('/', function(req,res){
if(req.session.views){
    req.session.views++;
    res.send('Views'+
 
    req.session.views);
}else{

    req.session.views = 1
    req.session.views++;
    res.send('Seção iniciada'+
 
    req.session.views);
}
})
app.get("/index", function(req, res){
    res.render(__dirname + './view/index.html');
});

app.get("/sobre-empresa", function(req, res){
    res.sendFile(__dirname + "/sobre-empresa.html");
});

app.get("/blog", function(req, res){
    res.send("Pagina do blog");
});

app.get("/contato", function(req, res){
    res.send("Pagina de contato");
});

app.use(express.static(__dirname + '/public'));

//localhost:8081
const PORT = 8081

app.listen(PORT,function(){

console.log("servidor rodando com maestria")

} );