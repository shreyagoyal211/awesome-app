import React , {useState} from 'react';
import Form from 'react-bootstrap/Form';    
import Container from 'react-bootstrap/Container';                    
import Button from 'react-bootstrap/Button'; 

export default function TextForm(props)             
{                                   
    const handleUpClick = () =>{
      //  console.log("Uppercase was clicked"+ text); 
        let newText = text.toUpperCase();            
        setText(newText);       
        props.showAlert("Converted into upper case" ,"success");                      
    }        
  
    const handleOnChange = (event) =>{                 
      //  console.log("on change");          
        setText(event.target.value);     
    }   
      
    const [text, setText] = useState('');     
                                   
    return(          
        <React.Fragment>        
        <h2 style={{color:props.mode === 'dark' ? 'white': 'black'}}>Enter the text to analyze below</h2>        
            <Form.Control                          
            as="textarea"                              
            placeholder="" onChange={handleOnChange}  value={text}   
            style={{ height:'80px' , width:'700px', marginLeft:'411px' , marginTop:'50px'}}                                        
            />                                                                      
            <Button variant="primary" onClick={handleUpClick} style={{ marginRight:'47px' , marginTop : '40px'}}>Primary</Button>
            <br/> <br/>
            <Container style={{color:props.mode === 'dark' ? 'white': 'black'}}> 
                  <h1>Your Text summary</h1>
                  <p>{text.split(" ").length} words and {text.length} characters</p>  
                  <p>{0.008 * text.split(" ").length} Minutes read</p>      
                  <h2>Preview</h2>                   
                  <p>{text.length>0? text: "Enter something to preview it here !!"}</p>                                               

            </Container>                                                    
                   
             

            
        </React.Fragment>                                                                             
    );                 
}     
      
        
   