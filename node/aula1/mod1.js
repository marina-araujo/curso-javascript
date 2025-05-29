const nome = 'Marina';
const sobrenome = 'Araujo';

const falaNome = () => 'Nome: ' + nome + ' ' + sobrenome;
/*
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome; // não precisa colocar os (), pq não está chamando a função, apenas criando uma chave pra exporta-la mesmo*/


// outra forma de fazer:
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;


this.qualquerCoisa = 'O que eu quiser exportar'; // o this é o mesmo que "module.exports";
console.log(module.exports);

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;