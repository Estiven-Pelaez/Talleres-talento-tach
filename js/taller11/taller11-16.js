// Escribe un programa que muestre la suma de los números del 1 al 10.
alert('punto 16: Escribe un programa que muestre la suma de los números del 1 al 10.')

// Pide al usuario que ingrese un número
let numero = parseInt(prompt("Ingresa un número para mostrar su tabla de suma del 1 al 10:"), 10);

// Inicializa una cadena para almacenar la tabla de suma
let tablaSuma = 'Tabla de suma para el número ' + numero + ':\n\n';

// Verifica si el número ingresado es válido
if (!isNaN(numero)) {
  // Utiliza un bucle para generar la tabla de suma
  for (let i = 1; i <= 10; i++) {
    // Calcula la suma de número y i y agrega el resultado a la tabla
    tablaSuma += numero + ' + ' + i + ' = ' + (numero + i) + '\n';
  }
  
  // Muestra la tabla de suma en una ventana de alerta
  alert(tablaSuma);
} else {
  // Muestra un mensaje de error si el número ingresado no es válido
  alert('Por favor, ingresa un número válido.');
}
