class ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }
    set saldo(value){
        this._saldo = value;
    }

    sacar(value){
        if (value > this._saldo){
            return "Saldo insuficiente.";
        }
        this.saldo -= value;
        return this._saldo;
    }

    depositar(value){
        this._saldo += value;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(value){
        this._cartaoCredito = value;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria{ 
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitária';
    }
    sacar(value){
        if(value > 500){
            return "Operação inválida."
        }

        this._saldo -= value; 
    }
}