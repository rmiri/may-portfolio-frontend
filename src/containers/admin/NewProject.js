import React, { Component } from 'react';
import { connect } from 'react-redux';
import API from '../../API'


class NewProject extends Component {
    state = {
        title: '',
        index_description: '',
        description: '',
        category: null,
        user_id: this.props.user.id,
        pictures: []
    }
    handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        form.append('title', this.state.title)
        form.append('index_description', this.state.index_description)
        form.append('description', this.state.description)
        form.append('category', this.state.category)
        form.append('user_id', this.state.user_id)
        // form.append('pictures', this.state.pictures)
        API.postProject(form)
        .then(resp => window.alert(resp.message))
      }

      filehandled = event => {
          this.setState({
            pictures: event.target.files
          })
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
                <select name="category" onChange={this.handleChange} defaultValue="selectOne">
                    <option disabled value="selectOne" hidden>Select One</option>
                    <option value={this.props.page[0].filter_1}>{this.props.page[0].filter_1}</option>
                    <option value={this.props.page[0].filter_2}>{this.props.page[0].filter_2}</option>
                    <option value={this.props.page[0].filter_3}>{this.props.page[0].filter_3}</option>
                </select>

                <label>Photos</label>
                <input multiple={false} type="file" name="pictures" onChange={this.filehandled}/>

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