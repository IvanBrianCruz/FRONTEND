import React from 'react';

function Evaluacion() {
  return (
    <div style={{
      backgroundImage: 'url(https://IvanBrianCruz.github.io/ATLAS/img/fondo.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      color: '#fff',
      padding: '3rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      {/* Encabezado */}
      <header style={{
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
        }}>Evaluación de Programación</h1>
        <p style={{
          fontSize: '1.2rem',
          fontStyle: 'italic',
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)'
        }}>Completa el formulario para evaluar tus conocimientos.</p>
      </header>

      {/* Sección del Formulario */}
      <section style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '8px',
        padding: '2rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        width: '100%',
        maxWidth: '800px'
      }}>
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSeHRTlO4YLkrBtj6w9BBNuSI3g9-Y3_AFJJjGMqC5Nb5idIfQ/viewform?embedded=true"
          width="100%"
          height="2250"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Evaluación Formulario"
        >
          Cargando…
        </iframe>
      </section>

      {/* Pie de página */}
      <footer style={{
        textAlign: 'center',
        marginTop: '2rem',
        fontSize: '0.9rem',
        color: '#ccc'
      }}>
        <p>&copy; exito es tu Evaluación pronto tendras novedades de tu calificacion </p>
      </footer>
    </div>
  );
}

export default Evaluacion;
