import Footer from '../../Components/Footer/Footer';
import './Actividades.css'

const ActividadIncallajta = () => {
  return (
    <div className="page">
      <div className="bg-background p-6">
        <div className="titulo-itinerario">
          <h1 className="text-2xl font-bold subrayado">ITINERARIO - INCALLAJTA</h1>
        </div>

        <div className="act">
          <div className="actividad-box">
            <div className="actividad-incallajta-uno actividad-card"></div>
            <div>
              <h2 className="act2">
                Visita a las ruinas de la Ciudadela Inca
              </h2>
              <p className="act3">
                Las ruinas tienen una estructura de estilo colonial, y se
                caracteriza por su construcción de piedra y su diseño
                arquitectónico tradicional, que refleja las técnicas de
                construcción utilizadas en el pasado. Más allá de su
                funcionalidad como infraestructura de transporte, el Puente de
                Melgarejo tiene un valor histórico y cultural significativo.{" "}
              </p>
              <p className="mt-2">
                <strong>Duración:</strong> 2 horas
              </p>
              <p className="mt-1">
                <strong>Hora inicio:</strong> 08:00
              </p>
              <p className="mt-1">
                <strong>Hora fin:</strong> 10:00
              </p>
            </div>
          </div>
        </div>
        <div className="act">
          <div className="actividad-box act-uwu">
            <div className="actividad-incallajta-dos actividad-card"></div>
            <div>
              <h2 className="act2">Recreación teatral</h2>
              <p className="act3">
                La ciudadela ofrece una experiencia auténtica, donde los
                visitantes pueden sumergirse en la vida cotidiana de la
                comunidad local. Los vendedores locales suelen ofrecer productos frescos
                y tradicionales, lo que permite a los visitantes experimentar la
                gastronomía y los productos típicos de la región.
              </p>
              <p className="mt-2">
                <strong>Duración:</strong> 2 horas
              </p>
              <p className="mt-1">
                <strong>Hora inicio:</strong> 11:00
              </p>
              <p className="mt-1">
                <strong>Hora fin:</strong> 13:00
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="piejaja">
        <Footer />
      </div>
    </div>
  );
};

export default ActividadIncallajta;
