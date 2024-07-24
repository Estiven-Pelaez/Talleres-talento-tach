// Escribe un programa que tome dos números como entrada y determine si son iguales o diferentes.

alert( 'Punto 7: Escribe un programa que tome dos números como entrada y determine si son iguales o diferentes.')

let numero1 = prompt('Ingrese un numero')
let numero2 = prompt('Ingrese otro numero')

numero1 = Number(numero1)
numero2 = Number(numero2)

if (numero1 === numero2) {
    alert('Los numeros son iguales')
} else {
    alert('Los numeros son diferentes')
}