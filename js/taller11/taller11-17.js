// Escribe un programa que muestre el factorial de un número dado.
alert(' punto 17: Escribe un programa que muestre el factorial de un número dado.')

let numero = parseInt(prompt("Ingresa un número para calcular su factorial:"), 10);

let factorial = 1;

if (!isNaN(numero) && numero >= 0) {
  for (let i = 1; i <= numero; i++) {
    factorial *= i; // Multiplica el valor actual de factorial por i
  }
  
  alert('El factorial de ' + numero + ' es: ' + factorial);
} else {
  alert('Por favor, ingresa un número entero no negativo.');
}
