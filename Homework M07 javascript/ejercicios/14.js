function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if(arguments.length == 0) return 0;
  let total = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    total *= arguments[i];
  } 
  return total;
}

module.exports = multiplicarArgumentos;
