import React from "react";

import Header from "./Header";
import Slider from "./Slider";
import SignUp from "./SignUp";

function SignUpContainer(props) {
    return( 
    <div  className = "container">
      <Header handleMenu = {props.handleMenu} getMenuState = {props.getMenuState}/>
      <Slider/>
      <SignUp handleMenu = {props.handleMenu} getMenuState = {props.getMenuState}/>
    </div>);
}

export default SignUpContainer;