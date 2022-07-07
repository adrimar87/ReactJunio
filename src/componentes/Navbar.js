import CartWidget from './CartWidget';
import './Navbar.css';
import{Link} from 'react-router-dom';

function Navbar()  {
  return (
    <header >
       <div className="container">
        <div className="row">
            <div className="col">
            <h1> Libreando Ando</h1>
            </div>
            <div className="col">
            < div className="row orden">         
                    <ul>
                        <li><Link to='/Inicio'>Inicio</Link></li>
                        <li><Link to='/Libros'>Libros</Link></li>
                        <li><Link to='/Comprar'>Compras</Link></li>
                        <li><Link to='/Contacto'>Contacto</Link></li>
                    </ul>
                    <CartWidget/>
                   {/* < div className="row">
                     <CartWidget/>
                  </div> */}
                  </div> 
            </div>
                        
        </div>
        
      </div>
    </header>
   
  );
}

export default Navbar