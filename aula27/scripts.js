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

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data1) {
    const dia = zeroAEsquerda(data1.getDate());
    const mes = zeroAEsquerda(data1.getMonth());
    const ano = zeroAEsquerda(data1.getFullYear());
    const hora = zeroAEsquerda(data1.getHours());
    const min = zeroAEsquerda(data1.getMinutes());
    const seg = zeroAEsquerda(data1.getSeconds());
    return `Hoje é exatamente ${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data1 = new Date();
const dataBrasil = formataData(data1);
console.log(dataBrasil);