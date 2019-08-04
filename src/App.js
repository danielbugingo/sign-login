import React from 'react';
//import logo from './logo.svg';
//import Profile from './Profile.JPG';
import './index.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App__Aside"></div>
      <div className="App__Form">
        <div className="PageSwitcher">
          <a href="#" className="PageSwitcher__Item">Sign In</a>    
          <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>
        </div>

        <div className="FormTitle">
          <a href="#" className="FormTitle__Link">Sign In</a>
          or
          <a href="#" className="FormTitle__Link FormTitle__Link--Active">Sign Up</a>
        </div>

        <div className="FormCenter">
          <from className="FormFields" onSubmit="{this.handleSubmit}">
           <div className="FormField">
            <label className="FormField__Label" htmlFor="name">Full Name</label>
            <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" 
            name="name" />
           </div>

           <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your full password" 
            name="password" />
           </div>

           <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-mail Address</label>
            <input type="email" id="email" className="FormField__Input" placeholder="Enter your full email" 
            name="email" />
           </div>

            <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" /> 
              I agree all statements in 
              <a href="" className="FormField__TermsLink">terms of service</a>
            </label>
            </div>

            <div className="FormField">
              <button className="FormField__Button mr-20">Sign Up</button>
              <a href="#" className="FormField__Link">I'm already a member</a>
            </div>
          </from>
        </div>

      </div>
    </div>
  );
}

export default App;
