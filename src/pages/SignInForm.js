import React, { Component } from 'react';

class SignInForm extends Component{
    render(){
        return(
            <div className="FormCenter">
                <form className="FormFields" onSubmit="{this.handleSubmit}">

                    <div className="FormField">
                    <label className="FormField__Label" htmlFor="email">E-mail Address</label>
                    <input type="email" id="email" className="FormField__Input" placeholder="Enter your full email" 
                    name="email" />
                    </div>

                    <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="FormField__Input" placeholder="Enter your full password" 
                    name="password" />
                    </div>
               
                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign In</button>
                        <a href="#" className="FormField__Link">Create an account</a>
                    </div>
                </form>
          </div>
        );
    }
}

export default SignInForm;