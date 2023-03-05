//Encontrar el número mayor dentro de un array

function maxNumber(){
  let myarray = [3, 5, 4, 8, 1 ]
  let maxima = 0
  let tamano = myarray.length

  for(i=0; i < tamano; i++) {
    if(myarray[i] > maxima) {
      maxima = myarray[i]
    }
  }

  console.log("MAYOR NÚMERO DENTRO DE UN ARRAY [3 5 4 8 1] es: "+maxima)
}

maxNumber()





