let number = parseInt(prompt("Introduce un número: "));

let resultado = "";

for (let i = 1; i <= number; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        resultado += "FizzBuzz"; 
    }

    else if (i % 3 === 0) {
        resultado += "Fizz"; 
    }

    else if (i % 5 === 0) {
        resultado += "Buzz"; 
    }
    
    else {
        resultado += i;
    }

    
    if (i < number) {
        resultado += ", ";
    }
}


console.log(resultado);
