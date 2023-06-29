import React from 'react';                
       
      
function User(props)  
{     
    return(
        <React.Fragment>
            <h1>User Component</h1>                      
            <button onClick={props.data}>Call data function </button>                  
        </React.Fragment>                                                                                                                               
    );              
}                        
  
  
  
export default User;                                                                                                     
  
                                       
     