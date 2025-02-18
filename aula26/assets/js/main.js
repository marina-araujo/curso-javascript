// capturar evento de submit do formulário
const form = document.querySelector('#formulario');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso'); // cria a const inputPeso a partir do que for digitado no input
    const inputsAltura = e.target.querySelector('#altura'); 
    const peso = Number(inputPeso.value); // cria uma const nova transformando a informação em valor numérico
    const altura = Number(inputsAltura.value);
    if (!peso) {
        setResultado('Peso inválido', false); // se o peso for um NaN
        return;
    };
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }
    const imc = getImc(peso, altura);
    console.log('Cheguei aqui.')
    // continua o código...
});

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p'); // criação de uma constante p que vai ter dentro dela um elemento tipo p (parágrafo do html)
   // p.classList.add('paragrafo-resultado'); // cria/adiciona a classe 'paragrafo-resultado' dentro desse p
    return p;
    //p.innerHTML = 'Qualquer coisa'; // adiciona à const p um conteúdo tipo string no HTML dele
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado'); // criou a constante resultado a partir do seletor da div com id resultado
    resultado.innerHTML = '';
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p); // insere p dentro do "pai" resultado. ou seja, insere p dentro da div resultado.

}