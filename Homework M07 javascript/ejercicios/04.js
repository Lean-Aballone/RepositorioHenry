function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  return array.at(Math.ceil(array.length*Math.random())-1);
}

module.exports = obtenerElementoAleatorio;
