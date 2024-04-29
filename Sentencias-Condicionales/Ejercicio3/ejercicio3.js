let sumaEdades = 0;
let contadorEdades = 0;

function ingresarEdad() {
    let edad = parseInt(prompt("Ingresa la edad de la persona " + (contadorEdades + 1) + ":"));
    if (edad > 0) {
        sumaEdades += edad;
        contadorEdades++;
    } else {
        alert("Edad no válida. Ingresa un número mayor que cero.");
    }
}

ingresarEdad();
ingresarEdad();
ingresarEdad();
ingresarEdad();
ingresarEdad();


let edadPromedio = sumaEdades / contadorEdades;

if (edadPromedio >= 18) {
    alert("La edad promedio es mayor o igual a la mayoría de edad.");
} else {
    alert("La edad promedio es menor a la mayoría de edad.");
}