let numerosGenerados = [];
let continuar = true;

while (continuar) {
    let numero = Math.floor(Math.random() * 10) + 1;

    if (!numerosGenerados.includes(numero)) {
        numerosGenerados.push(numero);
        console.log(numero);
    } else {
        console.log("Número repetido, generando otro...");
    }

    continuar = confirm("¿Desea generar otro número?");

    if (numerosGenerados.length === 10) {
        console.log("Todos los números entre 1 y 10 han sido generados.");
        continuar = false;
    }
}
console.log("Secuencia generada:", numerosGenerados);
