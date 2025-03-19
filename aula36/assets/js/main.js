const frutas = ['Pera', 'Maçã', 'Uva'];
/*
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
};*/

for (let i in frutas) {
    console.log(frutas[i])
}

const pessoa = {
    nome: 'Maria',
    sobrenome: 'Silva',
    idade: 40
};

for (let i in pessoa) {
    console.log(i); //vai mostrar as chaves (nome, sobrenome, idade)
    console.log(pessoa[i]); // aqui vai mostrar a informação da chave 
}