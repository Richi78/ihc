import Footer from '../../Components/Footer/Footer'
import './Actividades.css'

const ActividadVillaTunari = () => {
  return (
    <div className='page'>
    <div className="bg-background p-6">
        <div className="titulo-itinerario">
            <h1 className="text-2xl font-bold subrayado">ITINERARIO</h1>
        </div>

        <div className="act">
            <div className="actividad-box">
                <div className="actividad-villa-tunari-uno actividad-card"></div>
                <div>
                    <h2 className="act2">Visita a las Cascadas</h2>
                    <p className="act3">Las cascadas tienen una estructura de estilo colonial, y
                        se
                        caracteriza por su construcción de piedra y su diseño
                        arquitectónico tradicional, que refleja las técnicas de construcción utilizadas en el pasado.
                        Más allá de su
                        funcionalidad como infraestructura de transporte, las cascadas tienen un valor
                        histórico y cultural
                        significativo. </p>
                    <p className="mt-2"><strong>Duración:</strong> 3 horas</p>
                    <p className="mt-1"><strong>Hora inicio:</strong> 07:00</p>
                    <p className="mt-1"><strong>Hora fin:</strong> 10:00</p>
                </div>
            </div>
        </div>
        <div className="act">
            <div className="actividad-box act-uwu">
                <div className="actividad-villa-tunari-dos actividad-card"></div>
                <div>
                    <h2 className="act2">Paseos extremos en el rio</h2>
                    <p className="act3">El Rio Ichilo ofrece una experiencia auténtica,
                        donde los visitantes pueden sumergirse en la vida cotidiana de la
                        comunidad local. Los paseos extremos den el rio suelen ofrecer paseos frescos y tradicionales, lo que permite
                        a los visitantes
                        experimentar la naturaleza y las actividade típicas de la región.</p>
                    <p className="mt-2"><strong>Duración:</strong> 1 hora</p>
                    <p className="mt-1"><strong>Hora inicio:</strong> 11:00</p>
                    <p className="mt-1"><strong>Hora fin:</strong> 12:00</p>
                </div>
            </div>
        </div>
        <div className="act">
            <div className="actividad-box">
                <div className="actividad-villa-tunari-tres actividad-card"></div>
                <div>
                    <h2 className="act2">Visita al Parque Dino Kong</h2>
                    <p className="act3">El Parque Dino Kong, de estilo neoclásico y
                        construido, fue edificada por el párroco Ángel de
                        María Moscoso y el arquitecto Pedro de Nogales. Al interior de la Iglesia,
                        se observa en los
                        brazos del crucero, retablos tallados en madera de cedro y revestidas con pan de oro, en estilo
                        barroco mestizo; el coro
                        de la Iglesia cobija un órgano magistral hecho en San Pedro de Moxos, ambas de la época
                        colonial.</p>
                    <p className="mt-2"><strong>Duración:</strong> 3 horas</p>
                    <p className="mt-1"><strong>Hora inicio:</strong> 12:00</p>
                    <p className="mt-1"><strong>Hora fin:</strong> 15:00</p>
                </div>
            </div>
        </div>
        <div className="act">
            <div className="actividad-box act-uwu">
                <div className="actividad-villa-tunari-cuatro actividad-card"></div>
                <div>
                    <h2 className="act2">Visita al Parque Carrasco</h2>
                    <p className="act3">El Parque Carrasco ofrece una experiencia auténtica,
                        donde los visitantes pueden sumergirse en la vida cotidiana de la
                        comunidad local. Los vendedores suelen ofrecer productos frescos y tradicionales, lo que permite
                        a los visitantes
                        experimentar la gastronomía y los productos típicos de la región.</p>
                    <p className="mt-2"><strong>Duración:</strong> 3 horas</p>
                    <p className="mt-1"><strong>Hora inicio:</strong> 15:00</p>
                    <p className="mt-1"><strong>Hora fin:</strong> 18:00</p>
                </div>
            </div>
        </div>
    </div>
    <div className="piejaja">
        <Footer />
      </div>
</div>
  )
}

export default ActividadVillaTunari