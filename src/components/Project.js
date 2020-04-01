import React, { Component } from 'react';
import { Link } from "react-router-dom"

const nav2link = (nav2) => { return nav2.split(" ").join('').toLowerCase() }

const Project = ({nav2,project,picture}) => {
    return(
        <div className="projectsIndexPic">
        <Link to={`${nav2link(nav2)}/${project.id}` }>
            <div className="indexPicContainer">
                <img  src={picture} alt={project.title} className="indexPic"></img>
            </div>
            <h3 style={{textDecoration: 'none'}} className="projectsIndexh3">{project.category}</h3>
            <h4 style={{textDecoration: 'none'}}>{project.title}</h4>
            
        </Link>
    </div>
    )
}

export default Project;