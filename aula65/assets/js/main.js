// filter, map, reduce => funções mais importantes para array no js
// filter => sempre retorna um array com a mesma quantidade de elementos ou menos.
// indices:      0  1   2   3  4  5 .....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor) {
    return valor > 10;
}

const maioresQue10 = numeros.filter(callbackFilter);
console.log(maioresQue10);

/* outra forma de fazer (usando função anonima): */
const maioresQue20 = numeros.filter(function(valor) {
    return valor > 20;
});
console.log(maioresQue20);

/* outra forma de fazer (usando arrow function): */
const menoresQue10 = numeros.filter((valor) => {
    return valor < 10;
});
console.log(menoresQue10);

/* e ainda pode ser mais reduzida: */
const menoresQue5 = numeros.filter(valor => valor < 5);
console.log(menoresQue5);

const menoresQue7 = numeros.filter((valor, indice, array) => {
    console.log(valor, indice);
    return valor < 7;
});
console.log(menoresQue7);

const pessoas = [
    { nome: 'Marina', idade: 37 },
    { nome: 'Renato', idade: 36 },
    { nome: 'Henrique', idade: 9 },
    { nome: 'Aroldo', idade: 40 },
    { nome: 'Vitoria', idade: 64 },
    { nome: 'Guilherme', idade: 4 },
    { nome: 'Ana', idade: 60 },
    { nome: 'João', idade: 25 },
];

const pessoasNomeGrande = pessoas.filter(function (obj) {
    //console.log(obj.nome);
    return obj.nome.length >= 6;
});
console.log(pessoasNomeGrande);

const pessoasMais50 = pessoas.filter(obj => obj.idade >= 50);
console.log(`pessoas com mais de 50 anos: `, pessoasMais50);

const nomeTerminaComA = pessoas.filter(function (obj) {
    return obj.nome.toLowerCase().endsWith('a');
});

console.log(nomeTerminaComA);