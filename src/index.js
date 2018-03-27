import { AppContainer } from 'react-hot-loader'
import ReactDOM from 'react-dom'
import React from 'react'

import './assets/global-styles'
import AppRoutes from './routes'
import { browserHistory } from 'helpers'
import { TopNavBar } from 'components'

const containerEl = document.getElementById('profileApp')

const render = Component => ReactDOM.render(
  <div>
    <TopNavBar />
    <AppContainer>
      <Component history={browserHistory} />
    </AppContainer>
  </div>
, containerEl)

render(AppRoutes)

if (module.hot) {
  module.hot.accept('./routes', () => render(require('./routes').default))
}
