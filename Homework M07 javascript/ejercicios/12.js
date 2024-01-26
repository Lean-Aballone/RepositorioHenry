function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let i = 0;
  arrayOfNums.forEach(element => {
      i += element;
    });
  return i
}

module.exports = agregarNumeros;
