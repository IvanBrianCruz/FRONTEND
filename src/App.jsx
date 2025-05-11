import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

// importar paginas estáticas
import ActivacionExitosa from './pages/ActivacionExitosa';
import CuentaYaActivada from './pages/CuentaYaActivada';
import TokenInvalido from './pages/TokenInvalido';
import UsuarioNoEncontrado from './pages/UsuarioNoEncontrado';
import RegistroExitoso from './pages/RegistroExitoso';
import SolicitarRecuperacion from './pages/usuario/SolicitarRecuperacion';
import CambiarPassword from './pages/usuario/CambiarPassword';

// importar estilos
import './App.css';

function App() {
  // Función para verificar si el usuario está autenticado
  const isAuthenticated = () => {
    return !!Cookies.get('token');
  };

  // Componente para rutas protegidas
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/" element={<Navigate to={isAuthenticated() ? "/dashboard" : "/login"} />} />

          {/* Redirigir a la página de inicio si la ruta no coincide */}
          <Route path="/ActivacionExitosa" element={<ActivacionExitosa />} />
          <Route path="/CuentaYaActivada" element={<CuentaYaActivada />} />
          <Route path="/TokenInvalido" element={<TokenInvalido />} />
          <Route path="/UsuarioNoEncontrado" element={<UsuarioNoEncontrado />} />
          <Route path="/registroExitoso" element={<RegistroExitoso />} />
          {/* recuperar contraseña*/}
          <Route path="/solicitar-recuperacion" element={<SolicitarRecuperacion />} />
          <Route path="/recuperar-contrasena/:token" element={<CambiarPassword />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;