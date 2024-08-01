import Footer from '../../Components/Footer/Footer';
import Tarjeta from './Tarjeta';
import Detalles from './Detalles';
import Informacion from './Informacion';
import itinerarioImg from '../../assets/itinerario.png';
import informacionImg from '../../assets/lista.png';
import rutasImg from '../../assets/la-carretera.png';

const DestinoCorani = () => {
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
                { label: 'Comprar Tour' },
                { label: 'Reservar Tour'}
              ]
            }
          ]
        }
      ];
      const tarjetasItems = [
        { image: itinerarioImg, title: 'Itinerario', description: 'En esta sección verá un itinerario completo del viaje con sus actividades respectivas.' },
        { image: informacionImg, title: 'Informacion', description: 'Acá encontrarás información necesaria para tu viaje como por ejemplo que llevar.' },
        { image: rutasImg, title: 'Rutas', description: 'Aquí encontraras la ruta que realizará el transporte para llegar a Pairumani.' },
      ];
      const handleCardClick = () => {
        console.log(`Has hecho clic en: ${title}`);
      };
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
            auténtica de la cultura local en un entorno tranquilo y escénico. "
             
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
}

export default DestinoCorani