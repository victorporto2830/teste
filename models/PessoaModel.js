const PessoaDb = require('./PessoaDb')

class Pessoa {
    constructor(pessoa) {
        this.id = pessoa.id;
        this.nome = pessoa.nome;
    }
    
    static async Cadastro() {
        return await PessoaDb.Cadastro(this)
    }

    static async Update() {
        return await PessoaDb.UpdateNome(this)
    }

    static async Delete(id) {
        return await PessoaDb.DeleteId(id)
    }

    static async BuscaId(id) {
        return await PessoaDb.BuscaId(id)
    }

    static async Listar() {
        return await PessoaDb.Lista()
    }
}
module.exports = Pessoa;