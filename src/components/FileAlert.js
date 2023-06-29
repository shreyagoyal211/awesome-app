import React from "react";
import Alert from 'react-bootstrap/Alert';

function FileAlert(props)
{  
    return(
        props.alert &&  <React.Fragment>
           <Alert variant={props.alert.type} >
            <p>
               <strong>{props.alert.type}</strong> : {props.alert.msg}
            </p>
        </Alert>
        </React.Fragment>                  
    ); 
} 
  
     
export default FileAlert; 

                            
   

