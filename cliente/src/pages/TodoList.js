// ./pages/TodoList.js
import React, { useState, useCallback } from "react";
import List from "../components/List";

function TodoList() {
  const [lists, setLists] = useState([]);
  const [name, setName] = useState("");

  const newList = () => {
    const newList = {
      name: name,
      selected: false,
      tasks: [],
    };
    setLists((prevLists) => [...prevLists, newList]);
    setName("");
  };

  const changeListName = useCallback(
    (listIndex) => {
      const newName = prompt("Ingrese el nuevo nombre para la lista") || null;
      if (newName) {
        setLists((prevLists) =>
          prevLists.map((list, index) =>
            index === listIndex ? { ...list, name: newName } : list
          )
        );
      }
    },
    [setLists]
  );

  return (
    <>
      <h1>To-do List With React.js</h1>
      <input
        type="text"
        placeholder="Nombre de la nueva lista"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={newList}>Agregar Lista</button>
      <ul>
        {lists.map((list, index) => (
          <List
            key={index}
            index={index}
            name={list.name}
            onNameChange={changeListName}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
