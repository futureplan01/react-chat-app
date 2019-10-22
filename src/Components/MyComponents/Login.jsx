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
       this.setState({email: event.target.email});
    }
    handlePassword(event){
       this.setState({password: event.password});
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
      render(){
        return (
            <div className = "login-box">
        <form>
            <h1>Login</h1>
            <div className = "textbox">
                <i className="fas fa-user"></i>
                <input type = "text" placeholder="Email" name = "email" value = {this.state.email} onChange={this.handleEmail}/>
            </div>
            <div className = "textbox">
                <i className="fas fa-lock"></i>
                <input type = "password" placeholder="Password" name = "" value = {this.state.password} onChange = {this.handlePassword}/>
            </div>
            <input className = "btn" type = "button" name = "" value = "Sign-in"/>
        </form>
        </div>);
      }
}

export default Login;


