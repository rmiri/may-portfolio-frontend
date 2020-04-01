import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import styled from 'styled-components'

import linkedin from '../images/linkedin.png';
import dribble from '../images/dribble.png';
const Styles = styled.div`

`

class Header extends Component {

    transLink = (name) => {
        if (name){
             return name.split(" ").join("").toLowerCase();
        }
       
    }
   
  render() {
    const {nav_link_1, nav_link_2, logo, footer_link_1,footer_link_2,footer_link_3} = this.props.page ? this.props.page[0] : []

    return(
        <Styles>
        <div className="navBar">
            <div className="topNav">
            <Link to={`/${this.transLink(nav_link_1)}`} className="navLink" >{nav_link_1}</Link>
            <Link to={`/${this.transLink(nav_link_2)}`} className="navLink">{nav_link_2}</Link>
            <a href={footer_link_3} target="_blank"> <img  src={dribble}  className="navLink iconImage  floatRight" alt="Dribble logo"></img></a>
            <a href={footer_link_2} target="_blank"> <img src={linkedin} className="navLink iconImage floatRight" alt="Linkedin logo"></img></a>
            <a href={`mailto:${this.transLink(footer_link_1)}`} className="navLink floatRight" >{footer_link_1}</a>
           
            </div>    
            <div className="fixedBar">
                <Link to="/"><img src={logo} alt="M logo" className="antiRotate logo"></img></Link>

                <Link to={`/${this.transLink(nav_link_1)}`} className="navLink" >{nav_link_1}</Link>
                <Link to={`/${this.transLink(nav_link_2)}`} className="navLink">{nav_link_2}</Link>
                <a href={`mailto:${this.transLink(footer_link_1)}`} className="navLink floatBottom" >{footer_link_1}</a>
                <a href={footer_link_2} target="_blank"> <img src={linkedin} className="navLink iconImage antiRotate floatBottom" alt="Linkedin logo"></img></a>
                <a href={footer_link_3} target="_blank"> <img src={dribble}  className="navLink iconImage antiRotate floatBottom" alt="Dribble logo"></img></a>
            </div>
        </div>
        </Styles>

    )
    }
}

const mapStateToProps = state => {
    return {
        page: state.page,
    }
}

export default connect(mapStateToProps)(Header);