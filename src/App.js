import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Answer from './Answer';

class App extends Component {
  showOrNot = false;

  showAnswer() {
    console.log('I got clicked!');
    this.showOrNot = true;
  }

  render() {
    return (
      <div className="parent">
        <h1>React Magic 8-Ball!</h1>

        <label>What is your question?</label><br />
        
        <input id="inputQuestion" /><br /><br />

        <button onClick={ this.showAnswer }>Ask the Magic 8-Ball</button>

        { this.showOrNot ? <Answer /> : null }

      </div>
    );
  }
}

export default App;
