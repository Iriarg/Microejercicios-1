// programa que escriba en la pantalla un texto que diga “Hello World”.

document.write("Hello World");

// programa que escriba en la pantalla el resultado de sumar 3 + 5

document.write(3+5);

// programa que pida el nombre del usuario con un prompt 
// o utilizando un input y escriba un texto que diga “Hola Iria"

var nombre = prompt("Escribe tu nombre");
document.write("Hola "+nombre);

// programa que pida un número, pida otro número y escriba el resultado de sumar estos dos números

var n1 = prompt("Escribe un número");
var n2 = prompt("Escribe otro número");
document.write("La suma es: "+ ( parseInt(n1)+ parseInt(n2) ) );