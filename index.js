const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const Router = require("./router/index");
const port = process.env.PORT || 3000;

app.use(
    express.json(),
    cors(),
    bodyParser.urlencoded({extended:true}),
    Router);

app.get(`/`, (req, res)=>{
    res.send('<h1 style="text-align: center;">Bem vindo à API</h1>')
})

app.listen(port, ()=> {
    console.log(`Servidor rodando na porta ${port}`);
});