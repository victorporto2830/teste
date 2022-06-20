const express = require("express");
const router = express.Router();
const db = require("../database/database");
const Pessoa = require("../models/PessoaModel");
const pessoadb = require('../models/PessoaDb');

class PessoaController {

  static ListarPessoas = (req, res) => {
      db.query(`SELECT * FROM Pessoa`, (erro, result) => {
        if (erro) console.log(erro);
        else res.status(200).json(result);
    });
  };

  static ListarPessoasPorId = (req, res) => {
    db.query(`SELECT * FROM Pessoa WHERE idPessoa = ${req.params.id}`, (erro, result) => {
      if(erro) console.log(erro);
      else res.status(200).json(result);
    });
  };

  static InserirPessoa = (req, res) => {
    db.query(`INSERT INTO Pessoa (Nome) VALUES ('${req.body.nome}')`, (erro, result) => {
      if(erro) console.log(erro);
      else res.status(201).json({mensagem: "Pessoa cadastrada com sucesso"});
    });
  };

  static DeletarPessoa = (req, res) => {
    db.query(`DELETE FROM Pessoa WHERE idPessoa = ${req.params.id}`, (erro, result) => {
      if(erro) console.log(erro)
      else res.status(200).json({mensagem: "Pessoa deletada com sucesso"})
    })
  };

  static async Listar (req, res) {
    const pessoa = await pessoa.Listar();
    res.status(200).json(pessoa);
  };

  static async Cadastro (req, res) {
    const { id, nome } = req.body;
    const pessoa = new Pessoa({
      id,
      nome
    })
    await pessoa.Cadastrar();
    res.status(201)
  };

};

module.exports = PessoaController;