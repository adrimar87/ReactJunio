import ItemList from './ItemList';
import './ItemListContainer.css';
import useState, { useEffect } from "react"
function ItemListContainer()  {
    // const bookData = [
    //     {
    //     id:1,
    //     nombre:"Alguien te espera",
    //     stock:4
    //   },
    //   {
    //     id:2,
    //     nombre:"Imaginieria",
    //     stock:8
    //   },
    //   {
    //     id:3,
    //     nombre:"Limites",
    //     stock:2
    //   }
    // ]
  const [data,dataSet]=useState([]);
  useEffect(()=>{
    setTimeout(
      fetch("data.json")
      .then((resp)=>resp.json())
      .then((data)=>dataSet(data))
      ,2000
    )
  }
  )
  return (
       <>
        <ItemList items={data}/>
        </>   
  );
}

export default ItemListContainer;