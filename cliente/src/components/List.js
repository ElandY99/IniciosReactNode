// ./components/List.jsx
import React from "react";

const List = React.memo(({ index, name, onNameChange }) => {
  console.log(`Nombre dentro de List.jsx: ${name}`);
  return (
    <li>
      {name}
      <button onClick={() => onNameChange(index)}>Cambiar Nombre</button>
    </li>
  );
});

export default List;
