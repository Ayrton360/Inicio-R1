import React, { useState } from 'react';

function Form() {
  const [nombre, setNombre] = useState('');
  const [enviado, setEnviado] = useState(false);

  const manejarCambio = (event) => {
    setNombre(event.target.value);
  };

  const manejarEnvio = (event) => {
    event.preventDefault(); 
    setEnviado(true); 
  };

  return (
    <div style={styles.container}>
      {!enviado ? (
        <form onSubmit={manejarEnvio} style={styles.formulario}>
          <label style={styles.label}>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={manejarCambio}
              style={styles.input}
              placeholder="Ingrese su nombre"
              required
            />
          </label>
          <button type="submit" style={styles.button}>Enviar</button>
        </form>
      ) : (
        <h1 style={styles.mensaje}>¡Bienvenido, {nombre}!</h1>
      )}
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
  formulario: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    marginBottom: '20px',
    fontSize: '18px',
  },
  input: {
    fontSize: '16px',
    padding: '10px',
    marginTop: '5px',
    width: '250px',
  },
  button: {
    fontSize: '16px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  mensaje: {
    fontSize: '24px',
    color: '#FFF',
  },
};

export default Form;
