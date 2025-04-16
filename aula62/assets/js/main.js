//indices:         0         1        2
const nomes = ['Eduardo', 'Maria', 'Joana'];
// strings, objetos, funções, números
const nomes1 = new Array('Rita', 'Ricardo', 'Heitor');
nomes[2] = 'Pedro';
delete nomes[2];
console.log(nomes);
const novo = nomes1; // tudo q for feito com o novo interfere no nomes1;
novo.pop();
console.log(nomes1);
nomes1[2] = 'Heloisa';
console.log(nomes1);
const novo1 = [...nomes1];
const removido = novo1.pop();
nomes1.shift(); // tira o elemento do índice 0
console.log(nomes1);
console.log(novo1, removido);
console.log(nomes1.length);
nomes1.unshift('Julia'); // coloca no índice 0
nomes1.push('Laura'); // coloca no final do array
console.log(nomes1);
const nomes2 = ['Ana', 'Alice', 'Clara', 'Julia', 'Laura', 'Cecília'];
const novo2 = nomes2.slice(1, -2); // começa do indice 1 e tira os 2 últimos indices
console.log(novo2);
const nome = 'Marina Barbosa Araujo';
const nomes3 = nome.split(' '); // separa as strings em arrays diferentes
console.log(nomes3); 
const nomes4 = ['Henrique', 'Barbosa', 'Coelho'];
const nome1 = nomes4.join(' '); // vai juntar
console.log(nome1);
