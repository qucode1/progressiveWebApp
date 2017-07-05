import React from 'react'
import { render } from 'react-dom'

import styles from './app.css'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1 className={styles.heading}>Hello World</h1>
        <p>Testing extract-text-webpack-plugin</p>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
