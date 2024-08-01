import Footer from "../Components/Footer/Footer";
import "./Home.css";
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
        <div className="search-container">
          <input type="text" placeholder="Buscar destino" />
          <button className="search-button">
            <i className="search-icon">🔍</i>
          </button>
        </div>

        <section className="destinos">
          <p>Elige tu Destino de viaje</p>
          <h2>Selecciona el Mejor Paquete para tu Viaje</h2>

          <div className="paquetes">
            <div className="paquete">
              <div className="corani destinos-foto" onClick={handleCorani}>
                <div className="precio">100 Bs</div>
              </div>
              <div className="info">
                <h3>Corani</h3>
                <p>
                  Un lugar bastante tranquilo y con una hermosa vista, hay una
                  variedad de cabañas que puedes alquilar por una ...
                </p>

                <button
                  className="mas-info mas-info-corani"
                  onClick={handleCorani}
                >
                  Más información
                </button>
              </div>
            </div>

            <div className="paquete">
              <div className="incallajta destinos-foto" onClick={handleIncallajta}>
                <div className="precio">200 Bs</div>
              </div>
              <div className="info">
                <h3>Incallajta</h3>
                <p>
                  Un viaje en el tiempo, recorriendo una ciudadela inca, con
                  construcciones, muros y otros rastros de las ruinas...
                </p>

                <button
                  className="mas-info mas-info-incallajta"
                  onClick={handleIncallajta}
                >
                  Más información
                </button>
              </div>
            </div>

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

            <div className="paquete">
              <div className="tarata destinos-foto" onClick={handleTarata}>
                <div className="precio">150 Bs</div>
              </div>
              <div className="info">
                <h3>Tarata</h3>
                <p>
                  El bello pueblo de Tarata se encuentra a solo unos 30km de
                  Cochabamba. En el pueblo podrás disfrutar de su plaza...
                </p>

                <button
                  className="mas-info mas-info-tarata"
                  onClick={handleTarata}
                >
                  Más información
                </button>
              </div>
            </div>

            <div className="paquete">
              <div className="villa-tunari destinos-foto" onClick={handleVillaTunari}>
                <div className="precio">175 Bs</div>
              </div>
              <div className="info">
                <h3>Villa Tunari</h3>
                <p>
                  El pueblo se encuentra en una región de gran belleza natural,
                  en la confluencia de los ríos Espíritu Santo y San Mateo...
                </p>
                <button
                  className="mas-info mas-info-villa-tunari"
                  onClick={handleVillaTunari}
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
