import './Navbar.css'
import { useNavigate,useLocation } from 'react-router-dom'
import logo from "../../assets/logoCocha.png"

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation();

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
  const isActive = (path) => location.pathname === path ? 'active' : '';
  return (
    <nav className='navBar'>
      <div className="logo" onClick={handleInicio} style={{cursor: "pointer"}}>
        <img src={logo} alt="Logo" width={100} height={60}/>
      </div>
      <div className='nav-options'>
      <label className={`para-hover ${isActive('/home')}`} onClick={handleInicio}>Inicio</label>
        <label className={`para-hover ${isActive('/favoritos')}`} onClick={handleFavoritos}>Favoritos</label>
        <label className={`para-hover ${isActive('/acerca')}`} onClick={handleAcerca}>Acerca de nosotros</label>
        <label className='para-hover' onClick={handleContacto}>Contáctenos</label>
        <button className="btn cerrar-sesion">alsfkksf Sesión</button>
      </div>
    </nav>
  )
}

export default Navbar
