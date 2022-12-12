

let nombre = "Esdras"; 



console.log(nombre)

function nomb (nombre) {

    let nombreInvertido ="";

    for (let index = nombre.length ; index >= 0 ; index--) {
        
     let  letra = nombre.charAt(index);

      nombreInvertido = nombreInvertido + letra;
    }

    return nombreInvertido;

} 


