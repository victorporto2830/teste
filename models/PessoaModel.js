const PessoaDb = require('./PessoaDb')

class Pessoa {
    constructor(pessoa) {
        this.id = pessoa.id;
        this.nome = pessoa.nome;
    }
    
    static async Cadastro() {
        return PessoaDb.Cadastro(this)
    }

    static async Update() {
        return PessoaDb.UpdateNome(this)
    }

    static async Delete(id) {
        return PessoaDb.DeleteId(id)
    }

    static async BuscaId(id) {
        return PessoaDb.BuscaId(id)
    }

    static async Listar() {
        return PessoaDb.Lista()
    }

    static async Cadastrar() {
        await PessoaDb.Cadastro()
    }
}
module.exports = Pessoa;