import React from 'react'; 

function Members(props)                   
{
    return(
        <React.Fragment>
            <h1>Member Component</h1>                             
             <button onClick={props.data}>Call data function </button>   
                             
        </React.Fragment>                                                                                                                                      
    );              
}   


export default Members;                                   


                    