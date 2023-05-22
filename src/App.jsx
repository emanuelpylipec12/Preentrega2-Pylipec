import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import Nostros from "./Componentes/Nosotros/Nosotros";
import '..//src/Estilos/estilos.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";





function App() {

  return (
    <div>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/Productos/:categoria" element={<ItemListContainer />} />
          <Route path="/Productos" element={<ItemListContainer />} />
          <Route path="/Nosotros" element={<Nostros />}/>
        </Routes>

       </BrowserRouter>
      
    </div>
  );
}

export default App;
