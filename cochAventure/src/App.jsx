import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Navbar from "./Components/Navbar/Navbar"
import Ruta from "./Pages/Ruta"
import Destino from "./Pages/Destino/Destino"

function App() {

  return (
    <BrowserRouter>
      {/* aqui viene el navbar */}
      <Navbar/>
      <Routes>
        {/* aqui las rutas */}
        <Route path="/ruta" element={<Ruta/>} />
        <Route path="/destino" element={<Destino/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
