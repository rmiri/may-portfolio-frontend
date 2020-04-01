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
        pictures: [],
        photos: []
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
          <div className="adminPage newProject">
              <h2>NEW PROJECT</h2>
              <form onSubmit={this.handleSubmit} className="newProjForm">
                
                <label><h3>Title</h3></label>
                <input className="newProjFormInput" type="text" name="title" onChange={this.handleChange}/>

                <label><h3>Specifications</h3></label>
                <input className="newProjFormInput" type="text" name="index_description" onChange={this.handleChange}/>

                <label><h3>Description</h3></label>
                <textarea className="newProjFormDesc" type="text" name="description" onChange={this.handleChange}/>

                <label><h3>Category</h3></label>
                <select name="category" onChange={this.handleChange} defaultValue="selectOne">
                    <option disabled value="selectOne" hidden>Select One</option>
                    <option value={this.props.page[0].filter_1}>{this.props.page[0].filter_1}</option>
                    <option value={this.props.page[0].filter_2}>{this.props.page[0].filter_2}</option>
                    <option value={this.props.page[0].filter_3}>{this.props.page[0].filter_3}</option>
                </select>

                <span className="floatLeft">  
                  <input name="pictures" multiple={false} type="file" onChange={this.handleChange} className="newProjInput"/>
                  {/* <label for="photo" className="newProjInput"></label> */}
                
                  {/* <label>Photos</label>
                  <input multiple={true} type="file" name="photos" onChange={this.filehandled}/> */}
                </span><span className="floatLeft">
                  <button type="submit" value="Submit" className="button formButton">Submit</button>
                  </span>
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