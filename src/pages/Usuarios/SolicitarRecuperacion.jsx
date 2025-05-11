import React, { useState } from 'react';
import '../../assets/css/Usuarios/RegistroExitoso.css'; 

const SolicitarRecuperacion = () => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('');
    setIsLoading(true);
    
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
    } finally {
      setIsLoading(false);
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
            disabled={isLoading}
            required />
          <button 
            className="btn-custom btn-primary" 
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Cargando...' : 'Enviar enlace'}
          </button>
        </form>
        {msg && <p style={{ marginTop: '1rem' }}>{msg}</p>}
      </div>
    </div>
  );
};

export default SolicitarRecuperacion;