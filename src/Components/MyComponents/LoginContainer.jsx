import React, { Component } from "react";
import { Redirect } from "react-router";
import Problem from "./ProblemOccured";
import Header from "./Header";
import Slider from "./Slider";
import Login from "./Login";

function LoginContainer() {
    return( 
    <div  className = "container">
      <Header/>
      <Slider/>
      <Login/>
		</div>);
}

export default LoginContainer;