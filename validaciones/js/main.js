let btnEnviar = document.getElementById("btnEnviar");
   l
btnEnviar.addEventListener("click", function(event){
    event.preventDefault();

    let exampleFormControlInput1 = document.getElementById("exampleFormControlInput1");
    let exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1");
    let exampleFormControlTextarea2 = document.getElementById("exampleFormControlTextarea2");
    let alertError = document.getElementById("alertError");

    exampleFormControlTextarea1.value = exampleFormControlTextarea1.value.trim();
    alertError.style.display="none";
    alertError.innerHTML="";

    if(exampleFormControlTextarea1.value.trim().replaceAll(" ","").length < 20){
        alertError.innerHTML="El mensaje debe contener 20 caracteres o más.";
        alertError.style.display="block";
        exampleFormControlTextarea1.focus();
        exampleFormControlTextarea1.selec();
    }//if

    if(exampleFormControlInput1.value.match(emailRegex) == null){
        alertError.style.display="block";
        alertError.innerHTML += "<br/> El correo electronico no es válido.";
    }

    let RFCRegex =/ / ;
    if(exampleFormControlInput1.value.match(RFCRegex) == null){
        alertError.style.display="block";
        alertError.innerHTML += "<br/> El RFC no es válido.";
    }
    
});