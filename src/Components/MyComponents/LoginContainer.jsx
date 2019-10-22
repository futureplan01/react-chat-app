import React, { Component } from "react";
import { Redirect } from "react-router";
import axios from "axios";
import Problem from "./ProblemOccured";
import Header from "./Header";
import Slider from "./Slider";
import Login from "./Login";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      password: "",
      signUp: false,
      error: '',
      menu: false
    };
    
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
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

  handleEmail(event){
    this.setState({email: event.target.email});
  }
  handlePassword(event){
    this.setState({password: event.password});
  }

  handleMenu(event){
      if(this.state.menu === false)
          this.setState({menu: true})
      
      else
          this.setState({menu:false})
  }
    
  handleSubmit(events) {
    events.preventDefault();

    axios
      .post("/api/users/login", {
        email: events.target.email.value,
        password: events.target.password.value
      })
      .then(res => {
        this.props.getUser(res.data.user.userName);
        this.setState({ login: true});
      })
      .catch(err => {
        this.setState({ problem: true});
        console.log(err);
      });
  }
  handleSignUp(events) {
    events.preventDefault();
    this.setState({ signUp: true });
  }
    
  componentDidMount(){
      this.handleCarousel();
  }
  render() {
    let cssMenu = '';
    if (this.state.signUp) {
      return <Redirect push to="/SignUp" />;
    }

    if(this.props.getAuth){
      console.log('Auth is: '+ this.props.isAuth);
      return <Redirect push to="/Home" />; 
    }
    if(this.state.menu){
        cssMenu = "showing";
    }
    let error;
    if (this.state.problem) {
      error = <Problem/>;
    }
    return( 
    <div  className = "container">
      </Header>
      </Slider>
      </Login>
		</div>);
  }
}

export default Login;