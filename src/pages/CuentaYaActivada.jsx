import React from 'react';
import '../assets/css/styledefecto.css'; // Estilos del template

const CuentaYaActivada = () => {
  return (
    <div className="container text-center mt-5">
      <h2 className="text-info">La cuenta ya estaba activada</h2>
      <p>Ya podés ingresar con tu usuario y contraseña.</p>
      <a href="/login" className="btn btn-primary mt-3">Iniciar sesión</a>
    </div>
  );
};

export default CuentaYaActivada;
