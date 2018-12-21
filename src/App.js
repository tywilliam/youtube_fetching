import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YouTube from './Youtube';
class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Welcome to React</h2>

          <YouTube/>
      </div>
    );
  }
}

export default App;
