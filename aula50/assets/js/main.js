function cumprimpenta(a, b) {
    console.log(`Olá, ${a}, como você está? Soube que você tem ${b} anos.`);
};

cumprimpenta('Marina', 37);
//a função declarada com function tem uma variável especial, que se chama "arguments", que sustenta todos os argumentos enviados, mesmo sem definição de parâmetros no início da declaração da função.
function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);

function funcao2(a = 0, b = 0) { //ao colocar esse igual ao parâmetro, define-se um padrão para o caso da função não enviar parâmetro para ele. caso não se defina um padrão, o js considera undefined
    console.log(a + b);
}
funcao2(6);

function funcao3(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao3(2, undefined, 20); // forma correta de deixar o b sem definição de valor (assim ele considera o valor padrão)
funcao3(2, '', 20); //dessa forma ele considera uma concatenação por isso o resultado é 220

function funcao4({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
funcao4({ nome: 'Marina', sobrenome: 'Araujo', idade: 37 });

function funcao5([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao5(['Henrique', 'Araujo', 9]);

// uso do rest operator (...restoperator) => tem que ser sempre o último parâmetro

const conta = function (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
    console.log(arguments);
};
conta('+', 1, 20, 30, 40, 50);