import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const propTypes = {}
const defaultProps = {}

const SyamSkillsContainer = styled.div`
  font-family: avenir;
`

const SkillsHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cobalt);
  h1{
    color: white;
    font-size: 2em;
  }
`

class SkillsContainer extends Component {
  render () {
    return(
      <SyamSkillsContainer>
        <SkillsHeading>
          <h1>Skills</h1>
        </SkillsHeading>
      </SyamSkillsContainer>
    );
  }
}

SkillsContainer.propTypes = propTypes;
SkillsContainer.defaultProps = defaultProps;

export default SkillsContainer;
