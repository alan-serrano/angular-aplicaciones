let miFuncion = function (a?:any) {
    return a;
}

let miFuncionF = (a?:any) => a;

console.log(miFuncion("Normal"), miFuncionF("Flecha"));

let miFuncion2 = function (a:number, b:number) {
    return a + b;
}

let miFuncion2F = (a:number, b:number) => a + b;

let miFuncion3 = function (nombre:string) {
    nombre = nombre.toUpperCase();
    return nombre;
}

let miFuncion3F = (nombre:string) => {
    nombre = nombre.toUpperCase();
    return nombre;
}