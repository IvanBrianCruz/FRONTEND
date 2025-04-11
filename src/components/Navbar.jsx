import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Navbar.css';

const Navbar = ({ userData }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar cookies
    Cookies.remove('token');
    Cookies.remove('user');
    
    // Redirigir al login
    navigate('/login');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Mi Tienda</div>
      
      <div className="navbar-user">
        <span>Hola, {userData?.nombre || 'Usuario'}</span>
        
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleMenu}>
            <span className="user-initial">{userData?.nombre?.charAt(0) || 'U'}</span>
            <span className="dropdown-arrow">▼</span>
          </button>
          
          {menuOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item">Perfil</div>
              <div className="dropdown-item">Configuración</div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item logout" onClick={handleLogout}>
                Cerrar Sesión
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;