import React from 'react';            
import Container from 'react-bootstrap/Container';                      
import Nav from 'react-bootstrap/Nav';       
import Navbar from 'react-bootstrap/Navbar';                 
import Form from 'react-bootstrap/Form';     
import { Link } from 'react-router-dom';    

                       
                                       
function FileNav(props)                                                                 
{               
    return(          
        <React.Fragment>   
            <Navbar bg={props.mode} variant={props.mode}>               
            <Container>                 
            <Link to="/">TextUtils</Link>            
            <Nav className="me-auto" >           
                <Link to="/TextForm">Textform</Link>          
                <Link to="/about">About</Link>                  
            </Nav>                 
            </Container>                                      
            <Form.Check                        
                type="switch"       
                id="custom-switch"           
                label="Enable dark mode"  onClick={props.changeMode} />                                           
        </Navbar>          
    
      </React.Fragment>                                                                                                                         
          
    );              
} 
  
  
export default FileNav;                       
  
                      