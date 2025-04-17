// map => vai sempre ter o mesmo tamanho do array original (qtde de indices)
// dobre os números:
//               0   1  2   3
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map((valor) => {
    return valor * 2;
}); 
console.log(numerosEmDobro);




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

const nomes = pessoas.map(function (obj) {
    return obj.nome;
});
console.log(nomes);

const idades = pessoas.map(function (obj) {
    return {idade: obj.idade};
});
console.log(idades);

const comIds = pessoas.map(function (obj, indice) {
    const newObj = { ...obj }; // criando esse newObj faz com que não altere o objeto original do array original
    newObj.id = indice + 1;
    return newObj;
});
console.log(comIds);
console.log(pessoas);