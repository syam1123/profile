import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import GlobalImages from '../../assets/global-images'

const propTypes = {}

const defaultProps = {}

const MainPageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
`

const TopLogoContainer = styled.div`
  img {
    filter: brightness(0) invert(100%);
  }
`

const BottomContent = styled.div`
  font-family: avenir;
  .primary-details {
    text-align: center;
    color: white;
    padding-top: 2em;
    h2 {
      font-size: 2em;
      margin-bottom: 0px;
      letter-spacing: 1px;
      font-weight: 400;
    }
    .designation {
      margin-bottom: 2em;
      margin-top: 0.5em;
      color: var(--silver);
      font-weight: 300;
    }
    .additional-details {
      color: var(--silver);
      font-family: lato;
      p {
        margin: 5px 2px;
        font-size: 0.9em;
        font-weight: 300;
      }
    }
  }
  .public-links {
    margin-top: 1em;
    a {
      margin: 1em 0.2em;
    }
    img {
      filter: brightness(0) invert(1);
      &.stack-overflow {
        height: 30px;
      }
      &.git-hub {
        height: 39px;
      }
      &.linked-in {
        height: 25px;
      }
    }
  }
`

class HomeContainer extends Component {
  constructor() {
    super()
    this.state = { pageLoaded: false }
  }

  componentDidMount() {
    this.setState({ pageLoaded: true })
  }

  render() {
    return (
      <MainPageContainer>
        <TopLogoContainer className={this.state.pageLoaded}>
          <img src={GlobalImages.logo} alt="" />
        </TopLogoContainer>
        <BottomContent>
          <div className="primary-details">
            <h2>Syam Sadasivan Pillai</h2>
            <p className="designation">
              CTO | Engineer | Mangager | Consultant
            </p>
            <div className="additional-details">
              <p>Computer Science and Engineering</p>
              <p>HTML, CSS3, Javascript, Typescript</p>
              <p>ReactJs, VueJs, GraphQl, Svelte, NodeJs</p>
            </div>
            <div className="public-links">
              <a
                href="https://stackoverflow.com/users/5542538/syam-pillai"
                rel="noopener"
                target="_blank"
              >
                <img
                  className="stack-overflow"
                  src={GlobalImages.stackOverflow}
                  alt="stackOverflow link"
                />
              </a>
              <a
                href="https://github.com/syam1123"
                rel="noopener"
                target="_blank"
              >
                <img
                  className="git-hub"
                  src={GlobalImages.gitHub}
                  alt="github link"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/syamspillai/"
                rel="noopener"
                target="_blank"
              >
                <img
                  className="linked-in"
                  src={GlobalImages.linkedin}
                  alt="github link"
                />
              </a>
            </div>
          </div>
        </BottomContent>
      </MainPageContainer>
    )
  }
}

HomeContainer.propTypes = propTypes
HomeContainer.defaultProps = defaultProps

export default HomeContainer
