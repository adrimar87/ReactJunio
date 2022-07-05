import './Item.css';


function Item(props)  {
  console.log(props.nombre)
  return (
   <div>
        <h3>{props.nombre}</h3>
        
        
        <h3>{props.stock}</h3>
        
        {/* <h3>Titulo</h3>
        <h3>Precio</h3>
        <h3>Autor</h3> */}
        
   </div>
        
      
  );
}

export default Item;