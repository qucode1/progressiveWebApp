import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import Post from '../Post/Post'
import posts from '../../blog-posts.json'
import PostDetail from '../PostDetail/PostDetail'

import styles from '../Post/Post.css'

const PostList = () => (
  <div>
    {posts.posts.map((post) => (
      <Post key={post.slug} {...post} details={false} />
    ))}
    <ul>
      <li>
        <Link to='/posts/test'><h2 className={styles.title}>Using TravisCI (will not work)</h2></Link>
      </li>
      <li>
        <Link to='/test'>Go Somewhere (Won't work)</Link>
      </li>
    </ul>
  </div>
)
// PostDetail needs a 'wrapper component' to pass the posts data as a prop,
// without losing the match object
const PostDetailData = (props) => (
  <PostDetail posts={posts} match={props.match} />
)

const Posts = function ({ match }) {
  return (
    <div>
      <Switch>
        <Route path={`${match.url}/:slug`} component={PostDetailData} />
        <Route path={`${match.url}`} component={PostList} />
      </Switch>
    </div>
  )
}
export default Posts
