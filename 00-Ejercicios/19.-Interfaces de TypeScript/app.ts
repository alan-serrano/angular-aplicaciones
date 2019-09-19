//Interfaces
interface Xmen{
    nombre:string,
    poder: string
}

function enviarMision(xmen:Xmen) {
    // Si trato de llamar a una variable del objeto xmen que no sea ni "nombre", ni "poder", TSC me mostraría un error
    console.log(`Enviando a: ${xmen.nombre}`);    
};


let wolverine = {
    nombreXmen: "Tormenta",
    poder: "crear tormentas"
}


enviarMision(wolverine) //La función da error porque "wolverine" no es del tipo Xmen (Interfaz xmen)

