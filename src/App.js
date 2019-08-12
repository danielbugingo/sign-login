import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';

import './App.css';

class App extends Component {
  render(){
    return (

      <Router>
        <div className="App">
          <div className="App__Aside"> </div>
          <div className="App__Form">
            <div className="PageSwitcher">
              <a href="#" className="PageSwitcher__Item">Sign In</a>
              <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>
            </div>

            <div className="FormTitle">
              <Link to="/sign-in" className="FormTitle__Link">Sign In</Link>
              or
              <Link exact to="/" className="FormTitle__Link FormTitle__Link--Active">Sign Up</Link>
            </div>

            <Route exact path="/" component={SignUpForm} >

            </Route>

            <Route exact path="/sign-in" component={SignInForm}>
            <h1>Login</h1>
            </Route>

          </div>
        </div>

      </Router>
    );
  }
}

export default App;
