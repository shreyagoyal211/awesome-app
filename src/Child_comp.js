import React from 'react';

function Child_comp(props)
{
    const data = {name:"Peter Sidhu" ,email: "peter@test.com"}
  
    return( 
        <div>
            <h3>User name :</h3>                    
            <button onClick={()=>props.alert(data)}>Click me</button>           
        </div>                                                   
    ); 
  
} 
  
  
  
export default Child_comp;                                       
   
  