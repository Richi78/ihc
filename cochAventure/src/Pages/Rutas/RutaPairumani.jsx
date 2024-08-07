import "./Ruta.css";
import Footer from "../../Components/Footer/Footer";
import toPairumani from "../../assets/toPairumani.png";
import MigasDePan from "../../Components/Navigation/MigasDePan";

const RutaPairumani = () => {
  return (
    <div className="page">
      <MigasDePan />
      <div className="rute-container">
        <div className="target-title">
          <h1>Pairumani</h1>
        </div>
        <div className="target-routes">
          <div className="target-left">
            <a href="https://maps.app.goo.gl/QEUjrXMEWoAUR9WS9" target="_blank" rel="noopener noreferrer"><img src={toPairumani} alt="" /></a>
          </div>
          <div className="target-right">
            <h1>Ruta establecida</h1>
            <br />
            <p>
              Pairumani es una zona ubicada en las afueras de Cochabamba,
              Bolivia, conocida por su parque ecológico y la casa de Simón I.
              Patiño.
            </p>
            <br />
            <a href="https://maps.app.goo.gl/ufucGXEFoAhSCrio6" target="_blank" rel="noopener noreferrer">
              <h2>Primera parada - Campo Verde Huayruritos II</h2>
            </a>
            <br />
            <p>
              Es un local ubicado en plena Av. Blanco Galindo. Es muy concurrido
              en toda ocación, por lo que se sugiere realizar la reservación de
              mesas con anticipación y también de platos. La música que ofrecen
              es al vivo y se presentan diferentes grupos de música popular.
            </p>
            <br />
            <a href="https://maps.app.goo.gl/QftkLdxNGdhH29VQ9" target="_blank" rel="noopener noreferrer">
            <h2>Segunda parada - Viva Vinto</h2>
            </a>
            <br />
            <p>
              El restaurante Viva Vinto en Cochabamba es un lugar bonito y con
              un ambiente campestre encantador. La comida y el servicio es de
              calidad. El menú ofrece una amplia variedad de platos, muchos de
              ellos carecen de sabor y presentación. El restaurante Viva Vinto
              es una buena opción para aquellos que buscan disfrutar de un
              entorno encantador mientras disfrutan de un placentero plato de
              comida.
            </p>
          </div>
        </div>
      </div>
      <div className="piejaja">
        <Footer />
      </div>
    </div>
  );
};

export default RutaPairumani;
