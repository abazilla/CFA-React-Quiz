import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './multichoice.css';

class MultiChoice extends Component {
  render() {
    return (
      <div>
        <div className="flex-container floater">
          {this.props.answers.map((answer, i) => {
            return (
              <button className="btn btn-primary" key={i} onClick={ () => {this.props.updateSelected(answer)}}>{answer}</button>
            )
          })}
        </div>
        <br/>
        <br/>
        <p className="">You have selected: <span className="text-color">{this.props.selectedAnswer}</span></p>
        <br/>
        <button className="btn btn-success" onClick={this.props.handleSubmit}>Submit</button>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}

MultiChoice.propTypes = {
  answers: PropTypes.array.isRequired,
  updateSelected: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string.isRequired,
}

export default MultiChoice;
