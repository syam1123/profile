import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { GlobalImages } from 'assets'

const propTypes = {}
const defaultProps = {}

const ContactSection = styled.div`
  padding: 1em 0em;
  width: 90%;
  max-width: 1100px;
  margin: auto;
  margin-top: 50px;
`

const Contactheading = styled.h1`
  border-bottom: 2px solid var(--gray);
  margin: 1em 0em;
  font-family: avenir;
  font-weight: 500;
  font-size: 2em;
  color: var(--dark-gray);
  display: inline-block;
  border-bottom: 2px solid var(--gray);
  @media screen and (max-width: 740px) {
    font-size: 1.7em;
  }
`

const Paragraph = styled.p`
  margin-top: 0px;
  font-size: 1em;
  font-family: avenir;
  font-weight: 300;
  line-height: 1.4em;
  letter-spacing: -0.1px;
  a {
    color: var(--cobalt);
    font-weight: 400;
    text-decoration: none;
    border-bottom: 1px solid;
  }
`

const ContactDetailsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3em;
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  padding-right: 1em;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 750px) {
    margin-bottom: 3em;
    padding-right: 0em;
  }
`

const ProfileImage = styled.div`
  background-image: url(${GlobalImages.profileImage});
  width: 240px;
  border-radius: 400px;
  height: 240px;
  background-position: center;
  background-repeat: no-repeat;
  border: 7px solid black;
  @media screen and (max-width: 750px) {
    width: 200px;
    height: 200px;
  }
`

const ContactDetails = styled.div`
  padding-left: 1em;
  flex: 1;
  border-left: 1px solid var(--silver);
  span {
    font-size: 0.9em;
    color: var(--gray);
  }
  p {
    font-size: 1.1em;
    color: var(--cobalt);
    margin-bottom: 0.5em;
  }
  @media screen and (max-width: 750px) {
    border-left: none;
    padding-left: 0em;
  }
`
const Divider = styled.div`
  width: 70%;
  max-width: 300px;
  border-bottom: 1px solid var(--silver);
  margin: 1em 0em;
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`

class ContactContainer extends Component {
  render() {
    return (
      <ContactSection>
        <Contactheading>Contact</Contactheading>
        <Paragraph>
          I am a passionate front-end engineer based in Düsseldorf, Germany. I
          was born and brought up in Kerala, India. I completed my B.Tech in
          Computer Science and Engineering from CUSAT University.
        </Paragraph>
        <Paragraph>
          Love for CSS and javascript started in the early years of University
          life. Freelance web development was one of my major source of pocket
          money during college days and it has soon become my favorite part in
          the software development process. I am currently working as Sr.
          Frontend Engineer at trivago N.V. and also working as a freelance
          reactJs and CSS consultant.
        </Paragraph>
        <ContactDetailsSection>
          <ImageContainer>
            <ProfileImage />
          </ImageContainer>
          <ContactDetails>
            <span>Instagram:</span>
            <Paragraph>@syam__pillai</Paragraph>
            <span>Email:</span>
            <Paragraph>hello@syamsp.com</Paragraph>
            <Divider />
            <span>GitHub</span>
            <Paragraph>
              <a
                href="https://github.com/syam1123"
                rel="noopener"
                target="_blank"
              >
                https://github.com/syam1123
              </a>
            </Paragraph>
            <span>StackOverflow</span>
            <Paragraph>
              <a
                href="https://stackoverflow.com/users/5542538/syam-pillai"
                rel="noopener"
                target="_blank"
              >
                https://stackoverflow.com/users/5542538/syam-pillai
              </a>
            </Paragraph>
            <span>LinkedIn</span>
            <Paragraph>
              <a
                href="https://www.linkedin.com/in/syamspillai/"
                rel="noopener"
                target="_blank"
              >
                https://www.linkedin.com/in/syamspillai/
              </a>
            </Paragraph>
          </ContactDetails>
        </ContactDetailsSection>
      </ContactSection>
    )
  }
}

ContactContainer.propTypes = propTypes
ContactContainer.defaultProps = defaultProps

export default ContactContainer
