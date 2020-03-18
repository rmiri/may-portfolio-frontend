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
        const {project,pictures} = this.props.project
        console.log(this.props.project)
        return(
            <div>
                <Header />
                <h3>{project ? project.title : "nothing"}</h3>
                <img src={pictures} />
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