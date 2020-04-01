import React, { Component } from 'react';
import Header from '../components/Header'
import { connect } from 'react-redux';


class AboutMe extends Component {


    render() { 
        const image = this.props.aboutme.profile_photo ? this.props.aboutme.profile_photo : "#";
        const {about_me,phone,email,name} = this.props.aboutme && this.props.aboutme;
        return (
            <div >
                <Header />
                <div className="container">
                    <h2 className="hello">Hello =)</h2>
                    <div className="aboutMeContent">
                        <img className="floatLeft" src={image} alt="profile"/>
                        <div className="floatLeft aboutMeText">
                        <p>
                                l’m May Miriuk - a UI and graphic designer based in London with experience in branding, editorial, print and digital.
                        </p><p>
                                I worked for 6 years with Estúdio Claraboia, a small but rising design studio in São Paulo, Brazil, where I had the opportunity to experience a great variety of briefings and clients.
                        </p><p>
                               Adobe <strong>XD</strong>, <strong>lnDesign</strong>, <strong>lllustrator</strong>, <strong>Photoshop</strong>, <strong>Acrobat MacOS</strong> and <strong>Windows</strong>, Wacom pen tablet Languages: Portuguese (Native), English (Fluent)
                        </p>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}


const mapStateToProps = state => {
    return {
        aboutme: state.aboutme[0],
    }
}

 
export default connect(mapStateToProps)(AboutMe);