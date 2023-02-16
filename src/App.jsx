
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/index.css";
import NavBar from "./components/NavBar/NavBar";
import Inicio from "./pages/Inicio"
import Tienda from "./pages/Tienda"
import Galeria from "./pages/Galeria"
import Nosotros from "./pages/Nosotros"
import Contacto from "./pages/Contacto"
import Carrito from "./pages/Carrito";


function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route element={<NavBar/>}>
        <Route exact path="/" element={<Inicio/>}/>
        <Route exact path="/tienda" element={<Tienda/>}/>
        <Route exact path="/galeria" element={<Galeria/>}/>
        <Route exact path="/nosotros" element={<Nosotros/>}/>
        <Route exact path="/contacto" element={<Contacto/>}/>
        <Route exact path="/carrito" element={<Carrito/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
      
    </>
    
  );
}

export default App;