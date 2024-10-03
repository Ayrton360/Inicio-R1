import React from 'react';

function App() {
  const datosTarjeta = {
    nombre: 'Julio',
    apellido: 'Gonzales',
    profesion: 'Desarrollador Web',
    imagen: 'https://media.0221.com.ar/adjuntos/357/migration/0221/032019/1553553111207.jpg', // Aquí podrías colocar una URL de imagen válida
  };

  const Tarjeta = ({ nombre, apellido, profesion, imagen }) => {
    return (
      <div style={styles.card}>
        <img src={imagen} alt={`${nombre} ${apellido}`} style={styles.image} />
        <h2>{nombre} {apellido}</h2>
        <p>{profesion}</p>
      </div>
    );
  };

  const styles = {
    card: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      textAlign: 'center',
      width: '250px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    image: {
      borderRadius: '50%',
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      marginBottom: '16px',
    },
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <Tarjeta
        nombre={datosTarjeta.nombre}
        apellido={datosTarjeta.apellido}
        profesion={datosTarjeta.profesion}
        imagen={datosTarjeta.imagen}
      />
    </div>
  );
}

export default App;
