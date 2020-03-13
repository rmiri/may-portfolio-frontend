import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Admin extends Component {
    
    render() { 
        return ( 
            <div>
                <Link to="/admin"><h1>Admin Page</h1></Link>
                <button onClick={()=> this.props.logOut()}>LogOut</button>
                <ul>
                <li><Link to="/admin/new">Add New Project</Link></li>
                <li><Link to="/admin/projects">Show Projects</Link></li>
                <li><Link to="/admin/aboutme">About me page</Link></li>
                <li><Link to="/admin/page">Page content</Link></li>
                </ul>
            </div>
         );
    }
}
 
export default Admin;