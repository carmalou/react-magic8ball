import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Answer from './Answer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showOrNot: false
    };
  }

  showAnswer() {
    this.setState({
      showOrNot: true
    });
  }

  render() {
    console.log('hello from render', this.state);
    return (
      <div className="parent">
        <h1>React Magic 8-Ball!</h1>

        <label>What is your question?</label><br />
        
        <input id="inputQuestion" /><br /><br />

        <button onClick={ this.showAnswer.bind(this) }>Ask the Magic 8-Ball</button>

        { this.state.showOrNot ? <Answer /> : null }

      </div>
    );
  }
}

export default App;
