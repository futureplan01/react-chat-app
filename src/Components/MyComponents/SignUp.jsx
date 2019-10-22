import React, { Component } from "react";
import { Redirect } from "react-router";

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
        if (this.state.loginRedirect) {
          return <Redirect push to="/" />;
        }
        return (<div>
            <Header name='Log In'/>
            <center className="signUp">
              <h1>Sign Up</h1>
              <form className="form" onSubmit={this.handleSubmit}>
                <input className="input" type="text" name="name" placeholder="UserName" />
                <br />
                <input className="input" type="text" name="email" placeholder="Email" />
                <br />
                <input className="input" type="password" name="password" placeholder="Password" />
                <br />
                <button id="signUpBtn" className="input">
                  Submit
                </button>
              </form>
            </center>
        </div>);
    }
}

export default SignUp;