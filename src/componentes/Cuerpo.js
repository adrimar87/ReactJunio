import './Cuerpo.css';
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
    <body >
       <div className="container">
        <div className="row">
            <div className="col">
              <ItemListContainer/>
              </div>
            <div className="col">
                                 
                  
                
            </div>
            
        </div>
        </div>
    </body>
   
  );
}

export default Cuerpo