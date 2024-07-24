// Escribe un programa que tome una letra como entrada y determine si es vocal o consonante.

alert('Punto 4: Escribe un programa que tome una letra como entrada y determine si es vocal o consonante.')

let vocal = prompt('Ingrese solo una letra');

if(vocal === 'a' || vocal === 'e' || vocal === 'i' || vocal === 'o' || vocal === 'u') {
    alert('Tu letra es una Vocal')
} else {
    alert('Tu letra es una consonante')
}