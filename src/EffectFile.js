import React ,{useEffect ,useState} from 'react';    
import './App.css';   
  

function EffectFile(props) {                
                               
          
    useEffect(() => {           
        alert("count is : "+ props.count+""+props.data)     
    },[props.count,props.data])                                               
                                                                      
    
    return(                              
        <div className="App">                 
              <h1>Count : {props.count}</h1>                       
              <h1>Data : {props.data}</h1>                       
                                                                                                                                                                                                                                                        
         </div>                                                                                                                                                                                                                                                                                                                                                                                                                    
    );      
}       
                                                                                                                                                                                                                                                 
                                  
               
export default EffectFile;                                   
   
    