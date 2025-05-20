// new Object -> Object.prototyoe
const objA = {
    chaveA: 'Ana'
    // __proto__: Object.prototyoe
};

const objB = {
    chaveB: 'Bete'
    // __proto__: objA
};

const objC = {
    chaveC: 'Carla'
};

Object.setPrototypeOf(objB, objA); // faz com que dê pra acessar a chave de A em B
Object.setPrototypeOf(objC, objB);
//console.log(objC.chaveA);

//Object.getPrototypeOf(objA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype);

const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 5
    },
    material: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Plastico'
    }
});

p3.preco = 60;

//p1.desconto(10);
p1.aumento(10);
console.log(p1);
p2.desconto(10);
console.log(p2);
p3.desconto(20);
console.log(p3);