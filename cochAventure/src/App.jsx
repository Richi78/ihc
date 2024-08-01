import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Navbar from "./Components/Navbar/Navbar"

import Destino from "./Pages/Destino/Destino"
import Home from "./Pages/Home"
import ActividadCorani from "./Pages/Actividades/ActividadCorani"
import ActividadIncallajta from "./Pages/Actividades/ActividadIncallajta"
import ActividadPairumani from "./Pages/Actividades/ActividadPairumani"
import ActividadTarata from "./Pages/Actividades/ActividadTarata"
import ActividadVillaTunari from "./Pages/Actividades/ActividadVillaTunari"
import RutaCorani from "./Pages/Rutas/RutaCorani"

function App() {

  return (
    <BrowserRouter>
      {/* aqui viene el navbar */}
      <Navbar/>
      <Routes>
        {/* aqui las rutas */}
        <Route path="/rutacorani" element={<RutaCorani/>} />
        <Route path="/destino" element={<Destino/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/corani" element={<ActividadCorani />} />
        <Route path="/incallajta" element={<ActividadIncallajta />} />
        <Route path="/pairumani" element={<ActividadPairumani />} />
        <Route path="/tarata" element={<ActividadTarata />} />
        <Route path="/villatunari" element={<ActividadVillaTunari />} />
        <Route path="/destino" element={<Destino />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
