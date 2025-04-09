function criaCalculadora() {

    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
        },
        
        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(conta);
            } catch (error) {
                alert('Conta inválida');
                return;
            }
            
        },
        
    
        /* OPÇÃO 01 de fazer:
        cliqueBotoes() {
            document.addEventListener('click', function (e) {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText); //o this aqui é o document
                }
            }.bind(this));*/
        // OPÇÃO 02:
        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText); //em arrow functions, o this trava no objeto que criou o método (no caso, fica sendo a calculadora)
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });

        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        }
        
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();