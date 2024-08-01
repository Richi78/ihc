import { useNavigate } from 'react-router-dom';
import './Tarjeta.css';

const Tarjeta = ({ image, title, description, lugar }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    
    if (title === "Itinerario" && lugar === "actividadcorani"){
      console.log("jaja")
      navigate('/'+lugar)
    }
    if (title === "Itinerario" && lugar === "actividadincallajta"){
      console.log("jaja")
      navigate('/'+lugar)
    }
    if (title === "Itinerario" && lugar === "actividadpairumani"){
      console.log("jaja")
      navigate('/'+lugar)
    }
    if (title === "Itinerario" && lugar === "actividadtarata"){
      console.log("jaja")
      navigate('/'+lugar)
    }
    if (title === "Itinerario" && lugar === "actividadvillatunari"){
      console.log("jaja")
      navigate('/'+lugar)
    }

    if (title === "Rutas" && lugar === "actividadcorani"){
      console.log("jaja")
      navigate('/rutacorani')
    }
    if (title === "Rutas" && lugar === "actividadincallajta"){
      console.log("jaja")
      navigate('/rutaincallajta')
    }
    if (title === "Rutas" && lugar === "actividadpairumani"){
      console.log("jaja")
      navigate('/rutapairumani')
    }
    if (title === "Rutas" && lugar === "actividadtarata"){
      console.log("jaja")
      navigate('/rutatarata')
    }
    if (title === "Rutas" && lugar === "actividadvillatunari"){
      console.log("jaja")
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
