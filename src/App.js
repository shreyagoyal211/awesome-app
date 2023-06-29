import React ,{useState} from 'react';         
import './style.css';
import {
   BrowserRouter as Router,         
   Routes,    
   Route
} from "react-router-dom";               

import FileNav from './components/FileNav';      
import FileAlert from './components/FileAlert';                  
import TextForm from './components/TextForm';    
import About from './components/About';  
import LoginForm2 from './components/LoginForm2';  
import LoginForm3 from './components/LoginForm3';  
import LoginForm4 from './components/LoginForm4';  
   

                   

   
import './App.css';            
import LoginForm from './LoginForm';     
                     
                                      
                                                                                                                                                                                                                                    
           
function App() {    

   const [mode ,setmode] =useState("light");       
   const [alert, setalert] =useState(null);           // object          
                                           
   const showAlert = (message ,type) =>{                                 
         setalert({                     
            msg:message,           
            type:type             
         })
         setTimeout(() =>{       
            setalert(null);        
         }, 2000);             
   }
     
   const change_mode = () => {           
      if(mode === "light")            
      { 
         setmode("dark");                            
         document.body.style.backgroundColor = "#352557";    
         showAlert("Dark mode has been enabled" ,"success");    
         document.title = "TextUtils - Dark Mode";            
         // setInterval(() =>{ 
         //    document.title = "TextUtils is Amazing Mode";  
         // }, 2000);                                  
         // setInterval(() =>{                                
         //    document.title = "Install TextUtils Now";      
         // }, 1500);                                     
      }                                 
      else       
      { 
         setmode("light");                                           
         document.body.style.backgroundColor = "white";     
         showAlert("Light mode has been enabled" ,"success");           
         document.title = "TextUtils - Light Mode";                                                                                                                         
      }               
   }            
         
               
   return(         
      <Router>                                                                        
         <div className = "App">                         
            <FileNav mode={mode} changeMode={change_mode}   />           
            <FileAlert alert={alert}/>                      
            <Routes>                                                             
               <Route exact path="/about" element={ <About/> } />    
               <Route exact path="/TextForm" element={   <TextForm mode={mode} showAlert={showAlert}   />   } />       
               <Route exact path="/" element={ <LoginForm4/> } />                                                                                        
                   
            </Routes>                                                                                                                                                                                                                                                                                                            
         </div>     
      </Router>                
                                                                                                                                                                                                                                                                                                                                       
   );                                                                                                                    
     
}                   
      
                                                                   
   
export default App;                                                                   
                              
                                                                                                                                                                                                                                                                                                         
                   