import Footer from '../../Components/Footer/Footer';
import Tarjeta from './Tarjeta';
import Detalles from './Detalles';
import Informacion from './Informacion';
import itinerarioImg from '../../assets/itinerario.png';
import informacionImg from '../../assets/lista.png';
import rutasImg from '../../assets/la-carretera.png';
import './Destino.jsx'


const DestinoPairumani = () => {
    const detallesItems = [
        {
          title: 'INCLUYE',
          items: [
            { icon: '🛏️', text: 'Transporte ida y vuelta: Bus.' },
            { icon: '🍽️', text: 'Desayuno, Refrigerio y almuerzo.' },
            { icon: '🚌', text: 'Guías completas durante el viaje.' }
          ]
        },
        {
          title: 'DETALLES',
          items: [
            { icon: '🏞️', text: ' Duración: 1 Dia' },
            { icon: '📅', text: 'Fecha salida: 06/08/2024 ' },
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
                { label: 'Comprar Tour', onClick: () => console.log('Comprar Tour') },
                { label: 'Reservar Tour', onClick: () => console.log('Reservar Tour') }
              ]
            }
          ]
        }
      ];
      const tarjetasItems = [
        { image: itinerarioImg, title: 'Itinerario', description: 'En esta sección verá un itinerario completo del viaje con sus actividades respectivas.', lugar: 'actividadpairumani' },
        { image: informacionImg, title: 'Informacion', description: 'Acá encontrarás información necesaria para tu viaje como por ejemplo que llevar.', lugar: 'actividadpairumani' },
        { image: rutasImg, title: 'Rutas', description: 'Aquí encontraras la ruta que realizará el transporte para llegar a Pairumani.', lugar: 'actividadpairumani' },
      ];
      return (
        <div className='page'>
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
          
        </div>
        <div className="piejaja">
            <Footer />
          </div>
        </div>
      );
}

export default DestinoPairumani