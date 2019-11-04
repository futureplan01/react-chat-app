import React, {Component} from 'react';
import { Switch, Route } from "react-router-dom";
import LoginContainer from "./MyComponents/LoginContainer";
import SignUpContainer from "./MyComponents/SignUpContainer";
import decode from 'jwt-decode';
import HomeContainer from './MyComponents/HomeContainer';

class App extends Component {
    
    constructor (){
    super();
    this.state= {
      menu: false,
      isAuthenticated: false
    };
    this.handleMenu = this.handleMenu.bind(this);
    this.logOut = this.logOut.bind(this);
    this.getMenuState = this.getMenuState.bind(this); 
    this.tokenValid = this.tokenValid.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.Authenticate = this.Authenticate.bind(this);   
  }

  

  tokenValid(){
    let token = sessionStorage.getItem('token');
    if(token){
      let decoded = decode(token);
      if(decoded.exp < Date.now() / 1000){
        sessionStorage.removeItem('token');
        this.setState({isAuthenticated: false});
      }else{
        this.setState({isAuthenticated: true});
      }
    }else{
      console.log("No Token Found!");
    }
  }
  Authenticate(){
    this.setState({isAuthenticated:true});
  }
  isAuthenticated(){
    return this.state.isAuthenticated;
  }
  logOut(){
    sessionStorage.removeItem('token');
    this.setState({isAuthenticated: false});
  }
  handleMenu(event){
    if(this.state.menu === false)
        this.setState({menu: true})
    
    else
        this.setState({menu:false})
  }
    
  getMenuState(){
      return this.state.menu;
  }    

  componentDidMount(){
    this.tokenValid();
  }
  render() {

    let url = 'http://localhost:7555/'

    return (
      <Switch>
        <Route exact path="/" render={() => 
          <LoginContainer url={url} Authenticate = {this.Authenticate} isAuthenticated = {this.isAuthenticated} handleMenu = {this.handleMenu} getMenuState = {this.getMenuState}/>
        }/>
        <Route exact path = '/Home' render={()=>
          <HomeContainer url ={url} logOut={this.logOut} isAuthenticated = {this.isAuthenticated} handleMenu = {this.handleMenu} getMenuState = {this.getMenuState}/>
        }/>
        <Route exact path="/SignUp" render={() => 
          <SignUpContainer url={url} isAuthenticated = {this.isAuthenticated}  handleMenu = {this.handleMenu}  getMenuState = {this.getMenuState}/>
        }/>
      </Switch>);
  }
}

export default App;