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
    const nivelImc = getNivelImc(imc);
    
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
    //console.log(imc, nivelImc);
    // continua o código...
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5]; //por ter somente uma linha de código interna, não precisa das chaves e como o código vai parar no primeiro if correto que ele encontrar, também não precisa do else if.
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
};

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

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p); // insere p dentro do "pai" resultado. ou seja, insere p dentro da div resultado.

}