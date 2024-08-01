import "./Descripcion.css";
import { useNavigate } from "react-router-dom";

const Descripcion = ({ icon, text, buttons }) => {
  const navigate = useNavigate();

  const handleComprarClick = () => {
    navigate('/formp'); 
  };

  const handleReservarClick = () => {
    navigate('/formr'); 
  };

  return (
    <div className="descripcion">
      {icon && <img src={icon} alt="" className="descripcion-icon" />}  
      <div className="texto">
        {text}
        {buttons && (
          <div className="botones">
            {buttons.map((button, index) => (
              <button
                key={index}
                onClick={button.label === 'Comprar Tour' ? handleComprarClick : handleReservarClick}
                className="boton-personalizado"
              >
                {button.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Descripcion;
