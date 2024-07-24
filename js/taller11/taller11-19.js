// Escribe un programa que muestre los divisores de un número dado.
alert('Punto 19: Escribe un programa que muestre los divisores de un número dado.')

let numero = parseInt(prompt("Ingresa un número para mostrar sus divisores:"), 10);

if (!isNaN(numero) && numero > 0) {
  let divisores = '';
  
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) { 
      divisores += i + ' '; 
    }
  }
  
  alert('Los divisores de ' + numero + ' son: ' + divisores);
} else {
  alert('Por favor, ingresa un número entero positivo.');
}
