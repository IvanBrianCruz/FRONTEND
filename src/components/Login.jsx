import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Verificar si ya hay una sesión activa
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const validateForm = () => {
    if (!email.trim()) {
      setError('El email es obligatorio');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('El formato del email no es válido');
      return false;
    }
    
    if (!password) {
      setError('La contraseña es obligatoria');
      return false;
    }
    
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    try {
      // Aquí debes reemplazar la URL con la URL de tu API
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password
      });
      
      // Guardar el token en una cookie (expira en 1 día)
      Cookies.set('token', response.data.token, { expires: 1 });
      
      // También guardamos info básica del usuario
      Cookies.set('user', JSON.stringify({
        id: response.data.usuario.id,
        nombre: response.data.usuario.nombre,
        email: response.data.usuario.email,
        role: response.data.usuario.role
      }), { expires: 1 });
      
      // Redirigir al dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Error de login:', error);
      if (error.response) {
        setError(error.response.data.mensaje || 'Error al iniciar sesión');
      } else {
        setError('Error de conexión. Por favor intente más tarde.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2>Iniciar Sesión</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su email"
              disabled={loading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese su contraseña"
              disabled={loading}
            />
          </div>
          
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;