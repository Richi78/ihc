import Footer from '../../Components/Footer/Footer';
import Tarjeta from './Tarjeta';
import Detalles from './Detalles';
import Informacion from './Informacion';
import itinerarioImg from '../../assets/itinerario.png';
import informacionImg from '../../assets/lista.png';
import rutasImg from '../../assets/la-carretera.png';
import './Destino.jsx'
import busIcon from '../../assets/bus.png';
import dateIcon from '../../assets/date.png';
import foodIcon from '../../assets/food.png';
import timeIcon from '../../assets/time.png';
import guiaIcon from '../../assets/guia.png';
const DestinoTarata = () => {
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
                { label: 'Comprar Tour' },
                { label: 'Reservar Tour'}
              ]
            }
          ]
        }
      ];
      const tarjetasItems = [
        { image: itinerarioImg, title: 'Itinerario', description: 'En esta sección verá un itinerario completo del viaje con sus actividades respectivas.', lugar:'actividadtarata' },
        { image: informacionImg, title: 'Informacion', description: 'Acá encontrarás información necesaria para tu viaje como por ejemplo que llevar.', lugar:'actividadtarata' },
        { image: rutasImg, title: 'Rutas', description: 'Aquí encontraras la ruta que realizará el transporte para llegar a Pairumani.', lugar:'actividadtarata' },
      ];
      return (
        <div className='page'>
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
          
        </div>
        <div className="piejaja">
            <Footer />
          </div>
        </div>
      );
}

export default DestinoTarata