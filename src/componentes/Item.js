import './Item.css';
import ItemCounts from "./ItemCounts";
//import car from '../multimedia/carrito.png'

function Item(props)  {
  // console.log(props.nombre)
  return (
   <>
      <div className='dato'>
          
        <img src={props.foto}  alt=''/>
        <h3>Nombre: {props.nombre}</h3>
        <h3>stock: {props.stock}</h3>
        <ItemCounts/>
      </div>                 
   </>      
  );

}

export default Item;