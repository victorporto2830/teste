const { rejects } = require('assert');
const { resolve } = require('path');
const { promise, resume } = require('../database/database');
const db = require('../database/database');


 module.exports = {

    Cadastro: Pessoa => {
        return new Promise((resolve, rejects) => {
            db.query(`INSERT INTO Pessoa (Nome) VALUES (?)`,
            [Pessoa.nome], erro => {
                if (erro) console.log(erro);
                else return resolve("Pessoa cadastrada com sucesso");
            })
        })
    },
    
    UpdateNome: Pessoa => {
        return new Promise((resolve, rejects) => {
            db.query(`UPDATE Pessoa SET Nome = ? WHERE idPessoa = ?`, 
            [Pessoa.nome, Pessoa.id], (erro) => {
                if (erro) rejects("Erro ao alterar pessoa");
                else return resolve("Pessoa alterada com sucesso");
            })
        })
    },

    BuscaId: id => {
        return new Promise((resolve, rejects) => {
            db.query(`SELECT * FROM Pessoa WHERE idPessoa = ?`, 
            [id], (erro, result) => {
                if (erro) rejects("Pessoa inexistente");
                else resolve(result);
            })
        })
    },

    DeleteId: id => {
        return new Promise((resolve, rejects) => {
            db.query(`DELETE FROM Pessoa WHERE idPessoa = ?`, 
            [id], (erro, result) => {
                if (erro) rejects("Pessoa inexistente");
                else resolve("Pessoa deletada com sucesso");
            })
        })
    },

    Lista: () => {
        return new Promise((resolve, rejects) => {
            db.query(`SELECT * FROM Pessoa`, 
            (erro, result) => {
                if (erro) return {code: 500, result: erro};
                else return {code: 200, result: result};
            })
        })
    }
 }