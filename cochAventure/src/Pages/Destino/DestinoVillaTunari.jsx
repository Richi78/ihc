import React from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import Footer from "../../Components/Footer/Footer";
import Tarjeta from "./Tarjeta";
import Detalles from "./Detalles";
import Informacion from "./Informacion";
import itinerarioImg from "../../assets/itinerario.png";
import informacionImg from "../../assets/lista.png";
import rutasImg from "../../assets/la-carretera.png";
import './Destino.jsx'
import busIcon from '../../assets/bus2.png';
import dateIcon from '../../assets/date2.png';
import foodIcon from '../../assets/food2.png';
import timeIcon from '../../assets/time2.png';
import guiaIcon from '../../assets/guia2.png';
import Carrusel from '../Carrusel/CarruselTunari';
import MigasDePan from '../../Components/Navigation/MigasDePan.jsx';

const DestinoVillaTunari = () => {
  const ticketPrice = 175; 
  const destinationTitle = "Villa Tunari";

  const navigate = useNavigate();

  const detallesItems = [
    {
      title: "INCLUYE",
      items: [
        { icon: busIcon, text: 'Servicio de transporte de ida y vuelta en autobús.' },
        { icon: foodIcon, text: 'Desayuno, refrigerio y almuerzo.' },
        { icon: guiaIcon, text: 'Guías completas durante el viaje.' }
      ]
    },
    {
      title: 'DETALLES',
      items: [
        { icon: timeIcon, text: ' Duración: 2 Dia' },
        { icon: dateIcon, text: 'Fecha salida: 23/08/2024 ' },
        { icon: dateIcon, text: ' Fecha llegada: 24/08/2024 '}
      ]
    },
    {
      title: "PRECIO",
      items: [
        {
          icon: "",
          text: "175 Bs x Persona",
          buttons: [
            { label: 'Comprar Tour', 
            onClick:() => {navigate('/villatunari/formp',{state:{ticketPrice, destinationTitle}})} 
          },
            {
              label: 'Reservar Tour',
              onClick: () => {navigate('/villatunari/formr', { state: { ticketPrice , destinationTitle} });
              },
            },
          ],
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
        lugar:'actividadvillatunari'
    },
    {
      image: informacionImg,
      title: "Información",
      description:
        "Acá encontrarás información necesaria para tu viaje como por ejemplo que llevar.",
        lugar:'actividadvillatunari'
    },
    {
      image: rutasImg,
      title: "Rutas",
      description:
        "Aquí encontrarás la ruta que realizará el transporte para llegar a Villa Tunari.",
        lugar:'actividadvillatunari'
    },
  ];
  return (
    <div className="page">
      <MigasDePan/>
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
          imageUrl='https://scontent.fcbb1-2.fna.fbcdn.net/v/t1.6435-9/32089534_2056266121312879_3934845545339682816_n.jpg?stp=dst-jpg_p526x395&_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=D9gJRWnnM4UQ7kNvgFyRFdN&_nc_ht=scontent.fcbb1-2.fna&gid=AJ6SZKjLl9VR85ywJpTAUHa&oh=00_AYDtyEl5GaIfgSGzbhhvvgwGL3tpBaaMsgU9WC-OXUNstQ&oe=66D1CB1E'
          imageAlt="dxda"
        />

        <Detalles items={detallesItems} />

        <div className="segmento-tres">
          {tarjetasItems.map((item, index) => (
            <Tarjeta
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              lugar={item.lugar}
            />
          ))}
        </div>
        <h1 className="centrado">Más imágenes</h1>
        <Carrusel/>
      </div>
      <div className="piejaja">
        <Footer />
      </div>
    </div>
  );
};

export default DestinoVillaTunari;
