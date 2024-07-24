// Escribe un programa que tome tres números como entrada y determine cuál es el número del medio.

alert('Punto 8: Escribe un programa que tome tres números como entrada y determine cuál es el número del medio.')

let opcion1 = prompt('Ingrese un numero')
let opcion2 = prompt('Ingrese un numero')
let opcion3 = prompt('Ingrese un numero')

let numeroDelMedio;

opcion1 = Number(opcion1)
opcion2 = Number(opcion2)
opcion3 = Number(opcion3)
    //   5      1                  9
if(opcion1 < opcion2 && opcion1 > opcion3 || opcion1 > opcion2 && opcion1 < opcion3){
    numeroDelMedio = opcion1 
    alert('El numero del medio es ' + numeroDelMedio)
} else if(opcion2 < opcion1 && opcion2 > opcion3 || opcion2 > opcion1 && opcion2 < opcion3){
    numeroDelMedio = opcion2 
    alert('El numero del medio es ' + numeroDelMedio)
} else if(opcion3 < opcion2 && opcion3 > opcion1 || opcion3 > opcion1 && opcion3 < opcion2){
    numeroDelMedio = opcion3 
    alert('El numero del medio es ' + numeroDelMedio)
} else {
    alert('Caracter incorrecto')
}