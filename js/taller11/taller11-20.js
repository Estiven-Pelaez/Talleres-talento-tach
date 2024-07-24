// Escribe un programa que muestre el número de vocales y consonantes en una cadena de texto dada.
alert('punto 20: Escribe un programa que muestre el número de vocales y consonantes en una cadena de texto dada.')

let texto = prompt("Ingresa una cadena de texto para contar vocales y consonantes:");

let conteoVocales = 0;
let conteoConsonantes = 0;

texto = texto.toLowerCase();

const vocales = "aeiou";

for (let i = 0; i < texto.length; i++) {
  let caracter = texto[i];

  if (caracter >= 'a' && caracter <= 'z') {
    if (vocales.includes(caracter)) {
      conteoVocales++;
    } else {
      conteoConsonantes++;
    }
  }
}

alert('Número de vocales: ' + conteoVocales + '\nNúmero de consonantes: ' + conteoConsonantes);
