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

// função geradora

function* geradora1() {
    // código qualquer...
    yield 'Valor 1';
    // código qualquer...
    yield 'Valor 2';
    // código qualquer...
    yield 'Valor 3';
}

const g1 = geradora1();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next()); // o done vai dar true pq já vai ter terminado com todos os nexts



function* geradora2() {
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

function* geradora3() {
    yield 10;
    yield 20;
    yield 30;
}

function* geradora4() {
    yield* geradora3();
    yield 40;
    yield 50;
    yield 60;
}

const g4 = geradora4();
for (let valor of g4) {
    console.log(valor);
}

function* geradora5() {
    yield function () {
        console.log('vim do y1');
    }
    yield function () {
    console.log('vim do y2');
    }
}



const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();