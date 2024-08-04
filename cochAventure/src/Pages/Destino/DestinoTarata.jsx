import React from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import Footer from '../../Components/Footer/Footer';
import Tarjeta from './Tarjeta';
import Detalles from './Detalles';
import Informacion from './Informacion';
import itinerarioImg from '../../assets/itinerario.png';
import informacionImg from '../../assets/lista.png';
import rutasImg from '../../assets/la-carretera.png';
import './Destino.jsx'
import busIcon from '../../assets/bus2.png';
import dateIcon from '../../assets/date2.png';
import foodIcon from '../../assets/food2.png';
import timeIcon from '../../assets/time2.png';
import guiaIcon from '../../assets/guia2.png';
import Carrusel from '../Carrusel/CarruselTarata';
import MigasDePan from '../../Components/Navigation/MigasDePan.jsx';

const DestinoTarata = () => {

    const ticketPrice = 150; 
    const destinationTitle = "Tarata";
    const navigate = useNavigate();

    const detallesItems = [
        {
          title: 'INCLUYE',
          items: [
            { icon: busIcon, text: 'Servicio de transporte de ida y vuelta en autobús.' },
            { icon: foodIcon, text: 'Desayuno, refrigerio y almuerzo.' },
            { icon: guiaIcon, text: 'Guías completas durante el viaje.' }
          ]
        },
        {
          title: 'DETALLES',
          items: [
            { icon: timeIcon, text: ' Duración: 1 Dia' },
            { icon: dateIcon, text: 'Fecha salida: 31/08/2024' },
            { icon: dateIcon, text: ' Fecha llegada: 31/08/2024 '}
          ]
        },
        {
          title: 'PRECIO',
          items: [
            {
              icon: '',
              text: '150 Bs x Persona',
              buttons: [
                { label: 'Comprar Tour', 
                onClick:() => {navigate('/tarata/formp',{state:{ticketPrice, destinationTitle}})} 
              },
                {
                  label: 'Reservar Tour',
                  onClick: () => {navigate('/tarata/formr', { state: { ticketPrice , destinationTitle} });
                  },
                },
              ]
            }
          ]
        }
      ];
      const tarjetasItems = [
        { image: itinerarioImg, title: 'Itinerario', description: 'En esta sección verá un itinerario completo del viaje con sus actividades respectivas.', lugar:'actividadtarata' },
        { image: informacionImg, title: 'Información', description: 'Acá encontrarás información necesaria para tu viaje como por ejemplo que llevar.', lugar:'actividadtarata' },
        { image: rutasImg, title: 'Rutas', description: 'Aquí encontrarás la ruta que realizará el transporte para llegar a Tarata.', lugar:'actividadtarata' },
      ];
      return (
        <div className='page'>
          <MigasDePan/>
        <div className="destino-container">
           <Informacion
            title="Tarata"
            description="Tarata es un pintoresco municipio en el departamento de Cochabamba, 
            Bolivia, conocido por su rica herencia colonial y su arquitectura histórica. Situado 
            en un entorno montañoso a orillas del río Capinota, Tarata se destaca por sus calles 
            empedradas, casas blancas con balcones de madera y monumentos históricos, como la iglesia
             de San Francisco y la plaza principal. Su ambiente tranquilo y su patrimonio cultural la 
             convierten en un destino atractivo para quienes buscan experimentar la historia y la belleza 
             tradicional boliviana."
             
            favo="Añadir a favoritos"
            imageUrl='https://web.senado.gob.bo/sites/default/files/styles/img-standard__800x600_/public/800px-Templo_y_convento_de_San_Jos%C3%A9_de_Tarata_Fachada.jpg?itok=9EG-0Nkh'
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
             <Carrusel/>
        </div>
        <div className="piejaja">
            <Footer />
          </div>
        </div>
      );
}

export default DestinoTarata