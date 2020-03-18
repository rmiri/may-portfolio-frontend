import React, { Component } from 'react';
import { connect } from 'react-redux';
import API from '../../API'

class ProjectsAdmin extends Component {
    renderEachProject = () => {
        return this.props.projects.map(proj => 
            <div>
                <h1>{proj.title}</h1>
                <button onClick={()=> this.deleteProject (proj.id)}>Delete</button>
            </div>)
    }

    deleteProject = id => {
        API.deleteProject(id)
        .then(resp => window.alert(resp.message))
    }
    render() { 
        
        return ( 
          <div>
              <h1>Show Projects</h1>
              {this.renderEachProject()}
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