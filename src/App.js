import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

 state = {firstname: ''};

  handleFormChange = (e) => {
    const name = e.target.value;
    this.setState({firstname: name});
    console.log(this.state.firstname)
  }

  render() {
    console.log('render called');
    return (
      <div className="App">
        <div>First Name: {this.state.firstname}</div>
        <div className="form-group">
            <label htmlFor="firstName">First Name: </label>
            <input type="text" name="firstName" onChange={this.handleFormChange} />
        </div>
      </div>
    );
  }
}

export default App;
