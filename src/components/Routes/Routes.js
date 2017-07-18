import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'

import About from '../About/About'
import Posts from '../Posts/Posts'
import NotFound from '../NotFound/NotFound'

const Routes = () => (
  <Switch>
    <Route exact path='/' render={() => (
      <h2>Welcome to my Blog!</h2>
    )} />
    <Route path='/posts' component={Posts} />
    <Route path='/about/:slug' component={() => <NotFound message='Url does not exist' />} />
    <Route path='/about' component={About} />
    <Route component={() => <NotFound message='Url does not exist' />} />
  </Switch>
)

export default Routes
