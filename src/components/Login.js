import React, { Component } from 'react';


class Login extends Component {
    state = { 
        email: '',
        password: '',
        token: ''
     }

     handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
    };
    
    handleSubmit = (e) => {
        e.preventDefault() 
		const configObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state) 
        }
        return fetch('http://localhost:3000/login',configObject)
        .then(resp => resp.json())
        .then(console.log)
      }


    render() { 
        console.log(this.state)
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