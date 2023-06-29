import React from 'react';
  
function Student(props)
{   
    console.log(props);
    return(
        <React.Fragment>
            <h1>Student Component</h1>
            <h3>Hello !! {props.name}, {props.email}</h3> 
  
                        
         </React.Fragment>     
    );
} 
  
export default Student; 
  
    