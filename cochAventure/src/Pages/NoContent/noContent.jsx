import "./noContent.css";
import { useNavigate} from 'react-router-dom';
import Footer from "../../Components/Footer/Footer";

const Destino = () => {
  const navigate = useNavigate();
  
  const handleInicio = () => {
    navigate('/home')
  }
  return (
    <div className="page">
        <div className="noContent-title">
            <img src="https://www.shutterstock.com/image-vector/road-construction-workers-paving-asphalt-600nw-2021981651.jpg" alt="en construccion" />
        <h2>Lo sentimos está sección del sitio está en construcción</h2>
        <p>Por favor vuelve al <label onClick={handleInicio}>Inicio</label></p>
        
        </div>
        
        <div className="footer-container">
          <Footer />
        </div>
    </div>
  );
};

export default Destino;
