// App.jsx

import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";

import Home from "./Pages/Home";
import ActividadCorani from "./Pages/Actividades/ActividadCorani";
import ActividadIncallajta from "./Pages/Actividades/ActividadIncallajta";
import ActividadPairumani from "./Pages/Actividades/ActividadPairumani";
import ActividadTarata from "./Pages/Actividades/ActividadTarata";
import ActividadVillaTunari from "./Pages/Actividades/ActividadVillaTunari";
import RutaCorani from "./Pages/Rutas/RutaCorani";
import DestinoCorani from "./Pages/Destino/DestinoCorani";
import DestinoIncallajta from "./Pages/Destino/DestinoIncallajta";
import DestinoPairumani from "./Pages/Destino/DestinoPairumani";
import DestinoTarata from "./Pages/Destino/DestinoTarata";
import DestinoVillaTunari from "./Pages/Destino/DestinoVillaTunari";
import FormPago from "./Pages/Pagos/FormPago";
import FormReserva from "./Pages/Pagos/FormReserva";
import RutaIncallajta from "./Pages/Rutas/RutaIncallajta";
import RutaPairumani from "./Pages/Rutas/RutaPairumani";
import RutaTarata from "./Pages/Rutas/RutaTarata";
import RutaVillaTunari from "./Pages/Rutas/RutaVillaTunari";
import Favoritos from "./Pages/Favoritos/Favoritos";
import Comprobante from './Pages/Comprobante/Comprobante';
import Autorizacion from './Pages/Autorizacion/Autorizacion';
import Acerca from './Pages/AboutUs/Acerca';
import NoContent from './Pages/NoContent/noContent';
import { AuthProvider } from "./Pages/Autorizacion/Autenticacion";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* Navbar */}
        <Navbar />
        <Routes>
          {/* Rutas planas */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/autorizacion" element={<Autorizacion />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/nocontent" element={<NoContent />} />

          {/* Rutas para Corani */}
          <Route path="/corani" element={<DestinoCorani />} />
          <Route path="/corani/formp" element={<FormPago />} />
          <Route path="/corani/formp/comprobante" element={<Comprobante />} />
          <Route path="/corani/formr" element={<FormReserva />} />
          <Route path="/corani/formr/comprobante" element={<Comprobante />} />
          <Route path="/corani/rutacorani" element={<RutaCorani />} />
          <Route path="/corani/actividadcorani" element={<ActividadCorani />} />

          {/* Rutas para Incallajta */}
          <Route path="/incallajta" element={<DestinoIncallajta />} />
          <Route path="/incallajta/formp" element={<FormPago />} />
          <Route path="/incallajta/formp/comprobante" element={<Comprobante />} />
          <Route path="/incallajta/formr" element={<FormReserva />} />
          <Route path="/incallajta/formr/comprobante" element={<Comprobante />} />
          <Route path="/incallajta/rutaincallajta" element={<RutaIncallajta />} />
          <Route path="/incallajta/actividadincallajta" element={<ActividadIncallajta />} />

          {/* Rutas para Pairumani */}
          <Route path="/pairumani" element={<DestinoPairumani />} />
          <Route path="/pairumani/formp" element={<FormPago />} />
          <Route path="/pairumani/formp/comprobante" element={<Comprobante />} />
          <Route path="/pairumani/formr" element={<FormReserva />} />
          <Route path="/pairumani/formr/comprobante" element={<Comprobante />} />
          <Route path="/pairumani/rutapairumani" element={<RutaPairumani />} />
          <Route path="/pairumani/actividadpairumani" element={<ActividadPairumani />} />

          {/* Rutas para Tarata */}
          <Route path="/tarata" element={<DestinoTarata />} />
          <Route path="/tarata/formp" element={<FormPago />} />
          <Route path="/tarata/formp/comprobante" element={<Comprobante />} />
          <Route path="/tarata/formr" element={<FormReserva />} />
          <Route path="/tarata/formr/comprobante" element={<Comprobante />} />
          <Route path="/tarata/rutatarata" element={<RutaTarata />} />
          <Route path="/tarata/actividadtarata" element={<ActividadTarata />} />

          {/* Rutas para Villa Tunari */}
          <Route path="/villatunari" element={<DestinoVillaTunari />} />
          <Route path="/villatunari/formp" element={<FormPago />} />
          <Route path="/villatunari/formp/comprobante" element={<Comprobante />} />
          <Route path="/villatunari/formr" element={<FormReserva />} />
          <Route path="/villatunari/formr/comprobante" element={<Comprobante />} />
          <Route path="/villatunari/rutavillatunari" element={<RutaVillaTunari />} />
          <Route path="/villatunari/actividadvillatunari" element={<ActividadVillaTunari />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
