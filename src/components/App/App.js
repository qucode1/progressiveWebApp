import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from '../Header/Header'
import About from '../About/About'
import Posts from '../Posts/Posts'
import NotFound from '../NotFound/NotFound'

import styles from './App.css'

const App = () => (
  <Router>
    <div>
      <Header />

      <div className={styles.container}>
        <Switch>
          <Route exact path='/' render={() => (
            <h2>Welcome to my Blog!</h2>
          )} />
          <Route path='/posts' component={Posts} />
          <Route path='/about' component={About} />
          <Route component={() => <NotFound message='Url does not exist' />} />
        </Switch>
      </div>
    </div>
  </Router>
)
export default App
