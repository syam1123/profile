import {
  Router,
  Route,
  Switch
} from 'react-router-dom'


import React from 'react'
import Loadable from 'react-loadable'
import styled from 'styled-components'
import { browserHistory, ProfileRoutes } from 'helpers'

import { Loader } from 'components'

const HomeContainer = Loadable({
  loader: () => import('./HomeContainer' /* webpackChunkName: 'home' */),
  loading: Loader
})

const SkillsContainer = Loadable({
  loader: () => import('./SkillsContainer' /* webpackChunkName: 'skills' */),
  loading: Loader
})

const VisionContainer = Loadable({
  loader: () => import('./VisionContainer' /* webpackChunkName: 'visions' */),
  loading: Loader
})

const AppRoutes = () => (
  <Router history={browserHistory}>
    <RouteWrapper>
      <Route exact path={ProfileRoutes.HOME_ROUTE} component={HomeContainer} />
      <Route  path={ProfileRoutes.SKILLS_ROUTE} component={SkillsContainer} />
      <Route  path={ProfileRoutes.VISION_ROUTE} component={VisionContainer} />
    </RouteWrapper>
  </Router>
)

const RouteWrapper = styled.div`
  height: inherit;
  width: inherit;
`

export default AppRoutes
