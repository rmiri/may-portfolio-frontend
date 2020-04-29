import React, { Component } from 'react';
import { connect } from 'react-redux';
import API from '../API';
import Header from './Header'

class Project extends Component {

    getProject = () => {
        API.getProject(this.props.match.params.id)
        .then(project => this.props.setProject(project))
    }

    componentDidMount() {
        this.getProject()
    }
    render(){
        const {project,pictures,photos } = this.props.project && this.props.project
        return(
            <div >
                <Header />
                <div className="projectShow">
                    <h3>{project ? project.title : "hellu"}</h3>
                    <p>{project ? project.index_description : "hellu"}</p>
                    <p>{project ? project.description : "hellu"}</p>
                    <img src={pictures} alt="project"/>
                    {photos.map( p => <img src={p}/>)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        project: state.project,
      }
    
  }

const mapDispatchToProps = dispatch => {
    return {
        setProject: project => dispatch({type: "SET_PROJECT", payload: {project}} ),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);