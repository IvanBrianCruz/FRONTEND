import React from 'react';

function Presentacion() {
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
      justifyContent: 'center'
    }}>
      {/* Sección del Video */}
      <section style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '8px',
        padding: '2rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        width: '100%',
        maxWidth: '800px',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h1 style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
        }}>🌟 Presentación de la Web 🌟</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          ¡Bienvenidos a nuestra plataforma! 🎉 Aquí descubrirás un espacio diseñado especialmente para aprender y explorar el mundo de la programación web.
        </p>
        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          Este proyecto se desarrolló utilizando <strong>HTML</strong>, <strong>CSS</strong> y <strong>JavaScript</strong>, combinando conceptos básicos para crear una experiencia interactiva y amigable. 💻✨
        </p>
        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          A lo largo del proceso, trabajamos en conjunto, aprendiendo sobre la estructura de las páginas, la estilización con CSS y la interacción mediante JavaScript. 🤝🔧
        </p>
        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          ¡Mira nuestro video para conocer más sobre el proceso de desarrollo y ver cómo cada parte se unió para dar vida a esta web! 🎥👀
        </p>
        <iframe 
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/4IcVGGben9w"
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      {/* Sección del Repositorio */}
      <section style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '8px',
        padding: '2rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        width: '100%',
        maxWidth: '800px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '1.8rem',
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
        }}>🚀 Repositorio del Proyecto 🚀</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          Si deseas explorar el código fuente de esta web y entender cómo está estructurada, puedes visitar el repositorio de GitHub a continuación. ¡Contribuye y aprende! 💡
        </p>
        <a href="https://github.com/IvanBrianCruz/ATLAS.git" target="_blank" rel="noopener noreferrer">
          <button style={{
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '1rem'
          }}>
            Ver Repositorio en GitHub
          </button>
        </a>
      </section>
    </div>
  );
}

export default Presentacion;
