import {
  Router,
  Route,
  Switch
} from 'react-router-dom'


import React from 'react'
import Loadable from 'react-loadable'
import styled from 'styled-components'
import { browserHistory } from 'helpers'

import { Loader } from 'components'

const HomeContainer = Loadable({
  loader: () => import('./HomeContainer' /* webpackChunkName: 'home' */),
  loading: Loader
})

const SkillsContainer = Loadable({
  loader: () => import('./SkillsContainer' /* webpackChunkName: 'skills' */),
  loading: Loader
})

const AppRoutes = () => (
  <Router history={browserHistory}>
    <RouteWrapper>
      <Route exact path='/' component={HomeContainer} />
      <Route  path='/skills' component={SkillsContainer} />
    </RouteWrapper>
  </Router>
)

const RouteWrapper = styled.div`
  height: inherit;
  width: inherit;
`

export default AppRoutes
