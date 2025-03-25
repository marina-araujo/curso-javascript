let i = 0;
while (i < 3) {
    try {
        console.log('iniciando calculadora')
        let input = 0;
        if (input === 0) {
            throw 'Valor negado'
        }
        let res = 5 / input;
    } catch (e) {
        i++
    } finally {
        console.log('finalizando calculadora\n')
    }
}

