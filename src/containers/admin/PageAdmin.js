import React, { Component } from 'react';
import { connect } from 'react-redux';
import API from '../../API'

class PageAdmin extends Component {
    state = {
        website_name: this.props.page[0].website_name,
        nav_link_1: this.props.page[0].nav_link_1,
        nav_link_2: this.props.page[0].nav_link_2,
        filter_1: this.props.page[0].filter_1,
        filter_2: this.props.page[0].filter_2,
        filter_3: this.props.page[0].filter_3,
        footer_link_1: this.props.page[0].footer_link_1,
        footer_link_2: this.props.page[0].footer_link_2,
        footer_link_3: this.props.page[0].footer_link_3,
        user_id: this.props.user.id,
        id: this.props.page[0].id
    }

    handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        form.append('website_name', this.state.website_name)
        form.append('nav_link_1', this.state.nav_link_1)
        form.append('nav_link_2', this.state.nav_link_2)
        form.append('filter_1', this.state.filter_1)
        form.append('filter_2', this.state.filter_2)
        form.append('filter_3', this.state.filter_3)
        form.append('footer_link_1', this.state.footer_link_1)
        form.append('footer_link_2', this.state.footer_link_2)
        form.append('footer_link_3', this.state.footer_link_3)
        form.append('user_id', this.state.user_id)
        // form.append('id', this.state.id)
        API.editPage(this.state.id,form)
        .then(resp => window.alert(resp.message))
    }

    render() { 
        return ( 
          <div>
              <h1>Page Content</h1>
              <form onSubmit={this.handleSubmit}>
                <label>Website Name</label>
                <input type="text" name="website_name" value={this.state.website_name} onChange={this.handleChange} />
                <label>Nav 1</label>
                <input type="text" name="nav_link_1" value={this.state.nav_link_1} onChange={this.handleChange}></input>
                <label>Nav 2</label>
                <input type="text" name="nav_link_2" value={this.state.nav_link_2} onChange={this.handleChange}></input>
                <label>Products type:</label>
                <input type="text" name="filter_1" value={this.state.filter_1} onChange={this.handleChange}></input>
                <input type="text" name="filter_2" value={this.state.filter_2} onChange={this.handleChange}></input>
                <input type="text" name="filter_3" value={this.state.filter_3} onChange={this.handleChange}></input>
                <label>Footer link:</label>
                <input type="text" name="footer_link_1" value={this.state.footer_link_1} onChange={this.handleChange}placeholder="Email"></input>
                <input type="text" name="footer_link_2" value={this.state.footer_link_2} onChange={this.handleChange} placeholder="Linkedin"></input>
                <input type="text" name="footer_link_3" value={this.state.footer_link_3} onChange={this.handleChange} placeholder="Dribble"></input>
             
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
 
export default connect(mapStateToProps)(PageAdmin);