function calculaIdade(anos){
    return `Daqui a ${anos}, ${this.nome} terá ${this.idade + anos} anos de idade`
}

const pessoa1 = {
    nome: "Maria",
    idade: 30,
};

const pessoa2 = {
    nome: "Jorge",
    idade: 26,
};

const animal = {
    nome: "Burrinho",
    idade: 5,
    raca: "Burro",
};

console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaIdade.call(animal, 7));
console.log(calculaIdade.apply(pessoa1, [4]));
