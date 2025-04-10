function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();
    };

    this.clearDisplay = function() {
        this.display.value = '';
    };

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.realizaConta = () => {
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
    };

    this.cliqueBotoes = () => {
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
    };

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
    }

}

const calculadora = new Calculadora();
calculadora.inicia();

