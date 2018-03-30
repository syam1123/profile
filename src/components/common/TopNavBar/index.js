import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { browserHistory, ProfileRoutes } from 'helpers'

import { GlobalImages } from "assets";

const propTypes = {}
const defaultProps = {}

const NavBarContainer = styled.div`
  position: fixed;
  height: 50px;
  width: 100vw;
  top: 0;
  box-shadow: 0px 0px 10px 1px #f5f5f5;
  &.home-active{
    box-shadow: none;
    .nav-links{
      span{
        color: white;
        &:hover{
          border-bottom: 1px solid var(--white);
        }
      }
    }
    .home{
      border-bottom: 1px solid var(--white);
    }
  }
  &.skills-active{
    .skills{
      border-bottom: 1px solid var(--dark-grey);
    }
  }
  &.vision-active{
    .vision{
      border-bottom: 1px solid var(--dark-grey);
    }
  }
  @media screen and (max-width: 500px){
    box-shadow: 0px 0px 5px 1px #d5d5d5;
  }
`

const NavSection = styled.div`
  max-width: 1100px;
  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  .nav-links{
    display: flex;
    align-items: center;
    font-size: .9em;
    font-family: avenir;
    font-weight: 400;
    justify-content: left;
    span{
      margin: 0px 1em;
      cursor: pointer;
      color: var(--dark-grey);
      border-bottom: 1px solid transparent;
      &:hover{
        border-bottom: 1px solid var(--dark-grey);
      }
    }
  }
`

const LogoImage = styled.img`
  width: 35px;
  margin-right: 1em;
  cursor: pointer;
  ${props => props.parentClass == "home-active" && css`
    filter: brightness(0) invert(100%);
  ` }
`

const LeftNavs = styled.div`
  flex: 1;
`
const RightNavs = styled.div`

`


class TopNavBar extends Component{

  constructor () {
    super ();
    this.state = {"pathsTravelled": 0}
  }

  getClassName () {
    const { history } = this.props;
    switch (history.location.pathname) {
      case ProfileRoutes.HOME_ROUTE:
        return 'home-active'
      case ProfileRoutes.SKILLS_ROUTE:
        return 'skills-active'
      case ProfileRoutes.VISION_ROUTE:
        return 'vision-active'
      default:
        return ''
    }
  }

  proceedTo (page) {
    const {history} = this.props;
    const {pathsTravelled} = this.state;
    switch (page) {
      case 0:
        history.push(ProfileRoutes.HOME_ROUTE);
        this.setState({pathsTravelled: pathsTravelled+1});
        break;
      case 1:
        history.push(ProfileRoutes.SKILLS_ROUTE);
        this.setState({pathsTravelled: pathsTravelled+1});
        break;
      case 2:
        history.push(ProfileRoutes.VISION_ROUTE);
        this.setState({pathsTravelled: pathsTravelled+1});
        break;
      case 2:
        history.push(ProfileRoutes.TECH_ROUTE);
        this.setState({pathsTravelled: pathsTravelled+1});
        break;
      default:
        history.push('/404');
        this.setState({pathsTravelled: pathsTravelled+1});
        break;
    }
  }

  render () {
    return (
      <NavBarContainer className={this.getClassName()}>
        <NavSection>
          <LogoImage
            src={GlobalImages.logo_small}
            alt="logo image"
            parentClass={this.getClassName()}
            onClick={() => this.proceedTo(0)}
          />
          <LeftNavs className="nav-links">
            <span className="home" onClick={() => this.proceedTo(0)}>Home</span>
            <span className="skills" onClick={() => this.proceedTo(1)}>Skills</span>
            <span className="tech" onClick={() => this.proceedTo(3)}>Tech</span>
          </LeftNavs>
          <RightNavs className="nav-links">
            <span className="vision" onClick={() => this.proceedTo(2)}>Vision</span>
          </RightNavs>
        </NavSection>
      </NavBarContainer>
    );
  }
}

TopNavBar.propTypes = propTypes;
TopNavBar.defaultProps = defaultProps;

export default TopNavBar;
