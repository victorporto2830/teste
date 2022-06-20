const express = require("express");
const router = express.Router();
const db = require("../database/database");
const PessoaController = require("../controller/PessoaController")

router.get("/", PessoaController.Listar);
router.get("/:id", PessoaController.ListarId);
router.post("/", PessoaController.Cadastro);
router.delete("/:id", PessoaController.Delete);

module.exports = router;