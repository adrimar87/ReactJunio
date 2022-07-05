
import './App.css';
// import Cuerpo from './componentes/Cuerpo';
import ItemCounts from './componentes/ItemCounts';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';


function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <Cuerpo/> */}
     <ItemCounts/>
     <ItemListContainer/>
    </div>
  );
}

export default App;
