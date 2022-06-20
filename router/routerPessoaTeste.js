const express = require("express");
const router = express.Router();
const db = require("../database/database");
const PessoaController = require("../controller/PessoaController")

router.get("/", PessoaController.Listar);

module.exports = router;