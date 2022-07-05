import './Item.css';


function Item(props)  {
  // console.log(props.nombre)
  return (
   <>
      <div >
        <h3>Nombre: {props.nombre}</h3>
        <h3>stock: {props.stock}</h3>
      </div>                 
   </>      
  );

}

export default Item;