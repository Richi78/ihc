import React, { useState, useEffect } from 'react';
import Footer from "../../Components/Footer/Footer";
import './Autorizacion.css';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faPersonHarassing } from '@fortawesome/free-solid-svg-icons'; 
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './Autenticacion';

const Autorizacion = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [view, setView] = useState('login'); // Cambia el estado para mostrar login, register, link
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenPw, setIsModalOpenPw] = useState(false);
  const [nombre, setNombre] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  useEffect(() => {
    const path = location.pathname;
    if (path.includes('register')) {
      setView('register');
    } else if (path.includes('link')) {
      setView('link');
    } else {
      setView('login');
    }
  }, [location.pathname]);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };
  const handleSubmitRegistro = (event) => {
    event.preventDefault();
    if (password1 == password2) {
      setIsModalOpen(true)
    }else{
      setIsModalOpenPw(true);
    }
  };
  const handleSubmitSesion = (event) => {
    event.preventDefault();
    if (nombre !== "error") {
      login();
      navigate('/home');
    } else {
      setIsModalOpen(true);
    }
  };

  const handleCancelPw = () => {
    setIsModalOpenPw(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleConfirmSesion = () => {
    setIsModalOpen(false);
    if (nombre !== "error") {
      navigate('/home');
    }
  };
  const handleConfirmToLogin = () => {
    setIsModalOpen(false);
    setView('login');
  };

  const renderView = () => {
    switch(view) {
      case 'register':
        return (
          <div className="auth-container">
            <h2 className="centrado">Regístrate</h2>
            <form onSubmit={handleSubmitRegistro}>
              <label className="campo-dato">Nombre de usuario</label>
              <input type="text" placeholder="Ejm: alberto123" className="input-field" required/>
              <label className="campo-dato">Correo Electrónico</label>
              <input type="email" placeholder="Ejm: correoElectronico@ejemplo.com" className="input-field" required/>
              <label className="campo-dato">Contraseña</label>
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  value={password1}
                  onChange={(e) => setPassword1(e.target.value)}
                  className="input-field-pw"
                  required
                />
                <span className="password-toggle" onClick={handleShowPassword}>
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </span>
              </div>
              <label className="campo-dato">Escriba nuevamente la contraseña</label>
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  className="input-field-pw"
                  required
                />
                <span className="password-toggle" onClick={handleShowPassword}>
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </span>
              </div>
              <button type="submit" className="auth-button">Registrarse</button>
            </form>
            <Modal
              isOpen={isModalOpen}
              onRequestClose={handleCancel}
              contentLabel="Se ha registrado exitosamente"
              className="modal"
              overlayClassName="modal-overlay"
            >
              <h2>Se ha registrado exitosamente</h2>
              <p>Ingrese a la pagina con los datos registrados.</p>
              <div className="modal-buttons">
                <button onClick={handleConfirmToLogin} className="modal-button">Aceptar</button>
              </div>
            </Modal>
            <Modal
              isOpen={isModalOpenPw}
              onRequestClose={handleCancelPw}
              contentLabel="Las contraseñas no son iguales"
              className="modal"
              overlayClassName="modal-overlay"
            >
              <h2>Las contraseñas no son iguales</h2>
              <p>Asegurese de que las contraseñas son iguales</p>
              <div className="modal-buttons">
                <button onClick={handleCancelPw} className="modal-button">Aceptar</button>
              </div>
            </Modal>
            <p>Ya tienes una cuenta? <span onClick={() => setView('login')} className="link-text">Inicia Sesión</span></p>
          </div>
        );
      case 'link':
        return (
          <div className="auth-container">
            <form onSubmit={handleSubmit}>
              <h2 className="centrado">Recuperar Contraseña</h2>
              <h4 className="campo-dato">Correo Electrónico</h4>
              <input type="email" placeholder="correoelectronico@ejemplo.com" className="input-field" required/>
              <button type="submit" className="auth-button">Enviar link de recuperación</button>
              <p className='login-register-text'>¿Ya tienes una cuenta? <span onClick={() => setView('login')} className="link-text">Inicia Sesión</span></p>
            </form>
            <Modal
              isOpen={isModalOpen}
              onRequestClose={handleCancel}
              contentLabel="No se pudo iniciar Sesión"
              className="modal"
              overlayClassName="modal-overlay"
            >
              <h2>Se enviará el link al correo electrónico indicado.</h2>
              <p>Se enviará el link para reestablecer contraseña solo si existe una cuenta con el correo electrónico.</p>
              <div className="modal-buttons">
                <button onClick={handleConfirmToLogin} className="modal-button">Aceptar</button>
              </div>
            </Modal>
          </div>
        );
      case 'login':
      default:
        return (
          <div className="auth-container">
            <h2 className="centrado">Bienvenido</h2>
            <form onSubmit={handleSubmitSesion}>
              <label className="campo-dato">Nombre de usuario</label>
              <input 
                type="text" 
                placeholder="Ingrese su nombre de usuario"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="input-field" 
                required/>
              <label className="campo-dato">Contraseña</label>
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  className="input-field-pw"
                  required
                />
                <span className="password-toggle" onClick={handleShowPassword}>
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </span>
              </div>
              <p className="link-text" onClick={() => setView('link')}>¿Olvidaste tu contraseña?</p>
              <button type="submit" className="auth-button">Iniciar Sesión</button>
              <p className='login-register-text'>¿No tienes una cuenta? <span onClick={() => setView('register')} className="link-text">Regístrate</span></p>
            </form>
            <Modal
              isOpen={isModalOpen}
              onRequestClose={handleCancel}
              contentLabel="No se pudo iniciar Sesión"
              className="modal"
              overlayClassName="modal-overlay"
            >
              <h2>No se pudo iniciar Sesión</h2>
              <p>La cuenta no ha sido encontrada, por favor revise que los datos de su cuenta estén escritos correctamente.</p>
              <div className="modal-buttons">
                <button onClick={handleConfirmSesion} className="modal-button">Aceptar</button>
              </div>
            </Modal>
          </div>
        );
    }
  };

  return (
    <div className="page">
      <div className="auth-wrapper">
        {renderView()}
      </div>
      <div className="piejaja">
        <Footer/>
      </div>
    </div>  
  );
};

export default Autorizacion;
