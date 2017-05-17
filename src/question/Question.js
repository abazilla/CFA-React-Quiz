import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './question.css';

class Question extends Component {
  render() {
    return <p>{this.props.current_question}</p>
  }
}

Question.propTypes = {
  current_question: PropTypes.string.isRequired
}

export default Question;
