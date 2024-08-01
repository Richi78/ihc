import "./Descripcion.css";
import { useNavigate } from "react-router-dom";

const Descripcion = ({ icon, text, buttons }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/formp')
  }
  return (
    <div className="descripcion">
      {icon && <span className="icono">{icon}</span>}
      <div className="texto">
        {text}
        {buttons && (
          <div className="botones">
            {buttons.map((button, index) => (
              <button key={index} onClick={handleClick}> {/*button.onClick */}
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
