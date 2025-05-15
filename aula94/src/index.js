import { nome as nome2, idade, soma, Pessoa } from './modulo1'; // pode também mudar o nome da variável na exportação
// se quiser importar tudo (que for definido como export): 
import * as MeuModulo2 from './modulo2';

const nome = 'João';

console.log(nome2, idade);
console.log(`O resultado da soma é: ${soma(5, 5)}`,);

const p1 = new Pessoa('Henrique', 'Araujo')
console.log(p1);

const p2 = new Pessoa('Guilherme', 'Araujo')
console.log(p2);

console.log(MeuModulo2.pet);

import funcao from './modulo2'; //vai importar o que foi definido como default (padrão) no módulo em questão
console.log(funcao(9, 2));

import sobrenome from './modulo1';
console.log(sobrenome);

import mult from './modulo3';
console.log(mult(5, 3));
