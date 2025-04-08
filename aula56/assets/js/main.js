// factory function (função fábrica)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        // getter e setter:
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },
        fala(assunto) {
            return `${this.nome} ${this.sobrenome} está falando sobre ${assunto}. Essa pessoa tem ${this.altura}m de altura e pesa ${this.peso}kg`;
        },
        altura: a,
        peso: p,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Marina', 'Araujo', 1.67, 65);
console.log(p1.fala('JS'));
console.log(p1.imc());
console.log(p1);
console.log(p1.nomeCompleto); // por ter um get na frente do método, ele meio que se transforma em atributo e na hora de chamar a função não pode usar o ()
p1.nomeCompleto = 'Maria Chiquinha da Silva'
console.log(p1.nomeCompleto);
console.log(p1.fala('nada'));