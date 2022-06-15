const express = require("express");
const router = express.Router();
const db = require("../database/database");
const PessoaController = require("../controller/PessoaController")

router.get("/:id", PessoaController.ListarPessoasPorId);
router.get("/", PessoaController.ListarPessoas);
router.post("/", PessoaController.InserirPessoa);
router.delete("/:id", PessoaController.DeletarPessoa);

module.exports = router;