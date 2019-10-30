import React from "react";

import NavBar from "./NavBar";
import Slider from "./Slider";
import Home from "./Home";

function HomeContainer(props) {
    return( 
    <div  className = "container">
      <NavBar logOut={this.logOut} handleMenu={props.handleMenu}  getMenuState={props.getMenuState}/>
      <Slider/>
      <Home  isAuthenticated ={props.isAuthenticated} handleMenu = {props.handleMenu}  getMenuState = {props.getMenuState}/>
	</div>);
}

export default HomeContainer;