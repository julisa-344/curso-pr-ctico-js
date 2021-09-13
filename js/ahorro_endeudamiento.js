function capacidadAhorroEndeudamiento(){
    return (ingresos + otrosIngresos) - (gfSerVacicos+gfAlemntacion+gfMobilidad+gfCasa+gfDeudas+gv)
}

function calcularAhorroEndeudamiento_btn(){
    const ingresosInput = document.getElementById("ingresos");
    const valueIngresos = parseInt(ingresosInput.value)

    const otrosIngresosInput = document.getElementById("ingresosOtros");
    const valueotrosIngresos = parseInt(otrosIngresosInput.value)


    const gfSerVacicosInput = document.getElementById("serviciosbasicos");
    const valuegfSerVacicos = parseInt(gfSerVacicosInput.value)

    const gfAlemntacionInput = document.getElementById("alementacion");
    const valuegfAlemntacion = parseInt(gfAlemntacionInput.value)

    const gfMobilidadInput = document.getElementById("mobilidad")
    const valuegfMobilidad = parseInt(gfMobilidadInput.value);

    const gfCasaInput = document.getElementById("casa");
    const valuegfCasa = parseInt(gfCasaInput.value);

    const gfDeudasInput = document.getElementById("deudas");
    const valuegfDeudas = parseInt(gfDeudasInput.value);

    const gvInput = document.getElementById("gastosOtros"); 
    const valuegv = parseInt(gvInput.value);


    const capacidad = (valueIngresos + valueotrosIngresos) - (valuegfSerVacicos+valuegfAlemntacion+valuegfMobilidad+valuegfCasa+valuegfDeudas+valuegv)

    if (capacidad>=1){
        document.getElementById('ahorroDeuda').innerHTML= `Tienes una capacidad de ahorro de ${capacidad} por mes.`;
    } else {
        const endeudamiendo = capacidad*-1
        document.getElementById('ahorroDeuda').innerHTML= `Estas gastando más de lo que ganas, su capacidad de endeudamiento es de ${endeudamiendo}$ por mes.` ;
    }
}