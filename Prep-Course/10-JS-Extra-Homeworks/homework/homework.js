// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let arreglo = [];
  for( let x in objeto){
    arreglo.push([x, objeto[x]]);
  }
  return arreglo;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    if(Object.keys(obj).includes(string[i])){
      obj[string[i]] += 1;
    } 
    else 
      obj[string[i]]= 1;  
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let may = '';
  let min = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()){
      may = may + s[i];
    }
    else 
      min = min + s[i];
  }
  
  return may + min;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let frase = str.split(' ').map(function(palabra){
    return palabra.split('').reverse().join('')
  }).join(' ');
  return frase;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numeroString = numero.toString();
  var valor = true;
  let numeroArray = numeroString.split('');
  while(valor && (numeroArray.length  > 1)){
    valor = (numeroArray.pop() === numeroArray.shift());
  }
  if (valor) return 'Es capicua';
  else return 'No es capicua'
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let arrayCadena = '';
  for (let i = 0; i < cadena.length; i++){
    if ((cadena[i] === 'a') || 
        (cadena[i] === 'b') ||   
        (cadena[i] === 'c')) {
          continue;
    } 
    arrayCadena += cadena[i];
  }
  return arrayCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let arrayOrdenado = arr.sort(function(a,b){
    if (a.length > b.length) {
      return 1;
    }
    if (a.length < b.length) {
      return -1;
    }
    return 0;
  });                    
  return arrayOrdenado;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let arrayUnion = [];
  let j = 0;
  if (arreglo1.length > arreglo2.length){
    for(let i = 0; i <= arreglo2.length; i++){
      if(arreglo1.includes(arreglo2[i])){
        arrayUnion[j]= arreglo2[i];
        j++;
      } 
  }
  }else for(let i = 0; i < arreglo1.length; i++){
    if(arreglo2.includes(arreglo1[i])){
      arrayUnion[j] = arreglo1[i];
      j++;
    } 
}
return arrayUnion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
