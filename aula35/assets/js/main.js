const elementos = [
    { tag: 'p', texto: 'Frase 1' }, // 0
    { tag: 'div', texto: 'Frase 2' },  // 1
    { tag: 'section', texto: 'Frase 3' },
    { tag: 'footer', texto: 'Frase 4' },
]; // array de objetos

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto; // poderia fazer também: tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
};

container.appendChild(div);
