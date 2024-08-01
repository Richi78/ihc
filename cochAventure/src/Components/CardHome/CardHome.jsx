import { useNavigate } from "react-router-dom";

const CardHome = ({ title, description, action, precio }) => {
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
    <div className="paquete" style={{ display: "block" }}>
      <div className="corani destinos-foto" onClick={handleAction}>
        <div className="precio">{precio}</div>
      </div>
      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="mas-info mas-info-corani" onClick={handleAction}>
          Más información
        </button>
      </div>
    </div>
  );
};

export default CardHome;
