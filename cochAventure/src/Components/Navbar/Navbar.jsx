import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {


  return (
    <nav className='navBar'>
      <div className="logo">
            <img src="logo.png" alt="Logo"/>
      </div>
      <div className='nav-options'>
            <label>Inicio</label>
            <label>Destinos</label>
            <label>Acerca de nosotros</label>
            <label>Favoritos</label>
            <label>Contáctenos</label>
            <button className="btn">Cerrar Sesión</button>
      </div>
    </nav>
  )
}

export default Navbar