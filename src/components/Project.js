import React, { Component } from 'react';
import { Link } from "react-router-dom"

const nav2link = (nav2) => { return nav2.split(" ").join('').toLowerCase() }

const Project = ({nav2,project}) => {
    return(
        <Link to={`${nav2link(nav2)}/${project.id}` }>
            <div>
            <h3>{project.title}</h3>
            </div>
        </Link>
    )
}

export default Project;