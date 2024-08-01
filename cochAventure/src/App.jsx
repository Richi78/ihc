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
import RutaIncallajta from "./Pages/Rutas/RutaIncallajta"
import RutaPairumani from "./Pages/Rutas/RutaPairumani"
import RutaTarata from "./Pages/Rutas/RutaTarata"
import RutaVillaTunari from "./Pages/Rutas/RutaVillaTunari"

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
        <Route path="/actividadcorani" element={<ActividadCorani />} />
        <Route path="/actividadincallajta" element={<ActividadIncallajta />} />
        <Route path="/actividadpairumani" element={<ActividadPairumani />} />
        <Route path="/actividadtarata" element={<ActividadTarata />} />
        <Route path="/actividadvillatunari" element={<ActividadVillaTunari />} />
        <Route path="/rutacorani" element={<RutaCorani />} />
        <Route path="/rutaincallajta" element={<RutaIncallajta />} />
        <Route path="/rutapairumani" element={<RutaPairumani />} />
        <Route path="/rutatarata" element={<RutaTarata />} />
        <Route path="/rutavillatunari" element={<RutaVillaTunari />} />
        <Route path="/formp" element={<FormPago />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
