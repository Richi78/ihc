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
import DestinoCorani from "./Pages/Destino/DestinoCorani"
import DestinoIncallajta from "./Pages/Destino/DestinoIncallajta"
import DestinoPairumani from "./Pages/Destino/DestinoPairumani"
import DestinoTarata from "./Pages/Destino/DestinoTarata"
import DestinoVillaTunari from "./Pages/Destino/DestinoVillaTunari"
import FormPago from "./Pages/Pagos/FormPago"

function App() {

  return (
    <BrowserRouter>
      {/* aqui viene el navbar */}
      <Navbar/>
      <Routes>
        {/* aqui las rutas */}
        <Route path="/rutacorani" element={<RutaCorani/>} />
        <Route path="/corani" element={<DestinoCorani/>} />
        <Route path="/incallajta" element={<DestinoIncallajta/>} />
        <Route path="/pairumani" element={<DestinoPairumani/>} />
        <Route path="/tarata" element={<DestinoTarata/>} />
        <Route path="/villatunari" element={<DestinoVillaTunari/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/actitivad-corani" element={<ActividadCorani />} />
        <Route path="/actividad-incallajta" element={<ActividadIncallajta />} />
        <Route path="/actividad-pairumani" element={<ActividadPairumani />} />
        <Route path="/actividad-tarata" element={<ActividadTarata />} />
        <Route path="/actividad-villatunari" element={<ActividadVillaTunari />} />
        <Route path="/formp" element={<FormPago />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
