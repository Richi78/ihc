import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Modal from 'react-modal';
import './FormPago.css';
import MigasDePan from '../../Components/Navigation/MigasDePan';
import visa from '../../assets/visa.png';
import qr from '../../assets/qr.png';
import master from '../../assets/master.png';
import paypal from '../../assets/paypal.png';

Modal.setAppElement('#root');

const FormReserva = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { ticketPrice, destinationTitle } = location.state || {}; 

  const motivo = `Se realizo la reserva del tour para ${destinationTitle}`; 
  const [ticketCount, setTicketCount] = React.useState(1);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [nombre, setNombre] = React.useState('');
  const [correo, setCorreo] = React.useState('');
  const [monto, setMonto] = React.useState(ticketPrice / 2); 

  const handleIncrement = () => {
    setTicketCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setTicketCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  React.useEffect(() => {
    setMonto((ticketCount * ticketPrice) / 2);
  }, [ticketCount]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);

    navigate(`/${destinationTitle}/formr/comprobante`, {
      state: {
        nombre,
        correo,
        monto,
        motivo,
      },
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="page">
      <MigasDePan/>
      <div className="container">
        <div className="imagen-form"></div>
        <div className="form-container">
          <h2 className="form-title">Formulario de Reserva<br/>
            Tour para {destinationTitle}</h2>

          <div className="payment-methods">
            <h3 className="payment-title">Métodos de pago</h3>
            <div>
              <img src={visa} alt="Visa" className="payment-icon" />
              <img src={master} alt="MasterCard" className="payment-icon" />
              <img src={qr} alt="QR Code" className="payment-icon" />
              <img src={paypal} alt="PayPal" className="payment-icon" />
            </div>
          </div>
          <h4 className="data-title">Introduce tus datos</h4>
          <form onSubmit={handleSubmit}>
            <label className="form-label">Nombre Completo</label>
            <input
              type="text"
              placeholder="Ej. Rodolfo Adrián Rivera Quiñoz"
              className="form-input"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required // Asegura que el campo sea obligatorio
            />
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              placeholder="Ej. rodolfo.rivera88@gmail.com"
              className="form-input"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required // Asegura que el campo sea obligatorio
            />
            <label className="form-label">Número de la tarjeta</label>
            <input
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              className="form-input"
            />
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">CVV</label>
                <input
                  type="text"
                  placeholder="Ej. 123"
                  className="form-input redux-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Fecha de vencimiento</label>
                <input
                  type="text"
                  placeholder="MM/YYYY"
                  className="form-input redux-input"
                />
              </div>
            </div>
            <div className="ticket-count-row">
              <span className="ticket-label">Cantidad</span>
              <div className="ticket-controls">
                <button
                  type="button"
                  onClick={handleDecrement}
                  className="control-button"
                >
                  -
                </button>
                <span className="ticket-count">{ticketCount}</span>
                <button
                  type="button"
                  onClick={handleIncrement}
                  className="control-button"
                >
                  +
                </button>
              </div>
            </div>
            <div className="amount-row">
              <span className="amount-label">Monto total: </span>
              <span className="amount-value precio-tacha precio-form">
                {ticketCount * ticketPrice} Bs
              </span>
            </div>
            <div className="amount-row">
              <span className="amount-label">Monto parcial: </span>
              <span className="amount-value precio-form">{monto} Bs</span>
            </div>
            <div className="checkbox-row">
              <input type="checkbox" id="saveData" className="checkbox" />
              <label htmlFor="saveData" className="checkbox-label">
                Guardar datos para futuras compras
              </label>
            </div>
            <div className="button-box">
              <button type="submit" className="submit-button">
                Reservar ahora
              </button>
            </div>
          </form>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCancel}
        contentLabel="Confirmación de Pago"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Confirmación de Pago</h2>
        <p>¿Estás seguro de realizar este pago?</p>
        <div className="modal-buttons">
          <button onClick={handleConfirm} className="modal-button">
            Aceptar
          </button>
          <button onClick={handleCancel} className="modal-button">
            Cancelar
          </button>
        </div>
      </Modal>
      <div className="piejaja">
        <Footer />
      </div>
    </div>
  );
};

export default FormReserva;
