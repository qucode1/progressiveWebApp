import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'

import About from '../About/About'
import Posts from '../Posts/Posts'
import PostDetail from '../PostDetail/PostDetail'
import NotFound from '../NotFound/NotFound'
import posts from '../../blog-posts.json'

const Routes = () => (
  <Switch>
    <Route exact path='/' render={() => (
      <h2>Welcome to my Blog! My Web App SW should update automatically...!</h2>
    )} />
    <Route path='/posts/:slug' component={(props) => <PostDetail posts={posts} match={props.match} />} />
    <Route path='/posts' component={() => <Posts posts={posts} />} />
    <Route exact path='/about' component={About} />
    <Route component={() => <NotFound message='Url does not exist' />} />
  </Switch>
)

export default Routes
