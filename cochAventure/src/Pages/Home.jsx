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
    },
    {
      title: "Incallajta",
      description:
        "Un viaje en el tiempo, recorriendo una ciudadela inca, con construcciones, muros y otros rastros de las ruinas...",
      action: "handleIncallajta",
      precio: "200 Bs",
    },
    {
      title: "Pairumani",
      description:
        "Un destino eco turístico de Cochabamba muy importante. En el Parque encuentras diferentes espacios, en ...",
      action: "handlePairumani",
      precio: "150 Bs",
    },
    {
      title: "Tarata",
      description:
        "El bello pueblo de Tarata se encuentra a solo unos 30km de Cochabamba. En el pueblo podrás disfrutar de su plaza...",
      action: "handleTarata",
      precio: "150 Bs",
    },
    {
      title: "VillaTunari",
      description:
        "El pueblo se encuentra en una región de gran belleza natural, en la confluencia de los ríos Espíritu Santo y San Mateo...",
      action: "handleVillaTunari",
      precio: "175 Bs",
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
          <p>Elige tu Destino de viaje</p>
          <h2>Selecciona el Mejor Paquete para tu Viaje</h2>

          <div className="paquetes">
            {filtrando === false ? (
              data.map((item) => (
                <CardHome
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  action={item.action}
                  precio={item.precio}
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
                />
              ))
            ) : (
              <div className="f-resultados">
                <h2>No existen resultados</h2>
                <h3>
                  Revisa si tu busqueda esta bien escrita o intenta con otro
                  destino turistico
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
