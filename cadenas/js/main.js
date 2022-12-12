let nombre = "Esdras" ;
nombre = nombre.toUpperCase();
let letraa="";
let contFinal = 0;



for (let contador = 0; contador < nombre.length ; contador++){
     let letra = nombre.charAt(contador)
        console.log(letra);
        let conTemp = 1;

    for (let index = contador + 1; index < nombre.length; index++) {
          if ( letra == nombre.charAt(index) )
          {
             conTemp++;
          }   
          
          if (conTemp > contFinal){
            contFinal=conTemp;
            letraa = nombre.charAt(contador);
          }
    }
}
    
       console.log(letraa, contFinal);