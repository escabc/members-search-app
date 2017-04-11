import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import FastClick from 'fastclick'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './App'

// Eliminates the 300ms delay between a physical tap
// and the firing of a click event on mobile browsers
// https://github.com/ftlabs/fastclick
FastClick.attach(document.body)

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const mount = document.getElementById('root')

render(
  <AppContainer>
    <App />
  </AppContainer>,
  mount,
)

// For hot reloading of react components
if (module.hot) {
  module.hot.accept('./App', () => {
    render(
      <AppContainer>
        <App />
      </AppContainer>,
      mount,
    )
  })
}
