/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
//return array.pop();
   return array[array.length - 1];
   //return array.pop(); otra forma de realizar 
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
return array.length;

}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   for(let i = 0; < array.length; i++) {
      array[i] = array[i] +1;
   }
   return array;
   //return array.map(elem => elem + 1); otra manera de poder hacer 
   //return array.map(function (elem) {return elem + 1})
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array[array.length] = elemento

   return array; 
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var res = '' 
   for(var j = 0; j < palabras.length - 1; j++){
     res = res + palabras[j] + ''
   }

   return res + palabras.pop()

   //return palabras.join(' ');
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento)
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:

   var suma = 0;
   for (const num of arrayOfNums){
      suma = suma + num
   }
   return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   // suma total de los elementos entre el total de los elementos
   var suma = 0;
   for (const num of resultadosTest){
      suma = suma + num
   }
   return suma / resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var numeroMasGrande = arrayOfNums[0]
   arrayOfNums.forEach((numero) => {
      if(numero > numeroMasGrande) numeroMasGrande = numero
   })

   return numeroMasGrande;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length === 0) {return 0}
   if(arguments.length === 1) {return arguments}

   var resultado = 1;

   for(var i = 0; i < arguments.length; i++){
      resultado = resultado * arguments[i]
   }

   return resultado; 
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var contador = 0;

   for( var i = 0; i< array.length, i++) {
      if(array[i]>18){
         contador ++;
      }
   }

   return contador
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia === 1 || numeroDeDia === 7){
      return "Es fin de semana"
   }else{
      return "Es dia laboral"
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   const numStr = num.toSring()
   return numStr[0] === '9'
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   let current = array[0];
   for (let i = 1; i < array.length; i++) {
      if (current === array[i]) current = array[i]
      else return false
   }
   return true;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
  // const toCatch = ["Enero", "Marzo", "Noviembre"]

   //let contador = 0

   //for (let i = 0; i < array.length; i++) {
     // if (toCatch.includes(array[i])) contador ++
   
   //if (contador === 3) return toCatch
   //return "No se encontraron los meses pedidos";
const toCatch = []

for (let i = 0; i < array.length; i++) {
   if ( array[i] === "Enero" ) toCatch.push("Enero")
   if ( array[i] === "Marzo" ) toCatch.push("Marzo")
   if ( array[i] === "Noviembre" ) toCatch.push("Noviembre")
}
if (toCatch.length === 3) return toCatch
return "No se encontraron los meses pedidos"

}


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   const tablaSeis = []

   for(let i = 0; i <= 10; i++){
      tablaSeis.push(i * 6)
   } 
   return tablaSeis
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   const mayoresACien = []
   for (let num of array) {
      if ( num > 100 ) mayoresACien.push(num)
   }

   return mayorACien; 
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   const newArray = [];
   let wasBreak = false
   
   for ( let i = 0; i < 10; i++) {
      if ( num === i ) {
         wasBreak = true
         break 
      }
      newArray.push(num += 2)
   }

   if (wasBreak) return "Se interrumpió la ejecución"
   return newArray; 
   
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   const newArray = [];

   for ( let i = 0; i < 10; i++ ) {
      if ( i === 5 ) continue

      newArray.push(num += 2) 
   }
   return newArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
