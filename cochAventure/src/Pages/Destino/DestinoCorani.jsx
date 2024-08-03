import React from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import Footer from '../../Components/Footer/Footer'; 
import Tarjeta from './Tarjeta'; 
import Detalles from './Detalles'; 
import Informacion from './Informacion'; 
import itinerarioImg from '../../assets/itinerario.png'; 
import informacionImg from '../../assets/lista.png'; 
import rutasImg from '../../assets/la-carretera.png'; 
import './Destino.css'; 
import busIcon from '../../assets/bus2.png'; 
import dateIcon from '../../assets/date2.png'; 
import foodIcon from '../../assets/food2.png'; 
import timeIcon from '../../assets/time2.png'; 
import guiaIcon from '../../assets/guia2.png'; 

const DestinoCorani = () => {
    const ticketPrice = 100; 
    const destinationTitle = "Corani";
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
                { icon: timeIcon, text: 'Duración: 1 Día' },
                { icon: dateIcon, text: 'Fecha salida: 06/08/2024' },
                { icon: '', text: "Fecha llegada: 06/08/2024" }
            ]
        },
        {
            title: 'PRECIO',
            items: [
                {
                    icon: '',
                    text: '100 Bs x Persona',
                    buttons: [
                      { label: 'Comprar Tour', 
                      onClick:() => {navigate('/formp',{state:{ticketPrice, destinationTitle }})} 
                    },
                      {
                        label: 'Reservar Tour',
                        onClick: () => {navigate('/formr', { state: { ticketPrice, destinationTitle  } });
                        },
                      },
                    ],
                }
            ]
        }
    ];

    const tarjetasItems = [
        { 
            image: itinerarioImg, 
            title: 'Itinerario', 
            description: 'En esta sección verá un itinerario completo del viaje con sus actividades respectivas.', 
            lugar: 'actividadcorani' 
        },
        { 
            image: informacionImg, 
            title: 'Información', 
            description: 'Acá encontrarás información necesaria para tu viaje como por ejemplo que llevar.', 
            lugar: 'actividadcorani' 
        },
        { 
            image: rutasImg, 
            title: 'Rutas', 
            description: 'Aquí encontrarás la ruta que realizará el transporte para llegar a Corani.', 
            lugar: 'actividadcorani' 
        },
    ];

    return (
        <div className='page'>
            <div className="destino-container">
                <Informacion
                    title="Corani"
                    description="Corani es una localidad montañosa en el departamento de Cochabamba, 
                    Bolivia, conocida por su represa hidroeléctrica y su impresionante belleza natural. 
                    La región, rica en biodiversidad, es ideal para actividades de ecoturismo y aventura 
                    como el senderismo, la pesca y la observación de aves. Con una comunidad acogedora 
                    y una fuerte conexión con la tierra, Corani ofrece a los visitantes una experiencia 
                    auténtica de la cultura local en un entorno tranquilo y escénico."
                    favo="Añadir a favoritos"
                    imageUrl={'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/1d/7c/87/corani-lake.jpg?w=1200&h=-1&s=1'}
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
            </div>

            <div className="piejaja">
                <Footer />
            </div>
        </div>
    );
}

export default DestinoCorani;
