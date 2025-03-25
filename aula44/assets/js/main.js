function getInputValue(id) {
    const dom = document.querySelector("#" + id);
    if (!dom) {
        throw Error("O id passado por parâmetro não possui elemento no DOM.")
    }
    return dom.value;
}
try {
    const val = getInputValue("campoInexistente");
    alert(val)
} catch(e) {
    alert("deu erro: " + e.message);
}

alert("Fim do programa")
try {
    // trecho de código com potencial de falha (não colocar um código inteiro, apenas pequenos pedaços)
    
} catch (err) {
    // trecho de código a ser executado caso ocorra falhe
}
