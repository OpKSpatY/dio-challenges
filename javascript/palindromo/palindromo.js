function verifyPalindrome(string){
    if (!string) return "String inválida.";

    return string.split("").reverse().join("") === string;
}

let var1 = "oio";

console.log(verifyPalindrome(var1));

// Outra solução:

function verifyPalindrome2(string){
    if (!string) return "Valor inválido.";

    for (let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length -1 - i]){
            return false;
        }
    }

    return true;
}

console.log(verifyPalindrome2("this is a test"));

console.log(verifyPalindrome2("ovo"));