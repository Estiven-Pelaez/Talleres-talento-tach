// Declara una variable llamada distanciaKm y asígnale un valor numérico que represente una distancia en kilómetros, convierte la distancia a metros, centímetros y millas utilizando las fórmulas de conversión, y muestra los resultados de las conversiones en ventanas de alerta.
 let distanciaKm = 32;

 alert('Punto 11: Declara una variable llamada distanciaKm y asígnale un valor numérico que represente una distancia en kilómetros, convierte la distancia a metros, centímetros y millas utilizando las fórmulas de conversión, y muestra los resultados de las conversiones en ventanas de alerta.')
alert('km: ' + distanciaKm);

let distanciaMetros = distanciaKm * 1000;
let distanciaCentimetros = distanciaKm * 100000;
let distanciaMillas = distanciaKm * 0.621371;

alert('Distancia en metros: ' + distanciaMetros);
alert('Distancia en centímetros: ' + distanciaCentimetros);
alert('Distancia en millas: ' + distanciaMillas);