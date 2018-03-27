import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import React from 'react'
import Loadable from 'react-loadable'
import styled from 'styled-components'

import { Loader } from 'components'

const AppContainer = Loadable({
  loader: () => import('./MainContainer' /* webpackChunkName: 'home' */),
  loading: Loader
})

const AppRoutes = () => (
  <Router>
    <RouteWrapper>
      <Route path='/' component={AppContainer} />
      <Route path='/skills' component={AppContainer} />
    </RouteWrapper>
  </Router>
)

const RouteWrapper = styled.div`
  height: inherit;
  width: inherit;
`

export default AppRoutes
