// Escribe un programa que muestre la secuencia de Fibonacci hasta el décimo término.
alert('Punto 18: Escribe un programa que muestre la secuencia de Fibonacci hasta el décimo término.')

let a = 0;
let b = 1;

alert(a); 
alert(b); 

for (let i = 3; i <= 10; i++) {
  let siguiente = a + b; 
  alert(siguiente); 
  
  a = b;
  b = siguiente;
}
