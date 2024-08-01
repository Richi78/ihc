import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Navbar from "./Components/Navbar/Navbar"
import Ruta from "./Pages/Ruta"
import Home from "./Pages/Home"

function App() {

  return (
    <BrowserRouter>
      {/* aqui viene el navbar */}
      <Navbar/>
      <Routes>
        {/* aqui las rutas */}
        <Route path="/ruta" element={<Ruta />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
