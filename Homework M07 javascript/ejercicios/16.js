function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  if(!array.includes("Enero","Marzo","Noviembre"))return "No se encontraron los meses pedidos";
  return array.filter((month) => month == "Enero" || month == "Marzo" || month == "Noviembre");
  
}

module.exports = mesesDelAño;
