function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}


function funcaoDoIntrerval() {
    console.log(mostraHora());
}

setInterval(funcaoDoIntrerval, 1000);