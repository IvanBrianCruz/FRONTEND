import React from 'react';
import '../assets/css/styledefecto.css'; // Estilos del template

const TokenInvalido = () => {
  return (
    <div className="container text-center mt-5">
      <h2 className="text-danger">Token inválido o expirado</h2>
      <p>El enlace ya no es válido. Podés solicitar uno nuevo si lo necesitás.</p>
      <a href="/reenviar-activacion" className="btn btn-warning mt-3">Solicitar nuevo enlace</a>
    </div>
  );
};

export default TokenInvalido;
