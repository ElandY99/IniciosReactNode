const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors()); // Permite el CORS (para que el cliente React pueda hacer peticiones)
app.use(express.json()); // Middleware para poder leer el cuerpo de las solicitudes en formato JSON

// Importa las rutas
const usersRoutes = require("./routes/users");
const coursesRoutes = require("./routes/courses");

// Usa las rutas en el servidor
app.use("/api/usuarios", usersRoutes);
app.use("/api/materias", coursesRoutes);

// Rutas
// Ruta GET: Devuelve un mensaje simple
app.get("/", (req, res) => {
  res.send("¡Bienvenido al servidor Express!");
});

// Ruta GET: Devuelve datos en formato JSON
app.get("/api/saludo", (req, res) => {
  res.json({ mensaje: "Hola, este es un saludo desde el servidor." });
});

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
