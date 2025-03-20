const nome = 'Marina';
/*
for (let i in nome) {
    console.log(nome[i]);
}*/
/*
for (let i of nome) {
    console.log(i);
}*/

const nomes = ['Henrique', 'Guilherme', 'Marina', 'Aroldo'];

console.log('-----------------------')

for (let valor of nomes) {
    console.log(valor);
}

console.log('-----------------------')

nomes.forEach(function (valor, indice) {
    console.log(valor, indice);
});
console.log('-----------------------')
const pessoa = {
    nome: 'Marina',
    sobrenome: 'Araujo',
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
};

