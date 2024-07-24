// Escribe un programa que tome un número del 1 al 7 como entrada y muestre el día de la semana correspondiente.

alert('Punto 10: Escribe un programa que tome un número del 1 al 7 como entrada y muestre el día de la semana correspondiente.')

let diaSemana = prompt('Segun tu dia de la semana favorito ingresa un numero del 1 al 7')
diaSemana = Number(diaSemana);

let dia;

if(diaSemana === 1){
    dia = 'Lunes'
    alert('Tu dia favorito de la semana es: ' + dia)
} else if(diaSemana === 2){
    dia = 'Martes'
    alert('Tu dia favorito de la semana es: ' + dia)
} else if(diaSemana === 3){
    dia = 'Miercoles'
    alert('Tu dia favorito de la semana es: ' + dia)
} else if(diaSemana === 4){
    dia = 'Jueves'
    alert('Tu dia favorito de la semana es: ' + dia)
} else if(diaSemana === 5){
    dia = 'Viernes😏'
    alert('Tu dia favorito de la semana es: ' + dia)
} else if(diaSemana === 6){
    dia = 'Sabado😈'
    alert('Tu dia favorito de la semana es: ' + dia)
} else if(diaSemana === 7){
    dia = 'Domingo🥳'
    alert('Tu dia favorito de la semana es: ' + dia)
} else {
    alert('Valor incorrecto')
}