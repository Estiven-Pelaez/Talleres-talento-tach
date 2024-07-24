// Declara una variable llamada dolares y asígnale un valor numérico, convierte la cantidad de dólares a euros, libras esterlinas y yenes japoneses usando tasas de cambio, y muestra los resultados de las conversiones en ventanas de alerta.

let dolares = 100;

const tasaEuro = 0.85;
const tasaLibra = 0.75;
const tasaYen = 110;

let euros = dolares * tasaEuro;
let libras = dolares * tasaLibra;
let yenes = dolares * tasaYen;

alert('Punto 15: Declara una variable llamada dolares y asígnale un valor numérico, convierte la cantidad de dólares a euros, libras esterlinas y yenes japoneses usando tasas de cambio, y muestra los resultados de las conversiones en ventanas de alerta.')

alert('Dolares 100');

alert('Cantidad en euros: ' + euros.toFixed(2));
alert('Cantidad en libras esterlinas: ' + libras.toFixed(2));
alert('Cantidad en yenes japoneses: ' + yenes.toFixed(2));
