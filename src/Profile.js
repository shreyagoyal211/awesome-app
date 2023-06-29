import React from 'react';
import {useState} from 'react'; 


function Profile()
{   
    const [loggedIn ,setLoggedIn] = useState(7)              
  
    return(    
        <React.Fragment>   
        {   
            loggedIn==1? <h1>Welcome user1</h1>                             
            :loggedIn==2? <h1>Welcome user2</h1>   
            :<h1>Welcome another user</h1>    
        }             
        </React.Fragment>                                                
    )                    
                        
    // if(loggedIn)   
    // {  
    //     return(
    //         <h1>Welcome sidhu</h1>              
    //     )    
           
    // }  
    // else
    // {  
    //     return(
    //         <h1>Welcome guest</h1>
    //     )                   
    // }  
      
}      

export default Profile;      
                         
                             