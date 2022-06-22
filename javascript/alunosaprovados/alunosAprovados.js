const alunos = [
    {
        nome: "Pedro",
        nota: 5,
        turma: "1B",
    },
    {
        nome: "Jorge",
        nota: 9,
        turma: "1B",
    },
    {
        nome: "Paola",
        nota: 3,
        turma: "2C",
    },
];

function alunosAprovados(arr, media){
    let aprovados = [];

    for(let i=0;i< arr.length; i++){

        const {nota, nome} = arr[i]; // Uso de object destructuring

        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 6));