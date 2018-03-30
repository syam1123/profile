import {
  Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import * as OfflinePluginRuntime from 'offline-plugin/runtime';


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

const TechContainer = Loadable({
  loader: () => import('./TechContainer' /* webpackChunkName: 'tech' */),
  loading: Loader
})

const PageNotAvailable = Loadable({
  loader: () => import('./PageNotAvailable' /* webpackChunkName: 'page404' */),
  loading: Loader
})

const AppRoutes = () => (
  <Router history={browserHistory}>
    <RouteWrapper>
      <Switch>
        <Route exact path={ProfileRoutes.HOME_ROUTE} component={HomeContainer} />
        <Route  path={ProfileRoutes.SKILLS_ROUTE} component={SkillsContainer} />
        <Route  path={ProfileRoutes.VISION_ROUTE} component={VisionContainer} />
        <Route  path={ProfileRoutes.TECH_ROUTE} component={TechContainer} />


        <Route path='/404' component={PageNotAvailable} />
        <Redirect from='*' to='/404' />
      </Switch>
    </RouteWrapper>
  </Router>
)

OfflinePluginRuntime.install();

const RouteWrapper = styled.div`
  height: inherit;
  width: inherit;
`

export default AppRoutes
