import React, { Component } from 'react';
import API from '../API';
import { connect } from 'react-redux';
import styled from 'styled-components'
import Header from '../components/Header'

 

const Styles = styled.div`


`


class Welcome extends Component {
    status = {
        pic1: null
    }

    
    render() { 
        const {website_name} = this.props.page ? this.props.page[0] : []

        return (
            // <Styles>
                <div className="mainPage">
                    <Header />
                    <div className="container">
                    <h1 className="websiteName">{website_name}</h1>
                    {/* {this.renderProject()} */}
                    </div>
                </div>
            // </Styles>
          );
    }
}

const mapStateToProps = state => {
    return {
        page: state.page,
        projects: state.projects
    }
}

 
export default connect(mapStateToProps)(Welcome);