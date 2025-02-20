const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario);
console.log(corPadrao);
/*
const tresHoras = 60 * 60 * 3 * 1000
const umDia = 60 * 60 * 24 * 1000
const data = new Date(0 + tresHoras + umDia);*/

//const data = new Date(2025, 3, 29, 15, 45, 15, 500);
const data = new Date('1987-04-29 14:45:00');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // mês começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - Domingo e 6 - Sábado
console.log(data.toString());

function formataData(data1) {
    
    
}

const data1 = new Date();
const dataBrasil = formataData(data1);
console.log(dataBrasil)