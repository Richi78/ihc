import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="up-section">
        <div className="left-section">
          <h2>Contáctate con nosotros</h2>
          <p>Teléfono +591 788 123 456</p>
          <p>Email: infocochaventure@gmail.com</p>
          <p>Dirección: #3344 Jodan, Ayacucho</p> 
        </div>
        <div>
          <h1>CochAventure</h1>
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
