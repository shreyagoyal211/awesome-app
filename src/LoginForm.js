import React ,{useState} from "react";      

function LoginForm()
{    
    const [user,setUser] = useState("")     
    const [password, setPassword] =useState("") 
    const [userErr ,setUserErr] =useState(false) 
    const [passErr , setPassErr] =useState(false)  
   
   
    const purple  = "#8e44ad";  
    const [bg ,setBg] = useState(purple)   
    const [name ,setName] = useState("Click Me")      

         
    function loginHandle(e){   
        if(user.length<3 || password.length<3) 
        {
           // alert("type correct values")      
        }
        else
        {
           // alert("all good :)")      
        }
        e.preventDefault(); 
    }   

    function userHandler(e){                                 
        let item = e.target.value;  
        if(item.length<3)      
        {
            setUserErr(true)                 
        }        
        else
        {  
            setUserErr(false)                             
        }                     
                          
        setUser(item)                       
        // console.warn(e.target.value.length)               
    }                                                 
                        
    function passHandler(e){      
        let pass = e.target.value;                   
        if(pass.length<3)        
        {           
            setPassErr(true)      
        }                
        else 
        {    
            setPassErr(false)  
        }      
        setPassword(pass)     
    }                 

    const bgChange = () => {    
        //console.log("Clicked on button");
        const red = "#FF0000";  
        setBg(red);
        setName("Ouch !!");          
    } 
    
    const bgChange2 = () => {    
        //console.log("Clicked on button"); 
        const yellow = "#FFFF00";    
        setBg(yellow);
        setName("Ayyo !!");              
    } 


    return(                  
        <React.Fragment>  
        <form onSubmit={loginHandle} style={{backgroundColor : bg }}>       
            <h1>Login Form</h1>  
            <input type="text" placeholder="Enter user Id" onChange={userHandler} />    
            {userErr? <span>User not valid</span> : "" }                           
                         
            <br/> <br/>                            
            <input type="text" placeholder="Enter user password" onChange={passHandler} />    
            {passErr? <span>Password not valid</span> : "" }                                                     
                                                                         
                                                     
            <br/> <br/>                                                                
            <button type="submit">Login</button>    
            <button onMouseEnter={bgChange} onMouseLeave={bgChange2}>{name}</button>                                                                                                                                                                                                                                                                                                  
            </form>                            
        </React.Fragment>               

    );                       
}     
          
   
      
export default LoginForm;                      
   
             
  