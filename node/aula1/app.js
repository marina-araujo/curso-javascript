// para importar: usa require

const mod1 = require('./mod1');
console.log("AGORA O QUE FOI IMPORTADO ATRAVÉS DO REQUIRE:\n",
    mod1
);
console.log(mod1.falaNome());
const nome = mod1.nome;
console.log(nome);
const { Pessoa } = require('./mod1');
const p1 = new Pessoa('Guilherme');
console.log(p1);

const path = require('path'); // esse módulo path já existe no path, por isso que não precisa usar o caminho
const axios = require('axios');

 