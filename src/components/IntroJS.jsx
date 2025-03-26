import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const IntroJS = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://api-atlas-13zf0bcjb-ivans-projects-ece2b759.vercel.app/api/productos/')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error al obtener productos:', error));
  }, []);

  return (
    <div
      style={{
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
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '1000px', width: '100%' }}>
        <section
          style={{
            marginBottom: '2rem',
            padding: '2rem',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderRadius: '10px',
          }}
        >
          <h2 style={{ marginBottom: '1rem', color: '#f0f0f0' }}>🛒 Productos Disponibles</h2>
          <div className="row">
            {productos.map(producto => (
              <div key={producto.id} className="col-md-4 mb-4">
                <div className="card" style={{ backgroundColor: '#222', color: '#fff' }}>
                  <img src={producto.imageUrl} className="card-img-top" alt={producto.name} />
                  <div className="card-body">
                    <h5 className="card-title">{producto.name}</h5>
                    <p className="card-text">{producto.description}</p>
                    <p className="card-text"><strong>Precio: ${producto.price}</strong></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default IntroJS;
