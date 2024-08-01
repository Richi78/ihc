import Footer from '../../Components/Footer/Footer';
import './FormPago.css'

const FormPago = () => {
  return (
    <div className='page'>
      <div className="container">
        <div className="imagen-form"></div>
        <div className="form-container">
           <h2 className="form-title" >  {/*style="font-size: 1.7rem;" */}
            Formulario de Reserva
          </h2>

          <div className="payment-methods">
            <h3 className="payment-title">Métodos de pago</h3>
            <div>
              <img
                src="https://openui.fly.dev/openui/24x24.svg?text=💳"
                alt="Visa"
                className="payment-icon"
              />
              <img
                src="https://openui.fly.dev/openui/24x24.svg?text=💳"
                alt="MasterCard"
                className="payment-icon"
              />
              <img
                src="https://openui.fly.dev/openui/24x24.svg?text=📱"
                alt="QR Code"
                className="payment-icon"
              />
              <img
                src="https://openui.fly.dev/openui/24x24.svg?text=💻"
                alt="PayPal"
                className="payment-icon"
              />
            </div>
          </div>
          <h4 className="data-title">Introduce tus datos</h4>
          <form>
            <label className="form-label">Nombre Completo</label>
            <input
              type="text"
              placeholder="Ej. Rodolfo Adrián"
              className="form-input"
            />
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              placeholder="Ej. rodolfo.rivera88@gmail.com"
              className="form-input"
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
            <div className="amount-row">
              <span className="amount-label" > {/* style="margin-block: auto;"*/}
                Monto total:{" "}
              </span>
              <span className="amount-value precio-tacha precio-form">200 Bs</span>
            </div>
            <div className="amount-row">
              <span className="amount-label" > {/* style="margin-block: auto;"*/}
                Monto parcial:{" "}
              </span>
              <span className="amount-value precio-form">100 Bs</span>
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
      <div className="piejaja">
        <Footer />
      </div>
    </div>
  );
};

export default FormPago;
