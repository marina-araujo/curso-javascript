const pessoa = {
    nome: 'Marina',
    sobrenome: 'Araújo',
    idade: 37,
    profissao: 'Engenheira de Software',
    filhos: 2,
    endereco: {
        rua: 'Jose Vicente',
        numero: 194,
        bairro: 'Mauricio de Nassau'
    }
};

// Atribuição via desestruturação (transformar uma parte do objeto em uma variável):
const { nome } = pessoa;
console.log(nome);
const { idade } = pessoa;
const { profissao = 'Não existe' } = pessoa; // padrão criado para o caso de não haver informação criada e não aparecer simplesmente undefined.
console.log(profissao);
const { sobrenome: sb } = pessoa;
console.log(`o nome da pessoa é: ${pessoa.nome} ${sb} e ela tem ${idade} anos. Sua profissão é ${profissao}.`);
const { endereco: {rua: r, numero}, endereco } = pessoa;
console.log(r, numero, endereco);

const pessoa2 = {
    nome2: 'Henrique',
    idade: 9,
    profissao: 'estudante',
    endereco: {
        rua: 'Vicente Lacerda',
        numero: 194
    }
};

const { nome2, ...resto } = pessoa2;
console.log(resto);