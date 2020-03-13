import React, { Component } from 'react';

class NewProject extends Component {
    render() { 
        return ( 
          <div>
              <h1>Add new Project</h1>
              <form onSubmit={console.log("hello")}>
                  <label></label>
                  <input/>
                  <button type="submit" value="Submit">Submit</button>
              </form>
          </div>
         );
    }
}
 
export default NewProject;