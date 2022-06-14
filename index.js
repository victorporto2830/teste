const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))

app.get(`/`, (req, res)=>{
    res.send('Bem vindo a API')
})

app.get('/:nome', (req, res) => {
    nome = req.params.nome;
    res.status(200).json({mensagem: `Bem vindo à API ${nome}`})
})

app.get('/teste', (req, res) => {
    res.status(200).json({mensagem: "Essa é uma pagina de teste da API"})
})

app.listen(port, ()=> {
    console.log(`Servidor rodando na porta ${port}`);
});