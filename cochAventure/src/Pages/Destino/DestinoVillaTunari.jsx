import Footer from "../../Components/Footer/Footer";
import Tarjeta from "./Tarjeta";
import Detalles from "./Detalles";
import Informacion from "./Informacion";
import itinerarioImg from "../../assets/itinerario.png";
import informacionImg from "../../assets/lista.png";
import rutasImg from "../../assets/la-carretera.png";

const DestinoVillaTunari = () => {
  const detallesItems = [
    {
      title: "INCLUYE",
      items: [
        { icon: "🛏️", text: "Transporte ida y vuelta: Bus." },
        { icon: "🍽️", text: "Desayuno, Refrigerio y almuerzo." },
        { icon: "🚌", text: "Guías completas durante el viaje." },
      ],
    },
    {
      title: "DETALLES",
      items: [
        { icon: "🏞️", text: " Duración: 1 Dia" },
        { icon: "📅", text: "Fecha salida: 06/08/2024 " },
        { icon: "", text: " Fecha llegada: 06/08/2024" },
      ],
    },
    {
      title: "PRECIO",
      items: [
        {
          icon: "",
          text: "200 Bs x Persona",
          buttons: [{ label: "Comprar Tour" }, { label: "Reservar Tour" }],
        },
      ],
    },
  ];
  const tarjetasItems = [
    {
      image: itinerarioImg,
      title: "Itinerario",
      description:
        "En esta sección verá un itinerario completo del viaje con sus actividades respectivas.",
    },
    {
      image: informacionImg,
      title: "Informacion",
      description:
        "Acá encontrarás información necesaria para tu viaje como por ejemplo que llevar.",
    },
    {
      image: rutasImg,
      title: "Rutas",
      description:
        "Aquí encontraras la ruta que realizará el transporte para llegar a Pairumani.",
    },
  ];
  const handleCardClick = (title) => {
    console.log(`Has hecho clic en: ${title}`);
  };
  return (
    <div className="page">
      <div className="destino-container">
        <Informacion
          title="Villa Tunari"
          description="Villa Tunari es una vibrante localidad en el departamento de Cochabamba, 
            Bolivia, situada en la región amazónica del país. Conocida por su acceso a la exuberante 
            selva del Parque Nacional Isiboro-Sécure, Villa Tunari es un punto clave para el 
            ecoturismo y la aventura, ofreciendo actividades como rafting en el río Chapare, 
            senderismo y observación de la biodiversidad amazónica. Su entorno natural, con ríos 
            cristalinos y una rica flora y fauna, atrae a turistas en busca de experiencias al aire 
            libre y un contacto cercano con la naturaleza. "
          favo="Añadir a favoritos"
          imageUrl="../../assets/pairumani1.jpg"
          imageAlt="dxda"
        />

        <Detalles items={detallesItems} />

        <div className="segmento-tres">
          {tarjetasItems.map((item, index) => (
            <Tarjeta
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className="piejaja">
        <Footer />
      </div>
    </div>
  );
};

export default DestinoVillaTunari;
