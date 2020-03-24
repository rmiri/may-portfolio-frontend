import React, { Component } from 'react';
import { connect } from 'react-redux';
import API from '../../API'


class AboutMeAdmin extends Component {
    state = {
        name: this.props.aboutme.name,
        profile_photo: this.props.aboutme.profile_photo,
        about_me: this.props.aboutme.about_me,
        phone: this.props.aboutme.phone,
        email: this.props.aboutme.email
    }

    handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        form.append('name', this.state.name)
        API.editABoutMe(this.props.id,form)
        .then(console.log)
    }

//     about_me(pin):null
// phone(pin):null
// email(pin):null

    render() { 
        return ( 
          <div className="adminPage newProject">
              <h2>About Me Page</h2>
              <form className="newProjForm">
                <label><h3>Name</h3></label>
                <input className="newProjFormInput" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                
                <label><h3>Profile Photo</h3></label>
                <input className="newProjFormInput" type="text" name="profile_photo" value={this.state.profile_photo} onChange={this.handleChange} />

                <label><h3>About Me</h3></label>
                <textarea className="newProjFormDesc" type="text" name="about_me" value={this.state.about_me} onChange={this.handleChange} />
           
            <span className="floatLeft">  
                <label><h3>Phone Number</h3></label>
                <input className="sameLineFormInput" type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
            </span><span className="floatLeft">
                <label><h3 className="alignRight">Email</h3></label>
                <input className="sameLineFormInput alignRight" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
            </span>

                <button type="submit" value="Submit" className="button formButton">Submit</button>
              </form>
          </div>
         );
    }
}


const mapStateToProps = state => {
    return {
        aboutme: state.aboutme[0],
    }
}
 
export default connect(mapStateToProps)(AboutMeAdmin);