import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from '../Header/Header'
// import Home from '../Home/Home'
import About from '../About/About'
import Posts from '../Posts/Posts'

import styles from './App.css'

const App = () => (
  <Router>
    <div>
      <Header />

      <div className={styles.container}>
        <Route exact path='/' render={() => (
          <h2>Welcome to my Blog!</h2>
        )} />
        <Route path='/posts' component={Posts} />
        <Route path='/about' component={About} />
      </div>
    </div>
  </Router>
)
export default App
