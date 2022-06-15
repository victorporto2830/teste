const express = require("express");
const pessoaRouter = require("./routerPessoa");
const testeRouter = require("./routerTeste");
const routes = express.Router();

routes.use("/pessoa", pessoaRouter);
routes.use("/teste", testeRouter);

module.exports = routes; 