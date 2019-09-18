"use strict";
/***** TIPOS DE DATOS *****/
var nombres = 'Peter'; //string
var numero = 123; //number
var booleano = true; //boolean
var hoy = new Date(); //object date
hoy = new Date('2020-10-21');
var cualquiera; // Permite cualquier valor, como JavaScript normal
cualquiera = nombres;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;
//Objetos
var spiderman = {
    nombre: "Peter",
    edad: 20
};
// No se pueden añadir nuevas llaves al objeto
/* spiderman.hola = "hola" ;*/ //Da error
/**** Template literals ES6*****/
var nombre = "Juan";
var apellido = "Perez";
var edad = 32;
var texto = "Hola, " + nombre + " " + apellido + "(" + edad + ")"; //Sin template literals
//Con template literals
texto = "Hola, \n" + nombre + " " + apellido + " \n( " + edad + " )";
//Permite multilíneas, esto javaScript no lo hace automáticamente
