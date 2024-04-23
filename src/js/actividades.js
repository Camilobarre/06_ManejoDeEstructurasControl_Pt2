//Ejercicio 1
let numero1_Ejercicio1 = prompt("Ingresa el primer número:")
let numero2_Ejercicio1 = prompt("Ingresa el segundo número:")

if (numero1_Ejercicio1 > numero2_Ejercicio1) {
    let resta_Ejercicio1 = numero2_Ejercicio1 - numero1_Ejercicio1;
    let signo = resta_Ejercicio1 > 0 ? "positivo" : (resta_Ejercicio1 < 0 ? "negativo" : "cero");
    console.log(`El resultado es ${resta}, que es un número ${signo}`);
} else {
    console.log("El primer número no es mayor que el segundo");
}

//Ejercicio 2
let operacionEjercicio2 = prompt(`Selecciona la opración matemática:
[1] Suma
[2] Resta
[3] Multiplicación
[4] División`)

let numero1_Ejercicio2 = prompt("Ingresa el primer número:")
let numero2_Ejercicio2 = prompt("Ingresa el segundo número:")
let resultado_Ejercicio2;

switch (operacion) {
    case "suma":
        resultado_Ejercicio2 = numero1_Ejercicio2 + numero2_Ejercicio2;
        break;
    case "resta":
        resultado_Ejercicio2 = numero1_Ejercicio2 - numero2_Ejercicio2;
        break;
    case "multiplicación":
        resultado_Ejercicio2 = numero1_Ejercicio2 * numero2_Ejercicio2;
        break;
    case "división":
        resultado_Ejercicio2 = numero1_Ejercicio2 / numero2_Ejercicio2;
        break;
    default:
        console.log("Operación no válida.");
}

resultado = Number.parseFloat(resultado.toFixed(2));
console.log(`El resultado de ${operacion} de ${numero1_Ejercicio2} y ${numero2_Ejercicio2} es ${resultado_Ejercicio2}`);

//Ejercicio 3
let numero_Ejercicio3= parseInt(prompt("Ingresa un número para multiplicarlo del 1 al 10:"))

if (!NaN(numero_Ejercicio3)){
    for (let i=1;i<=10; i++){
        let producto_Ejercicio3 = numero_Ejercicio3 * i;
        let producto_Ejercicio3ToString= producto_Ejercicio3.toString();
        console.log(`${numero_Ejercicio3} * ${i} = ${producto_Ejercicio3ToString}`);
    }
} else {
    console.log("No has ingresado un número válido");
}