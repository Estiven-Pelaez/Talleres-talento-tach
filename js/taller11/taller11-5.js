// Escribe un programa que tome un número como entrada y determine si es par o impar.

alert('Punto 5: Escribe un programa que tome un número como entrada y determine si es par o impar.')

let numero = prompt('Ingese un numero')

numero = Number(numero)

if( numero % 2 === 0) {
    alert('Tu numero es par')
} else {
    alert('Tu numero es impar')
}