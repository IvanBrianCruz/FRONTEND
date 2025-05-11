import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import Navbar from './Navbar';
import '../assets/css/components/Dashboard.css';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = Cookies.get('token');
      
      if (!token) {
        navigate('/login');
        return;
      }
      
      try {
        // Primero intentamos obtener el usuario desde las cookies
        const userFromCookie = Cookies.get('user');
        if (userFromCookie) {
          setUserData(JSON.parse(userFromCookie));
          setLoading(false);
          return;
        }

        // Si no está en cookies, lo verificamos con la API
        const response = await axios.get('https://api-atlas.vercel.app/api/auth/verify', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        setUserData(response.data.usuario);
        
        // Actualizar la cookie con la información más reciente
        Cookies.set('user', JSON.stringify(response.data.usuario), { expires: 1 });
      } catch (error) {
        console.error('Error al verificar usuario:', error);
        setError('No se pudo verificar la sesión. Por favor inicie sesión nuevamente.');
        // Si hay error de autenticación, redirigir al login
        Cookies.remove('token');
        Cookies.remove('user');
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="dashboard">
      <Navbar userData={userData} />
      
      <div className="dashboard-content">
        <div className="welcome-message">
          <h1>¡Bienvenido, {userData?.nombre || 'Usuario'}!</h1>
          <p>Aquí podrás gestionar tus productos y más.</p>
        </div>
        
        {/* Aquí puedes agregar más contenido del dashboard */}
        <div className="dashboard-info">
          <div className="info-card">
            <h3>Tu Perfil</h3>
            <p><strong>Email:</strong> {userData?.email}</p>
            <p><strong>Rol:</strong> {userData?.role === 'admin' ? 'Administrador' : 'Usuario'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;