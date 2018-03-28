import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const propTypes = {
  "text": PropTypes.string.isRequired
}
const defaultProps = {
  /*
   * this text will render inside the h1 tag
   */
  "text": "Dummy text"
}

const HeadingTag = styled.h1`
  margin: 1em 0em;
  font-family: avenir;
  font-weight: 500;
  font-size: 2em;
  color: var(--dark-gray);
  display: inline-block;
  @media screen and (max-width: 740px){
    font-size: 1.7em;
  }
`

const Heading = (props) => {
  return (
    <HeadingTag>{props.text}</HeadingTag>
  )
}

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
