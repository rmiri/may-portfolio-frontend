import React, { Component } from 'react';
import API from './API';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


import Welcome from './containers/Welcome'
import Login from './components/Login';
import Header from './components/Header'
import AboutMe from './containers/AboutMe'
import Projects from './containers/Projects'
import ProjectShow from './components/ProjectShow'
import Admin from './containers/Admin'
import AdminContainer from './containers/AdminContainer'

import NewProject from './containers/admin/NewProject'
import ProjectsAdmin from './containers/admin/ProjectsAdmin'
import AboutMeAdmin from './containers/admin/AboutMeAdmin'
import PageAdmin from './containers/admin/PageAdmin'

class Page extends Component {

    getPage = () => {
        API.getPage()
        .then(page => this.props.setPage(page))
     }
     getAboutMe = () => {
        API.getAboutMe()
        .then(page => this.props.setAboutMe(page))
     }
     getProjects = () => {
        API.getProjects()
        .then(projects => this.props.setProjects(projects))
     }

     logOut = () => {
        this.props.setUser(
			null
		);
        localStorage.removeItem('token');
        console.log("logged out")
     }

     componentDidMount(){
        if (localStorage.token) {
			API.validate(localStorage.token).then(
                json => this.props.setUser(json.user)
            );
		}
         this.getPage()
         this.getProjects()
         this.getAboutMe()
     }


     renderAdmin = () => {
          if(this.props.user){
            return <div>
                    <Route path="/admin" component={() => <Admin logOut={this.logOut}/>} />
                    <Route path="/admin/new" component={ NewProject } />
                    <Route path="/admin/projects" component={ ProjectsAdmin } />
                    <Route path="/admin/aboutme" component={ AboutMeAdmin } />
                    <Route path="/admin/page" component={ PageAdmin } />
                    </div>
         } else {
           return <Route path="/admin" component={() => <Login />} />
         }
     }

    render() { 
        const {aboutMe,projects} = this.props ? this.props : [];

        return ( 
            <div>
    
             {this.renderAdmin()}
            <Route exact path="/" component={() =>  <Welcome /> }/>
            <Route exact path={`/${aboutMe}`} component={() =>  <AboutMe /> }/>
            <Route exact path={`/${projects}`} component={() =>  <Projects /> }/>
            <Route exact path={`/${projects}/:id`} component={props => (  <ProjectShow {...props} /> )}/>
            </div>
         );
    }
}
 
const mapStateToProps = state => {
    return {
        aboutMe: state.page[0]? state.page[0].nav_link_1.split(" ").join("").toLowerCase() : "aboutme",
        projects: state.page[0]? state.page[0].nav_link_2.split(" ").join("").toLowerCase() : "projects",
        user: state.user
      }
    
  }

const mapDispatchToProps = dispatch => {
    return {
        setPage: page => dispatch({type: "SET_PAGE", payload: {page}} ),
        setProjects: projects => dispatch({type: "SET_PROJECTS", payload: {projects}} ),
        setUser: user => dispatch({type: "SET_USER", payload: {user}}),
        setAboutMe: about => dispatch({type: "SET_ABOUTME", payload: {about}}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page)