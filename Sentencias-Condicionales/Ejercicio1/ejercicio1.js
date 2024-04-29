// Solicitar al usuario que ingrese un número entero
const num = prompt("Ingrese un número entero");
// Convertir la entrada del usuario a un número entero utilizando parseInt
const numero = parseInt(num);

if (numero > 0) {

    alert("El número es positivo");
} else if (numero === 0) {
  
    alert("El número es cero");
} else {
    
    alert("El número es negativo");
}


