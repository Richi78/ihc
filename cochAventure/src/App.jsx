import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Navbar from "./Components/Navbar/Navbar"
import Ruta from "./Pages/Ruta"
import Destino from "./Pages/Destino/Destino"
import Home from "./Pages/Home"
import ActividadCorani from "./Pages/ActividadCorani"
import ActividadIncallajta from "./Pages/ActividadIncallajta"
import ActividadPairumani from "./Pages/ActividadPairumani"
import ActividadTarata from "./Pages/ActividadTarata"
import ActividadVillaTunari from "./Pages/ActividadVillaTunari"

function App() {

  return (
    <BrowserRouter>
      {/* aqui viene el navbar */}
      <Navbar/>
      <Routes>
        {/* aqui las rutas */}
        <Route path="/ruta" element={<Ruta/>} />
        <Route path="/destino" element={<Destino/>} />
        <Route path="/ruta" element={<Ruta />} />
        <Route path="/home" element={<Home />} />
        <Route path="/corani" element={<ActividadCorani />} />
        <Route path="/incallajta" element={<ActividadIncallajta />} />
        <Route path="/pairumani" element={<ActividadPairumani />} />
        <Route path="/tarata" element={<ActividadTarata />} />
        <Route path="/villatunari" element={<ActividadVillaTunari />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
