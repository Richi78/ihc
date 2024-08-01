import Footer from "../Components/Footer/Footer";
import "./Home.css";
import { useState } from "react";
import CardHome from "../Components/CardHome/CardHome";

const Home = () => {
  const destinos = [
    {
      title: "Corani",
      description:
        "Un lugar bastante tranquilo y con una hermosa vista, hay una variedad de cabañas que puedes alquilar por una ...",
      action: "handleCorani",
      precio: "100 Bs",
      imagen:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/1d/7c/87/corani-lake.jpg?w=1200&h=-1&s=1",
    },
    {
      title: "Incallajta",
      description:
        "Un viaje en el tiempo, recorriendo una ciudadela inca, con construcciones, muros y otros rastros de las ruinas...",
      action: "handleIncallajta",
      precio: "200 Bs",
      imagen:
        "https://i0.wp.com/www.amaru-bolivia.com/wp-content/uploads/2014/03/Incallajta-1-1%C3%A8re.jpg?fit=800%2C572&ssl=1",
    },
    {
      title: "Pairumani",
      description:
        "Un destino eco turístico de Cochabamba muy importante. En el Parque encuentras diferentes espacios, en ...",
      action: "handlePairumani",
      precio: "150 Bs",
      imagen: "https://media-cdn.tripadvisor.com/media/photo-m/1280/14/ea/8e/7d/pairumani.jpg"
    },
    {
      title: "Tarata",
      description:
        "El bello pueblo de Tarata se encuentra a solo unos 30km de Cochabamba. En el pueblo podrás disfrutar de su plaza...",
      action: "handleTarata",
      precio: "150 Bs",
      imagen: "https://web.senado.gob.bo/sites/default/files/styles/img-standard__800x600_/public/800px-Templo_y_convento_de_San_Jos%C3%A9_de_Tarata_Fachada.jpg?itok=9EG-0Nkh"
    },
    {
      title: "VillaTunari",
      description:
        "El pueblo se encuentra en una región de gran belleza natural, en la confluencia de los ríos Espíritu Santo y San Mateo...",
      action: "handleVillaTunari",
      precio: "175 Bs",
      imagen: "https://scontent.fcbb1-2.fna.fbcdn.net/v/t1.6435-9/32089534_2056266121312879_3934845545339682816_n.jpg?stp=dst-jpg_p526x395&_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=D9gJRWnnM4UQ7kNvgFyRFdN&_nc_ht=scontent.fcbb1-2.fna&gid=AJ6SZKjLl9VR85ywJpTAUHa&oh=00_AYDtyEl5GaIfgSGzbhhvvgwGL3tpBaaMsgU9WC-OXUNstQ&oe=66D1CB1E"
    },
  ];
  const lugares = [
    "Corani",
    "Incallajta",
    "Pairumani",
    "Tarata",
    "VillaTunari",
  ];
  const [filt, setFilt] = useState([]);
  const [data, setData] = useState(destinos);
  const [filtrando, setFiltrando] = useState(false);

  const handleChange = (e) => {
    if (e.target.value === "") {
      setFiltrando(false);
      return;
    }
    const y = lugares.filter((x) =>
      x.toLowerCase().includes(e.target.value.toLowerCase())
    );
    const jaja = destinos.filter((e) => y.includes(e.title));
    setFilt([...jaja]);
    setFiltrando(true);
  };
  return (
    <div className="page">
      <div className="maincito">
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar destino"
            onChange={handleChange}
          />
          <button className="search-button">
            <i className="search-icon">🔍</i>
          </button>
        </div>

        <section className="destinos">
          <div
            style={{
              display: `${filtrando && filt.length === 0 ? "none" : "block"}`,
            }}
          >
            <p>Elige tu Destino de viaje</p>
            <h2>Selecciona el Mejor Paquete para tu Viaje</h2>
          </div>

          <div className="paquetes">
            {filtrando === false ? (
              data.map((item) => (
                <CardHome
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  action={item.action}
                  precio={item.precio}
                  imagen={item.imagen}
                />
              ))
            ) : filt.length > 0 ? (
              filt.map((item) => (
                <CardHome
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  action={item.action}
                  precio={item.precio}
                  imagen={item.imagen}
                />
              ))
            ) : (
              <div className="f-resultados">
                <h2>No existen resultados.</h2>
                <h3>
                  Revisa si tu búsqueda está bien escrita o intenta con otro
                  destino turístico.
                </h3>
              </div>
            )}
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
