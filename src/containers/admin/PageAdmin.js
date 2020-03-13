import React, { Component } from 'react';
import { connect } from 'react-redux';

class PageAdmin extends Component {
    render() { 
        return ( 
          <div>
              <h1>Page Content</h1>
          </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects,
    }
}
 
export default connect(mapStateToProps)(PageAdmin);