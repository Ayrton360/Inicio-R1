import React, { useState } from 'react';

function ListaTareas() {

  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const manejarCambio = (event) => {
    setNuevaTarea(event.target.value);
  };

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
      setNuevaTarea(''); 
    }
  };

  const marcarCompletada = (indice) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[indice].completada = !nuevasTareas[indice].completada;
    setTareas(nuevasTareas);
  };

  const borrarTarea = (indice) => {
    const nuevasTareas = tareas.filter((_, i) => i !== indice);
    setTareas(nuevasTareas);
  };

  return (
    <div style={styles.container}>
      <h1>Lista de Tareas</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={nuevaTarea}
          onChange={manejarCambio}
          style={styles.input}
          placeholder="Agregar nueva tarea"
        />
        <button onClick={agregarTarea} style={styles.button}>Agregar</button>
      </div>
      <ul style={styles.lista}>
        {tareas.map((tarea, index) => (
          <li key={index} style={styles.tareaContainer}>
            <span
              onClick={() => marcarCompletada(index)}
              style={{
                ...styles.tarea,
                textDecoration: tarea.completada ? 'line-through' : 'none',
                color: tarea.completada ? 'green' : 'red',
              }}
            >
              {tarea.texto}
            </span>
            <button onClick={() => borrarTarea(index)} style={styles.borrarButton}>Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
  },
  inputContainer: {
    display: 'flex',
    marginBottom: '20px',
  },
  input: {
    fontSize: '16px',
    padding: '10px',
    marginRight: '10px',
    width: '250px',
  },
  button: {
    fontSize: '16px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  lista: {
    listStyleType: 'none',
    padding: '0',
  },
  tareaContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '300px',
    borderBottom: '1px solid #ccc',
    padding: '10px 0',
  },
  tarea: {
    fontSize: '18px',
    cursor: 'pointer',
  },
  borrarButton: {
    fontSize: '14px',
    padding: '5px 10px',
    cursor: 'pointer',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  },
};

export default ListaTareas;

