let inputEmail = document.getElementById("email");
let formulario = document.getElementById("formulario");
const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}


inputEmail.addEventListener("keyup", () => {

    let expresion = expresiones.correo.test(inputEmail.value)

    if(expresion){
        formulario.classList.remove("formulario__incorrecto");
    }else{
        formulario.classList.add("formulario__incorrecto");
    }

})





