/* DESTRUCTURACIÓN DE OBJETOS */
let avenger = {
    nombre: "Steve",
    clave: "Capitan América",
    poder: "Super Soldado"
}
/* Sin destructuración
let nombre = avenger.nombre;
let clave = avenger.clave;
let poder = avenger.poder;
 */

 let { nombre, clave, poder } = avenger; //No deben haber tipos, ya el objeto se los dá

 console.log(nombre, clave, poder);

 /* DESTRUCTURACIÓN DE ARRAYS */

 let avengers:string[] = ["Thor", "Steve", "Tony"];

 let [ , capi, ironman] = avengers;

 console.log(capi, ironman);

//Intercambios de variables
[avengers[0], avengers[1]] = [avengers[1], avengers[0]]; //["Steve", "Thor", "Tony"]


