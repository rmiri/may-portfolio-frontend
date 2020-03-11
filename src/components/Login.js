import React, { Component } from 'react';
import API from '../API.js'

class Login extends Component {
    state = { 
        email: '',
        password: ''
     }

     handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
    };
    
    handleSubmit = (e) => {
        e.preventDefault() 
        API.login(this.state)
        .then(console.log)
      }


    render() { 
        return ( 
            <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <label>Email:</label>
                <input type="text" name="email" onChange={this.handleChange}/> <br />
                <label>Password</label>
                <input type="password" name="password" onChange={this.handleChange}/> <br />
                <button type="submit" value="Sign In" class="button">Login</button>
            </form>
            </div>
         );
    }
}
 
export default Login;