function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  return Array.from(array,(element) => element*array.indexOf(element));
}

module.exports = multiplicarElementosPorIndice;
