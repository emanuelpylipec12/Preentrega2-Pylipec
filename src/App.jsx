import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import NavBar from './Componentes/NavBar/NavBar';
import Nostros from "./Componentes/Nosotros/Nosotros";
import '..//src/Estilos/estilos.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./Componentes/Context/CartContext";
import Carrito from "./Componentes/Carrito/Carrito";
import Checkout from "./Componentes/Checkout/Checkout";








function App() {
   return (
    <div>
      <CartProvider>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/Productos/:categoria" element={<ItemListContainer />} />
          <Route path="/Productos" element={<ItemListContainer />} />
          <Route path="/Nosotros" element={<Nostros />}/>
          <Route path="/carrito" element={<Carrito />}/>
          <Route path='/checkout' element={ <Checkout/>} />
        </Routes>

       </BrowserRouter>
       </CartProvider>
      
    </div>
  );
}

export default App;
