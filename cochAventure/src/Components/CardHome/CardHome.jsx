import { useNavigate } from "react-router-dom";
import "./CardHome.css";


const CardHome = ({ title, description, action, precio, imagen }) => {
  const navigate = useNavigate();
  const handleAction = () => {
    if (action === "handleVillaTunari") {
      navigate("/villatunari");
    } else if (action === "handleTarata") {
      navigate("/tarata");
    } else if (action === "handlePairumani") {
      navigate("/pairumani");
    } else if (action === "handleIncallajta") {
      navigate("/incallajta");
    } else if (action === "handleCorani") {
      navigate("/corani");
    }
  };
  return (
    <div className="paquete">
      <div className="destinos-foto" onClick={handleAction} style={{backgroundImage: `url(${imagen})` }}>
        <div className="precio">{precio}</div>
      </div>
      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="mas-info" onClick={handleAction}>
          Más información
        </button>
      </div>
    </div>
  );
};

export default CardHome;
