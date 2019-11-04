import React, { Component } from "react";
import { Link } from "react-router-dom";



function NavBar(props) {
  let showing = "";
  let navChildren = <div><li><Link to ='/SignUp'>Sign-Up</Link></li><li><Link to ='/'>Log-In</Link></li></div>
  if(props.getMenuState()){
     showing = "showing";   
  }
  
  if(props.isAuthenticated()){
    navChildren = <div><li><Link to ='/' onClick ={props.logOut}>Log Out</Link></li></div>
  }
  return( 
    <header>
    <nav>
      <div className = 'menu-icon' onClick ={props.handleMenu}>
        <i className="fas fa-bars fa-2x"></i>
      </div>
      <h1 className = "logo">
        majestic vibes
      </h1>	
      <div className = "menu">
        <ul className = {showing}>
          {navChildren}
        </ul>
      </div>		 	
    </nav>
  </header>);
}

export default NavBar;