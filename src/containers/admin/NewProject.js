import React, { Component } from 'react';
import { connect } from 'react-redux';
import API from '../../API'

class NewProject extends Component {
    state = {
        title: '',
        index_description: '',
        description: '',
        category: null,
        user_id: this.props.user.id
    }
    handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        API.postProject(this.state)
        .then(resp => console.log(resp))
        
      }

    render() {
        return ( 
          <div>
              <h1>Add new Project</h1>
              <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input type="text" name="title" onChange={this.handleChange}/>

                <label>Index Description</label>
                <input type="text" name="index_description" onChange={this.handleChange}/>

                <label>Description</label>
                <input type="text" name="description" onChange={this.handleChange}/>

                <label>Category</label>
                <select name="category" onChange={this.handleChange}>
                    <option value="" disabled selected hidden>Select One</option>
                    <option value="Graphic">Graphic</option>
                    <option value="Ui">Ui</option>
                    <option value="Logo">Logo</option>
                </select>
                  <button type="submit" value="Submit">Submit</button>
              </form>
          </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        page: state.page,
        user: state.user
    }
}
 
export default connect(mapStateToProps)(NewProject);