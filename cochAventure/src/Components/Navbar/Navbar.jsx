import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const handleInicio = () => {
    navigate('/home')
  }
  const handleDestino = () => {
    navigate('/home')
  }
  const handleContacto = () => {
    window.scroll({
      bottom: document.body.scrollHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }
  return (
    <nav className='navBar'>
      <div className="logo">
            <img src="logo.png" alt="Logo"/>
      </div>
      <div className='nav-options'>
            <label className='para-hover' onClick={handleInicio}>Inicio</label>
            <label className='para-hover' onClick={handleDestino}>Destinos</label>
            <label>Acerca de nosotros</label>
            <label>Favoritos</label>
            <label className='para-hover' onClick={handleContacto}>Contáctenos</label>
            <button className="btn">Cerrar Sesión</button>
      </div>
    </nav>
  )
}

export default Navbar