import React from "react";

import NavBar from "./NavBar";
import Slider from "./Slider";
import SignUp from "./SignUp";

function SignUpContainer(props) {
    return( 
    <div  className = "container">
      <NavBar handleMenu = {props.handleMenu} getMenuState = {props.getMenuState}/>
      <Slider/>
      <SignUp handleMenu = {props.handleMenu} getMenuState = {props.getMenuState}/>
    </div>);
}

export default SignUpContainer;