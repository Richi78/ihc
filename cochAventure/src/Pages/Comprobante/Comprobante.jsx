import React, { useState } from 'react'; // Asegúrate de importar useState
import { useLocation } from 'react-router-dom';
import Modal from 'react-modal'; // Importa Modal
import Footer from '../../Components/Footer/Footer';
import './Comprobante.css';

// Asegúrate de que el elemento raíz esté configurado para react-modal
Modal.setAppElement('#root');

const Comprobante = () => {
  const location = useLocation();

  const { nombre, correo, monto, motivo } = location.state || {
    nombre: 'N/A',
    correo: 'N/A',
    monto: 0,
    motivo: 'N/A',
  };

  const horaYFechaActual = new Date().toLocaleString();

  // Estado para controlar la apertura de los modales
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleDescargarComprobante = () => {
    // Simula la descarga del comprobante
    setModalMessage('El comprobante se ha descargado correctamente.');
    setIsModalOpen(true);
  };

  const handleEnviarCorreo = () => {
    // Simula el envío del correo electrónico
    setModalMessage(`El comprobante se ha enviado a ${correo} correctamente.`);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
            <div className="comprobante-data">{motivo}</div>
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

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Confirmación de Acción"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Acción Existosa</h2>
        <p>{modalMessage}</p>
        <div className="modal-buttons">
          <button onClick={handleCloseModal} className="modal-button">
            Aceptar
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Comprobante;
