// Ejercicio 10 punto 1
let nombre = 'Stiven Pelaez ';
let edad = 24;
document.write('punto 1: Declara una variable llamada nombre y asígnale tu nombre, declara una variable llamada edad y asígnale tu edad, e imprime el valor de las variables utilizando document.write().' + '<br>' + 'Solucion: ' + nombre + edad + '<br>' + '<br>');

// Ejercicio 10 punto 2
let esEstudiante = true;
let estatura = 1.72
document.write('Punto 2: Declara una variable llamada esEstudiante y asígnale un valor booleano (true o false), declara una variable llamada altura y asígnale un valor numérico, e imprime los tipos de datos de las variables utilizando typeof.' + '<br>')
document.write('Solucion:' + '<br>' + typeof esEstudiante + '<br>' + typeof estatura +'<br>' + '<br>');

// Ejercicio 10 punto 3
const pi = 3.14159;
document.write(pi +'<br>' +'<br>');

// Ejercicio 10 punto 4
let a = 48;
let b = 99;

let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;
let modulo = a % b;

document.write( 'Punto 4: Declara dos variables llamadas a y b y asígnales valores numéricos, realiza las operaciones aritméticas de suma, resta, multiplicación, división y módulo con a y b, y muestra los resultados en ventanas de alerta.' + '<br>' + 'Solucion:' + '<br>' + 'Suma: ' + suma +  '<br>' + 'Resta: ' + resta + '<br>' + 'Multiplicacion: ' + multiplicacion + '<br>' + 'Division: ' + division + '<br>' + 'Modulo: ' + modulo +'<br>' + '<br>');

// Ejercicio 10 punto 5
let x = 10;
document.write('Punto 5: Declara una variable llamada x y asígnale el valor 10, utiliza los operadores de asignación +=, -=, *=, /= y %= para modificar el valor de x, e imprime el valor final de x utilizando document.write().' + `El valor inicial de x es: ${x}<br>`);

x += 5;
document.write(`Después de x += 5: ${x}<br>`);

x -= 3;
document.write(`Después de x -= 3: ${x}<br>`);

x *= 4;
document.write(`Después de x *= 4: ${x}<br>`);

x /= 2;
document.write(`Después de x /= 2: ${x}<br>`);