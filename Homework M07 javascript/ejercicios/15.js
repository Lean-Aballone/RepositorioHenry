function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let aux = array[0];
  let aux2;
  for (let i = 1; i < array.length; i++) {
    aux2 = array[i];
    if(aux2 != aux) return false;
  }
  return true;

}

module.exports = todosIguales;
