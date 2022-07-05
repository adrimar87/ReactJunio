import Item from './Item';
import './ItemList.css';


function ItemList(props)  {
  console.log(props)
  return (
   <div>
        {props.items.map((item)=>{
          
            <Item
                nombre={item.nombre}
                stock={item.stock}
                
            />
            // console.log(item.nombre)
        })}
        
   </div>   
   
  );
}

export default ItemList;