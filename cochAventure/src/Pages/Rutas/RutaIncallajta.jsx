import "./Ruta.css";
import Footer from "../../Components/Footer/Footer";
import toIncallajta from "../../assets/toIncallajta.png";
import MigasDePan from "../../Components/Navigation/MigasDePan";

const RutaIncallajta = () => {
  return (
    <div className="page">
      <MigasDePan />
      <div className="rute-container">
        <div className="target-title">
          <h1>Incallajta</h1>
        </div>
        <div className="target-routes">
          <div className="target-left">
            <a href="https://maps.app.goo.gl/3jzB3G3vCN4gEgHt9" target="_blank" rel="noopener noreferrer"><img src={toIncallajta} alt="" /></a>
          </div>
          <div className="target-right">
            <h1>Ruta establecida</h1>
            <br />
            <p>
              Llegar a Incallajta desde Cochabamba implica un viaje hacia el
              este, adentrándote en la región andina de Bolivia.
            </p>
            <br />
            <a href="https://maps.app.goo.gl/XNPyNzvJHXPmoZjK7" target="_blank" rel="noopener noreferrer">

            <h2>Primera parada - Estación Experimental San Benito</h2>
            </a>
            <br />
            <p>
            Centro de desarrollo de plantines de manzana y durazno con biotecnología. 
            Desarrollan desde la semilla hasta plantines.
            </p>
            <br />
            <a href="https://maps.app.goo.gl/Xv1Xrv9dA75z7u978" target="_blank" rel="noopener noreferrer">
            <h2>Segunda parada - Los Chucuchucus</h2>
            </a>
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
