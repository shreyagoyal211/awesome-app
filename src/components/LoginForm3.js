import React ,{useState} from 'react';

export default function LoginForm3()
{   
    const [name, setName] = useState("");
    const [lastname, setlastName] = useState("");
  
    const [fullname, setfullName] = useState("");
 
    const inputnameEvent = (event) => {
       // console.log(event.target.value);    
        setName(event.target.value);
    }

    const inputlastnameEvent = (event) => {
         setlastName(event.target.value);       
    }
  
  
    const SubmitForm = (event) => {
        event.preventDefault();
        setfullName(name+ " " +lastname);      
    }
  
    return(                                                            
        <React.Fragment>
        <form onSubmit={SubmitForm}>
            <h1>Hello {fullname}</h1>
            <input type="text" onChange={inputnameEvent} placeholder="Enter first name !!" value={name} /><br/><br/>      
            <input type="text" onChange={inputlastnameEvent} placeholder="Enter last name!!" value={lastname} />   <br/><br/> 
            <button type="submit">Submit</button>                                           
        </form>                                                       
        </React.Fragment>                                                                                                                            
    ); 
} 
      
                  
   