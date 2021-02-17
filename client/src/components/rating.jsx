import React, { useState } from 'react';
import { BlueText, ClimatePledgeFriendlyText, RatingText, Image, RatingBox} from '../style.js';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import Chart from './ratingChart.jsx';

const Rating = (props) => {


  return (
    <div>
      <RatingBox>
        <div>
          <ReactTooltip id="test" place="bottom" effect="solid" multiline={true} backgroundColor="white" textColor='black' border={true} borderColor='black'>
            <div>
            4.7 out of 5
              <br></br>
            12347 global rating
            </div>
            <Chart test='Hello'></Chart>
          </ReactTooltip>
        </div>

        <RatingText> 12347 ratings </RatingText>
      </RatingBox>
      <ClimatePledgeFriendlyText>
        <img style={{height: '22px', width: '22px'}} src="https://freedesignfile.com/upload/2016/06/Globe-with-tree-logos-vector-design-02.jpg"></img>
          Climate Pledge Friendly</ClimatePledgeFriendlyText>
      <BlueText>Audio Speakers</BlueText>
    </div>
  );

};

export default Rating;