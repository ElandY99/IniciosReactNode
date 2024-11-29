
const [message, setMessage] = useState("");
const [nombre, setNombre] = useState("");
const [edad, setEdad] = useState("");

useEffect(() => {
  fetch("http://localhost:5000/api/saludo")
    .then((response) => response.text())
    .then((data) => setMessage(data));
}, []);

const sendData = async () => {
  const respuesta = await fetch("http://localhost:5000/api/usuarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Asegúrate de que el encabezado sea correcto
    },
    body: JSON.stringify({ nombre, edad }), // Envía los datos en formato JSON
  });
  const data = await respuesta.json();
  alert(data.mensaje);
};
// <div>
      {/* <h1>React + Node.js</h1> */}
      {/* <p>{message}</p> */}
      {/* <input */}
        // type="text"
        // placeholder="Nombre"
        // value={nombre}
        // onChange={(e) => setNombre(e.target.value)}
      // />
      {/* <input */}
        // type="number"
        // placeholder="Edad"
        // value={edad}
        // onChange={(e) => setEdad(e.target.value)}
      // />
      {/* <button onClick={sendData}>Enviar</button> */}
    {/* </div> */}