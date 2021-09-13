function calcularModa (lista){
    const listaContador = {};
    lista.map(
        function(numero){
            if (listaContador[numero]) {
                listaContador[numero] += 1;
            }else {
                listaContador[numero] = 1;
            }
        }
    )
    const listaArray = Object.entries(listaContador)//convertir a array
    .sort( 
        function(a, b){
            return a[1] - b [1]// porque del array quiero cuantas veces se repite(el que está en la posición 1) no el contador(posicion 0)
        }
    )
    const moda = listaArray[ listaArray.length-1 ]
    return  moda
}

//interactuando con html
function calcularModa_btn(){
    const input = document.getElementById("moda")
    const value = input.value
    const array = value.split(',').map(Number); 

    const moda_btn = calcularModa(array);
    document.getElementById("moda--btn").innerHTML="Moda: "+moda_btn[0]+", y se repite: "+moda_btn[1] + "veces."
}