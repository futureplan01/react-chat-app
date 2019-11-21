import React, { Component } from "react";
import { Redirect } from "react-router";
import ImagePreview from "./ImagePreview";
import storage from "../../Firebase/index";
import FormData from 'form-data';
import axios from 'axios';

class SignUp extends Component {
  constructor() {
    super();
      this.state = { 
        image : '',
        username: "", 
        email: "",
        password: "", 
        confirm: "",
        loginRedirect: false, 
        problemOccured: false 
      }
      this.handleUserName = this.handleUserName.bind(this);
      this.handleEmail = this.handleEmail.bind(this);
      this.handlePassword = this.handlePassword.bind(this);
      this.handleConfirm = this.handleConfirm.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.getImageFile = this.getImageFile.bind(this);
  }
    handleUserName(event){
        this.setState({username: event.target.value});
    }
    handleEmail(event){   
        this.setState({email: event.target.value});
    }
    handlePassword(event){
        this.setState({password: event.target.value});
    }
    handleConfirm(event){
        this.setState({confirm: event.target.value});
    }
    getImageFile(file){
        this.setState({image: file});
    }
    handleSubmit(events) {
        events.preventDefault();
        const fd = new FormData();

        let image = this.state.image;
        console.log(storage);
        

        const uploadTask = storage.storage().ref(`images/${image.name}`).put(image)
        .then((yes)=>{
            console.log("I'm not to sure what's happening");
            console.log(yes);
        })

        /*
        //fd.append('myImage',this.state.image);
        fd.append('email',this.state.email);
        fd.append('password',this.state.password);

        axios
        .post(this.props.url + 'uploadImage',fd)
        .then(res => {
            console.log(res.data);
            this.props.Authenticate();
            
        })
        .catch(err => {
            this.setState({isError: true});
        });
        */
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
					
			<form encType="multipart/form-data">
				<h1 className = "text-header">Sign-Up</h1> 
                <ImagePreview getImageFile = {this.getImageFile}/>
				<div className = "textbox">
					<i className="fas fa-user"></i>
					<input type = "text" name = "username" placeholder = "Username"  onChange={this.handleUserName}/>
                </div>

				<div className = "textbox">
					<i className="fas fa-lock"></i>
					<input type = "password" placeholder="Password" name = ""  title = "5-10 characters required"  onChange={this.handlePassword}/>
                    </div>

				<div className = "textbox">
					<i className="fas fa-check-circle"></i>
					<input type = "password" placeholder="Confirm Password" onChange={this.handleConfirm} name = ""  />
                    </div>

				<div className = "textbox">
					<i className="fas fa-envelope"></i>
					<input type = "email" placeholder = "E-mail" name = ""  onChange={this.handleEmail}/>
                    </div>

				<button className = "btn" onClick={this.handleSubmit}>Sign-Up</button>

                </form>
				
        </div>);
    }
}

export default SignUp;