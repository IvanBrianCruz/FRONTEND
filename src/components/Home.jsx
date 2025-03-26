import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => setIsModalOpen(true);

  // Función para cerrar el modal
  const closeModal = () => setIsModalOpen(false);

  // Detectar la tecla "Esc" para cerrar el modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={{
      backgroundImage: 'url(https://IvanBrianCruz.github.io/ATLAS/img/fondo.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh', // Asegura que el div cubra toda la altura de la pantalla
      color: '#fff', // Color del texto blanco para el contraste
    }}>
      {/* Sección de bienvenida */}
      <br />
      <br />
      <section style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
        borderRadius: '8px',
        margin: '0rem auto',
        maxWidth: '800px',
      }}>
        <h1>👋 ¡Bienvenidos a mi curso de Programación!</h1>
        <p>
          En este curso aprenderemos a armar una web estática usando HTML, CSS y JavaScript básico. 🌐 A continuación puedes ver el modelo del proyecto final que vamos a crear.
        </p>
        <img
          src="https://IvanBrianCruz.github.io/ATLAS/img/eje.png" // Reemplaza con la URL de tu imagen
          alt="Modelo del proyecto a lograr"
          style={{ width: '80%', margin: '1rem auto', borderRadius: '8px', cursor: 'pointer' }}
          onClick={openModal}
        />
      </section>

      {/* Modal para mostrar la imagen en pantalla completa */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          <img
            src="https://IvanBrianCruz.github.io/ATLAS/img/eje.png" // Reemplaza con la URL de tu imagen
            alt="Modelo del proyecto ampliado"
            style={{ width: '90%', maxWidth: '800px', borderRadius: '8px' }}
          />
          <button
            onClick={closeModal}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'none',
              color: '#fff',
              fontSize: '2rem',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            &times;
          </button>
        </div>
      )}

      {/* Sección de programas necesarios */}
      <section style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
        borderRadius: '8px',
        margin: '1rem auto',
        maxWidth: '800px',
      }}>
        <h2>🛠️ Programas que Necesitaremos Instalar</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '1rem 0' }}>
            <button
              onClick={() => window.open('https://code.visualstudio.com/', '_blank')}
              style={{
                padding: '0.5rem 2rem',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor: '#007ACC',
                color: '#fff',
                border: 'none',
                fontSize: '16px',
              }}
            >
              📘 Visual Studio Code
            </button>
          </li>
          <li style={{ margin: '1rem 0' }}>
            <button
              onClick={() => window.open('https://nodejs.org/', '_blank')}
              style={{
                padding: '0.5rem 2rem',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor: '#8CC84B',
                color: '#fff',
                border: 'none',
                fontSize: '16px',
              }}
            >
              💻 Node.js
            </button>
          </li>
          <li style={{ margin: '1rem 0' }}>
            <button
              onClick={() => window.open('https://git-scm.com/', '_blank')}
              style={{
                padding: '0.5rem 2rem',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor: '#F05032',
                color: '#fff',
                border: 'none',
                fontSize: '16px',
              }}
            >
              🧰 Git
            </button>
          </li>
        </ul>
      </section>

      {/* Sección de video de instalación */}
      <section style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
        borderRadius: '18px',
        margin: '0rem auto',
        maxWidth: '800px',
      }}>
        <h2>📹 Cómo Instalar y Configurar Todo para el Proyecto</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/4IcVGGben9w"
            title="Cómo instalar y configurar Visual Studio Code, Node.js y Git"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <br />
      <br />
    </div>
  );
};

export default Home;
