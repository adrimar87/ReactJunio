import './ItemCounts.css';
import {useState} from "react";


function ItemCounts()  {

    const  [cont,setCont]=useState(0);

    const suma = () => {
        if(cont<15){
            setCont(cont + 1)
          }
    }
    
    const resta = () => {
         if(cont>1){
            setCont(cont - 1)
          }
    }
    
  return (
   <>
    <div className='conta'>
        <button onClick={resta} type="button" className="btn btn-outline-info  btn-lg font-weight-bold">-</button>
        <h1>{cont}</h1>
        <button  onClick={suma} type="button" className="btn btn-outline-info btn-lg font-weight-bold">+</button>
    </div>  
   </>
   
   
  );
}

export default ItemCounts;