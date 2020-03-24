import React, { Component } from 'react';
import { connect } from 'react-redux';
import API from '../../API'

class ProjectsAdmin extends Component {
    renderEachProject = () => {
        return this.props.projects.map(proj => 
            <div className="projAdminDiv">
                <div className="picTileProj">
                    <img src={proj.pictures}/>
                    <p>{proj.project.title}</p>
                </div>
                <a onClick={()=> this.deleteProject(proj.project.id)}>Delete</a>
            </div>)
    }

    deleteProject = id => {
        API.deleteProject(id)
        .then(resp => window.alert(resp.message))
    }
    render() { 
        
        return ( 
          <div className="adminPage">
              <h2 className="h2Title">Show Projects</h2>
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