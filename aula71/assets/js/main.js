// defineProperty + defineProperties

function Produto(nome, preco, estoque) {
    /*this.nome = nome;
    this.preco = preco;*/

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostrar a chave? true or false
        value: function () {
            return estoque;
        }, // poderia só colocar value: estoque, por exemplo
        writable: false, // pode alterar o valor da chave?
        configurable: false // pode apagar a chave ou reconfigurar?
    });
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: true, // pode alterar
            configurable: true // configurável e apagável
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: true, // pode alterar
            configurable: true // configurável e apagável
        },
    });

}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 4000;
delete p1.estoque; // funcionaria se estivesse true em configurable
console.log(p1.estoque());
console.log(Object.keys(p1)); // se enumerable estivesse como false, a chave (estoque não apareceria aqui)
console.log(p1);
for (let chave in p1) {
    console.log(chave);
}