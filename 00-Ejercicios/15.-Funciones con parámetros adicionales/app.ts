function activar( quien:string, objeto:string = "batiseñal", momento?:string ){

    let mensaje:string;

    if(momento){
        mensaje = `${quien} activó la ${ objeto } en la ${momento}`
    }else{
        mensaje = `${quien} activó la ${ objeto }`        
    }
}
/* 
- quien es un parámetro obligatorio,
- objeto es un parámetro obligatorio y con un valor por defecto
- momento es un parámetro opcional (como lo hace cualquier parámetro en javascript)
 */
activar("Gordon");