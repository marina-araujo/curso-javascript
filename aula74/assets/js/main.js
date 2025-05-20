// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    
//    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}
Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
};
Pessoa.prototype.nomeInicial = function () {
    return `O primeiro nome é: ${this.nome}`;
};
// Instância:
const pessoa1 = new Pessoa('Marina', 'Araujo');
const pessoa2 = new Pessoa('Aroldo', 'Coelho');
const data = new Date();

console.dir(pessoa1.nomeCompleto());
console.dir(pessoa2);
console.dir(data);