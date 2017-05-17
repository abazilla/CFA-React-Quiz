import React, { Component } from 'react';

import Question from '../question/Question';
import ProgressBar from '../progressbar/ProgressBar';
import MultiChoice from '../multichoice/MultiChoice';
import Results from '../results/Results';


import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      selected: 'None yet!',
      score: 0,
    };

    this.updateSelected = this.updateSelected.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.resetQuiz = this.resetQuiz.bind(this);

    this.quiz_data = [
      {
        question: 'What is the meaning of life?',
        correct_answer: '42',
        possible_answers: ['Love', 'Money', 'JavaScript', '42']
      },
      {
        question: 'What is the meaning of death?',
        correct_answer: '24',
        possible_answers: ['Hate', 'Money', 'Ruby', '24']
      }
    ]
  }

  submitAnswer() {
    // Updates the score if it's correct
    // Updates the progress
    // We don't separate updating the progress since this.setState reloads the page every time it is called (idk why it's done this way though)
    if(this.state.selected === this.quiz_data[this.state.progress].correct_answer) {
      this.setState({
        score: this.state.score + 1,
        progress: this.state.progress + 1,
        selected: 'None yet!',
      })} else {
        this.setState({
          progress: this.state.progress + 1,
          selected: 'None yet!',
        })
      }
    }

  updateSelected(answer) {
    // Function that Updates the state
    this.setState({
      selected: answer
    })
  }

  resetQuiz() {
    this.setState({
      progress: 0,
      selected: 'None yet!',
      score: 0,
    })
  }

  render() {
    return (
      <div>
        <br/>
        <br/>
        <div className="container">
          <h2>Quiz App</h2>

          {this.state.progress < this.quiz_data.length ? (
            <div>
              <Question current_question={this.quiz_data[this.state.progress].question} />
              <ProgressBar current_step={this.state.progress} question_length={this.quiz_data.length} />
              <MultiChoice
                answers={this.quiz_data[this.state.progress].possible_answers}
                updateSelected={this.updateSelected}
                handleSubmit={this.submitAnswer}
                selectedAnswer={this.state.selected} />
            </div>
          ) : (
            <Results score={this.state.score} end_message="Congratulations, you have finished!" reset={this.resetQuiz} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
