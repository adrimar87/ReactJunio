
import './App.css';
 //import Cuerpo from './componentes/Cuerpo';
// import ItemCounts from './componentes/ItemCounts';
// import ItemListContainer from './componentes/ItemListContainer';
import {Route, Routes} from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Libros from './paginas/Libros';
import Contacto from './paginas/Contacto';
import Comprar from './paginas/Comprar';
import Inicio from './paginas/Inicio';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path="/inicio" element={<Inicio/>}></Route>
       <Route path="/Libros" element={<Libros/>}></Route>
       <Route path="/Comprar" element={<Comprar/>}></Route>
       <Route path="/Contacto" element={<Contacto/>}></Route>
     </Routes>
     {/* <Cuerpo/> */}
     
     {/* <ItemCounts/> */}
     {/* <ItemListContainer/> */}
    </div>
  );
}

export default App;
