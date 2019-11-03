import React from "react";

import NavBar from "./NavBar";
import Slider from "./Slider";
import Login from "./Login";

function LoginContainer(props) {
    return( 
    <div  className = "container">
      <NavBar handleMenu = {props.handleMenu} isAuthenticated ={props.isAuthenticated} getMenuState = {props.getMenuState}/>
      <Slider/>
      <Login url ={props.url} Authenticate = {props.Authenticate} isAuthenticated ={props.isAuthenticated} handleMenu = {props.handleMenu}  getMenuState = {props.getMenuState}/>
		</div>);
}

export default LoginContainer;