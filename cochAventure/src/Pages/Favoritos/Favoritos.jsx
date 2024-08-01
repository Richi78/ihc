import Footer from "../../Components/Footer/Footer";
import "./Favoritos.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleCorani = () => {
    navigate("/corani");
  };
  const handleIncallajta = () => {
    navigate("/incallajta");
  };
  const handlePairumani = () => {
    navigate("/pairumani");
  };
  const handleTarata = () => {
    navigate("/tarata");
  };
  const handleVillaTunari = () => {
    navigate("/villatunari");
  };

  return (
    <div className="page">
      <div className="maincito">
      
        <section className="destinos">
          <div className="paquetes">
            <div className="paquete">
              <div className="pairumani destinos-foto" onClick={handlePairumani}>
                <div className="precio">150 Bs</div>
              </div>
              <div className="info">
                <h3>Pairumani</h3>
                <p>
                  Un destino eco turístico de Cochabamba muy importante. En el
                  Parque encuentras diferentes espacios, en ...
                </p>

                <button
                  className="mas-info mas-info-pairumani"
                  onClick={handlePairumani}
                >
                  Más información
                </button>
              </div>
            </div>

            
          </div>
        </section>
      </div>
      <div className="piejaja">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
