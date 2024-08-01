import './Destino.css';
import Detalles from "./Detalles";
import Tarjeta from "./Tarjeta";
import Informacion from './Informacion';
import Footer from '../../Components/Footer/Footer';


const Destino = () => {
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
        { icon: '', text: '200 Bs x Persona' },
        
      ]
    }
  ];
  const tarjetasItems = [
    { icon: '🌟', title: 'Itinerario', description: 'En esta sección verá un itinerario completo del viaje con sus actividades respectivas.' },
    { icon: '🚀', title: 'Informacion', description: 'Acá encontrarás información necesaria para tu viaje como por ejemplo que llevar.' },
    { icon: '📚', title: 'Rutas', description: 'Aquí encontraras la ruta que realizará el transporte para llegar a Pairumani.' },
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

        imageUrl="/img/pairumani1.jpg"
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

export default Destino;
