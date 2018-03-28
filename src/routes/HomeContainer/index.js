import React, {Component} from "react";
import styled, { css } from 'styled-components';

import GlobalImages from '../../assets/global-images';

const propTypes = {

}

const defaultProps = {

}

const MainPageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--cobalt);
`

const TopLogoContainer = styled.div`
  ${'' /* display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background: var(--cobalt);
  min-height: 100vh;
  transition: all ease-in .25s;
  &.true{
    min-height: 20vh;
    transition: all ease-in .25s;
  } */}
`

const BottomContent = styled.div`
  background-color: var(--cobalt);
  ${'' /* height: 80vh; */}
  font-family: avenir;
  .primary-details {
    text-align: center;
    color: white;
    padding-top: 2em;
    h2{
      font-size: 2em;
      margin-bottom: 0px;
      letter-spacing: 1px;
      font-weight: 400;
    }
    .designation{
      margin-bottom: 2em;
      margin-top: .5em;
      color: var(--silver);
      font-weight: 300;
    }
    .additional-details{
      color: var(--silver);
      font-family: lato;
      p{
        margin: 5px 2px;
        font-size: .9em;
        font-weight: 300;
      }
    }
  }
  .public-links{
    img{
      filter: brightness(0) invert(1);
      &.stack-overflow{
        height: 35px;
      }
      &.git-hub{
        height: 43px;
      }
    }
  }
`

class HomeContainer extends Component {

  constructor () {
    super ();
    this.state = {"pageLoaded": false};
  }

  componentDidMount() {
    this.setState({"pageLoaded": true})
  }

  render () {
    return (
      <MainPageContainer>
        <TopLogoContainer className={this.state.pageLoaded}>
          <img src={GlobalImages.logo} alt="" />
        </TopLogoContainer>
        <BottomContent>
          <div className="primary-details">
            <h2>Syam Sadasivan Pillai</h2>
            <p className="designation">
              Front-end developer
            </p>
            <div className="additional-details">
              <p>B.tech in Computer Science and Engineering</p>
              <p>HTML, CSS3, Javascript</p>
              <p>ReactJs, AngularJs, Sass/Scss, Less</p>
            </div>
            <div className="public-links">
              <a href="https://stackoverflow.com/users/5542538/syam-pillai" target="_blank">
                <img className="stack-overflow" src={GlobalImages.stackOverflow} alt="" />
              </a>
              <a href="https://github.com/syam1123" target="_blank">
                <img className="git-hub" src={GlobalImages.gitHub} alt="" />
              </a>
            </div>
          </div>
        </BottomContent>
      </MainPageContainer>
    )
  }
}

HomeContainer.propTypes = propTypes;
HomeContainer.defaultProps = defaultProps;

export default HomeContainer;
