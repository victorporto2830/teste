const express = require("express");
const router = express.Router();
const db = require("../database/database")

class PessoaController {

  static ListarPessoas = (req, res) => {
      db.query(`SELECT * FROM Pessoa`, (erro, result) => {
        if (erro) {
          console.log(erro);
        }else {
          res.status(200).json(result) ;
      };
    });
  };

  static ListarPessoasPorId = (req, res) => {
    db.query(`SELECT * FROM Pessoa WHERE idPessoa = ${req.params.id}`, (erro, result) => {
      if(erro) console.log(erro);
      else res.status(200).json(result);
    });
  };

  static InserirPessoa = (req, res) => {
    db.query(`INSERT INTO Pessoa ('Nome') VALUES (?)`, [req.body.nome], (erro, result) => {
      if(erro) console.log(erro);
      else res.status(201).json({mensagem: "Pessoa cadastrada com sucesso"});
    });
  };
};

module.exports = PessoaController;