import React, { useState } from 'react';
import Footer from "../../Components/Footer/Footer";
import './Autorizacion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; 

const Autorizacion = () => {
  const [view, setView] = useState('login'); // Cambia el estado para mostrar login, register, link
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const renderView = () => {
    switch(view) {
      case 'register':
        return (
          <div className="auth-container">
            <h2 className="centrado">Regístrate</h2>
            <h4 className="campo-dato">Nombre de usuario</h4>
            <input type="text" placeholder="alberto123" className="input-field" />
            <h4 className="campo-dato">Correo Electrónico</h4>
            <input type="email" placeholder="correoElectronico@ejemplo.com" className="input-field" />
            <h4 className="campo-dato">Contraseña</h4>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                className="input-field-pw"
              />
              <span className="password-toggle" onClick={handleShowPassword}>
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </span>
            </div>
            <h4 className="campo-dato">Escriba nuevamente la contraseña</h4>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                className="input-field-pw"
              />
              <span className="password-toggle" onClick={handleShowPassword}>
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </span>
            </div>
            <button className="auth-button">Registrarse</button>
            <p>Ya tienes una cuenta? <span onClick={() => setView('login')} className="link-text">Inicia Sesión</span></p>
          </div>
        );
      case 'link':
        return (
          <div className="auth-container">
            <h2 className="centrado">Recuperar Contraseña</h2>
            <h4 className="campo-dato">Correo Electrónico</h4>
            <input type="email" placeholder="correoelectronico@ejemplo.com" className="input-field" />
            <button className="auth-button">Enviar link de recuperación</button>
            <p>Ya tienes una cuenta? <span onClick={() => setView('login')} className="link-text">Inicia Sesión</span></p>
          </div>
        );
      case 'login':
      default:
        return (
          <div className="auth-container">
            <h2 className="centrado">Bienvenido</h2>
            <h4 className="campo-dato">Nombre de Usuario</h4>
            <input type="text" placeholder="Usuario" className="input-field" />
            <h4 className="campo-dato">Contraseña</h4>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                className="input-field-pw"
              />
              <span className="password-toggle" onClick={handleShowPassword}>
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </span>
            </div>
            <p className="link-text" onClick={() => setView('link')}>Olvidaste tu contraseña?</p>
            <button className="auth-button">Iniciar Sesión</button>
            <p>No tienes una cuenta? <span onClick={() => setView('register')} className="link-text">Regístrate</span></p>
          </div>
        );
    }
  };

  return (
    <div>
        <div className="auth-wrapper">
            {renderView()}
        </div>
        <Footer/>
    </div>
  );
};

export default Autorizacion;

