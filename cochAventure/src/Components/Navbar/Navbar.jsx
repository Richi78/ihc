// src/Components/Navbar/Navbar.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from "../../assets/logoCocha.png";
import { useAuth } from '../../Pages/Autorizacion/Autenticacion';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const handleInicio = () => {
    navigate('/home');
  };

  const handleFavoritos = () => {
    navigate('/favoritos');
  };

  const handleAcerca = () => {
    navigate('/acerca');
  };

  const handleContacto = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSesion = () => {
    if (isAuthenticated) {
      logout();
    } else {
      navigate('/autorizacion');
    }
  };

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className='navBar'>
      <div className="logo" onClick={handleInicio} style={{cursor: "pointer"}}>
        <img src={logo} alt="Logo" width={100} height={60}/>
      </div>
      <div className='nav-options'>
        <label className={`para-hover ${isActive('/home')}`} onClick={handleInicio}>Inicio</label>
        <label className={`para-hover ${isActive('/favoritos')}`} onClick={handleFavoritos}>Favoritos</label>
        <label className={`para-hover ${isActive('/acerca')}`} onClick={handleAcerca}>Acerca de <br/> nosotros</label>
        <label className='para-hover' onClick={handleContacto}>Contáctenos</label>
        <button className="btn cerrar-sesion" onClick={handleSesion}>
          {isAuthenticated ? 'Cerrar Sesión' : 'Iniciar Sesión'}
        </button>
        {!isAuthenticated && (
          <button className="btn cerrar-sesion" onClick={() => navigate('/autorizacion')}>Registrarse</button>

        )}
      </div>
    </nav>
  );
};

export default Navbar;
