import "./Ruta.css";
import Footer from "../../Components/Footer/Footer";
import toCorani from "../../assets/toCorani.png";
import MigasDePan from "../../Components/Navigation/MigasDePan";
const RutaCorani = () => {
  return (
    <div className="page">
      <MigasDePan />
      <div className="rute-container">
        <div className="target-title">
          <h1>Corani</h1>
        </div>
        <div className="target-routes">
          <div className="target-left">
            <a href="https://maps.app.goo.gl/3q9LE9QQB8pA8hF9A" target="_blank" rel="noopener noreferrer"><img src={toCorani} alt="" /></a>
          </div>
          <div className="target-right">
            <h1>Ruta establecida</h1>
            <br />
            <p>
              Sale de la ciudad de Cochabamba tomando la carretera hacia el
              este, en dirección a Sacaba. Sigue la carretera principal (Ruta 4)
              que te llevará hacia el pueblo de Colomi. Este tramo de la
              carretera es bien pavimentado y ofrece vistas panorámicas de las
              montañas y el paisaje andino.
            </p>
            <br />
            <a href="https://maps.app.goo.gl/Xw7PcJuuQxGqkJ7F8" target="_blank" rel="noopener noreferrer">
              <h2>Primera parada - Laguna San Isidro</h2>
            </a>
            <br />
            <p>
              Es un bonito lugar, sus aguas son tranquilas y se pueden encontrar
              especies como el pejerrey y la carpa. Al ser un lugar turístico,
              existe un mirador en forma de barco donde se puede apreciar el
              espejo de agua. También existen espacios de camping, cabañas donde
              se puede pernoctar, restaurantes con comidas típicas, canchas de
              futbol, fulbito, basquet, se puede hacer tracking. El viento en el
              lugar es considerable.
            </p>
            <br />
            <a href="https://maps.app.goo.gl/u28tWk7syjiXrcSy7" target="_blank" rel="noopener noreferrer">
            <h2>Segunda parada - Mirador de la Cumbre</h2>

            </a>
            <br />
            <p>
              Hermosa vista de la comunidad de Waka, se puede ver hasta lo más
              lejos de las montañas aledañas, la vista es increíble, solo
              escuchas a los camiones americanos bajando con su freno de motor
              una melodía de sonido. Se recomienda ir en época de enero - marzo, el
              viento es muy fuerte en invierno.
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

export default RutaCorani;
