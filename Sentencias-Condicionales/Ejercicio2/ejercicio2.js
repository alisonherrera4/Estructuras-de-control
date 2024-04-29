const num1 = parseInt(prompt("Ingrese el primer numero"));
const num2 = parseInt(prompt("Ingrese el segundo numero"));
let operacion = prompt("Ingrese la operación que vas a realizar");
let resultado;

if (operacion === "suma") {
    resultado = num1 + num2;
} 
if (operacion === "resta") {
    resultado = num1 - num2;
}  
if (operacion === "multiplicacion") {
    resultado = num1 * num2;
}  
if (operacion === "division") {
    resultado = num1 / num2;
} 

if (resultado === undefined) {
    resultado = "Operación no válida";
    alert(resultado); // Usar alert para mostrar mensajes de error
} else {
    alert("El resultado es: " + resultado);
}