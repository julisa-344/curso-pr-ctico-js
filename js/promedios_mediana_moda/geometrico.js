//promedio Geométrico

function promedioGeometrico(lista){
    const multiplicacion = lista.reduce(
        function(multiplicando=1, nuevo){
            return multiplicando * nuevo
        }
    )
    return  Math.pow(multiplicacion, 1 / lista.length);
}
 //interactuando con html
function calcularMediaGeometrica_btn(){
    const input = document.getElementById("media_geometrica")
    const value = input.value
    const array = value.split(',').map(Number);
    const mediaG = promedioGeometrico(array);
    document.getElementById("mediaG").innerHTML=mediaG
}


//promedioArmónico

function calcularPromedioArmonico(lista){
    const invertir = lista.map(
        function(a){
            return 1/a
        }
    )
    const suma = invertir.reduce(
        function(a,b){
            return a+b
        }
    )
    return lista.length/suma
}

  //interactuando con html

function calcularMediaArmonica_btn(){
    const input = document.getElementById("media_armonica")
    const value = input.value
    const array = value.split(',').map(Number);
    const mediaAr = calcularPromedioArmonico(array);
    document.getElementById("mediaAr").innerHTML=mediaAr
}