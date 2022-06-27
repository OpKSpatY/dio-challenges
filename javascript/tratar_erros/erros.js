function validaArray(arr, num){
    try{
        if (!arr && !num) throw new ReferenceError("Envie os parâmetros corretos.");

        if(typeof arr !== "object") throw new TypeError("O Array precisa ser do tipo Object.");

        if(typeof num !== "number") throw new TypeError("O tipo do parâmetro 'num' está incorreto.");

        if (arr.length !== num) throw new RangeError("O tamanho do array é inválido.")

        return arr;
    }
    catch(e){
        if (e instanceof ReferenceError){
            console.log("O erro é do tipo ReferenceError");
            console.log(e.message);
        }
        else if (e instanceof TypeError){
            console.log("O erro é do tipo TypeError");
            console.log(e.message);
        }
        else if (e instanceof RangeError){
            console.log("O erro é do tipo RangeError");
            console.log(e.message);
        }
        else{
            console.log("O erro não está especificado, código: " + e)
        }
    }
}

console.log(validaArray());