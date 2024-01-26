function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if(array.length === 0)return 0;
  let i = 0;
  array.forEach(e => {
    if(e > i || i == 0)i = e;
  });

  return array.indexOf(i);
}

module.exports = encontrarIndiceMayor;
