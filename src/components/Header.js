import React from "react";
import './Header.css'; 

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
            <a href="/">
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix"/>
            </a>  
            </div> 
            
            <div className="header--user">
            <a href="/">
                
                <img src="https://pbs.twimg.com/profile_images/1026501220050108418/9JxARg16_400x400.jpg" alt="Usuário"/>

            </a>
            
            </div> 
        </header> 
    );
}