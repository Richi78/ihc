import "./Ruta.css";
import Footer from "../../Components/Footer/Footer";
import toIncallajta from "../../assets/toIncallajta.png";

const RutaIncallajta = () => {
  return (
    <div className="page">
      <div className="rute-container">
        <div className="target-title">
          <h1>Incallajta</h1>
        </div>
        <div className="target-routes">
          <div className="target-left">
            <img src={toIncallajta} alt="" />
          </div>
          <div className="target-right">
            <h1>Ruta establecida</h1>
            <br />
            <p>
              Llegar a Incallajta desde Cochabamba implica un viaje hacia el
              este, adentrándote en la región andina de Bolivia.
            </p>
            <br />
            <h2>Primera parada - Estación Experimental San Benito</h2>
            <br />
            <p>
            Centro de desarrollo de plantines de manzana y durazno con biotecnología. 
            Desarrollan desde la semilla hasta plantines.
            </p>
            <br />
            <h2>Segunda parada - Los Chucuchucus</h2>
            <br />
            <p>
            Un lugar estratégico para matar el hambre de los viajeros, las señoras 
            se turnan y se pasan los clientes entre ellas, de esa forma todas venden, 
            varia muy poco la comida, todas venden huevo pasado, quesillo, macarrones, 
            habas y llajua.
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

export default RutaIncallajta;
