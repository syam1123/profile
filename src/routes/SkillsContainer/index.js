import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import { Heading, BarIndicator } from 'components';
import { skillsMap } from 'helpers';

const propTypes = {}
const defaultProps = {}

const SyamSkillsContainer = styled.div`
  font-family: avenir;
  margin-top: 50px;
`

const SkillsHeading = styled.div`
  background: var(--white);
  h1{
    border-bottom: 2px solid var(--gray);
  }
`

const SkillsSection = styled.div`
  width: 95%;
  max-width: 1100px;
  padding-top: 1em;
  margin: auto;
  .skill-type-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    h2 {
      font-weight: 400;
      color: var(--dark-grey);
      font-size: 1.2em;
    }
  }
  .other-areas-of-interests {
    display: flex;
    flex-wrap: wrap;
    span, a{
      margin-right: 2em;
      margin-bottom: 1em;
      color: var(--cobalt);
    }
    a{
      text-decoration: none;
      outline: none;
      border-bottom: 1px solid var(--light-gray);
      &:hover{
        border-bottom: 1px solid var(--cobalt);
      }
    }
  }
`

const SkillsContent = styled.div`
  width: 45%;
  margin-bottom: 2em;
  .each-language {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1em 0em;
    padding: .8em;
    border: 1px solid var(--light-gray);
    border-radius: 3px;
  }
  .language-skills{
    width: 100%;
    max-width: 660px;
  }
  @media screen and (max-width: 740px){
    width: 100%;
  }
`

const LanguageName = styled.div`
  font-size: .95em;
  line-height: 1em;
  color: var(--gray);
`

class SkillsContainer extends Component {

  renderSkillsContent () {
    const { basicSkills } = skillsMap;
    return basicSkills.map((value, key) => {
      return (
        <SkillsContent key={key}>
          <h2>{value.heading}</h2>
          {
            value.tools.map((skill, skillKey) => {
              return (
                <div className="each-language" key={skillKey}>
                  <LanguageName>{skill.name}</LanguageName>
                  <BarIndicator width="60%" value={skill.percentage} />
                </div>
              )
            })
          }
        </SkillsContent>
      )
    })
  }

  renderEachInterest () {
    const { otherInterests } = skillsMap;
    return otherInterests.map((value, key) => {
      if (!value.link) {
        return (
          <span key={key}>{value.skill}</span>
        )
      }
      return (
        <a href={value.link} rel="noopener" target="_blank" key={key}>{value.skill}</a>
      )
    })
  }

  render () {
    return(
      <SyamSkillsContainer>
        <SkillsSection>
          <SkillsHeading>
            <Heading text="Skills and Interests" />
          </SkillsHeading>
          <div className="skill-type-container">
            {this.renderSkillsContent()}
          </div>
          <SkillsHeading>
            <Heading text="Other areas of interests" />
          </SkillsHeading>
          <div className="other-areas-of-interests">
            {this.renderEachInterest()}
          </div>
        </SkillsSection>
      </SyamSkillsContainer>
    );
  }
}

SkillsContainer.propTypes = propTypes;
SkillsContainer.defaultProps = defaultProps;

export default SkillsContainer;
