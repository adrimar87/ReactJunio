import Item from './Item';
import './ItemList.css';


function ItemList(props)  {
  console.log(props)
  return (
   <>
        {props.items.map((item)=>{
          return(
            <Item
                nombre={item.nombre}
                stock={item.stock}
                
            />)
            // console.log(item.nombre)
        })}
        
   </>   
   
  );
}

export default ItemList;