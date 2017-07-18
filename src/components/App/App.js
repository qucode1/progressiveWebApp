import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'

import Header from '../Header/Header'
import Routes from '../Routes/Routes'

import styles from './App.css'

const App = () => (
  <Router>
    <div>
      <Header />
      <div className={styles.container}>
        <Routes />
      </div>
    </div>
  </Router>
)
export default App
