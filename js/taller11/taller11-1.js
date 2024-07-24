// 1. Escribe un programa que tome dos números como entrada y muestre el mayor
// de los dos.

let dato1 = prompt('Ingrese un numero');
let dato2 = prompt('Ingrese otro numero');

dato1 = Number(dato1);
dato2 = Number(dato2);

if(dato1 >  dato2) {
    alert('El mayor número es: ' + dato1);
} else if(dato2 >  dato1) {
    alert('El mayor número es: ' + dato2);
} else {
    alert('Los dos numeros son iguales');
}