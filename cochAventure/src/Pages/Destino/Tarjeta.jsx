import { useNavigate } from 'react-router-dom';
import './Tarjeta.css';

const Tarjeta = ({ image, title, description, lugar }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    
    if (title === "Itinerario" && lugar === "actividadcorani"){
      navigate('/corani/'+lugar)
    }
    if (title === "Itinerario" && lugar === "actividadincallajta"){
      navigate('/incallajta/'+lugar)
    }
    if (title === "Itinerario" && lugar === "actividadpairumani"){
      navigate('/paurimani/'+lugar)
    }
    if (title === "Itinerario" && lugar === "actividadtarata"){
      navigate('/tarata/'+lugar)
    }
    if (title === "Itinerario" && lugar === "actividadvillatunari"){
      navigate('/villatunari/'+lugar)
    }

    if (title === "Información" && lugar === "actividadcorani"){
      navigate('/nocontent')
    }
    if (title === "Información" && lugar === "actividadincallajta"){
      navigate('/nocontent')
    }
    if (title === "Información" && lugar === "actividadpairumani"){
      navigate('/nocontent')
    }
    if (title === "Información" && lugar === "actividadtarata"){
      navigate('/nocontent')
    }
    if (title === "Información" && lugar === "actividadvillatunari"){
      navigate('/nocontent')
    }

    if (title === "Rutas" && lugar === "actividadcorani"){
      navigate('/corani/rutacorani')
    }
    if (title === "Rutas" && lugar === "actividadincallajta"){
      navigate('/incallajta/rutaincallajta')
    }
    if (title === "Rutas" && lugar === "actividadpairumani"){
      navigate('/pairumani/rutapairumani')
    }
    if (title === "Rutas" && lugar === "actividadtarata"){
      navigate('/tarata/rutatarata')
    }
    if (title === "Rutas" && lugar === "actividadvillatunari"){
      navigate('/villatunari/rutavillatunari')
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
