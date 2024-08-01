import "./Ruta.css";
import Footer from "../../Components/Footer/Footer";

const RutaCorani = () => {
    return (
        <div className="page">
          <div className="rute-container">
            <div className="target-title">
              <h1>Destino de viaje</h1>
            </div>
            <div className="target-routes">
              <div className="target-left">
                <img 
                    src="https://www.shutterstock.com/shutterstock/photos/1403218805/display_1500/stock-vector-city-map-navigation-banner-point-marker-background-simple-vector-drawing-city-plan-gps-navigation-1403218805.jpg" alt="" />
              </div>
              <div className="target-right">
                <h1>Ruta establecida</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industrys standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="piejaja">
            <Footer />
          </div>
        </div>
      );
}

export default RutaCorani