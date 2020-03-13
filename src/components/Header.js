import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';


class Header extends Component {

    transLink = (name) => {
        if (name){
             return name.split(" ").join("").toLowerCase();
        }
       
    }
   
  render() {
    const {nav_link_1, nav_link_2, logo} = this.props.page[0] ? this.props.page[0] : []
    return(
        <div>
            <Link to={`/${this.transLink(nav_link_1)}`}>{nav_link_1}</Link>
            <Link to="/"><img src={logo} alt="M logo"></img></Link>
            <Link to={`/${this.transLink(nav_link_2)}`}>{nav_link_2}</Link>
        </div>
    )
    }
}

const mapStateToProps = state => {
    return {
        page: state.page,
    }
}

export default connect(mapStateToProps)(Header);