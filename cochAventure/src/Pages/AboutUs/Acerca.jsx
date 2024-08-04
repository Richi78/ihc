import "./Acerca.css";
import Footer from "../../Components/Footer/Footer";
import Personas from '../../assets/personas.png'; 
import Privacidad from '../../assets/privacidad.png'; 
import Mision from '../../assets/mision.png'; 
import Medios from '../../assets/medios.png'; 
import MigasDePan from "../../Components/Navigation/MigasDePan";

const Destino = () => {
  return (
    <div className="page">
      <MigasDePan />
      <div className="container-acerca">
        <div className="acerca-content">
          
          <div className="section-acerca" id="quienes-somos">
            <h1>Acerca de nosotros</h1>
            <img src={Personas} alt="Personas" style={{ width: '100px', height: 'auto' }}/>
            <h2 className="acerca-title">¿Quiénes somos?</h2>
            <p>
              En CochaAventure somos una empresa de turismo ubicada en
              Cochabamba, especializada en ofrecer experiencias únicas a través
              de nuestros tours en cinco destinos principales. Nos apasiona
              mostrar la belleza y cultura de nuestra región a turistas de todo
              el mundo.
            </p>
          </div>

          <div className="section-acerca" id="nuestra-mision">
            <img src={Mision} alt="Mision" style={{ width: '100px', height: 'auto' }}/>
            <h2 className="acerca-title">Nuestra Misión</h2>
            <p>
              Nuestra misión es proporcionar a nuestros clientes experiencias de
              viaje inolvidables, combinando un servicio excepcional con un
              profundo conocimiento de los destinos que ofrecemos. Trabajamos
              para asegurar que cada tour sea una experiencia enriquecedora y
              memorable.
            </p>
          </div>

          <div className="section-acerca" id="politica-privacidad">
            <img src={Privacidad} alt="Privacidad" style={{ width: '100px', height: 'auto' }}/>
            <h2 className="acerca-title">Política de Privacidad</h2>
            <p>
              En CochaAventure, nos comprometemos a proteger la privacidad de
              nuestros clientes. Recopilamos y utilizamos la información
              personal de acuerdo con nuestras políticas de privacidad para
              ofrecer un servicio más personalizado y seguro. Para más detalles,
              consulte nuestra política completa.
            </p>
          </div>

          <div className="section-acerca" id="aparicion-medios">
            <img src={Medios} alt="Medios" style={{ width: '100px', height: 'auto' }}/>
            <h2 className="acerca-title">Aparición en Medios</h2>
            <p>
              CochaAventure ha sido destacado en varios medios de comunicación
              por la calidad y exclusividad de nuestros tours. A lo largo de los
              años, hemos recibido reconocimiento por nuestra dedicación al
              turismo sostenible y la promoción de la cultura local. Si deseas ver nuestra presencia en los medios, 
              en nuestra sección de contacto 
              encontrarás iconos que te redijirán a nuestras redes sociales.
            </p>
          </div>
        </div>

        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Destino;
