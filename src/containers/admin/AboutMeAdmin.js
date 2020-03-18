import React, { Component } from 'react';
import { connect } from 'react-redux';
import API from '../../API'


class AboutMeAdmin extends Component {
    state = {
        name: this.props.aboutme.name
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

    render() { 
        return ( 
          <div>
              <h1>About Me Page</h1>
              <form>
                <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                <button type="submit" value="Submit">Submit</button>
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