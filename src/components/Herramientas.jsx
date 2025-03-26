import React from 'react';

function Herramientas() {
  return (
    <div style={{
      backgroundImage: 'url(https://IvanBrianCruz.github.io/ATLAS/img/fondo.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      color: '#fff',
      padding: '2rem'
    }}>

      {/* Sección de Pizarra Digital */}
      <section style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '8px',
        margin: '1rem auto',
        maxWidth: '800px',
      }}>
        <h2>🖥️ Pizarra Digital Interactiva</h2>
        <p>
          Usa esta pizarra digital para colaborar y resolver ejemplos de código durante el curso. 🚀
        </p>
        <a
          href="https://classroomscreen.com/app/screen/w/7a70aa2a-bda8-4980-beb7-1e0a73baef41/g/7d2943ba-ef11-431a-953e-b6a99c00cb2d/s/84d1e430-977e-4ab1-8016-8f6cb1e402be"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Abrir Pizarra Digital
        </a>
      </section>

      {/* Sección de Dudas y Preguntas en Padlet */}
      <section style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '8px',
        margin: '1rem auto',
        maxWidth: '800px',
      }}>
        <h2>💬 Dudas y Preguntas</h2>
        <p>
          Si tienes alguna pregunta o duda sobre el curso, siéntete libre de usar el Padlet para compartir tus inquietudes. ✍️
        </p>
        <div className="padlet-embed" style={{
          border: '1px solid rgba(0,0,0,0.1)',
          borderRadius: '2px',
          boxSizing: 'border-box',
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
          background: '#F4F4F4',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <p style={{ padding: 0, margin: 0 }}>
            <iframe
              src="https://padlet.com/embed/rahqakwpui00wb4u"
              frameBorder="0"
              allow="camera; microphone; geolocation"
              style={{
                width: '100%',
                height: '608px',
                display: 'block',
                padding: 0,
                margin: 0
              }}
              title="Padlet de Dudas y Preguntas"
            ></iframe>
          </p>
        </div>
      </section>

    
    </div>
  );
}

export default Herramientas;
