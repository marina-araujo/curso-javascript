const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome">
        <button>Clique aqui</button>
        </form>
        `);
}); // primeiro parâmetro: a rota, segundo: uma função que recebe 2 parametros: requisição e resposta

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
})

app.get('/contato', (req, res) => {
    res.send('Obrigada por entrar em contato com a gente.');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000'); // vai abrir a página
    console.log('servidor executando na porta 3000.');
});