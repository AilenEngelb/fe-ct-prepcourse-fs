/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:

  // return nombre[0].toUpperCase() + nombre.slice(1)

   let mayusName = ''

   for ( let i = 0; i < nombre.length; i++ ) {
      if ( i === 0 ) mayusName  += nombre[i].toUpperCase()
      else mayusName += nombre[i]
   }
   return mayusName; 
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
cb()
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var suma = 0;

   for(let i = 0; i < arrayOfNumbers.length; i++){
      suma = suma + arrayOfNumbers[i]; //suma += arrayOfNumbers[i]; 
   }
   cb(suma);

   // let suma =arrayOfNumbers.reduce((acc, curr) => acc + curr)
   // cb(suma);      otra manera de realizar. 
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   for (let i = 0; i < array.length; i++) {
      cb(array[i])
   }

   // array.forEach(elem => cb(elem));    OTRA MANERA DE REALIZAR 
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:

   // const mapReturn = []

   // for (let i = 0; i < array.length; i++) {
   //    mapReturn.push(cb(array[i]))
   // }

   // return mapReturn; 

   return array.map( elem => cb(elem))
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   // const filterReturn = []

   // for (let i = 0; i < arrayOfStrings.length; i++) {
   // if( arrayOfStrings[i][0] === 'a') filterReturn.push(arrayOfStrings[i])
   // }
   // return arrayReturn;

   return arrayOfStrings.filter( elem => elem[0] === "a")
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
