import React, {Component} from "react";
import axios from "axios";

class Login extends Component{
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            error: "",
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleEmail(event){
       this.setState({email: event.target.value});
    }
    handlePassword(event){
       this.setState({password: event.value});
    }
    handleSubmit(events) {
        events.preventDefault();
    
        axios
          .post("http://localhost:7555/Login", {
            email: this.state.email,
            password: this.state.password
          })
          .then(res => {
              console.log(res);
          })
          .catch(err => {
            this.setState({ problem: true});
            console.log(err);
          });
      }
      render(){
        return (
            <div className = "login-box">
        <form>
            <h1>Login</h1>
            <div className = "textbox">
                <i className="fas fa-user"></i>
                <input type = "text" placeholder="Email" name = "email" onChange={this.handleEmail}/>
            </div>
            <div className = "textbox">
                <i className="fas fa-lock"></i>
                <input type = "password" placeholder="Password"  onChange = {this.handlePassword}/>
            </div>
            <input className = "btn" type = "button" value = "Sign-in" onClick = {this.handleSubmit}/>
        </form>
        </div>);
      }
}

export default Login;


