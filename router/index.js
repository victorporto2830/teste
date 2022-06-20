const express = require("express");
const pessoaRouter = require("./routerPessoa");
const testeRouter = require("./routerTeste");
const pessoaT = require('./routerPessoaTeste')
const routes = express.Router();

//routes.use("/pessoa", pessoaRouter);
routes.use("/teste", testeRouter);
routes.use('/pessoa', pessoaT);

module.exports = routes; 