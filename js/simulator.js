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

    let reducer = (accumulator, currentValue) => accumulator + currentValue;

    let ingresos = [ parseFloat(igsueldo.value) , parseFloat(igservicios.value) , parseFloat(igprofesionales.value) , parseFloat(igpensiones.value) , parseFloat(iginversiones.value) , parseFloat(igotros.value)]
    let sumaingresos = ingresos.reduce(reducer)
    toingresos.innerHTML = sumaingresos;

    let gastoscorrientes = [parseFloat(gaalquiler.value),parseFloat(gahogar.value),parseFloat(gaalimentacion.value),parseFloat(gaeducacion.value),parseFloat(gaotros.value)]
    console.log( gastoscorrientes );
    let sumagastos = gastoscorrientes.reduce(reducer);
    togastos.innerHTML = sumagastos;

    let totaldeudas = [parseFloat(depagos.value ),parseFloat(deprestamos.value),parseFloat(defacturas.value),parseFloat(dehipoteca.value),parseFloat(deotros.value)]
    let sumadeudas = totaldeudas.reduce(reducer);
    todeudas.innerHTML = sumadeudas;
    
})

