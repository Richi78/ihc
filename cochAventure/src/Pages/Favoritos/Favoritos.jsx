import CardHome from "../../Components/CardHome/CardHome";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
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
      <div className="maincito">
        <section className="destinos">
          <div>
            <h2>Vuelve a ver tus lugares favoritos</h2>
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

export default Home;
