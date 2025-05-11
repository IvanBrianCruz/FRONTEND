import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CambiarPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pass1 !== pass2) return setMsg('❌ Las contraseñas no coinciden');
    try {
      const res = await fetch(`https://api-atlas.vercel.app/api/auth/cambiar-password/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nuevaPassword: pass1 })
      });
      const data = await res.json();
      if (res.ok) {
        navigate('/login');
      } else {
        setMsg(`❌ ${data.mensaje}`);
      }
    } catch {
      setMsg('❌ Error al contactar al servidor');
    }
  };

  return (
    <div className="gradient-bg">
      <div className="card delay-1">
        <h2>Establecer nueva contraseña</h2>
        <form onSubmit={handleSubmit}>
          <input type="password" placeholder="Nueva contraseña" value={pass1} onChange={(e) => setPass1(e.target.value)} required />
          <input type="password" placeholder="Repetir contraseña" value={pass2} onChange={(e) => setPass2(e.target.value)} required />
          <button className="btn-custom btn-primary" type="submit">Guardar</button>
        </form>
        {msg && <p style={{ marginTop: '1rem' }}>{msg}</p>}
      </div>
    </div>
  );
};

export default CambiarPassword;
