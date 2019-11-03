import React, {Component} from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom';


class Login extends Component{
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            isError: false
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleEmail(event){   
       this.setState({email: event.target.value});
    }
    handlePassword(event){
       this.setState({password: event.target.value});
    }
    handleSubmit(events) {
        events.preventDefault();
    
        axios
          .post(this.props.url + 'Login', {
            email: this.state.email,
            password: this.state.password
          })
          .then(res => {
              console.log(res.data);
              sessionStorage.setItem('token',res.data.token);
              this.props.Authenticate();
              
          })
          .catch(err => {
            this.setState({isError: true});
          });
      }
      render(){
          let ErrorMessage;
          let zIndex = "user-box";
          
          if(this.state.isError){
              ErrorMessage = <div className = "red">
                  You Entered The Wrong Email/Password
              </div>
          }

        if(this.props.isAuthenticated()){
            return (<Redirect to ='/Home'/>)
        }
          
        if(this.props.getMenuState()){
            zIndex = "user-box z-index";
        }  

        return (
        <div className = {zIndex}>
        <form>
            <h1 className = "text-header">Login</h1>
            {ErrorMessage}
            <div className = "textbox">
                <i className="fas fa-user"></i>
                <input type = "text" placeholder="Email" name = "email" onChange={this.handleEmail}/>
            </div>
            <div className = "textbox">
                
                <i className="fas fa-lock"></i>
                <input type = "password" placeholder="Password"  onChange = {this.handlePassword}/>
                
            </div>
            <button className = "btn" onClick = {this.handleSubmit}>Log-In</button>
        </form>
        </div>);
      }
}

export default Login;


