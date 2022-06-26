
import './App.css';
import Cuerpo from './componentes/Cuerpo';
import ItemCounts from './componentes/ItemCounts';
import Navbar from './componentes/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Cuerpo></Cuerpo>
     <ItemCounts/>
    </div>
  );
}

export default App;
