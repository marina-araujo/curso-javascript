// função construtora -> inicia com letra maiúscula
// tanto a função construtora quanto a factory criam objetos
// na factory function, internamente usa-se vírgulas enquanto que na constructor usa-se ";"
function Pessoa(nome, sobrenome) {
    const ID = 123456; // atributo privado
    const metodoInterno = function () {
        console.log(ID);
    };
    metodoInterno(); // só pode ser chamada dentro da função pois é privada

    // atributos públicos:
    this.nome = nome;
    this.sobrenome = sobrenome;
    // metodos públicos:
    this.seApresentar = function () {
        console.log(`ola, eu me chamo ${this.nome}`)
    }
}
const p1 = new Pessoa('Marina', 'Araujo');
const p2 = new Pessoa('Vitoria', 'Araujo');
p1.seApresentar();
p2.seApresentar();

// função recursiva:
function recursiva(max) {
    console.log(max);
    if (max >= 10) return;
    max++;
    
    recursiva(max);
}

recursiva(0);
