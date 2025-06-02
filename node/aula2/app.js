/*const multiplicacao = require('./mod'); 

console.log(multiplicacao(2, 2));*/

const Dog = require('./B/C/mod');
const doguinho = new Dog('Bidu');
doguinho.latir();

const Cachorro = require('./D/mod2');
const c1 = new Cachorro('Bob');
c1.latir();
console.log(__dirname);
const path = require('path');
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));
console.log(__filename);
