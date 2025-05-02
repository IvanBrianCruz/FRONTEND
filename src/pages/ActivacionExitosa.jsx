import React from 'react';
import '../assets/css/styledefecto.css'; // Estilos del template

const ActivacionExitosa = () => {
  return (
    <div className="container text-center mt-5">
      <h2 className="text-success mb-3">¡Cuenta activada correctamente!</h2>
      <p>Ya podés iniciar sesión en el sistema del IES N°6.</p>
      <a href="/login" className="btn btn-primary mt-3">Ir al inicio de sesión</a>
    </div>
  );
};

export default ActivacionExitosa;
