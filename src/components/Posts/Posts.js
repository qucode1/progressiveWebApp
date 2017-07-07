import React from 'react'
import { Route } from 'react-router-dom'

import Post from '../Post/Post'
import posts from '../../blog-posts.json'
import PostDetail from '../PostDetail/PostDetail'

const PostList = () => (
  <div>
    {posts.posts.map((post) => (
      <Post key={post.slug} {...post} details={false} />
    ))}
  </div>
)
const Posts = ({ match }) => (
  <div>
    <Route exact path={`${match.url}`} component={PostList} />
    <Route path={`${match.url}/:slug`} component={PostDetail} />
  </div>
)

export default Posts
