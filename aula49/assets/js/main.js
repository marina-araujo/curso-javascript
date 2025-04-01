// declaração clássica de função (Function hoisting => ou seja, a função pode ser chamada antes de ser declarada)

falaOi();
function falaOi() {
    console.log('Oie');
}

// first-class objects (objetos de primeira classe) => porém ela só pode ser usada após declarada.

const souUmDado = function () {
    console.log('Sou um dado.');
}

souUmDado();

function executaFuncao(funcao1, funcao2) {
    console.log('Vou executar suas funções abaixo: ');
    funcao1();
    funcao2();
}
executaFuncao(falaOi, souUmDado);

// Arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

// Dentro de um objeto:
const obj1 = {
    falar: function () {
        console.log('Estou falando...');
    }
};
obj1.falar();
const obj2 = {
    falar() {
        console.log('Estou falando de novo...');
    }
};
obj2.falar();

