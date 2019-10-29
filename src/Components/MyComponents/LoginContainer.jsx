import React from "react";

import Header from "./Header";
import Slider from "./Slider";
import Login from "./Login";

function LoginContainer(props) {
    return( 
    <div  className = "container">
      <Header handleMenu = {props.handleMenu}  getMenuState = {props.getMenuState}/>
      <Slider/>
      <Login handleMenu = {props.handleMenu}  getMenuState = {props.getMenuState}/>
		</div>);
}

export default LoginContainer;