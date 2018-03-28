import React, { Component } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { GlobalImages } from 'assets';

const propTypes = {}
const defaultProps = {}

const VisionContainerSection = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    max-width: 90%;
  }
  h2{
    text-align: center;
    font-family: avenir;
    font-weight: 300;
    color: var(--gray);
    font-size: 2em;
    margin-top: 2em;
  }
  span{
    text-align: center;
    display: block;
    font-size: 1.1em;
    color: var(--dark-grey);
  }
`

class VisionContainer extends Component {

  render () {
    return (
      <VisionContainerSection>
        <div>
          <img src={GlobalImages.thinking} alt="" />
          <h2>"The road to success is always under construction"</h2>
          <span>-Arnold Palmer</span>
        </div>
      </VisionContainerSection>
    )
  }

}

VisionContainer.propTypes = propTypes
VisionContainer.defaultProps = defaultProps

export default VisionContainer;
