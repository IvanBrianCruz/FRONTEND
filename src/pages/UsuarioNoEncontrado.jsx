import React from 'react';
import '../assets/css/styledefecto.css'; // Estilos del template

const UsuarioNoEncontrado = () => {
  return (
    <div className="container text-center mt-5">
      <h2 className="text-danger">Usuario no encontrado</h2>
      <p>Es posible que el enlace esté mal o el usuario ya no exista.</p>
      <a href="/" className="btn btn-secondary mt-3">Volver al inicio</a>
    </div>
  );
};

export default UsuarioNoEncontrado;
