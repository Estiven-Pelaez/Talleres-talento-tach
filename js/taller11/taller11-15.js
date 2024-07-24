// Escribe un programa que muestre la tabla de multiplicar de un número dado.
alert('Punto 15: Escribe un programa que muestre la tabla de multiplicar de un número dado.')

let numero = prompt('Ingrese un numero para ver su tabla de multiplicar')
numero = Number(numero);

for (let i = 1; i <= 10; i++){
    alert(numero + ' x' + i + ' = ' + (numero*i))
}