const express = require("express");
const router = express.Router();
const { processUser } = require("../utils/helpers"); // Importa la función

// Ruta POST: Recibe datos del usuario
router.post("/", (req, res) => {
  const { nombre, edad } = req.body;
  const mensaje = processUser({ nombre, edad }); // Usa la función para procesar los datos
  res.json({ mensaje });
  console.log("POST dentro del paquete users.js");
});

module.exports = router; // Exporta la ruta
