import React, { Component } from "react";
import { Redirect } from "react-router";
import axios from "axios";
import Problem from "./ProblemOccured";
import Header from "./HeadTail/Header";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      signUp: false,
      error: '',
      menu: false
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
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

			<header>
				<nav>
					<div className = 'menu-icon' onClick ={this.handleMenu}>
						<i className="fas fa-bars fa-2x"></i>
					</div>

					<h1 className = "logo">
						majestic vibes
					</h1>	

					<div className = "menu">
						<ul className = {cssMenu}>
							<li><a href = "#">Sign-Up</a></li>
							<span className = "divider"></span>
                            <li><a herf = "#">Log-In</a></li>
                        </ul>
					</div>		 	
				</nav>
			</header>

			<div id = "slider">
				<div className = "slide-images slide1"></div>
				<div className = "slide-images slide2"></div>
				<div className = "slide-images slide3"></div>
				<div className = "slide-images slide4"></div>
				<div className = "slide-images slide5"></div>
			</div>

			
			<div className = "login-box">

			<form>

				<h1>Login</h1>

				<div className = "textbox">
					<i className="fas fa-user"></i>
                    <input type = "text" placeholder="Username" name = "" value = ""/>
				</div>

				<div className = "textbox">
					<i className="fas fa-lock"></i>
					<input type = "password" placeholder="Password" name = "" value = ""/>
				</div>

				<input className = "btn" type = "button" name = "" value = "Sign-in"/>

			</form>

			</div>

		</div>);
  }
}

export default Login;