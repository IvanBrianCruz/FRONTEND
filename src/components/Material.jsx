import React from 'react';

function Material() {
  return (
    <div style={{
      backgroundImage: 'url(https://IvanBrianCruz.github.io/ATLAS/img/fondo.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      color: '#fff',
      padding: '3rem'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '2.5rem', fontWeight: 'bold' }}>Material de Clase</h1>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-around', 
        alignItems: 'stretch', 
        flexWrap: 'wrap', 
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto' 
      }}>
        
        {/* Sección 1: Material de Clase */}
        <div style={{
          flex: '1 1 45%',
          padding: '1.5rem',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '450px',
        }}>
          <h2 style={{ marginBottom: '1rem' }}>📂 Material de Clase</h2>
          <iframe 
            src="https://drive.google.com/embeddedfolderview?id=18Kubb0Qb8ZABoHAsx_RgOIuNDODP5JJ1#grid"
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
            title="Material de Clase"
          ></iframe>
          <p style={{ marginTop: '1rem', textAlign: 'center' }}>
            Aquí encontrarás todos los recursos y materiales necesarios para tus clases.
          </p>
        </div>
        
        {/* Sección 2: Subida de Proyectos */}
        <div style={{
          flex: '1 1 45%',
          padding: '1.5rem',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '450px',
        }}>
          <h2 style={{ marginBottom: '1rem' }}>📤 Subida de Proyectos</h2>
          <p style={{ textAlign: 'center' }}>Sube tus proyectos en el siguiente enlace. Asegúrate de que los archivos estén comprimidos y nombrados con tu nombre y apellido.</p>
          <a 
            href="https://drive.google.com/drive/folders/1PtUL73bDzWpa1ViReOgCo1Fy4UJDJpV1?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              marginTop: 'auto',
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
            }}
          >
            Subir Proyecto
          </a>
        </div>
      </div>
    </div>
  );
}

export default Material;
