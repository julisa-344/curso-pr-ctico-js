
function calcularPromedio(lista){
    // let sumaLista = 0;

    // for(i=0; i<lista.length; i++){
    // sumaLista = sumaLista+lista[i]
    // } 
    // encapsular funciones
    const sumaLista = lista.reduce(
        function (sumandoLista=0, nuevoElemento){
            return sumandoLista + nuevoElemento
        }
    )
    return sumaLista/lista.length
}
//interactuando con html


function calcularMediaAritmetica_btn(){
    const input = document.getElementById("media_aritmetica")
    const value = input.value
    const array = value.split(',').map(Number); 

    const mediaA = calcularPromedio(array);
    document.getElementById("mediaA").innerHTML=mediaA
}