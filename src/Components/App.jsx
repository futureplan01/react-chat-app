import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import LoginContainer from "./MyComponents/LoginContainer";
import SignUpContainer from "./MyComponents/SignUpContainer";
import Home from './MyComponents/Home';

class App extends Component {
    
    constructor (){
    super();
    this.state= {menu: false};
    this.handleMenu = this.handleMenu.bind(this);
    this.getMenuState = this.getMenuState.bind(this);    
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

  render() {
    return (
        <Router>
        <Switch>
          <Route exact path="/" render={() => 
            <LoginContainer handleMenu = {this.handleMenu} getMenuState = {this.getMenuState}/>
          }/>
          <Route exact path = '/Home' render={()=>
            <Home/>
          }/>
          <Route exact path="/SignUp" render={() => 
            <SignUpContainer handleMenu = {this.handleMenu}  getMenuState = {this.getMenuState}/>
          }/>
        </Switch>
        </Router>);
  }
}

export default App;