import React, { Component } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const propTypes = {}
const defaultProps = {}

const TechPageContainer = styled.div`

`

const TechHeading = styled.h1`

`

const HeadTagline = styled.p`

`

class TechContainer extends Component {
  render () {
    return (
      <TechPageContainer>
        <TechHeading>It's all about the Tech</TechHeading>
        <HeadTagline>Hey, you are on a top rated web app according to the <a href="https://developers.google.com/web/tools/lighthouse/" target="_blank" rel="noopener">lighthouse</a> audits. In this era of techonology we can not compromise on the best practices. The app should be light and on the same time it's should be fast. Performance improvement is always challenging when you are using third party packages and javascript libraries/frameworks. Here are some of the notable features of this page. </HeadTagline>
        <SubHeading>Lighthouse score</SubHeading>
      </TechPageContainer>
    )
  }
}

TechContainer.propTypes = propTypes;
TechContainer.defaultProps = defaultProps;

export default TechContainer;
