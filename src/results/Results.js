import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './results.css';


class Results extends Component {
  render() {
    return (
      <div>
        <p>{this.props.end_message}</p>
        <p>Your score was: <span className="text-color">{this.props.score}</span></p>
        <button className="btn btn-success" onClick={this.props.reset}>Retry</button>
        <br/>
        <br/>
      </div>
    )
  }
}

Results.propTypes = {
  end_message: PropTypes.string,
  score: PropTypes.number.isRequired,
  reset: PropTypes.func.isRequired,
}

Results.defaultProps = {
  end_message: "CONGRATULATIONS!!!"
}

export default Results;
