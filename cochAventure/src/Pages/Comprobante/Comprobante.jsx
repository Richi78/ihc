import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import './Comprobante.css'; 

const Comprobante = () => {
  const location = useLocation();

  // Extrae datos de la ubicación
  const { nombre, correo, monto } = location.state || {
    nombre: 'N/A',
    correo: 'N/A',
    monto: 0,
  };

  const horaYFechaActual = new Date().toLocaleString();

  const handleDescargarComprobante = () => {
    console.log('Descargando comprobante...');
  };

  const handleEnviarCorreo = () => {
    console.log(`Enviando comprobante a ${correo}...`);
  };

  return (
    <div className="page">
<div className="comprobante-container">
      <div className="comprobante-content">
        <h1 className="comprobante-title">Comprobante de Pago</h1>

        <div className="comprobante-row">
          <label className="comprobante-label">Hora:</label>
          <div className="comprobante-data">{horaYFechaActual}</div>
        </div>
        <div className="comprobante-row">
          <label className="comprobante-label">De:</label>
          <div className="comprobante-data">{nombre}</div>
        </div>
        <div className="comprobante-row">
          <label className="comprobante-label">Para:</label>
          <div className="comprobante-data">CochaAventure</div>
        </div>
        <div className="comprobante-row">
          <label className="comprobante-label">Banco Destino:</label>
          <div className="comprobante-data">Banco Visa S.A.</div>
        </div>
        <div className="comprobante-row">
          <label className="comprobante-label">Nro de Cuenta:</label>
          <div className="comprobante-data">234252351</div>
        </div>
        <div className="comprobante-row">
          <label className="comprobante-label">Monto:</label>
          <div className="comprobante-data">{monto} Bs</div>
        </div>
        <div className="comprobante-row">
          <label className="comprobante-label">Motivo:</label>
          <div className="comprobante-data">
            Reserva del tour de Pairumani
          </div>
        </div>

        <div className="comprobante-buttons">
          <button
            className="comprobante-button"
            onClick={handleDescargarComprobante}
          >
            Descargar Comprobante
          </button>
          <button className="comprobante-button" onClick={handleEnviarCorreo}>
            Enviar al Correo
          </button>
        </div>
      </div>

      <div className="comprobante-footer">
        <Footer />
      </div>
    </div>
    </div>
    
  );
};

export default Comprobante;
