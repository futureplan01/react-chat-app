import React from "react";

import NavBar from "./NavBar";
import Slider from "./Slider";
import SignUp from "./SignUp";

function SignUpContainer(props) {
    return( 
    <div  className = "container">
      <NavBar handleMenu = {props.handleMenu} isAuthenticated ={props.isAuthenticated} getMenuState = {props.getMenuState}/>
      <Slider/>
      <SignUp url={props.url} handleMenu = {props.handleMenu} getMenuState = {props.getMenuState}/>
    </div>);
}

export default SignUpContainer;