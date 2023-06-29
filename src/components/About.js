import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';          
import Accordion from 'react-bootstrap/Accordion';           
import Button from 'react-bootstrap/Button';              
  

export default function About()                
{ 
     const [mystyle ,setmyStyle] = useState({ 
         backgroundColor : 'white',      
         color : "black"       
     }); 

     const [mybtn ,setbtn] = useState("Enable dark mode");   
      
     const toggleStyle = () => {       
          if(mystyle.color === "black"){
            setmyStyle({    
                backgroundColor : 'black',        
                color : "white",
                border : "1px solid white"
            })              
            setbtn("Enable light mode");
          }                                                 
          else{        
            setmyStyle({              
                backgroundColor : 'white',        
                color : "black"          
            })                                        
            setbtn("Enable dark mode"); 
          }     
     } 
   
                   
        
    return(          
        <React.Fragment>
        <Container style={mystyle}> 
            <h1>About Us</h1>
            <Accordion defaultActiveKey="0" >         
                <Accordion.Item eventKey="0" >
                    <Accordion.Header style={mystyle}>Accordion Item #1</Accordion.Header>            
                    <Accordion.Body style={mystyle}>       
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut              
                    aliquip ex ea commodo consequat. Duis aute irure dolor in        
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla   
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.                          
                    </Accordion.Body>                                    
                </Accordion.Item>      
                <Accordion.Item eventKey="1" >                       
                    <Accordion.Header style={mystyle}>Accordion Item #2</Accordion.Header>                                
                    <Accordion.Body style={mystyle}>        
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do      
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut      
                    aliquip ex ea commodo consequat. Duis aute irure dolor in            
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla   
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in     
                    culpa qui officia deserunt mollit anim id est laborum.                                   
                    </Accordion.Body>                                          
                </Accordion.Item>         
            </Accordion>
            <Button variant="primary" onClick={toggleStyle} style={{marginTop:'40px'}}>{mybtn}</Button>   
                                                                 
        </Container>                                                                                                                                                                              
       
        </React.Fragment>                                                                                      
    );
} 
  
     


