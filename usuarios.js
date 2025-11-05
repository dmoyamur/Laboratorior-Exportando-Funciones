import { ROLES } from "./usuariosConstantes.js";


function crearUsuario (nombre, rol){
    if (rol !== ROLES.ADMIN && rol !== ROLES.CLIENTE){
        console.log("Ingrese un rol valido: admin o cliente")
        return null;
    }

    const fecharegistro = new Date().toLocaleDateString();

    const usuario = {
        nombre : nombre,
        rol : rol,
        fecharegistro:fecharegistro
    };
    
    return usuario;
}


let usuario1 = crearUsuario("Juan",ROLES.ADMIN)
console.log(usuario1)