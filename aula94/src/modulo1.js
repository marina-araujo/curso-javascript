const nome = 'Marina';
const sobrenome = 'Araujo';
const idade = 38;

function soma(x, y) {
    return x + y;
}

export { nome, sobrenome as default, idade, soma }; // para definir uma const como default, é melhor fazer assim

//pode também colocar o export na criação da variável, função, classe

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}