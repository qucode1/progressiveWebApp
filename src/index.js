import React from 'react'
import { render } from 'react-dom'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'

import './base.css'
import App from './components/App/App'

render(<App />, document.getElementById('app'))

if (process.env.NODE_ENV === 'production') {
  OfflinePluginRuntime.install()
}
