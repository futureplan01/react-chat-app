import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
    

  render() {
      let showing = "";
      
      if(this.props.getMenuState()){
         showing = "showing";   
      }
      
      
      return(
      <header>
      <nav>
        <div className = 'menu-icon' onClick ={this.props.handleMenu}>
          <i className="fas fa-bars fa-2x"></i>
        </div>
        <h1 className = "logo">
          majestic vibes
        </h1>	
        <div className = "menu">
          <ul className = {showing}>
            <li><Link to ='/SignUp'>Sign-Up</Link></li>
            <li><Link to ='/'>Log-In</Link></li>
          </ul>
        </div>		 	
      </nav>
    </header>);
  }
} 

export default NavBar;