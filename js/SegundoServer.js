/*const express = require('express');
const app = express();

app.use(express.static("www"));

var texto = "";
app.get('/sendMsg', function(req, res) {
    let user = req.query.user;
    let hora = new Date();

    if (user == '')
        user = "?????";

    texto += user + ": " + req.query.msg + "\n";
    res.send();
});

app.get('/getMsg', function(req, res) {
    res.send(texto);
});

app.listen(3000);*/