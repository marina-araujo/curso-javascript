// return = retorna um valor e termina a função


function criaPessoa(nome, sobrenome) {
    return {nome: nome, sobrenome: sobrenome};
}
const p1 = criaPessoa('Maria', 'Silva');
const p2 = { nome: 'Ana', sobrenome: 'Santos' };

console.log(p1);
console.log(typeof p1);
console.log(p2);
console.log(typeof p2);

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo!'));

const fala = falaFrase('Olá');
const resto = fala('mundo! Tudo bem?');
console.log(resto);

/*
function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2)); */

/*
function criaMultiplicador(multiplicador) {
    function multiplicacao(n) {
        return n * multiplicador;
    }
    return multiplicacao;
} */

function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(5));
console.log(quadriplica(10));

// escopo léxico

const nome = 'Marina';
function falaNome() {
    //const nome = 'Henrique'; // caso ativada, essa const vai ser priorizada em relação ao que estiver fora
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Guilherme'; // ela vai prorizar o que tem na função falaNome() e o que tem em volta. vai ignorar essa const dentro da função usaFalaNome()
    falaNome(); 
}
usaFalaNome();

// CLOSURES => habilidade da função lembrar do seu escopo léxico (ou seja, do seu escopo e dos vizinhos)
function retornaFuncao(nome1) {
    return function () {
        return nome1;
    }
}
const funcao = retornaFuncao('Marina');
const funcao2 = retornaFuncao('Henrique');
console.log(funcao(), funcao2());
console.dir(funcao);
console.dir(funcao2);

// FUNÇÕES DE CALLBACK

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
function f1(callback) {
    setTimeout(() => {
        console.log('f1');
        if (callback) callback();
    }, rand());
    
}
function f2(callback) {
    setTimeout(() => {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(() => {
        console.log('f3');
        if (callback) callback();
    }, rand());
}
/* uma forma de chamar as funções usando o callback:
f1(function () {
    f2(function () {
        f3(function () {
            console.log('Ola mundo!');
        });
    });
});
*/
// outra forma:

f1(f1Callback);
function f1Callback() {
    f2(f2Callback);
}
function f2Callback() {
    f3(f3Callback);
}
function f3Callback() {
    console.log('Ola mundo!');
}

// funções imediatas (IIFE)
// servem para não poluir o escopo global e para evitar que sejam interferidas pelo escopo global e outras bibliotecas



(function () {
    const nome5 = 'Rita';
    console.log(nome5); // Isso imprimirá 'Rita'
})();

const nome5 = 'Roberta';
console.log(nome5); // Isso imprimirá 'Roberta



