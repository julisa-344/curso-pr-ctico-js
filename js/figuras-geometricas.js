// Este es el código del cuadrado
console.group("Cuadrado")
function perimetroSquare(ladoSquare){
    return ladoSquare*4
}
perimetroSquare();
function areaSquare(ladoSquare){
    return ladoSquare*ladoSquare;
}
areaSquare();
console.groupEnd();

// Este es el código del triángulo
console.group("Triángulo")

function perimetrotriangulo(ladoA, ladoB, base){
    return ladoA + ladoB + base
} 
function alturaIsoceles(ladoA, ladoB, base){
    if (ladoA != ladoB) {
        alert("El triángulo no es isosceles.");
    } else {
        return Math.sqrt(ladoA*ladoA-((base*base)/4))
    }
}
function areatriangulo(ladoA, ladoB, base){
    const altura = alturaIsoceles(ladoA, ladoB, base)
    return (base*altura)/2
}

console.groupEnd();

// Este es el código del círculo
console.group("Círculo")
const pi = Math.PI;
function diametroCirculo(radio){
    return radio*2
}
function perimetrocirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro*pi
}

function areacirculo(radio){
    return (radio*radio)*pi
}
console.groupEnd();

// Interactuamos con HTML
//cuadrado
function calcularPerimetroSquare(){
    const input = document.getElementById("InputCuadrado"); // llamamos a todo el input
    const value = input.value; //Con esta variable solo pbtenemos el valor del input

    const perimetro = perimetroSquare(value)
    document.getElementById('cont1').innerText= perimetro + "cm";
}

function calcularAreaSquare(){
    const input = document.getElementById("InputCuadrado"); // llamamos a todo el input
    const value = input.value; //Con esta variable solo pbtenemos el valor del input

    const area = areaSquare(value)
    document.getElementById('cont1').innerText= area + "cm²";
}
//triángulo
function calcularPerimetroTriangulo() {
    const inputLadoA = document.getElementById("InputTrianguloLadoA");
    const valueLadoA = parseInt(inputLadoA.value)
    const inputLadoB = document.getElementById("InputTrianguloLadoB");
    const valueLadoB = parseInt(inputLadoB.value)
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = parseInt(inputBase.value)

    const perimetro = perimetrotriangulo(valueLadoA, valueLadoB, valueBase)
    document.getElementById('cont2').innerHTML= perimetro + "cm";
}
function calcularAreaTriangulo() {
    const inputLadoA = document.getElementById("InputTrianguloLadoA");
    const valueLadoA = parseInt(inputLadoA.value)
    const inputLadoB = document.getElementById("InputTrianguloLadoB");
    const valueLadoB = parseInt(inputLadoB.value)
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = parseInt(inputBase.value)
    // const inputAltura = document.getElementById("InputTrianguloAltura");
    // const valueAltura = parseInt(inputAltura.value)

    const area = areatriangulo(valueLadoA, valueLadoB, valueBase).toFixed(2)
    document.getElementById('cont2').innerHTML= area + "cm²";
}
//circulo
function calcularPerimetroCirculo(){
    const input  = document.getElementById("InputCirculo");
    const value = parseInt(input.value);

    const perimetro = perimetrocirculo(value).toFixed(2);
    document.getElementById('cont3').innerHTML= perimetro + "cm";
}

function calcularAreaCirculo(){
    const input  = document.getElementById("InputCirculo");
    const value = parseInt(input.value);

    const area =  areacirculo(value).toFixed(2);
    document.getElementById('cont3').innerHTML= area + "cm²";
}