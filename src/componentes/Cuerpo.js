import './Cuerpo.css';
import ItemCounts from './ItemCounts';
// import {useEffect} from "react";

import ItemListContainer from './ItemListContainer';

function Cuerpo()  {
  // useEffect(()=>{
  //   fetch('data.json')
  //   .then((resp) => resp.json())
  //   .then((data)=> console.log(data))
  // }
  
  // ,[]  )

  return (
   
       <div className="body">
                 <ItemListContainer/>
             {/* <ItemCounts/> */}
        </div>        
       );
}

export default Cuerpo