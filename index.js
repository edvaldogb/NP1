// Plataforma de Perguntas e Respostas.

const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.set('view engine', 'ejs');
app.use(express.static('public'));

// BodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Rotas.
app.get("/", (req,res) => {
    res.render('index');
});

app.get("/perguntar", (req,res) => {
    res.render('perguntar');
});

app.post("/salvarpergunta", (req,res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;    
    res.send("Formulário recebido. Tíltulo "+ titulo +"  "+ "descrição" + "  " + descricao);
});

app.listen(8080,() => {
    console.log('Servidor Iniciado com Sucesso.');
});