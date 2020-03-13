import React, { Component } from 'react';
import API from '../API';
import { connect } from 'react-redux';


import Header from '../components/Header'

class Welcome extends Component {


    render() { 
        const {website_name} = this.props.page[0] ? this.props.page[0] : []

        return (
            <div>
                <Header />
                <h1>{website_name}</h1>

            </div>
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