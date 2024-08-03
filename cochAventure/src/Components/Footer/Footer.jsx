import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="up-section">
        <div className="left-section">
          <h2>Contáctate con nosotros</h2>
          <p>Teléfono: <a className="footer-contactos" href="https://wa.me/999999999" target="_blank" rel="noopener noreferrer">+591 788 123 456</a></p>
          <p>Email: <a className="footer-contactos" href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">infocochaventure@gmail.com</a></p>
          <p>Dirección: <a className="footer-contactos" href="https://maps.app.goo.gl/d8aK25RU1bTTT3yu7" target="_blank" rel="noopener noreferrer">#3344 Jordan, Ayacucho</a></p> 
        </div>
        <div>
          <h1 className="footer-name">CochAventure</h1>
        </div>
        <div className="right-section">
          <a className="footer-icons" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
          <a className="footer-icons" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a className="footer-icons" href="https://x.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a className="footer-icons" href="https://wa.me/999999999" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} />
          </a>
        </div>
      </div>
      <div className="down-section">
        Copyright © 2024 CochAventure - Todos los derechos reservados
      </div>
    </div>
  );
};

export default Footer;
