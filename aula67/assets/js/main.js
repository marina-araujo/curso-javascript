// reduce => mais interessante para reduzir a um elemento só
// some todos os números (usando reduce):
//               0   1  2   3
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function (acumulador, valor, indice, array) {
    return acumulador + valor;
}, 0);
console.log(`o total é: ${total}`);
// mostre só os números pares (melhor fazer com filter, mas dá pra fazer com reduce dessa forma:)
const pares = numeros.reduce(function (acumulador, valor) {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(`os números pares são ${pares}`);
console.log(pares);



// retorne a pessoa mais velha:
const pessoas = [
    { nome: 'Marina', idade: 37 },
    { nome: 'Renato', idade: 36 },
    { nome: 'Henrique', idade: 9 },
    { nome: 'Aroldo', idade: 40 },
    { nome: 'Vitoria', idade: 64 },
    { nome: 'Guilherme', idade: 4 },
    { nome: 'Aline', idade: 70 },
    { nome: 'Ana', idade: 60 },
    { nome: 'João', idade: 25 },
];
const maisVelha = pessoas.reduce(function (acumulador, valor) {
    //console.log(acumulador, valor); => ou seja: o acumulador é o primeiro elemento e o valor é o segundo
    if (acumulador.idade > valor.idade) { return acumulador }
    else { return valor };
});

console.log("a pessoa mais velha é: ", maisVelha);

const novasPessoas = [...pessoas, { nome: 'Lelio', idade: 64 }, { nome: 'Leide', idade: 78 }];
console.log(novasPessoas);
console.log(pessoas);
pessoas.push({ nome: 'Hingrid', idade: 50 });
console.log(pessoas);

const pessoasComId = pessoas.map((pessoa, indice) => ({ id: indice + 1, ...pessoa }));
console.log(pessoasComId);