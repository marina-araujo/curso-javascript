const elementos = [
    { tag: 'p', texto: 'Aqui vai o texto do parágrafo para vermos como que vai ficar. Blabaldmkfowief barogkjoairmofiar bargarfe vadfaseragro avboaiejdfaoil lorretm oasdkmfoiw.' },
    { tag: 'div', texto: 'TEXTO DA DIV' },
    { tag: 'section', texto: 'SECTION' },
    { tag: 'footer', texto: 'Feito por Marina Araujo em exercício' },
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
};



container.appendChild(div);