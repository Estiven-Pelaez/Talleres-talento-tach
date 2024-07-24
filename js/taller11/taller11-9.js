// Escribe un programa que tome una calificación como entrada y determine si es A, B, C, D o F.

alert('Punto 9: Escribe un programa que tome una calificación como entrada y determine si es A, B, C, D o F.')

let puntaje = prompt('Del 1 al 5 que calificacion le darias al trabajo?');

puntaje = Number(puntaje);

let calificación; 

if(puntaje >= 0 && puntaje <= 1){
    puntaje = 'F'
    alert('Tu calificacion es :' + puntaje);
} else if(puntaje >= 1 && puntaje <= 2){
    puntaje = 'D'
    alert('Tu calificacion es :' + puntaje);
} else if(puntaje >= 2 && puntaje <= 3){
    puntaje = 'C'
    alert('Tu calificacion es :' + puntaje);
} else if(puntaje >= 3 && puntaje <= 4){
    puntaje = 'B'
    alert('Tu calificacion es :' + puntaje);
} else if(puntaje >= 5){
    puntaje = 'A'
    alert('Tu calificacion es :' + puntaje);
} else {
    alert('Caracter invalido');
}