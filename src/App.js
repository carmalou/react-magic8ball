import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="parent">
        <h1>React Magic 8-Ball!</h1>

        <label>What is your question?</label><br />
        
        <input id="inputQuestion" /><br /><br />

        <button>Ask the Magic 8-Ball</button>
      </div>
    );
  }
}

export default App;
