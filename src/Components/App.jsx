import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import LoginContainer from "./MyComponents/LoginContainer";
import SignUp from "./MyComponents/SignUpContainer";
import Home from './MyComponents/Home';

class App extends Component {

  render() {
    return (
        <Router>
        <Switch>
          <Route exact path="/" render={() => 
            <LoginContainer />
          }/>
          <Route exaxt path = '/Home' render={()=>
            <Home/>
          }/>
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
        </Router>);
  }
}

export default App;