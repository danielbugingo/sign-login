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
      </div>
    </div>
  );
}

export default App;
