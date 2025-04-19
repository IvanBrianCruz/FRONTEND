import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import '../assets/css/Login.css'; // Estilos del template
import 'boxicons/css/boxicons.min.css';


const Auth = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // Estados del login
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Estados del registro
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState('');

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) navigate('/dashboard');
  }, [navigate]);

  // Maneja cambio visual entre login y registro
  const handleToggle = (tipo) => {
    if (tipo === 'register') {
      containerRef.current.classList.add('active');
    } else {
      containerRef.current.classList.remove('active');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    if (!loginEmail || !loginPassword) return setLoginError('Completa todos los campos');

    try {
      setLoginLoading(true);
      const res = await axios.post('https://api-atlas.vercel.app/api/auth/login', {
        email: loginEmail,
        password: loginPassword
      });

      Cookies.set('token', res.data.token, { expires: 1 });
      Cookies.set('user', JSON.stringify(res.data.usuario), { expires: 1 });
      navigate('/dashboard');
    } catch (err) {
      setLoginError(err.response?.data?.mensaje || 'Error al iniciar sesión');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setRegisterError('');
    setRegisterSuccess('');

    if (!registerName || !registerEmail || !registerPassword) {
      return setRegisterError('Completa todos los campos');
    }

    try {
      await axios.post('https://api-atlas.vercel.app/api/auth/register', {
        nombre: registerName,
        email: registerEmail,
        password: registerPassword
      });

      setRegisterSuccess('Registro exitoso, ya podés iniciar sesión');
      handleToggle('login');
    } catch (err) {
      setRegisterError(err.response?.data?.mensaje || 'Error al registrarse');
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="container" ref={containerRef}>
        {/* LOGIN */}
        <div className="form-box login">
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            {loginError && <p className="error-message">{loginError}</p>}
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
              <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
              <i className='bx bxs-lock-alt'></i>
            </div>
            <div className="forgot-link">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
            <button type="submit" className="btn">{loginLoading ? 'Cargando...' : 'Inicar session'}</button>
            {/*}
          <p>o ingresar con redes sociales</p>
          <div className="social-icons">
            <a href="#"><i className='bx bxl-google'></i></a>
            <a href="#"><i className='bx bxl-facebook'></i></a>
            <a href="#"><i className='bx bxl-github'></i></a>
            <a href="#"><i className='bx bxl-linkedin'></i></a>
          </div>*/}
          </form>
        </div>

        {/* REGISTRO */}
        <div className="form-box register">
          <form onSubmit={handleRegister}>
            <h1>Registro</h1>
            {registerError && <p className="error-message">{registerError}</p>}
            {registerSuccess && <p className="success-message">{registerSuccess}</p>}
            <div className="input-box">
              <input
                type="text"
                placeholder="Nombre completo"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                required
              />
              <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
              />
              <i className='bx bxs-envelope'></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
              />
              <i className='bx bxs-lock-alt'></i>
            </div>
            <button type="submit" className="btn">Registrar</button>
            {/*<p>o registrarse con redes sociales</p>
          <div className="social-icons">
            <a href="#"><i className='bx bxl-google'></i></a>
            <a href="#"><i className='bx bxl-facebook'></i></a>
            <a href="#"><i className='bx bxl-github'></i></a>
            <a href="#"><i className='bx bxl-linkedin'></i></a>
          </div>*/}
          </form>
        </div>

        {/* TOGGLE BOX */}
        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>¡Empecemos👋!</h1>
            <p>¿No tenés cuenta?</p>
            <button className="btn register-btn" onClick={() => handleToggle('register')}>Registrarse</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>¡Bienvenido😎!</h1>
            <p>¿Ya tenés una cuenta?</p>
            <button className="btn login-btn" onClick={() => handleToggle('login')}>Iniciar sesión</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
