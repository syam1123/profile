import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { browserHistory } from 'helpers'

const propTypes = {}
const defaultProps = {}

const NavBarContainer = styled.div`
  position: absolute;
  height: 50px;
  width: 100vw;
`

const NavSection = styled.div`
  max-width: 1100px;
  margin: auto;
  width: 1100px;
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

  proceedTo (page) {
    switch (page) {
      case 0:
        browserHistory.push('/');
        break;
      case 1:
        browserHistory.push('/skills');
        break;
      default:
        browserHistory.push('/');
        break;
    }
  }

  render () {
    return (
      <NavBarContainer>
        <NavSection>
          <LeftNavs className="nav-links">
            <span onClick={() => this.proceedTo(0)}>Home</span>
            <span onClick={() => this.proceedTo(1)}>Skills</span>
          </LeftNavs>
          <RightNavs className="nav-links">
            <span>Vison</span>
          </RightNavs>
        </NavSection>
      </NavBarContainer>
    );
  }
}

TopNavBar.propTypes = propTypes;
TopNavBar.defaultProps = defaultProps;

export default TopNavBar;
