const produto = {
    nome: 'Caneca',
    preco: 1.8
};
const outraCoisa = {
    ...produto,
    material: 'porcelana'
}; // usando o spread operator faz com que a nova constante tenha os mesmos valores, porém, quando alterar um atributo em um não vai alterar no outro
produto.nome = 'Prato';
outraCoisa.preco = 2;
console.log(outraCoisa);
console.log(produto);

// OUTRA FORMA DE FAZER:

const item = {
    nome: 'Item',
    preco: 20
};
const copo = Object.assign({}, item, { material: 'Vidro' }, {nome: 'Copo'}, {preco: 10});
console.log(copo);
console.log(Object.getOwnPropertyDescriptor(copo, 'material')); // para ver as propriedades do atributo (que são definidas no define property)
console.log(Object.keys(copo));
console.log(Object.values(copo));
console.log(Object.entries(copo)); // mostra as keys e os values

for (let entry of Object.entries(copo)) {
    console.log(entry);
}

for (let [chave, valor] of Object.entries(outraCoisa)) {
    console.log(chave, valor);
}