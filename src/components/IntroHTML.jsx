import React from 'react';

const IntroJS = () => {
  return (
    <div style={{
      backgroundImage: 'url(https://IvanBrianCruz.github.io/ATLAS/img/fondo.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat-y',
      minHeight: '100vh',
      color: '#fff',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '1000px', width: '100%' }}>

        {/* Nueva Sección 1 */}
        <div style={{
          marginBottom: '2rem',
          padding: '2rem',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '10px'
        }}>
          <h2>🎥 Video Explicativo Adicional</h2>
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/4IcVGGben9w"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Nueva Sección 2 */}
        <div style={{
          marginBottom: '2rem',
          padding: '2rem',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '10px'
        }}>
          <h2>📑 Estructuras en HTML</h2>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden' }}>
            <iframe
              title="HTML ESTRUCTURAS"
              frameBorder="0"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              src="https://view.genially.com/6727e9b5f2b9eaa6684e8cdc"
              allow="always"
              allowFullScreen
              scrolling="yes"
            ></iframe>
          </div>
        </div>

        {/* Nueva Sección 3 */}
        <div style={{
          marginBottom: '2rem',
          padding: '2rem',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '10px'
        }}>
          <h2>📄 Etiquetas de HTML</h2>
          <iframe
            src="https://drive.google.com/file/d/1-uHB87p9H1kZocB2noDrjuCXTNKlHXVI/preview"
            width="100%"
            height="500px"
            allow="autoplay"
          ></iframe>
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <a
              href="https://drive.google.com/uc?export=download&id=1-uHB87p9H1kZocB2noDrjuCXTNKlHXVI"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: '#fff',
                borderRadius: '5px',
                textDecoration: 'none',
                fontSize: '1rem'
              }}
            >
              Descargar Documento
            </a>
          </div>
        </div>

        {/* Sección de Actividad */}
        <div style={{
          marginBottom: '2rem',
          padding: '2rem',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '10px'
        }}>
          <h2>🎮 Actividad de Lógica</h2>
          <p>Debes responder a la pregunta usando el conocimiento de HTML visto en clase. ¡Envíame captura de pantalla con el resultado final por email o WhatsApp!</p>
          <iframe
            allow="fullscreen; autoplay;"
            allowFullScreen
            width="100%"
            height="500px"
            frameBorder="0"
            src="https://es.educaplay.com/juego/21148367-quiz_sobre_etiquetas_html.html"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default IntroJS;
