import React, { Component } from 'react';
import { connect } from 'react-redux';

class AboutMeAdmin extends Component {
    render() { 
        return ( 
          <div>
              <h1>About Me Page</h1>
          </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects,
    }
}
 
export default connect(mapStateToProps)(AboutMeAdmin);