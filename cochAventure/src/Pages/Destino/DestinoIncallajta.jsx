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
import Carrusel from '../Carrusel/CarruselInca';

const DestinoIncallajta = () => {
    const ticketPrice = 200;
   
    const destinationTitle = "Incallajta";
    const navigate = useNavigate();
    const detallesItems = [
        {
          title: 'INCLUYE',
          items: [
            { icon: busIcon, text: 'Transporte ida y vuelta: Bus.' },
            { icon: foodIcon, text: 'Desayuno, Refrigerio y almuerzo.' },
            { icon: guiaIcon, text: 'Guías completas durante el viaje.' }
          ]
        },
        {
          title: 'DETALLES',
          items: [
            { icon: timeIcon, text: ' Duración: 1 Dia' },
            { icon: dateIcon, text: 'Fecha salida: 06/08/2024 ' },
            { icon: '', text: ' Fecha llegada: 06/08/2024' }
          ]
        },
        {
          title: 'PRECIO',
          items: [
            {
              icon: '',
              text: '200 Bs x Persona',
              buttons: [
                { label: 'Comprar Tour', 
                onClick:() => {navigate('/formp',{state:{ticketPrice, destinationTitle}})} 
              },
                {
                  label: 'Reservar Tour',
                  onClick: () => {navigate('/formr', { state: { ticketPrice,destinationTitle } });
                  },
                },
              ]
            }
          ]
        }
      ];
      const tarjetasItems = [
        { image: itinerarioImg, title: 'Itinerario', description: 'En esta sección verá un itinerario completo del viaje con sus actividades respectivas.', lugar:'actividadincallajta' },
        { image: informacionImg, title: 'Información', description: 'Acá encontrarás información necesaria para tu viaje como por ejemplo que llevar.', lugar:'actividadincallajta' },
        { image: rutasImg, title: 'Rutas', description: 'Aquí encontraras la ruta que realizará el transporte para llegar a Pairumani.', lugar:'actividadincallajta' },
      ];
      return (
        <div className='page'>
        <div className="destino-container">
           <Informacion
            title="Incallajta"
            description="Incallajta es un sitio arqueológico inca en el departamento de Cochabamba, 
            Bolivia, situado a unos 140 kilómetros al este de la ciudad de Cochabamba. Construido en 
            el siglo XV, este complejo fue un importante centro administrativo y ceremonial del 
            Imperio Inca, y destaca por su imponente arquitectura y diseño estratégico. Sus ruinas, 
            que incluyen estructuras de gran tamaño y avanzadas técnicas de ingeniería, reflejan la 
            influencia y la organización del imperio en la región oriental."
             
            favo="Añadir a favoritos"
            imageUrl='https://i0.wp.com/www.amaru-bolivia.com/wp-content/uploads/2014/03/Incallajta-1-1%C3%A8re.jpg?fit=800%2C572&ssl=1'
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

export default DestinoIncallajta