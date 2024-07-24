// Escribe un programa que tome la edad de una persona como entrada y determine si es mayor de edad o no  +.

alert('Punto 3: Escribe un programa que tome la edad de una persona como entrada y determine si es mayor de edad o no.')

let edad = prompt('Ingresa tu edad')

edad = Number(edad);

if(edad >= 18) {
    alert('Eres mayor de edad')
} else if(edad <= 18) {
    alert('Eres menor de edad')
} else {
    alert('Caracter ivalido :(')
}