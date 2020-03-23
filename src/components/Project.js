import React, { Component } from 'react';
import { Link } from "react-router-dom"

const nav2link = (nav2) => { return nav2.split(" ").join('').toLowerCase() }

const Project = ({nav2,project,picture}) => {
    return(
        <Link to={`${nav2link(nav2)}/${project.id}` }>
            <div className="projectsIndexPic">
            <h3>{project.title}</h3>
            <img style={{width: '100px'}} src={picture} alt={project.title} className="projectsIndexPic"></img>
            </div>
        </Link>
    )
}

export default Project;