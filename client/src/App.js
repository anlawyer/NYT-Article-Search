import React, { Component } from 'react';
import API from "./utils/API";

class App extends Component {

  state = {
    url: ''
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log('clicked');
    API.callNYT('puppies')
    .then(res => this.setState({url: res.data}))
    .catch(err => console.log(err));
  };

  render () {
    return (
      <div>
        <button onClick={this.handleFormSubmit}>click</button>
        <div>
          <p>url: {this.state.url}</p>
        </div>
      </div>
    );
  }
}

export default App;
