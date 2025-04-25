function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
// solução com callbacks pra que as frases apareçam em ordem:
function esperaAi(msg, tempo, callback) {
    setTimeout(() => {
        console.log(msg);
        if (callback) callback();
    }, tempo);
}
/*
esperaAi('Frase 1', rand(2, 4), function () {
    esperaAi('Frase 2', rand(2, 5), function () {
        esperaAi('Frase 3', rand(1, 3));
    });
});*/

// sem callback (com promise). benefícios: não forma árvores de funções encadiadas:
function esperaAi2(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('NOT A STRING'));
        setTimeout(() => {
            resolve(msg);
        }, tempo); 
    });    
}
esperaAi2('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi2(222, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi2('Tratando os dados da BASE', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log("Exibindo dados na tela");
    })
    .catch(e => {
        console.log('ERRO: ', e);
    });

console.log('Isso aqui será exibido antes das promises.');
