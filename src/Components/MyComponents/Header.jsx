import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {

  constructor (){
    super();
    this.state= {menu: false};
    this.handleMenu = this.handleMenu.bind(this);
  }
  handleMenu(event){
    if(this.state.menu === false)
        this.setState({menu: true})
    
    else
        this.setState({menu:false})
  }
  render() {
      let cssMenu = '';
      if(this.state.menu){
        cssMenu = "showing";
      }
      return(
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
            <li><Link to ='/SignUp'>Sign-Up</Link></li>
            <span className = "divider"></span>
            <li><Link to ='/'>Log-In</Link></li>
          </ul>
        </div>		 	
      </nav>
    </header>);
  }
} 

export default Header;