import "./Ruta.css";
import Footer from "../../Components/Footer/Footer";
import toVillaTunari from "../../assets/toVillaTunari.png";
import MigasDePan from "../../Components/Navigation/MigasDePan";

const RutaVillaTunari = () => {
  return (
    <div className="page">
      <MigasDePan />
      <div className="rute-container">
        <div className="target-title">
          <h1>Villa Tunari</h1>
        </div>
        <div className="target-routes">
          <div className="target-left">
            <a href="https://maps.app.goo.gl/3utL7EVHmQ2mLAyQ7" target="_blank" rel="noopener noreferrer"><img src={toVillaTunari} alt="" /></a>
          </div>
          <div className="target-right">
            <h1>Ruta establecida</h1>
            <br />
            <p>
              Villa Tunari es un destino ideal para aquellos que buscan una
              experiencia en la selva tropical y desean explorar la
              biodiversidad y las maravillas naturales de Bolivia.
            </p>
            <br />
            <a href="https://maps.app.goo.gl/YvP9beWEZNeG1Vv96" target="_blank" rel="noopener noreferrer">
            <h2>Primera parada - Cascada Velo de Novia Chocolatal</h2>
            </a>
            <br />
            <p>
              Es una subida por sendero, inicia a lado del rio sendero poco
              marcado hasta llegar a una casucha de madera, se debe continuar
              por el sendero que lleva al mirador donde se ve la cascada, tener
              mucho cuidado en ese tramo para bajar.
            </p>
            <br />
            <a href="https://maps.app.goo.gl/gbz4ZWYi1xV1iBmU8" target="_blank" rel="noopener noreferrer">
            <h2>Segunda parada - Puente Colgante Gral. Barrientos</h2>
            </a>
            <br />
            <p>
              El Puente Colgante Gral. Barrientos es una estructura emblemática
              ubicada cerca a Villa Tunari, un vibrante pueblo en el corazón del
              trópico de Cochabamba, Bolivia. Conecta dos importantes puntos de
              la región, ofreciendo una experiencia única tanto para los locales
              como para los visitantes.
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

export default RutaVillaTunari;
