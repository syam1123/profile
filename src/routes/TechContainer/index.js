import React, { Component } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { GlobalImages } from "assets";
const propTypes = {}
const defaultProps = {}

const TechPageContainer = styled.div`
  padding: 1em 0em;
  width: 95%;
  margin: auto;
  max-width: 1100px;
  margin-top: 50px;
`

const TechHeading = styled.h1`
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

const HeadTagline = styled.p`

`

const SubHeading = styled.p`
  font-weight: 400;
  font-size: 1.2em;
`

const Image = styled.img`
  max-width: 100%;
  &.lighthouse-result{
    margin: 1em auto 2em;
    display: block;
  }
`

const Paragraph = styled.p`
  margin-top: 0px;
  font-size: 1em;
  font-family: avenir;
  font-weight: 300;
  line-height: 1.4em;
  letter-spacing: -0.1px;
  .question{
    font-style: italic;
    font-style: italic;
    font-weight: 500;
    margin-top: 1em;
  }
  a{
    color: var(--cobalt);
    font-weight: 400;
    text-decoration: none;
    border-bottom: 1px solid;
  }
`

const LightHouseDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p{
    width: 50%;
    max-width: 450px;
  }
  img{
    max-width: 45%;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    img{
      max-width: 100%;
    }
    p{
      width: 100%;
    }
  }
`

const List = styled.ul`
  padding-left: 2em;
  line-height: 1.2em;
`

const ListElement = styled.li`
  margin: .5em 0em;
`

class TechContainer extends Component {

  getLightHouseImage () {
    const screenWidth = window.innerWidth;
    if (screenWidth > 500) {
      return GlobalImages.lighthouseDesktop;
    }
    return GlobalImages.lightHouseMobile;
  }

  render () {
    return (
      <TechPageContainer>
        <TechHeading>Tech behind this page</TechHeading>
        <Paragraph>Hey, you are on a top rated web app according to the <a href="https://developers.google.com/web/tools/lighthouse/" target="_blank" rel="noopener">lighthouse</a> audits. In this era of techonology we can not compromise on the tech stack. The app should be light and on the same time it's should be fast. Performance improvement is always challenging when you are using third party packages and javascript libraries/frameworks. Please open the website in your mobile for the best experience. </Paragraph>
        <SubHeading>Lighthouse score</SubHeading>
      <Image src={this.getLightHouseImage()} className="lighthouse-result"></Image>
        <Paragraph class="question">What is this Lighthouse?</Paragraph>
        <LightHouseDescription>
          <Paragraph>
            Lighthouse, an open-source, automated tool for improving the quality of your Progressive Web Apps, eliminates much of the manual testing that was previously required. You can even use Lighthouse in continuous integration systems to catch regressions.
            <br/>
            #Source: Google
          </Paragraph>
          <Image src={GlobalImages.lighthouseLogo}></Image>
        </LightHouseDescription>
        <SubHeading>Progressive web app</SubHeading>
        <Paragraph>
          This is a Progressive Web App (PWA). Progressive Web Apps are user experiences that have the reach of the web, and are:
        </Paragraph>
        <List>
          <ListElement>
            <b>Reliable:</b> Load instantly and never show the downasaur, even in uncertain network conditions.
          </ListElement>
          <ListElement>
            <b>Fast:</b> Respond quickly to user interactions with silky smooth animations and no janky scrolling.
          </ListElement>
          <ListElement>
            <b>Engaging:</b> Feel like a natural app on the device, with an immersive user experience.
          </ListElement>
        </List>

        <Paragraph>Thease qualities allows the progressive web apps to behave like a native app and create a home screen shortcut in the user's mobile.
        </Paragraph>
      </TechPageContainer>
    )
  }
}

TechContainer.propTypes = propTypes;
TechContainer.defaultProps = defaultProps;

export default TechContainer;
