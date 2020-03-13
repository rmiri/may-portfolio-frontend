import React, { Component } from 'react';
import API from '../API';
import { connect } from 'react-redux';


import Project from '../components/Project';
import Header from '../components/Header';


class Projects extends Component {

    renderEachProject = () => {
        return this.props.projects.map(project =>  <Project project={project} key={project.id} nav2={this.props.page[0].nav_link_2}/>)
    }

    render() { 
        const {nav_link_2} = this.props.page[0] ? this.props.page[0] : []
        return ( 
        <div>
            <Header />
            <h1>{nav_link_2}</h1>
            {this.renderEachProject()}
           
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


 
export default connect(mapStateToProps)(Projects);