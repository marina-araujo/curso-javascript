let erroEncontrado = null;
try {
    let obj = undefined;
    console.log(obj);
    console.log(obj.propiedade);
    console.log('ola mundo!');
    erroEncontrado = false;
    console.log(erroEncontrado);
} catch (erro) {
    console.log('[Erro]');
    console.log(erro);
    erroEncontrado = true;
    console.log(erroEncontrado);
} finally {
    erroEncontrado = null;
    console.log('finalizar software');
}
console.log(erroEncontrado);