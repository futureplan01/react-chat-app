import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";

class Header extends Component {
  render() {
      <header>
      <nav>
        <div className = 'menu-icon' onClick ={this.handleMenu}>
          <i className="fas fa-bars fa-2x"></i>
        </div>

        <h1 className = "logo">
          majestic vibes
        </h1>	

        <div className = "menu">
          <ul className = {cssMenu}>
            <li><a href = "#">Sign-Up</a></li>
            <span className = "divider"></span>
                          <li><a herf = "#">Log-In</a></li>
                      </ul>
        </div>		 	
      </nav>
    </header>
  }
} 

export default Header;