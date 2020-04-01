import React, { Component } from 'react';
import { connect } from 'react-redux';
import API from '../API.js';
import { Route, Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";


class Login extends Component {
    state = { 
        email: '',
        password: '',
        user: null
     }

     handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
        API.login(this.state)
        .then(resp => resp.message ? window.alert(resp.message) : this.setUser(resp.user,resp.jwt))
        
      }

    setUser = (user,token) => {
        if (user){
            this.props.setUserState(user)
            localStorage.token = token;
        }
    }


    render() { 
        return ( 
            <div className="loginDiv">
            <h1>LOGIN</h1>
            <form onSubmit={this.handleSubmit} class="loginForm">
                <input type="text" name="email" onChange={this.handleChange} placeholder="Email"/> <br />
                <input type="password" name="password" onChange={this.handleChange} placeholder="Password"/> <br />
                <button type="submit" value="Sign In" className="button" ><span>CONFIRM</span></button>
            </form>
            </div>
         );
    }
}

const mapDispatchedProps = dispatch => {
    return {
        setUserState: user => dispatch({type: "SET_USER", payload: {user}})
    }
}
 
export default connect(null,mapDispatchedProps)(Login);