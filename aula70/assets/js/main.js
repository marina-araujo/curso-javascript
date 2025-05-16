// maneira literal de criar um objeto em JS: colocar entre {}

const pessoa = {
    nome: 'Marina',
    sobrenome: 'Araujo',
    idade: 38
};

console.log(pessoa.nome); // igual a: console.log(pessoa['nome']);
console.log(pessoa.sobrenome);
console.log(pessoa['nome']);
const chave = 'idade';
console.log(pessoa[chave]);

const pet1 = new Object();
pet1.nome = 'Amelie';
pet1.raca = 'west';

console.log(pet1.nome);
console.log(pet1.raca);
console.log(pet1);


pessoa.falarNome = function () {
    return (`${this.nome} está falando seu nome.`);
};
pessoa.falarNome();

delete pessoa.nome;
console.log(pessoa);

pessoa.getAnoNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa.getAnoNascimento());

for (let chave in pessoa) {
    console.log(chave, "=> ", pessoa[chave]);
};

// moldes para criar objetos: Factory functions / Constructor functions / Classes
//FACTORY FUNCTION (relembrando) ou FUNÇÃO FÁBRICA:
function criaPesoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPesoa('Vitoria', 'Araujo');
console.log(p1.nomeCompleto());

// CONSTRUCTOR:
function Pet(nome, raca) {
    this.nome = nome;
    this.raca = raca;
    // se quiser congelar todos os valores: "Object.freeze(this);"
}

const pet2 = new Pet('Mila', 'Gato Siamês');
pet2.nome = 'Arya'; // é possível alterar o valor interno assim
Object.freeze(pet2);
pet2.nome = 'Malu'; // não vai conseguir mudar pq foi usado o método freeze
console.log(pet2);
console.log(pet1);
