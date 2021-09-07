let calcular = document.querySelector("#submit");
let igsueldo = document.querySelector("#igsueldo");
let igservicios = document.querySelector("#igservicios");
let igprofesionales = document.querySelector("#igprofesionales ");
let igpensiones = document.querySelector("#igpensiones");
let iginversiones = document.querySelector("#iginversiones");
let igotros = document.querySelector("#igotros");
let toingresos = document.querySelector("#toingresos");
let gaalquiler = document.querySelector("#gaalquiler");
let gahogar = document.querySelector("#gahogar");
let gaalimentacion = document.querySelector("#gaalimentacion");
let gaeducacion = document.querySelector("#gaeducacion");
let gaotros = document.querySelector("#gaotros");
let togastos = document.querySelector("#togastos");
let depagos = document.querySelector("#depagos");
let deprestamos = document.querySelector("#deprestamos");
let defacturas = document.querySelector("#defacturas");
let dehipoteca = document.querySelector("#dehipoteca");
let deotros = document.querySelector("#deotros");
let todeudas = document.querySelector("#todeudas");
let fineto = document.querySelector("#fineto");
let fideudas = document.querySelector("#fideudas");
let fiahorro = document.querySelector("#fiahorro");
let simulador = document.querySelector("#simulador");

calcular.addEventListener('click', function(e){ 
    e.preventDefault();
    alert("error");
    alert(igsueldo.value.parseInt());
    console.log(igsueldo.value.number());
    toingresos.innerHTML = igsueldo.value.number() +igservicios.value.number()+igprofesionales.value.number()+igpensiones.value.number() + iginversiones.value.number() + igotros.value.number()
})

