const express = require("express");
const router = express.Router();

// Ruta POST: Recibe datos de una materia
router.post("/", (req, res) => {
  const { materia, docente } = req.body;
  res.json({ mensaje: `Materia: ${materia}, Docente: ${docente}` });
});

module.exports = router; // Exporta la ruta
