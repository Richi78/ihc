import "./Ruta.css";
import Footer from "../../Components/Footer/Footer";
import toTarata from "../../assets/toTarata.png";

const RutaTarata = () => {
  return (
    <div className="page">
      <div className="rute-container">
        <div className="target-title">
          <h1>Tarata</h1>
        </div>
        <div className="target-routes">
          <div className="target-left">
            <a href="https://maps.app.goo.gl/sqWs9fny8t3Xk5w76" target="_blank" rel="noopener noreferrer"><img src={toTarata} alt="" /></a>
          </div>
          <div className="target-right">
            <h1>Ruta establecida</h1>
            <br />
            <p>Tarata es un destino histórico y culturalmente rico que ofrece una
            experiencia auténtica de la vida en una pequeña ciudad boliviana. El
            viaje es corto y la ruta es relativamente fácil, ya sea en auto o en
            transporte público.</p>
            <br />
            <h2>Primera parada - Laguna La Angostura Cochabamba</h2>
            <br />
            <p>
              Angostura ofrece una vista de un paisaje que persiste a lo largo
              del tiempo. Cuenta con la vista de la presa, y es una parada
              segura para comer pescado y disfrutar de las amenidades del lugar.
              Suele hacer bastante viento por los alrededores y suele ser un
              lugar frio.
            </p>
            <br />
            <h2>Segunda parada - Restaurant 3 hermanas</h2>
            <br />
            <p>
              Es el destino perfecto para los amantes del pescado fresco y los
              mariscos. Este acogedor restaurante ofrece una experiencia
              gastronómica excepcional, combinando la frescura del ambiente con la
              calidez de una atmósfera familiar y acogedora.
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

export default RutaTarata;
