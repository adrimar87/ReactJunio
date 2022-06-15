import './Navbar.css';

function Navbar()  {
  return (
    <header >
       <div className="container">
        <div className="row">
            <div className="col">
            <h1> Libreando Ando</h1>
            </div>
            <div className="col">
                                 
                    <ul>
                        <li>Inicio</li>
                        <li>Libros</li>
                        <li>Compras</li>
                        <li>Contacto</li>
                    </ul>
                
            </div>
            
        </div>
        </div>
    </header>
   
  );
}

export default Navbar