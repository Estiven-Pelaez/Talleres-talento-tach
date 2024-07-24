// 2. Escribe un programa que tome tres números como entrada y muestre el menor de los tres.

alert('Punto 2: Escribe un programa que tome tres números como entrada y muestre el menor de los tres.');

let numero1 = prompt('Ingrese un numero');
let numero2 = prompt('Ingrese otro numero');
let numero3 = prompt('Ingrese otro numero');

let numeroMenor;

numero1 = Number(numero1);
numero2 = Number(numero2);
numero3 = Number(numero3);

if(numero1 <= numero2 && numero1 <= numero3) {
    numeroMenor = numero1 
    alert('El numero menor es: ' + numeroMenor);
} else if(numero2 <= numero1 && numero2 <= numero3){
    numeroMenor = numero2
    alert('El numero menor es: ' + numeroMenor);
} else if(numero3 <= numero1 && numero3 <= numero2){
    numeroMenor = numero3
    alert('El numero menor es: ' + numeroMenor);
} else {
    alert('Los numeros son iguales')
}