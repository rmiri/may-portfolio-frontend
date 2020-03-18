import React, { Component } from 'react';
import Header from '../components/Header'
import { connect } from 'react-redux';


class AboutMe extends Component {


    render() { 
        return (
            <div>
                <Header />
            <h1>{this.props.aboutme.name}</h1>
            </div>
          );
    }
}

const mapStateToProps = state => {
    return {
        aboutme: state.aboutme[0],
    }
}

 
export default connect(mapStateToProps)(AboutMe);