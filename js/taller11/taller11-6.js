// Escribe un programa que tome un número como entrada y determine si es positivo, negativo o cero.

alert('Punto 6: Escribe un programa que tome un número como entrada y determine si es positivo, negativo o cero.')

let numero = prompt('Ingrese un numero')
numero = Number(numero)

if(numero > 0) {
    alert('El numero es positivo')
} else if(numero < 0){
    alert('El numero es negativo')
} else {
    alert('El numero es 0')
}