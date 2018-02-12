import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const answers = ["It is decidedly so", "Without a doubt", "Yes, definitely",  "You may rely on it",  "As I see it, yes",  "Most likely",  "Outlook good",  "Yes",  "Signs point to yes",  "Reply hazy try again",  "Ask again later",  "Better not tell you now",  "Cannot predict now",  "Concentrate and ask again",  "Don't count on it",  "My reply is no",  "My sources say no",  "Outlook not so good",  "Very doubtful"];

class Answer extends Component {
  render() {
    return (
      <div className="parent">
        <p>{answers[Math.floor(Math.random() * (answers.length -1))]}</p>
      </div>
    );
  }
}

export default Answer;
