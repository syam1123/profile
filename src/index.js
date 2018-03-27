import { AppContainer } from 'react-hot-loader'
import ReactDOM from 'react-dom'
import React from 'react'

import './assets/global-styles'
import AppRoutes from './routes'

const containerEl = document.getElementById('profileApp')

const render = Component => ReactDOM.render(
  <AppContainer>
    <Component history={browserHistory} />
  </AppContainer>
, containerEl)

render(AppRoutes)

if (module.hot) {
  module.hot.accept('./routes', () => render(require('./routes').default))
}
