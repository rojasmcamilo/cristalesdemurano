let calcular = document.querySelector("#submit");
let igsueldo = document.querySelector("#igsueldo");
let igservicios = document.querySelector("#igservicios ");
let igprofesionales = document.querySelector("#igprofesionales ");
let igpensiones = document.querySelector("#igpensiones");
let iginversiones = document.querySelector("#iginversiones");
let igotros = document.querySelector("#igotros");
let igresult = document.querySelector("#igresult");



calcular.addEventListener("click", function(e){
    console.log("Hola estoy uncionado ");
    e.preventDefault(),
    igresult.innerHtml = igsueldo.value.parseInt()+igservicios.value.parseInt()+igprofesionales.value+igpensiones.value+iginversiones.value+igotros.value
})