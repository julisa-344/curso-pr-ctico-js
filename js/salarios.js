//--------------salarios

const peru = [];
peru.push({
    name: "Leonela",
    salary: 1200
})
peru.push({
    name: "Alexis",
    salary: 1500,
  });
  peru.push({
    name: "Julisa",
    salary: 1500,
  });
  peru.push({
    name: "Luisa",
    salary: 1800,
  });
  peru.push({
    name: "Laura",
    salary: 1000,
  });
  peru.push({
    name: "Daniela",
    salary: 2200,
  });
  peru.push({
    name: "Esperancita",
    salary: 200,
  });
  peru.push({
    name: "Carla",
    salary: 500,
  });
  peru.push({
    name: "Antonieta",
    salary: 1500,
  });
  peru.push({
    name: "Alicia",
    salary: 1300,
  });
  peru.push({
    name: "Ana",
    salary: 2400,
  });
  peru.push({
    name: "Julia",
    salary: 3400,
  });
  peru.push({
    name: "Rosa",
    salary: 400,
  });
  peru.push({
    name: "Angélica",
    salary: 400,
  });
  peru.push({
    name: "Tatiana",
    salary: 400,
  });
  peru.push({
    name: "Lorena",
    salary: 600,
  });
  peru.push({
    name: "Carolina",
    salary: 1600,
  });
  peru.push({
    name: "Fernanda",
    salary: 2600,
  });
  peru.push({
    name: "Nora",
    salary: 1000,
  });
  peru.push({
    name: "Gisselle",
    salary: 2000,
  });
  peru.push({
    name: "Bill Gates",
    salary: 100000000,
  });

  //-----------análisis

  //FUNCIONES HELPER 
  function esPar(numerito){
    return (numerito%2 === 0)
}

function calcularPromedio(lista){
  const sumaLista = lista.reduce(
      function (sumandoLista=0, nuevoElemento){
          return sumandoLista + nuevoElemento
      }
  )
  return sumaLista/lista.length
}

//MEDIANA GENERAL
  const salariosPe = peru.map(
      function(personita){
          return personita.salary
      }
  );

  const salariosOrdenados = salariosPe.sort(
      function(a, b){
          return a-b
      }
  );

function calcularMediana (listaNumeros){
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

calcularMediana(salariosOrdenados)

//MEDIANA DEL TOP 10%
// const spliceStart = parseInt((salariosOrdenados.length*90)/100);
// const spliceCount = salariosOrdenados.length - spliceStart

// const salariosPeTop10 = salariosOrdenados.splice(spliceStart, spliceCount);
//sin modificar el array original
const sliceStart = parseInt((salariosOrdenados.length*90)/100);
const sliceCount = salariosOrdenados.length

const salariosPeTop10 = salariosOrdenados.slice(sliceStart, sliceCount);

const medianaTop10 = calcularMediana(salariosPeTop10)