function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    } else{
        return false
    }
}

function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function (sumandoLista=0, nuevoElemento){
            return sumandoLista + nuevoElemento
        }
    )
    return sumaLista/lista.length
}

function calcularMediana (listaNumeros){
    listaNumeros = listaNumeros.sort(function(a, b) {
        return a - b;
      });
    const listaMitad = parseInt(listaNumeros.length/2)

    let mediana;
    if(esPar(listaNumeros.length)){
        const elemento1 = listaNumeros[listaMitad-1]
        const elemento2 = listaNumeros[listaMitad]
    
        const promedioPar = calcularPromedio([elemento1, elemento2]);
        mediana = promedioPar;
    
    } else {
        mediana = listaNumeros[listaMitad];
    }
    return mediana
}
 
//interactuando con html
function calcularMediana_btn(){
    const input = document.getElementById("mediana")
    const value = input.value
    const array = value.split(',').map(Number); 

    const mediana = calcularMediana(array);
    document.getElementById("mediana_btn").innerHTML=mediana
}