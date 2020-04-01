import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Admin extends Component {
    
    render() { 
        return ( 
            <div className="navBarAdmin">
                <Link to="/admin"><h1>WELCOME {this.props.aboutme.name}</h1></Link>
                <a onClick={()=> this.props.logOut()} className="logout">Logout</a>
                <ul className="navList">

            
                <li><Link to="/admin/projects">SHOW PROJECTS</Link></li>
                <li><Link to="/admin/new">ADD NEW PROJECT</Link></li>
                <li><Link to="/admin/aboutme">ABOUT ME PAGE</Link></li>
                <li><Link to="/admin/page">PAGE LINKS</Link></li>
                </ul>
            </div>
         );
    }
}
const mapStateToProps = state => {
    return {
        aboutme: state.aboutme[0],
        
    }
}
export default connect(mapStateToProps)(Admin);