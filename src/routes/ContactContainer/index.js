import React, { Component } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { GlobalImages } from "assets";

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
  @media screen and (max-width: 740px){
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
  a{
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
  @media screen and (max-width: 750px){
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  padding-right: 1em;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 750px){
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
  @media screen and (max-width: 750px){
    width: 200px;
    height: 200px;
  }
`

const ContactDetails = styled.div`
  padding-left: 1em;
  flex: 1;
  border-left: 1px solid var(--silver);
  span{
    font-size: .9em;
    color: var(--gray);
  }
  p{
    font-size: 1.1em;
    color: var(--cobalt);
    margin-bottom: .5em;
  }
  @media screen and (max-width: 750px){
    border-left: none;
    padding-left: 0em;
  }
`
const Divider = styled.div`
  width: 70%;
  max-width: 300px;
  border-bottom: 1px solid var(--silver);
  margin: 1em 0em;
  @media screen and (max-width: 750px){
    width: 100%;
  }
`

class ContactContainer extends Component {
  render () {
    return(
      <ContactSection>
        <Contactheading>Contact Syam</Contactheading>
        <Paragraph>I, Syam Sadasivan Pillai is a passionate Front-end engineer based in Bangalore, India. I was born and bought up in the God's own country, Kerala. Completed my B.Tech in Computer Science and Technology from College Of Engineering, Chengannur (CUSAT University). I have moved to Bangalore after graduation in seeks of more opportunities.</Paragraph>
        <Paragraph>I chose my path to the career as a front-end engineer from college days itself. Freelance works on front-end development was a source of pocket money in college. Then I fell in love with front-end technology, especially with CSS. Then I learned javascript with the help of <a href="http://shop.oreilly.com/product/9780596517748.do" target="_blank" rel="noopener">JavaScript: The Good Parts</a> by O'Reilly. It was the best read about Javascript I ever read, It made me love the taste of Javascript. </Paragraph>
        <ContactDetailsSection>
          <ImageContainer>
            <ProfileImage/>
          </ImageContainer>
          <ContactDetails>
            <span>If urgent, contact on:</span>
            <Paragraph>+91 9048 4864 83</Paragraph>
            <span>Send an email to:</span>
            <Paragraph>syam.sp0965@gmail.com</Paragraph>
            <Divider />
            <span>GitHub</span>
            <Paragraph>
              <a href="https://github.com/syam1123" rel="noopener" target="_blank">https://github.com/syam1123</a>
            </Paragraph>
            <span>StackOverflow</span>
            <Paragraph>
              <a href="https://stackoverflow.com/users/5542538/syam-pillai" rel="noopener" target="_blank">https://stackoverflow.com/users/5542538/syam-pillai</a>
            </Paragraph>
            <span>LinkedIn</span>
            <Paragraph>
              <a href="https://www.linkedin.com/in/syamspillai/" rel="noopener" target="_blank">https://www.linkedin.com/in/syamspillai/</a>
            </Paragraph>
          </ContactDetails>
        </ContactDetailsSection>
      </ContactSection>
    );
  }
}

ContactContainer.propTypes = propTypes;
ContactContainer.defaultProps = defaultProps;

export default ContactContainer;
