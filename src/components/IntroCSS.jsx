import React from 'react';

function IntroCSS() {


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

        {/* Sección de Presentaciones de Google */}
        <section style={{
          marginBottom: '2rem',
          padding: '2rem',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '10px'
        }}>

          <h2 style={{ marginBottom: '1rem', color: '#f0f0f0' }}>📊 Presentaciones de Google</h2>
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vTJi3mExpecMLIr1_ZGevjkd67uFZovcmi01rEe8Q6huVviyAA-ket3nuOf19ISvTKfBX7cVpOwd7zQ/embed?start=false&loop=false&delayms=60000"
            frameBorder="0"
            width="100%"
            height="500px"
            allowFullScreen="true"
            mozallowFullScreen="true"
            webkitAllowFullScreen="true"
            style={{ borderRadius: '8px' }}
          ></iframe>
        </section>
        <section style={{
          marginBottom: '2rem',
          padding: '2rem',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '10px'
        }}>
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vRe6ERyZpHHPXbCI575Wza3x07odvdw0bgUcH-mK-_NOkvNi10LvXWs0X3JoNhpVA/embed?start=false&loop=false&delayms=60000"
            frameBorder="0"
            width="100%"
            height="500px"
            allowFullScreen="true"
            mozallowFullScreen="true"
            webkitAllowFullScreen="true"
            style={{ borderRadius: '8px' }}
          ></iframe>

        </section>

        {/* Sección de Quizizz */}

        <section style={{
          marginBottom: '2rem',
          padding: '2rem',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '10px'
        }}>
          <div >
            <h2>📝 Quiz: ¡Pon a prueba tus conocimientos!</h2>
            <p>Responde este quiz para evaluar lo aprendido sobre CSS.</p>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px', minHeight: '500px' }}>
              <iframe
                src="https://quizizz.com/embed/quiz/6728ca336ba3ceac6471d56f"
                title="CSS Quiz"
                style={{ flex: 1, borderRadius: '8px' }}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <a href="https://quizizz.com/admin?source=embedFrame" target="_blank" style={{ color: '#fff', textDecoration: 'underline' }}>
                Explora más en Quizizz
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default IntroCSS;
