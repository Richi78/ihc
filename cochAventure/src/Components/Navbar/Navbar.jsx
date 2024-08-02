import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import logo from "../../assets/logoCocha.png"

const Navbar = () => {
  const navigate = useNavigate()

  const handleInicio = () => {
    navigate('/home')
  }

  const handleDestino = () => {
    navigate('/home')
  }

  const handleFavoritos = () => {
    navigate('/favoritos')
  }

  const handleAcerca = () => {
    navigate('/acerca')
  }

  const handleContacto = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <nav className='navBar'>
      <div className="logo" onClick={handleInicio} style={{cursor: "pointer"}}>
        <img src={logo} alt="Logo" width={100} height={60}/>
      </div>
      <div className='nav-options'>
        <label className='para-hover' onClick={handleDestino}>Inicio</label>
        <label className='para-hover' onClick={handleFavoritos}>Favoritos</label>
        <label className='para-hover' onClick={handleContacto}>Contáctenos</label>
        <label className='para-hover' onClick={handleAcerca}>Acerca de nosotros</label>
        <button className="btn cerrar-sesion">Cerrar Sesión</button>
      </div>
    </nav>
  )
}

export default Navbar
