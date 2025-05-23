
const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();

function getDiaSemanaTexto(diaSemana) {
    //opção com array:
    const diasSemana = ['Domingo', 'Segunda-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return diasSemana[diaSemana];
    // oopção com switch case:
    /*
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }*/
}
// opção com arrays:
function getNomeMes(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return meses[numeroMes];
    
    // opção com switch case:
    /*let nomeMes;
    switch (numeroMes) {
        case 0:
            nomeMes = 'janeiro';
            return nomeMes;
        case 1:
            nomeMes = 'fevereiro';
            return nomeMes;
        case 2:
            nomeMes = 'março';
            return nomeMes;
        case 3:
            nomeMes = 'abril';
            return nomeMes;
        case 4:
            nomeMes = 'maio';
            return nomeMes;
        case 5:
            nomeMes = 'junho';
            return nomeMes;
        case 6:
            nomeMes = 'julho';
            return nomeMes;
        case 7:
            nomeMes = 'agosto';
            return nomeMes;
        case 8:
            nomeMes = 'setembro';
            return nomeMes;
        case 9:
            nomeMes = 'outubro';
            return nomeMes;
        case 10:
            nomeMes = 'novembro';
            return nomeMes;
        case 11:
            nomeMes = 'dezembro';
            return nomeMes;
        
    }*/
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);
    console.log(nomeDia, nomeMes);
    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} `
}

h1.innerHTML = criaData(data);

/*
// usando recursos nativos da linguagem (mais indicada):
const h1 = document.querySelector('.container h1');
const data = new Date();
/*const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};
h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'}, { timeStyle: 'short' });*/