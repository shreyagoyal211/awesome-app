import React from "react";
import Images from "./Images";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 

                 
  
function Card(props)    
{ 
    return (
        <React.Fragment>

        <div className="card card1" > 
            {/* <img className="card-img-top" src={props.imgsrc} alt="Card image cap" /> */}  
            <Images  imgsrc={props.imgsrc} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>                            
                <h3 className="card-text">{props.sname}</h3>                  
                <a href={props.link} className="btn btn-primary">Watch Now</a>                                   
            </div>      
        </div>       
          
    </React.Fragment>                                                                                                    
                               
    );                 
          
}         
      
  
  
export default Card;   
  
  
                   
 {/*                                         
    <div className="cards">          
        <div className="card">     
                <img src={props.imgsrc} alt="mypic" className="card__img" />                                                              
                <div className="card__info">                                        
                    <span className="card__category">{props.title}</span>             
                    <h3 className="card__title">{props.sname}</h3>     
                    <a href={props.link} target="_blank">                                               
                        <button>Watch Now</button>        
                    </a>                                                                                                 
                </div>                                                                       
        </div>    
              
   </div>*/      
      
 }   
  
   
  