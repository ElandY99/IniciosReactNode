import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Importa tus páginas o componentes
import TodoList from "./pages/TodoList";

function App() {
  return (
    <Router>
      <div>
        {/* Menú de navegación */}
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/TodoList">Acerca de</Link>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route path="/TodoList" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
