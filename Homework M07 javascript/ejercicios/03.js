function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  return array.includes(elemento) ? 0 : -1;
}

module.exports = encontrarElemento;
