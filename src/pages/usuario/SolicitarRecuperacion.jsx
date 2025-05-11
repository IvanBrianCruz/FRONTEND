import React, { useState } from 'react';
import '../../assets/css/cssPages/RegistroExitoso.css';

const SolicitarRecuperacion = () => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('');
    try {
      const res = await fetch('https://api-atlas.vercel.app/api/auth/solicitar-recuperacion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      setMsg(res.ok ? '✅ Revisa tu correo para restablecer tu contraseña' : `❌ ${data.mensaje}`);
    } catch {
      setMsg('❌ Error al contactar al servidor');
    }
  };

  return (
    <div className="gradient-bg">
      <div className="card delay-1">
        <h2>Recuperar contraseña</h2>
        <form className="resend-form" onSubmit={handleSubmit}>
          <input
           id="resend-email"
            type="email"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
          <button className="btn-custom btn-primary" type="submit">Enviar enlace</button>
        </form>
        {msg && <p style={{ marginTop: '1rem' }}>{msg}</p>}
      </div>
    </div>
  );
};

export default SolicitarRecuperacion;
