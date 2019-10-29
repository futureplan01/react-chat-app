import React, { Component } from "react";
import { Redirect } from "react-router";
import ImagePreview from "./ImagePreview";

class SignUp extends Component {
  constructor() {
    super();
      this.state = { 
        user: "", 
        email: "",
        password: "", 
        loginRedirect: false, 
        problemOccured: false 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    // 
    handleSubmit(events){
        events.preventDefault();
    }

    render(){
        
        let zIndex = "user-box";
        
        if (this.state.loginRedirect) {
          return <Redirect push to="/" />;
        }
        
        if(this.props.getMenuState()){
            zIndex = "user-box z-index";
        }  
        
        return (
            <div className = {zIndex}>
					
			<form>

				<h1 className = "text-header">Sign-Up</h1>
                
                <ImagePreview/>

				<div className = "textbox">
					<i className="fas fa-user"></i>
					<input type = "text" name = "username" placeholder = "Username" required/>
                </div>

				<div className = "textbox">
					<i className="fas fa-lock"></i>
					<input type = "password" placeholder="Password" name = "" value = "" pattern = ".{5,10}" required title = "5-10 characters required" required/>
                    </div>

				<div className = "textbox">
					<i className="fas fa-check-circle"></i>
					<input type = "password" placeholder="Confirm Password" name = "" value = "" required/>
                    </div>

				<div className = "textbox">
					<i className="fas fa-envelope"></i>
					<input type = "email" placeholder = "E-mail" name = "" value = "" required/>
                    </div>

				<button className = "btn">Sign-Up</button>

                </form>
				
        </div>);
    }
}

export default SignUp;