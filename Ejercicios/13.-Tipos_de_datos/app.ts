/***** TIPOS DE DATOS *****/

let nombres: string = 'Peter'; //string
let numero:number = 123; //number
let booleano:boolean = true; //boolean
let hoy:Date = new Date(); //object date
hoy = new Date('2020-10-21');

let cualquiera:any;// Permite cualquier valor, como JavaScript normal

cualquiera = nombres;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;

//Objetos

let spiderman= {
    nombre: "Peter",
    edad: 20
}

// No se pueden añadir nuevas llaves al objeto

/* spiderman.hola = "hola" ;*///Da error

/**** Template literals ES6*****/

let nombre:string = "Juan"
let apellido:string = "Perez";
let edad:number = 32;

let texto = "Hola, " + nombre + " " + apellido + "(" + edad + ")"; //Sin template literals

//Con template literals

texto = `Hola, 
${nombre} ${apellido} 
( ${edad} )`;

//Permite multilíneas, esto javaScript no lo hace automáticamente
