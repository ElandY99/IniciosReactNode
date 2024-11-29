// Función para procesar los datos de un usuario
function processUser(datos) {
  // Aquí podrías hacer algún procesamiento extra o validación
  return `Usuario: ${datos.nombre}, Edad: ${datos.edad}`;
}

module.exports = { processUser }; // Exporta la función
