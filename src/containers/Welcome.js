import React, { Component } from 'react';
import API from '../API';
import { connect } from 'react-redux';
import styled from 'styled-components'
import Header from '../components/Header'
import { Link } from "react-router-dom";

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { filter } from 'minimatch';

const Styles = styled.div`


`
// var size = 3;
// var items = list.slice(0, size).map(i => {
//     return <myview item={i} key={i.id} />
// }

class Welcome extends Component {
    status = {
        pic1: null
    }
    nav2link = (nav2) => { return nav2.split(" ").join('').toLowerCase() }

    imageSlides = () => {
    const size = 3;
    let projectsArray = []
    projectsArray = [...this.props.projects].slice(0,size)
    projectsArray = projectsArray.map( proj => 
         <Link to={`${this.nav2link(this.props.page.nav_link_2)}/${proj.project.id}`}>
             <img className="imgCarousel" src={proj.pictures} alt={proj.project.title}></img>
        </Link>
    )
    return projectsArray
    }

    filterImage = (filter) => {
     const proj = this.props.projects.find( proj => proj.project.category === filter) ? this.props.projects.find( proj => proj.project.category === filter) : this.props.projects[0]
     return proj && <Link to={`/${this.props.page.nav_link_2}#${filter}`}><img src={proj.pictures} alt={`link to  ${filter}`}></img> </Link>
    }
    
    render() { 
        const {website_name, filter_1, filter_2, filter_3} = this.props.page ? this.props.page : []

    
        return (
            // <Styles>
                <div className="mainPage">
                    <Header />
                    <div className="container">
                    <Carousel        
                        className="carousel"
                        centered
                        clickToChange
                        infinite
                        rtl
                        dots
                        autoPlay={2000}
                        animationSpeed={1500}
                        stopAutoPlayOnHover={true}
                        slides={this.imageSlides()}
                        itemWidth={1500}
                    ></Carousel>
                    <div className="filterDiv filter1">
                        <h2>{filter_1}</h2>
                        <div className="overFlowHidden">
                            {this.filterImage(filter_1)}
                        </div>
                    </div>
                    <div className="filterDiv filter2">
                        <h2>{filter_2}</h2>
                        <div className="overFlowHidden">
                            {this.filterImage(filter_2)}
                        </div>
                    </div>
                    <div className="filterDiv filter3">
                        <h2>{filter_3}</h2>
                        <div className="overFlowHidden">
                            {this.filterImage(filter_3)}
                        </div>
                    </div>
                    </div>
                    <a href="/admin">admin</a>
                </div>
            // </Styles>
          );
    }
}

const mapStateToProps = state => {
    return {
        page: state.page[0],
        projects: state.projects
    }
}

 
export default connect(mapStateToProps)(Welcome);