import React, {Component} from "react";
class SignUp extends Component

function Login (props){
    return (<div className = "login-box">
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

export default Login;


