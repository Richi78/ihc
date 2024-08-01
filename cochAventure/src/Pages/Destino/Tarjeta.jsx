import { useNavigate } from 'react-router-dom';
import './Tarjeta.css';

const Tarjeta = ({ image, title, description, lugar }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    
    if (title === "Itinerario" && lugar === "actividadcorani"){
      navigate('/'+lugar)
    }
    if (title === "Itinerario" && lugar === "actividadincallajta"){
      navigate('/'+lugar)
    }
    if (title === "Itinerario" && lugar === "actividadpairumani"){
      navigate('/'+lugar)
    }
    if (title === "Itinerario" && lugar === "actividadtarata"){
      navigate('/'+lugar)
    }
    if (title === "Itinerario" && lugar === "actividadvillatunari"){
      navigate('/'+lugar)
    }

    if (title === "Rutas" && lugar === "actividadcorani"){
      navigate('/rutacorani')
    }
    if (title === "Rutas" && lugar === "actividadincallajta"){
      navigate('/rutaincallajta')
    }
    if (title === "Rutas" && lugar === "actividadpairumani"){
      navigate('/rutapairumani')
    }
    if (title === "Rutas" && lugar === "actividadtarata"){
      navigate('/rutatarata')
    }
    if (title === "Rutas" && lugar === "actividadvillatunari"){
      navigate('/rutavillatunari')
    }
    
  }
  return (
    <div className="tarjeta" onClick={handleClick} >
      <div className="imagen" >
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Tarjeta;
