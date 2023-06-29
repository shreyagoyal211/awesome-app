import React from 'react'; 

function Usercomp(props)   
{
    return(
            <div>
                <span>{props.data.name}</span>
                <span>{props.data.email}</span>
                <button>Hello {props.data.contact}</button>


            </div>        
        );            
   
}  
   
export default Usercomp;     

                      