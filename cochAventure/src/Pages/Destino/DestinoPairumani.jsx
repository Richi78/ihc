import React from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import Footer from '../../Components/Footer/Footer';
import Tarjeta from './Tarjeta';
import Detalles from './Detalles';
import Informacion from './Informacion';
import itinerarioImg from '../../assets/itinerario.png';
import informacionImg from '../../assets/lista.png';
import rutasImg from '../../assets/la-carretera.png';
import './Destino.jsx';
import busIcon from '../../assets/bus2.png';
import dateIcon from '../../assets/date2.png';
import foodIcon from '../../assets/food2.png';
import timeIcon from '../../assets/time2.png';
import guiaIcon from '../../assets/guia2.png';
import Carrusel from '../Carrusel/CarruselPairumani';

import MigasDePan from '../../Components/Navigation/MigasDePan.jsx';
const DestinoPairumani = () => {
  const ticketPrice = 150; 

    const navigate = useNavigate();
  
    const destinationTitle = "Pairumani";
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
            { icon: dateIcon, text: 'Fecha salida: 06/08/2024  ' },
            { icon: dateIcon, text: ' Fecha llegada: 06/08/2024 ' }
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
                onClick:() => {navigate('/pairumani/formp',{state:{ticketPrice, destinationTitle}})} 
              },
                {
                  label: 'Reservar Tour',
                  onClick: () => {navigate('/pairumani/formr', { state: { ticketPrice , destinationTitle} });
                  },
                },
              ]
            }
          ]
        }
      ];
      const tarjetasItems = [
        { image: itinerarioImg, title: 'Itinerario', description: 'En esta sección verá un itinerario completo del viaje con sus actividades respectivas.', lugar: 'actividadpairumani' },
        { image: informacionImg, title: 'Información', description: 'Acá encontrarás información necesaria para tu viaje como por ejemplo que llevar.', lugar: 'actividadpairumani' },
        { image: rutasImg, title: 'Rutas', description: 'Aquí encontrarás la ruta que realizará el transporte para llegar a Pairumani.', lugar: 'actividadpairumani' },
      ];
      return (
        <div className='page'>
          <MigasDePan/>
        <div className="destino-container">
           <Informacion
            title="Parque Ecoturistico Pairumani"
            description="El Parque Ecoturístico Pairumani está 
            ubicado en el municipio de Vinto, Cochabamba.
             Muy cerca de la cordillera del Tunari, a 
             unos 16 kilómetros del centro de la ciudad. 
             Es un espacio natural, lleno de árboles y rodeado de 
             vertientes que descienden del Tunari, puedes hacer senderismo. "
             
            favo="Eliminar de favoritos"
            imageUrl='https://media-cdn.tripadvisor.com/media/photo-m/1280/14/ea/8e/7d/pairumani.jpg'
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
}

export default DestinoPairumani;