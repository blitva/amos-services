import React from 'react';
import { BlueText } from '../style.js';

const AnsweredQuestions = (props) => (
  //if over a 1000 answered questions then do "1000 + answered questions"
  <div>
    <BlueText>
     | {props.numOfAnswers} answered questions
    </BlueText>
  </div>
);

export default AnsweredQuestions;