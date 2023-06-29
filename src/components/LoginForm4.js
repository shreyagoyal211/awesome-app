import React ,{useState} from 'react';

export default function LoginForm3()
{   
    const [fullname, setFullName] = useState({
        fname: "",
        lname : "",
        email : "",
        phone : "",
  
    });
  
   
    const inputnameEvent = (event) => {
        console.log(event.target.value);    
        console.log(event.target.name);

        // const value =  event.target.value;        
        // const name =  event.target.name;         

        const {value , name} = event.target ;     //  object destructuring  

        setFullName((preValue) =>{      
            if(name === "fName"){         
                return{
                    fname:value,
                    lName:preValue.lname,   
                    email:preValue.email, 
                    phone: preValue.phone, 
                };
            }
            else if(name === "lName"){
                return{
                    fname:preValue.fname, 
                    lname:value,
                    email:preValue.email, 
                    phone: preValue.phone, 

                };
            }
            else if(name === "Email"){
                return{
                    fname:preValue.fname, 
                    lname: preValue.lname,  
                    email: value,
                    phone: preValue.phone, 

                };
            }
            else if(name === "Phone"){
                return{
                    fname:preValue.fname, 
                    lname: preValue.lname,  
                    email: preValue.email,
                    phone: value, 

                };
            }
        });
    } 
            
       
    const SubmitForm = (event) => {
        event.preventDefault();   
        alert("form submitted");  
    } 
  
    return(                                                             
        <React.Fragment>
        <form onSubmit={SubmitForm}> 
            <h1>Hello {fullname.fname} {fullname.lname}</h1>
            <p>{fullname.email}</p>
            <p>{fullname.phone}</p>
            <input type="text" onChange={inputnameEvent} name="fName" placeholder="Enter first name !!" value={fullname.fname} /><br/><br/> 
            <input type="text" onChange={inputnameEvent} name="lName" placeholder="Enter last name!!" value={fullname.lname} />   <br/><br/>    
            <input type="email" onChange={inputnameEvent} name="Email" placeholder="Enter the email !!" value={fullname.email} autoComplete="off" /><br/><br/> 
            <input type="number" onChange={inputnameEvent} name="Phone" placeholder="Enter the phone !!" value={fullname.phone} /><br/><br/> 

            <button type="submit">Submit</button>                                                          
        </form>                                                        
        </React.Fragment>                                                                                                                                                                                          
    );       
} 
      
                  
  