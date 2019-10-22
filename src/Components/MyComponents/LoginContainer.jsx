import React, { Component } from "react";
import { Redirect } from "react-router";
import Problem from "./ProblemOccured";
import Header from "./Header";
import Slider from "./Slider";
import Login from "./Login";

class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      menu: false
    };

    this.handleCarousel = this.handleCarousel.bind(this);
  }
    
  handleCarousel(event){
    const images = document.querySelectorAll(".slide-images");
    const timer = 5000;
    let currentImageCounter = 0;

    images[currentImageCounter].classList.add("displayImage");

    setInterval(nextImage, timer);

    function nextImage(){

        images[currentImageCounter].classList.add("stackImage");

        /*USED TO MAKE SURE BACKGROUND DOESN'T INTERFERE/SHOW WITH IMAGE TRANSITIONS*/

            const tempCounter = currentImageCounter;

            setTimeout(function(){
                images[tempCounter].classList.remove("displayImage");
            },1000);

        /*END*/

        currentImageCounter = (currentImageCounter + 1) % images.length;

        images[currentImageCounter].classList.add("displayImage");
        images[currentImageCounter].classList.remove("stackImage"); 
    }
  }


  componentDidMount(){
      this.handleCarousel();
  }
  render() {
    return( 
    <div  className = "container">
      <Header/>
      <Slider/>
      <Login/>
		</div>);
  }
}

export default LoginContainer;