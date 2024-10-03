import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div style={styles.container}>
      <h1>Contador: {contador}</h1>
      <div>
        <button onClick={decrementar} style={styles.button}>-</button>
        <button onClick={incrementar} style={styles.button}>+</button>
      </div>
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
  button: {
    fontSize: '20px',
    padding: '10px 20px',
    margin: '5px',
    cursor: 'pointer',
  },
};

export default Contador;
