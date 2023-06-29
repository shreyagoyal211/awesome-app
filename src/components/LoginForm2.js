import React ,{useState} from 'react';

export default function LoginForm2() 
{
    const [name, setName] = useState("");
    const [fullname, setfullName] = useState("");

  

    const inputEvent = (event) => {
        console.log(event.target.value); 
        setName(event.target.value);
    }

    const SubmitForm = () => {
        setfullName(name);
    }

    return(
        <React.Fragment>
            <h1>Hello {fullname}</h1>
            <input type="text" onChange={inputEvent} placeholder="Enter Something here !!" value={name} /><br/><br/> 
            <button onClick={SubmitForm}>Submit</button>                    
          
        </React.Fragment>                                                           
    );                
} 
  
        
  