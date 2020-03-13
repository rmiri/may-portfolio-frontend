import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectsAdmin extends Component {
    render() { 
        return ( 
          <div>
              <h1>Show Projects</h1>
          </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects,
    }
}
 
export default connect(mapStateToProps)(ProjectsAdmin);