import React, { Component } from 'react';
import API from "./utils/API";

class App extends Component {

  handleFormSubmit = event => {
    event.preventDefault();
    console.log('clicked');
    API.callNYT('puppies')
    .then(res => console.log(res))
    .catch(err => console.log(err));
  };

  render () {
    return (
      <div>
        <button onClick={this.handleFormSubmit}>click</button>
        <div>
          <p>Hello</p>
        </div>
      </div>
    );
  }
}

export default App;
