import React, { useState } from 'react';
import logo from './serein.jpg';
import './header.css';


export class Header extends React.Component{
    
    render(){
        return (
            <div>
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
              <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
              />
            <div className="newnavbar">
            </div>
            <nav class="navbar navbar-light" style={{'backgroundColor': 'rgba(246,246,246, 1)'}}>
              <img height="100px" src={logo}></img>
            </nav>
                 </div>
            
        )
    }
}


export default Header;