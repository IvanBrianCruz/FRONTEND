import React, { useState } from 'react';
import '../assets/css/cssPages/RegistroExitoso.css';

const RegistroExitoso = () => {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState('');

  const handleResend = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://api-atlas.vercel.app/api/auth/reenviar-activacion',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setModalMsg('✅ Correo de activación reenviado exitosamente.');
      } else {
        setModalMsg(`❌ ${data.mensaje || 'No se pudo reenviar el correo.'}`);
      }
    } catch (err) {
      setModalMsg('❌ Ocurrió un error al contactar al servidor.');
    }
    setShowModal(true);
  };

  return (
    <div className="gradient-bg">
      <div className="card delay-1">
        
  {/* Icono principal */}

        <div className="emoji">🎉</div>
        <h2>¡Gracias por registrarte!</h2>
        <p>
          Te damos la más cordial bienvenida a nuestra plataforma.  
          Esperamos que disfrutes de todos nuestros servicios. 🚀
        </p>

        <p className="email-msg">
          📧 Te hemos enviado un correo para activar tu cuenta.  
          Es necesario hacerlo para que tu perfil quede 100% activo.
        </p>
        <a
          href="https://mail.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-custom btn-info"
        >
          Ir al buzón de correo
        </a>
        <form className="resend-form" onSubmit={handleResend}>
          <label htmlFor="resend-email">¿No recibiste el email?</label>
          <input
            id="resend-email"
            type="email"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Reenviar email de activación</button>
        </form>
        <p className="resend-msg">{/* mensaje inline */}</p>
        <p className="spam-note">
          ⚠️ El correo puede llegar a tu carpeta de SPAM, por favor revisa allí también.
        </p>
        <div className="video-spam">
          <iframe
            width="100%" height="100%"
            src="https://www.youtube.com/embed/_1Jfs2s2xvQ"
            title="¿Qué es el SPAM?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <p>{modalMsg}</p>
            <button className="btn-custom btn-success" onClick={() => setShowModal(false)}>
              👍 Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistroExitoso;
