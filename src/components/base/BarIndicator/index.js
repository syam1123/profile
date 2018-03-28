import React, { Component } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const propTypes = {
  // This value determines the shaded portion of the BarIndicator
  // should pass as percentage
  "value": PropTypes.string.isRequired,

  // This defines the width of the BarIndicator
  // Should pass as string eg: 100px or 10em
  "width": PropTypes.string.isRequired
}

const defaultProps = {
  "value": "80%",
  "width": "20em"
}

const backGroundColors = [
  'linear-gradient(to right, #2196f3, #673ab7)',
  'linear-gradient(to right, #c80ad5, #2196f3)',
  'linear-gradient(to right, #E91E63, #8151d7)',
  'linear-gradient(to right, #66eafa, #2196f3)',
  'linear-gradient(to right, #03a9f4, #a171f6)',
  'linear-gradient(to right, #673ab7, #3c10ec)',
  'linear-gradient(to right, #ea8f08, #ea3c05)'
]

const BarIndicatorContainer = styled.div`
  height: 1em;
  border: 1px solid #ddd;
  border-radius: 1em;
  ${props => props.width && css `
    width: ${props.width};
  `}
`

const GrowthIndicator = styled.div`
  background-image: ${props => backGroundColors[props.background]};
  border-radius: 1em;
  height: 100%;
  ${props => props.value && css`
    width: ${props.value};
  `}
`

class BarIndicator extends Component {

  getRandomNumberInRange () {
    return Math.floor(Math.random() * 7);
  }

  render () {
    return (
      <BarIndicatorContainer {...this.props}>
        <GrowthIndicator {...this.props} background={this.getRandomNumberInRange()} />
      </BarIndicatorContainer>
    );
  }
}

BarIndicator.propTypes = propTypes;
BarIndicator.defaultProps = defaultProps;

export default BarIndicator;
