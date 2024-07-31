import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
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
            <FaFacebook size={30}/>
            <FaInstagram size={30}/>
            <FaTwitter size={30}/>
            <FaWhatsapp size={30}/>
        </div>
      </div>
      <div className="down-section">
        Copyright © 2024 CochAventure - Todos los derechos reservados
      </div>
    </div>
  );
};

export default Footer;
