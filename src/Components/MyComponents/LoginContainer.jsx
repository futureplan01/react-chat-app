import React from "react";

import NavBar from "./NavBar";
import Slider from "./Slider";
import Login from "./Login";

function LoginContainer(props) {
    return( 
    <div  className = "container">
      <NavBar handleMenu = {props.handleMenu}  getMenuState = {props.getMenuState}/>
      <Slider/>
      <Login Authenticate = {props.Authenticate} isAuthenticated ={props.isAuthenticated} handleMenu = {props.handleMenu}  getMenuState = {props.getMenuState}/>
		</div>);
}

export default LoginContainer;