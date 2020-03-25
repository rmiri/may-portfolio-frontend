import React, { Component } from 'react';
import API from '../API';
import { connect } from 'react-redux';


import Project from '../components/Project';
import Header from '../components/Header';


class Projects extends Component {

    renderEachProject = () => {
        return this.props.projects.map(project =>  <Project project={project.project} key={project.id} nav2={this.props.page[0].nav_link_2} picture={project.pictures}/>)
    }
    renderProjFilter = (filter) => {
        const filtered = this.props.projects ? this.props.projects.filter(proj => proj.project.category === filter) : []
        return filtered.map(project =>  <Project project={project.project} key={project.id} nav2={this.props.page[0].nav_link_2} picture={project.pictures}/>)
     
    }

    render() { 
        const {nav_link_2, filter_1, filter_2, filter_3} = this.props.page[0] ? this.props.page[0] : []
        return ( 
        <div>
        <Header />
            <div className="container projPage">
                <div className="filter1Div filterProjDiv">
                    <div className="filtersName">
                        <a className="filtersNameTitle h1ProjectFilter" id={`${filter_1}`} href={`#${filter_1}`} >{filter_1}</a>
                        <a className="filtersNameTitle" href={`#${filter_2}`} >{filter_2}</a>
                        <a className="filtersNameTitle" href={`#${filter_3}`} >{filter_3}</a>
                    </div>
                    <div className="filterProjects">
                        {this.renderProjFilter(filter_1)}
                    </div>
                </div>
                <div className="filterProjDiv filter2Div">
                    <div className="filtersName">    
                        <a  className="filtersNameTitle" href={`#${filter_1}`} >{filter_1}</a>
                        <a className="filtersNameTitle h1ProjectFilter" id={`${filter_2}`} href={`#${filter_2}`} >{filter_2}</a>
                        <a className="filtersNameTitle" href={`#${filter_3}`} >{filter_3}</a>
                    </div>
                    <div className="filterProjects">
                        {this.renderProjFilter(filter_2)}
                    </div>
                </div>
                <div className="filterProjDiv">
                    <div className="filtersName">    
                        <a  className="filtersNameTitle" href={`#${filter_1}`} >{filter_1}</a>
                        <a  className="filtersNameTitle" href={`#${filter_2}`} >{filter_2}</a>
                        <a  className="filtersNameTitle h1ProjectFilter" id={`${filter_3}`} href={`#${filter_3}`} >{filter_3}</a>
                    </div>
                    <div className="filterProjects">
                        {this.renderProjFilter(filter_3)}
                    </div>
                </div>
            </div>
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