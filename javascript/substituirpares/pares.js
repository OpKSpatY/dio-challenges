function verifyEven(array){
    if (array.length == 0) return -1;
    
    for (let i=0; i < array.length; i++){
        if (array[i] % 2 === 0){
            array[i] = 0;
        }
    }
    return array;
}

let array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(verifyEven(array1));

/*
function substituiPares(array){
    for (let i= 0; i < array.length; i++){
        if (array[i] === 0){
            console.log("Você já é zero.")
        }
        else if (array[i] % 2 === 0 ){
            console.log(`Substituindo ${array[i]} por 0.`)
            array[i] = 0;
        }
    }

    return array;
}

let array1 = [1,3,4,6,80,33,23,90];
substituiPares(array1);
console.log(array1);
*/