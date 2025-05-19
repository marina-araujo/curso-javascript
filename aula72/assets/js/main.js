// defineProperty -> Getters e Setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    let estP = estoque; // cria-se uma variável de estoque privada para não ocorrer um looping

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostrar a chave? true or false
        configurable: true, // pode apagar a chave ou reconfigurar?
        get: function () {
            return estP;  
        },
        set: function (valor) {
            if (typeof valor != 'number') {
                throw new TypeError('Bad value!');
            }
            estP = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 6;
console.log(p1.estoque);
