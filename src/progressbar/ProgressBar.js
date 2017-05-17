import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './progressbar.css';
import { Line, Circle } from 'rc-progress';


const ProgressBar = ({current_step, question_length}) => {
    return (
        <div>
         <article>
            <div className='progress-wrapper'>
            <span className='progress-title'>{current_step + 1}/{question_length}</span>
            <Circle percent={current_step/question_length*100} strokeWidth="4" strokeColor="#f0ad4e" trailColor="#ffffff" initialAnimate />
            </div>
         </article>
       </div>
    )
}

ProgressBar.propTypes = {
  current_step: PropTypes.number.isRequired,
  question_length: PropTypes.number.isRequired
}

export default ProgressBar;
