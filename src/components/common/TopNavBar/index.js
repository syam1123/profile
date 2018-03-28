import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { browserHistory, ProfileRoutes } from 'helpers'

const propTypes = {}
const defaultProps = {}

const NavBarContainer = styled.div`
  position: absolute;
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
    justify-content: center;
    font-size: .9em;
    font-family: avenir;
    font-weight: 400;
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

const LeftNavs = styled.div`

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
          <LeftNavs className="nav-links">
            <span className="home" onClick={() => this.proceedTo(0)}>Home</span>
            <span className="skills" onClick={() => this.proceedTo(1)}>Skills</span>
          </LeftNavs>
          <RightNavs className="nav-links">
            <span className="vision" onClick={() => this.proceedTo(2)}>Vison</span>
          </RightNavs>
        </NavSection>
      </NavBarContainer>
    );
  }
}

TopNavBar.propTypes = propTypes;
TopNavBar.defaultProps = defaultProps;

export default TopNavBar;
