import CardHome from "../../Components/CardHome/CardHome";
import Footer from "../../Components/Footer/Footer";
import MigasDePan from "../../Components/Navigation/MigasDePan";
const Favoritos = () => {
  const destinos = [
    {
      title: "Pairumani",
      description:
        "Un destino eco turístico de Cochabamba muy importante. En el Parque encuentras diferentes espacios, en ...",
      action: "handlePairumani",
      precio: "150 Bs",
      imagen:
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/14/ea/8e/7d/pairumani.jpg",
    },
  ];

  return (
    <div className="page">
      <MigasDePan />
      <div className="maincito">
        <section className="destinos destinos-message">
          <div>
            <h1>Destinos de Viaje Favoritos</h1>
            <p>¡Todos los destinos turísticos que marcaste como favoritos en un solo lugar!</p>
          </div>

          <div className="paquetes">
            {destinos.map((item) => (
              <CardHome
                key={item.title}
                title={item.title}
                description={item.description}
                action={item.action}
                precio={item.precio}
                imagen={item.imagen}
              />
            ))}
          </div>
        </section>
      </div>
      <div className="piejaja">
        <Footer />
      </div>
    </div>
  );
};

export default Favoritos;
